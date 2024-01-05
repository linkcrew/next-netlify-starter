import Header from '@components/Header'
import Footer from '@components/Footer'
import AboutMessage from '@components/AboutMessage'
import Service from '@components/Service'
import Outline from '@components/Outline'
import Message from '@components/Message'
import Career from '@components/Career'
import { LinkCrewH1 } from 'common'

export default function About() {
  return (
    <div>
      <Header />

      <main className='mx-auto w-4/5'>
        <div className='flex flex-col gap-y-40'>
          <LinkCrewH1 title="About" />
          <AboutMessage />
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