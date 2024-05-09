import React from 'react'
import Body from '../../components/Body/Body'
import Business from '../../components/Business/Business'
import Expert from '../../components/Expert/Expert'
import Expertise from '../../components/Expertise/Expertise'
import Footer from '../../components/Footer/Footer'
import Grow from '../../components/Grow/Grow'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
import Projects from '../../components/Projects/Projects'
import Subscribe from '../../components/Subscribe/Subscribe'
import Work from '../../components/Work/Work'
import "./index.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Body/>
        <Business />
        <Expertise/>
        <Grow/>
        <Projects/>
        <Work/>
        <Expert/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home