import React from 'react'
import "./index.css"
import grow from "../images/group.png";

const Grow = () => {
    return (
        <div className='Grow'>
            <div className='GrowChoose'>
                <div className='AllTexts'>
                    <h3>Why Choose Me</h3>
                    <h1>We Provide Solutions To<br />
                        Grow Your Business</h1>
                    <p>Leverage agile frameworks to provide a robust
                        synopsis for high <br /> level overviews.
                        thinking to further the overall proposition. </p>

                    <div className='GrowBoxes'>

                        <div className='GrowBox'>
                            <div className='round'>
                                <p>95%</p>
                            </div>
                            <h1>Clients <br /> Quick Response</h1>
                        </div>

                        <div className='GrowBox'>
                            <div className='round'>
                                <p>85%</p>
                            </div>
                            <h1>Project<br /> Finished Jobs</h1>

                        </div>
                    </div>

                    <div className='GrowText'>
                        <div className='GrowTexts'>
                            <h1> <span id='number'>2,800+</span> Active clients</h1>
                            <h1> <span id='number'>1,670+</span> <span id='star'>5 stars </span>reviews</h1>

                        </div>
                        <div className='GrowTexts'>
                            <h2>106+</h2>
                            <p>Get in Touch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='GrowBackground1'>
                <div className='GrowBackground'>

                </div>
                <img src={grow} />

            </div>
        </div>
    )
}

export default Grow