import React from 'react'
import AboutBody from '../../components/AboutBody/AboutBody'
import AbouPlan from '../../components/AboutPlan/AboutPlan'
import Clients from '../../components/Clients/Clients'
import Experts from '../../components/Experts/Experts'
import Footer from '../../components/Footer/Footer'
import HowWeWork from '../../components/HowWeWork/HowWeWork'
import Navbar from '../../components/Navbar/Navbar'
import "./index.css"

const About = () => {
  return (
    <div>
    <Navbar/>
    <AboutBody/>
    <AbouPlan/>
    <HowWeWork/>
    <Clients/>
    <Experts/>
    <Footer/>
    </div>
  )
}

export default About