import { useEffect, useState } from 'react'

interface UseData<T> {
	data: T[]
	loading: boolean
	error: null | Error
}

const useData = <T,>(url: string): UseData<T> => {
	const [data, setData] = useState<T[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<null | Error>(null)

	useEffect(() => {
		setLoading(true)

		const controller = new AbortController()

		fetch(url, { signal: controller.signal })
			.then(res => {
				if (!res.ok) {
					throw new Error('Network response was not ok')
				}
				return res.json()
			})
			.then(data => {
				setData(data)
				setError(null)
			})
			.catch(error => {
				if (controller.signal.aborted) {
					console.log('Fetch request was aborted')
				} else {
					setError(error)
				}
			})
			.finally(() => {
				setLoading(false)
			})

		return () => controller.abort()
	}, [url])

	return { data, loading, error }
}

export default useData
