import type { GetStaticProps, NextPage } from 'next'
import { HomePageTemplate } from 'design-systems/Templates/HomePageTemplate'
import { PAGE_SEO_CONFIG } from 'appConfig'

const HomePage: NextPage = () => {
  return <HomePageTemplate />
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata: PAGE_SEO_CONFIG.home,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
