import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShippingBanner from './ShippingBanner'
import Navbar from './Navbar'
import HeroBanner from './HeroBanner'
import Logo from './Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShippingBanner/>
      <Navbar/>
      {/* <Logo/> */}
      <HeroBanner/>
    </>
  )
}

export default App
