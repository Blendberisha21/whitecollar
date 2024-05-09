import React from 'react'
import "./index.css"
import Iconn1 from "../images/Iconn1.png"
import Iconn2 from "../images/Iconn2.png"
import Iconn3 from "../images/Iconn3.png"
import Iconn4 from "../images/Iconn4.png"


const ServicesBox = () => {
    return (
        <div className='servicesBox'>
            <div className='servicesText'>
                <div className='leftSideService'>
                    <p>What we’re offering</p>
                    <h1>Services we’re providing <br />
                        to our customers</h1>
                </div>
                <div className='rightSideService'>
                    <p>Completely synergize resource taxing relationships via premier niche <br />
                        markets. Professionally cultivate one-to-one customer service with <br />
                        service for state of the art customer service.</p>
                </div>

            </div>
            <div className='theServiceBoxes'>
                <div className='theServiceBox'>
                    <img src={Iconn1} alt="Icon" />
                    <h1>Product <br />
                        development</h1>
                    <p>level overviews <br />
                        proposition. </p>
                </div>
                <div className='theServiceBox'>
                    <img src={Iconn2} alt="Icon" />
                    <h1>UI/UX <br />
                        designing</h1>
                    <p>level overviews <br />
                        proposition. </p>
                </div>
                <div className='theServiceBox'>
                    <img src={Iconn3} alt="Icon" />
                    <h1>Data <br />
                        analysis</h1>
                    <p>level overviews <br />
                        proposition. </p>
                </div>
                <div className='theServiceBox'>
                    <img src={Iconn4} alt="Icon" />
                    <h1>Content <br />
                        management</h1>
                    <p>level overviews <br />
                        proposition. </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesBox