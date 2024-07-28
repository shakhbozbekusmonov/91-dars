import Counter from '@/components/Counter'
import { CounterContext } from '@/context/counter.provider'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import SiteHeader from './components/SiteHead'

const App = () => {
	const { number } = useContext(CounterContext)

	return (
		<>
			<SiteHeader />

			<h1>{number}</h1>
			<Counter />

			<ToastContainer />
		</>
	)
}

export default App
