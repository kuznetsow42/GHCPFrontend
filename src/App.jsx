import { useState } from 'react'
import './App.css'
import NavbarWithMegaMenu from './components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer'
import CookiesAlert from './components/dialogs/CookiesAlert'

function App() {
  return (
    <>
      <NavbarWithMegaMenu />
      <CookiesAlert />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
