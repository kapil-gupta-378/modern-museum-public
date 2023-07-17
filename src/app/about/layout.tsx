import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'About page',
  description: 'About Data',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback="Loading...">{children}</Suspense>
}
