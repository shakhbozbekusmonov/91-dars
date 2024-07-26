import { CounterProvider } from '@/context/counter.provider'
import React, { createContext } from 'react'
import { AccountProvider } from '@/context/account.provider'

const GlobalContext = createContext<null>(null)

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<GlobalContext.Provider value={null}>
			<CounterProvider>
				<AccountProvider>{children}</AccountProvider>
			</CounterProvider>
		</GlobalContext.Provider>
	)
}

export { GlobalContext, GlobalProvider }
