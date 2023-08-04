import React from 'react'
import Navbar from './Navbar'
import Heading from './heading/Heading'
import Main from './mainSection/Main'
import MidSection from './midSection/MidSection'
import Search from './searchbox/Search'
import Footer from './footer/Footer'


function Home() {
  return (
    <div>
    <Navbar/>
      <Heading/>
     <Main/>
     <MidSection/>
      <Search/>
      <Footer />
    </div>
  )
}

export default Home
