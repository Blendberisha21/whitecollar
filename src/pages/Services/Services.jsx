import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ServicesBody from "../../components/ServicesBody/ServicesBody"
import ServicesBox from '../../components/ServicesBox/ServicesBox'
import Expertise from '../../components/Expertise/Expertise'
import Projects from '../../components/Projects/Projects'


const Services = () => {
  return (
    <div>
      <Navbar/>
      <ServicesBody/>
      <Expertise/>
      <ServicesBox/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Services