import React, { createContext } from 'react'

interface CounterContext {
	number: number
	increment: () => void
	decrement: () => void
}

const CounterContext = createContext({} as CounterContext)

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [number, setNumber] = React.useState<number>(0)

	const increment = () => {
		setNumber(number + 1)
	}

	const decrement = () => {
		setNumber(number - 1)
	}
	return (
		<CounterContext.Provider
			value={{
				number,
				increment,
				decrement,
			}}
		>
			{children}
		</CounterContext.Provider>
	)
}

export { CounterContext, CounterProvider }
