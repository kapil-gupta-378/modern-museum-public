import Head from 'next/head'
import { useTheme } from 'next-themes'

export interface AppConfigProps {
  name: string
  title: string
  description: string
  url: string
  keywords?: string
  image?: string
  favicon?: string
  twitter?: string
  themeColor?: string
  themeColorDark?: string
}
export interface SeoProps {
  config: AppConfigProps
}

export const SEO: React.FC<SeoProps> = ({ config }) => {
  const { resolvedTheme } = useTheme()

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <meta name="apple-mobile-web-app-title" content={config.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={config.name} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={resolvedTheme === 'dark' ? config.themeColorDark : config.themeColor} />

      <link rel="apple-touch-icon" href={config.image} />
      <link rel="icon" type="image/png" sizes="512x512" href={config.image} />

      <link rel="icon" href={config.favicon} />

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={config.title} />
      <meta name="og:description" property="og:description" content={config.description} />
      <meta name="og:site_name" property="og:site_name" content={config.name} />
      <meta name="og:url" property="og:url" content={config.url} />
      <meta name="og:image" property="og:image" content={`${config?.image}?d=l`} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />

      <title>{config.title}</title>
    </Head>
  )
}
