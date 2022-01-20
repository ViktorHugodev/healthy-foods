import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Home/Main'
import { JoinUs } from '../components/JoinUs/JoinUs'
import { KnowMore } from '../components/KnowMore/KnowMore'
import { OurBestRecipes } from '../components/OurBestRecipes/OurBestRecipes'
import { ReadOurBlog } from '../components/ReadOurBlog/ReadOurBlog'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <OurBestRecipes />
      <KnowMore />
      <ReadOurBlog />
      <JoinUs />
      <Footer />
    </>

  )
}

export default Home
