import '@styles/globals.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect } from 'react'

// import { AuthProviderWrapper } from '../../context/auth.context'

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		const use = async () => {
			;(await import('tw-elements')).default
		}
		use()
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			{/* <AuthProviderWrapper> */}
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen={false} />
			{/* </AuthProviderWrapper> */}
		</QueryClientProvider>
	)
}

export default App
