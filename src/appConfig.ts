import { AppConfigProps } from 'design-systems/Organisms/SEO'

type PAGE_NAMES = 'home'

export const GLOBAL_PAGE_SEO: AppConfigProps = {
  description: 'Test',
  favicon: '/favicon.ico',
  image: '',
  keywords: '',
  name: 'Home',
  // image: '/icon-512x512.png',
  themeColor: '#FFFFFF',
  themeColorDark: '#000000',
  title: 'Home',
  url: '',
} as const

export const PAGE_SEO_CONFIG: {
  [key in PAGE_NAMES]: AppConfigProps
} = {
  home: GLOBAL_PAGE_SEO,
} as const
