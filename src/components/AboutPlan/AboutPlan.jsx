import React from 'react'
import "./index.css"
import PlanImg from "../images/PlanImg.jpg";

const AboutPlan = () => {
  return (
    <div className='AboutPlan'>
      <div className='leftPlan'>
        <div className='PlanText'>
          <img src={PlanImg} alt="Plan Image" />
          <h1>We’re Ready To Grow Your <br/>
            Business With Us</h1>
          <p>Leverage agile frameworks to provide a robust<br /> synopsis for high level overviews. thinking to <br /> further the overall value proposition. </p>
          <h2>Get in Touch</h2>
        </div>
      </div>
      
      <div className='rightPlan'>
        <div className='PlanText2'>
          <h3>Welcome Whitecollar</h3>
          <h1>We Care About Your
            Business Plan.</h1>
          <p>Leverage agile frameworks to provide a robust synopsis for high level <br /> overviews.Iterative approaches to corporate strategy foster collaborative <br /> thinking to further the overal.</p>

          <p>Leverage agile frameworks to provide a robust synopsis for high level <br /> overviews.Iterative approaches to corporate strategy </p>
       <div className='boxPlan'> 
       <h2>Our Vision</h2>
       <p>Capitalize on low hanging fruit to identify a ballpark value added <br/> activity to beta clickthroughs.</p>
       </div>

       <div className='boxPlan'> 
       <h2>Our Mision</h2>
       <p>Podcasting operational change management inside of workflows <br/>to establish a framework.</p>
       </div>
       <button>More About Us</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPlan