import React from 'react'

import {Hero, Mailinglist, Navbar, About, Events, Gallery, Contact } from '../Components';

const Home = () => {
  return (
    <main>
        
    <section className="">

        <Hero/>
        <Mailinglist/>
    </section>
    <section className="">
        <About/>
    </section>
    <section className="">
        <Events/>
    </section>
    <section className="">
        <Gallery/>
    </section>

   

 </main>
  )
}

export default Home