import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Top from '@components/Top'
import ServiceComponent from '@components/ServiceComponent'
import UsersVoice from '@components/UsersVoice'
import News from '@components/News'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LiNKCREW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-auto w-4/5'>
        <Header title="Welcome to my app!" />
        <div className='flex flex-col gap-y-40'>
          <Top />
          <ServiceComponent />
          <UsersVoice />
          <News />
        </div>
      </main>

      <Footer />
    </div>
  )
}
