import SiteHeader from '@/components/SiteHeader'
import { ToastContainer } from 'react-toastify'
import useUsers from './hooks/useUsers'

const App = () => {
	const { data: users, error, isLoading } = useUsers()

	if (error) return <div>{error.message}</div>

	if (isLoading) return <div>Loading...</div>

	return (
		<>
			<SiteHeader />
			<ul>
				{users?.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>

			<ToastContainer />
		</>
	)
}

export default App
