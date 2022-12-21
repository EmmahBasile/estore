import type { NextPage } from 'next'
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './Products'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900">
        <Header/>
        <Products/>
      </main>

      
        <Footer/>
        
    </div>
  )
}

export default Home
