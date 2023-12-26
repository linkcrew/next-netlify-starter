import Header from '@components/Header'
import Footer from '@components/Footer'
import About from '@components/About'
import Service from '@components/Service'
import Outline from '@components/Outline'
import Message from '@components/Message'
import Career from '@components/Career'

export default function Home() {
  return (
    <div>
      <Header />

      <main className='mx-auto w-4/5'>
        <div className='flex flex-col gap-y-40'>
          <About />
          <Service />
          <Outline />
          <Message />
          <Career />
        </div>
      </main>

      <Footer />
    </div>
  )
}