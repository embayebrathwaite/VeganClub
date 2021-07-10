import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
  
  <div className="test">
    <Head>
      <title>babzi</title>
      <meta name="description" content="Discover plant-based non-dairy gourmet lunch, from 12 PM until it's gone!We also have Vegan fast foods made by order."/>

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="">
      <header className="shadow-md h-24 flex items-center w-full fixed top-0 z-10 ">
        <div className="p-4 w-full h-full flex items-center">
          <div>
            <img src="/seal.png" alt="Tribal Seal" className="h-16 "/>
          </div>
        </div>
       
      </header>
    </main>

    <footer className="">
     
    </footer>
  </div> )
}
