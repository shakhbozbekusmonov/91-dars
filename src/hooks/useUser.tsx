import { APIClient } from '@/services/api-client'
import { useQuery } from '@tanstack/react-query'

const apiClient = new APIClient('/users/profile/')

const useUser = () => {
	return useQuery({
		queryKey: ['user'],
		queryFn: () => apiClient.getAll(),
	})
}

export default useUser
