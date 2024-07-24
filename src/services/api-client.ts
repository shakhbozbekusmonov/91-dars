import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1',
})

axiosInstance.interceptors.request.use(request => {
	return request
})

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			const refreshToken = localStorage.getItem('refresh')
			try {
				const { data } = await axiosInstance.post('/users/login/refresh/', {
					refresh: refreshToken,
				})
				localStorage.setItem('access', data.access)
				axiosInstance.defaults.headers.common['Authorization'] =
					'Bearer ' + data.access
				originalRequest.headers['Authorization'] = 'Bearer ' + data.access
				return axiosInstance(originalRequest)
			} catch (err) {
				console.error('Token refresh failed:', err)
				//TODO: Handle token refresh failure (e.g., redirect to login)
			}
		}
		return Promise.reject(error)
	}
)

class APIClient<T> {
	endpoint: string

	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	getAll = async (config?: AxiosRequestConfig) => {
		return await axiosInstance
			.get<T>(this.endpoint, config)
			.then(res => res.data)
	}

	get = async (id: number, config?: AxiosRequestConfig) => {
		return await axiosInstance
			.get<T>(`${this.endpoint}/${id}`, config)
			.then(res => res.data)
	}

	post = async (data: T, config?: AxiosRequestConfig) => {
		return await axiosInstance
			.post<T>(this.endpoint, data, config)
			.then(res => res.data)
	}
}

export { APIClient, axiosInstance }
