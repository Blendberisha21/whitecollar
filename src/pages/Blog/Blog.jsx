import React from 'react'
import BlogBody from '../../components/BlogBody/BlogBody'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News2/News2'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BlogBody/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Blog