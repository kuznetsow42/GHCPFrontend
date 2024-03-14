import './App.css'
import NavbarWithMegaMenu from './components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer'
import CookiesAlert from './components/dialogs/CookiesAlert'

function App() {
  return (
    <div className='min-h-screen'>
      <NavbarWithMegaMenu />
      <CookiesAlert />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
