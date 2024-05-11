import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
import Footer from './Footer/Footer'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <Home searchQuery={searchQuery} />
      <Footer/>
    </div>
  )
}
