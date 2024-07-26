import { APIClient } from '@/services/api-client'
import { useQuery } from '@tanstack/react-query'

interface User {
	id: number
	name: string
	email: string
}

const apiClient = new APIClient<User[]>('/users')

const useUsers = () => useQuery<User[], Error>({
		queryKey: ['users'],
		queryFn: () => apiClient.getAll(),
	})

export default useUsers
