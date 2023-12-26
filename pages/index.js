import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Top from '@components/Top'
import ServiceComponent from '@components/ServiceComponent'
import UsersVoice from '@components/UsersVoice'
import News from '@components/News'
import { LinkCrewH1 } from 'common'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LiNKCREW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='mx-auto w-4/5'>
        <div className='flex flex-col gap-y-40'>
          <Top />
          <ServiceComponent />
          <UsersVoice />
          <News />
          <Link href="/ContactUs">
            <LinkCrewH1 title="Contact Us" className="text-center hover:cursor-pointer" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
