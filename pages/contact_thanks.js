import Header from '@components/Header'
import Footer from '@components/Footer'
import ResultGoogleForm from '@components/contact/ResultGoogleForm'


export default function Thanks() {
  return (
    <div aria-label="ページ全体">
      <Header/>

      <main className='mx-auto w-4/5'>
        <div className="flex flex-col gap-y-40" >
          <ResultGoogleForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}