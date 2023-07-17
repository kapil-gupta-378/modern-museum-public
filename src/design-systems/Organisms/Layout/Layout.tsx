import type { PropsWithChildren } from 'react'

export interface LayoutProps extends PropsWithChildren {
  className?: string
}

export default function Layout({ className = '', children }: LayoutProps) {
  return <div className={`h-full w-full ${className}`}>{children}</div>
}
