// import Layout from '../components/commons/Layout'
// import '../styles/globals.scss'
// import '../styles/test.scss';
import '@styles/globals.css'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// import { AuthProviderWrapper } from '../../context/auth.context'
// import { BreakPointProviderWrapper } from '../../context/breakPoints.context'

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{/* <AuthProviderWrapper> */}
			{/* <BreakPointProviderWrapper> */}
			{/* <Layout> */}
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen={false} />
			{/* </Layout> */}
			{/* </BreakPointProviderWrapper> */}
			{/* </AuthProviderWrapper> */}
		</QueryClientProvider>
	)
}

export default App
