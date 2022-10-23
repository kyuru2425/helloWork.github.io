import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Home from './home'
import Findjob from './findjob'
import Aboutus from './aboutus'
import Login from './login'
import Contactus from './contactus'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/findjob' element={<Findjob/>}/>
            <Route exact path='/aboutus' element={<Aboutus/>}/>
            <Route exact path='/contactus' element={<Contactus/>}/>
            <Route exact path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>
    </Router>
  )
}

export default Index
