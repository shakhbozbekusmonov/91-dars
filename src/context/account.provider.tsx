import React, { createContext } from 'react'

interface AccountContext {
	currentForm: 'register' | 'verify' | 'login'
	handleFormSwitch: (form: 'register' | 'verify' | 'login') => void
}

const AccountContext = createContext({} as AccountContext)

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentForm, setCurrentForm] = React.useState<
		'register' | 'verify' | 'login'
	>('login')

	const handleFormSwitch = (form: 'register' | 'verify' | 'login') => {
		setCurrentForm(form)
	}

	return (
		<AccountContext.Provider
			value={{
				currentForm, 
				handleFormSwitch
			}}
		>
			{children}
		</AccountContext.Provider>
	)
}

export { AccountContext, AccountProvider }
