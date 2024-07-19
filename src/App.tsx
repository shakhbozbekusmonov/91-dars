import SiteHeader from '@/components/SiteHeader'
import { Button } from '@/components/ui/button'
import Kombo from '@/components/Kombo'

const App = () => {
	return (
		<div>
			<SiteHeader />
			<Button>Knopka</Button>
			<Button className='rounded-full' size='icon'>
				+
			</Button>
			<Kombo/>
		</div>
	)
}

export default App
