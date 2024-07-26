import { Button } from '@/components/ui/button'
import { CounterContext } from '@/context/counter.provider'
import { useContext } from 'react'

const Counter = () => {
	const { number, increment, decrement } = useContext(CounterContext)

	return (
		<div>
			<h1 className='font-inter font-bold text-5xl'>{number}</h1>

			<Button onClick={increment}>+</Button>
			<Button onClick={decrement}>-</Button>
		</div>
	)
}

export default Counter
