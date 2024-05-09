import React from 'react'
import "./index.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import icon1 from "../images/icon1.jpg"
import icon2 from "../images/icon2.jpg"


const Projects = () => {
    return (
        <div className='projects'>
            <div className='heading'>
                <div className='headText'>
                    <p>Out Project</p>
                    <h1>You can check our projects <br />
                        as inspirations.</h1>
                </div>
                <button>More Work</button>
            </div>
            <div className='showImg'>
                <img src={img1} alt="image" />
                <img src={img2} alt="image" />
                <img src={img3} alt="image" />
                <img src={img4} alt="image" />

            </div>

            <div className='testimonial'>
                <div className='testiText'>
                    <h3>Testimonial</h3>
                    <h1>What Our <br />
                        Client Say’s</h1>
                    <p>Leverage agile frameworks to provide <br />a
                        robust synopsis for high
                        level <br /> overviews.Iterative </p>
                </div>

                <div className='testiBox'>
                    <div className='user'>
                        <img src={icon1} alt="icon" />
                        <h1>Nattasha Kelvin <br />
                            Designer
                        </h1>
                    </div>
                    <p>“ dd an excerpt from your <br /> personal
                        biography, or simply <br />let the world know
                        who you are<br /> and what you have to offer. <br />
                        Connect with your site
                        visitor’s <br />on a personal level and make <br />sure that your site.</p>
                </div>

                <div className='testiBox2'>
                <div className='user'>
                        <img src={icon2} alt="icon" />
                        <h1>Cincinnati <br />
                            Designer
                        </h1>
                    </div>
                    <p>“ Leverage agile frameworks to <br/> provide 
                        a robust synopsis for <br/> high level overviews ”</p> 
                </div>
            </div>

        </div>
    )
}

export default Projects