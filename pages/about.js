import Header from '@components/Header'
import Footer from '@components/Footer'
import AboutMessage from '@components/AboutMessage'
import Service from '@components/Service'
import Outline from '@components/Outline'
import Message from '@components/Message'
import Career from '@components/Career'
import { LinkCrewH1 } from 'common'
import SideMenu from '@components/SideMenu'
import React, { useState } from 'react';

export default function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />

      <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

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