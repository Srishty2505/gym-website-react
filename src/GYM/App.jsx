import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Srishty 
function App() {
  return (


    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/gallery' element={<Gallery />}>
          </Route>
          ' <Route path='/services' element={<Services />}>
          </Route>
          <Route path='/contact' element={<Contact />}>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App