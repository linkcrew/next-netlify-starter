import Header from '@components/Header'
import Footer from '@components/Footer'
import ServicesComponent from '@components/ServicesComponent';

export default function Services() {
  return (
    <div aria-label="ページ全体">
      <Header />

      <main className='mx-auto w-4/5'>
        <div className="flex flex-col gap-y-40" >
          <ServicesComponent />
        </div>
      </main>

      <Footer />
    </div>
  )
}