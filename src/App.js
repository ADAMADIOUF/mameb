import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, Contact } from './components'
import Product from './components/Product'

import {
  Home,
  About,
  SingleProduct,
  Products,
  Error,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />

        <Route path='/contact' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
