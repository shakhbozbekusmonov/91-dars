import Account from '@/components/Account'
import useUser from '@/hooks/useUser'
import Profile from './Profile'

const SiteHeader = () => {
	const { data: user, isLoading, error } = useUser()

	if (error) return <p>{error.message}</p>

	if (isLoading) return <p>Loading...</p>


	return (
		<header className='py-6 bg-gradient-to-r from-white from-60% to-[#800A7A] to-40%'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<div className='w-full md:w-[60%]'>
						<a href='/'>
							<img
								src='/images/logo.svg'
								width='52'
								height='55'
								alt='MaxWay Logo'
							/>
						</a>
					</div>

					<div className='w-full md:w-[40%] flex justify-center'>
						{user ? (
							<Profile/>
						) : (

						<Account />
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader
