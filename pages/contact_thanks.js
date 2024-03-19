import Header from '@components/Header'
import Footer from '@components/Footer'
import ResultGoogleForm from '@components/contact/ResultGoogleForm'
import SideMenu from '@components/SideMenu'
import React, { useState } from 'react';

export default function Thanks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div aria-label="ページ全体">
      <Header toggleDrawer={toggleDrawer} />

      <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

      <main className='mx-auto w-4/5'>
        <div className="flex flex-col gap-y-10" >
          <ResultGoogleForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}