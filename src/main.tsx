import QueryProvider from '@/components/QueryProvider.tsx'
import { GlobalProvider } from '@/context/global.provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryProvider>
			<GlobalProvider>
				<App />
			</GlobalProvider>
		</QueryProvider>
	</React.StrictMode>
)
