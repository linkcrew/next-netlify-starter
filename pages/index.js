import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LINKCREW</title>
        <link rel="icon" href='/LINKCREW-logo.png' />
      </Head>

      <main className='container'>
        <Header />
        <h2 className='text-left text-5xl m-auto'>事業内容</h2>
        <div className="text-center grid grid-cols-3 gap-y-4 m-auto">
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>教育</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>開発</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>支援</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
