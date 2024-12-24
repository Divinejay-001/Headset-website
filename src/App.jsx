import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './components/hero/hero'
import Service from './components/Services/service'
import Banner from './components/banner/Banner'
import Bannertext from './components/banner/Bannertext'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className='overflow-x-hidden select-none'>
      
     
      <Navbar/>
      <Hero/>
     
    
         <Service/>
         <Banner/>
         <Bannertext/>
         <Blogs/>
         <Footer/>
         
      
    </main>
  )
}

export default App
