import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactComponent from '@components/ContactComponent'
import { LinkCrewH1 } from 'common'

export default function Contact() {
  return (
    <div aria-label="ページ全体">
      <Header/>

      <main className='mx-auto w-4/5'>
        <div className="flex flex-col gap-y-40" >
          <LinkCrewH1 title="Contact" />
          <ContactComponent />
        </div>
      </main>

      <Footer />
    </div>
  )
}