
// import SiteHeader from '@/components/SiteHeader'
// import { Button } from '@/components/ui/button'
import BurgerSection from './components/BurgerSection'

import SiteHeader from '@/components/SiteHeader'
import { ToastContainer } from 'react-toastify'
import Profile from './components/Profile'


const App = () => {
	return (

		<div>
			{/* <SiteHeader />
			<Button>Knopka</Button>
			<Button className='rounded-full' size='icon'>
				+
			</Button> */}
			<BurgerSection/>
		</div>

		<>
			{/* <Profile /> */}
			<SiteHeader />

			<ToastContainer />
		</>

	)
}

export default App
