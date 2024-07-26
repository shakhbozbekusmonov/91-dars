import { APIClient } from '@/services/api-client'
import { useQuery } from '@tanstack/react-query'

interface User {
	id: string
	username: string
	email: string
	first_name: string
	last_name: string
}


const apiClient = new APIClient<User>('/users/profile/')

const useUser = () => {
	return useQuery<User, Error>({
		queryKey: ['user'],
		queryFn: () => apiClient.getAll(),
	})
}

export default useUser
