import 'assets/css/main.css'
import 'react-toastify/dist/ReactToastify.css'

import { PropsWithChildren } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import { AppConfigProps, Footer, Header, SEO } from 'design-systems/Organisms'
import { NoFirstRender } from 'design-systems/Atoms'

function Providers({ children }: PropsWithChildren) {
  return <></>
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const metadata = pageProps?.metadata as AppConfigProps
  return (
    <>
      {metadata && <SEO config={metadata} />}
      <ThemeProvider attribute="class">
        <NoFirstRender>
          <div className="m-0 min-h-screen overflow-x-hidden p-0 text-center">
            <Header />
            <div className="min-h-[calc(100vh-230px)] w-screen md:min-h-[calc(100vh-159px)] md:pt-16">
              <Component key={router.asPath} {...pageProps} />
            </div>
            <Footer />
          </div>
          <ToastContainer />
        </NoFirstRender>
      </ThemeProvider>
    </>
  )
}

export default App
