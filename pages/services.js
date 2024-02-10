import Header from '@components/Header'
import Footer from '@components/Footer'
import ServicesComponent from '@components/ServicesComponent';
import SideMenu from '@components/SideMenu'
import React, { useState } from 'react';

export default function Services() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div aria-label="ページ全体">
      <Header toggleDrawer={toggleDrawer} />

      <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

      <main className='mx-auto w-4/5'>
        <div className="flex flex-col gap-y-40" >
          <ServicesComponent />
        </div>
      </main>

      <Footer />
    </div>
  )
}