import SiteHeader from '@/components/SiteHeader'

import { Button } from '@/components/ui/button'
import Kombo from '@/components/Kombo'

import { ToastContainer } from 'react-toastify'



const App = () => {
	return (
		<>
			<SiteHeader />

			<Button>Knopka</Button>
			<Button className='rounded-full' size='icon'>
				+
			</Button>
			<Kombo/>
		</div>


			<ToastContainer />
		</>

	)
}

export default App
