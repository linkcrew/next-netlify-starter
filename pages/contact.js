import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactComponent from '@components/ContactComponent'
import { LinkCrewH1 } from 'common'
import SideMenu from '@components/SideMenu'
import React, { useState } from 'react';

export default function Contact() {
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
          <LinkCrewH1 title="Contact" />
          <ContactComponent />
        </div>
      </main>

      <Footer />
    </div>
  )
}