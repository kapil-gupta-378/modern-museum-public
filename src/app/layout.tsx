'use client'
import 'assets/css/main.css'
import 'react-toastify/dist/ReactToastify.css'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

import Header from 'design-systems/Organisms/Header'
import Footer from 'design-systems/Organisms/Footer'
import NoFirstRender from 'design-systems/Atoms/NoFirstRender'

function Providers({ children }: PropsWithChildren) {
  return <></>
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="website" name="og:type" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <body>
        <ThemeProvider attribute="class">
          <NoFirstRender>
            <div className="m-0 min-h-screen overflow-x-hidden p-0 text-center">
              <Header />
              <div className="min-h-[calc(100vh-230px)] w-screen md:min-h-[calc(100vh-159px)] md:pt-16">{children}</div>
              <Footer />
            </div>
            <ToastContainer />
          </NoFirstRender>
        </ThemeProvider>
      </body>
    </html>
  )
}
