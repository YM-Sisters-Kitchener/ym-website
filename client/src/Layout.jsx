import React from 'react'
import { Navbar, Contact } from './Components';

import {Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
     <Navbar/>
    <main>
        <Outlet/>
    </main>
        <Contact/>
    </>
  )
}

