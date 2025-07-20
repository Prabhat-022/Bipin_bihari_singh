import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/index'
import PracticingArea from './components/practicing_area/PracticingArea'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/practicing-area" element={<PracticingArea />} />
            <Route path="/services" element={<Services />} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
