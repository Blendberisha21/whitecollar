import React from 'react'
import "./style.css"

const Work = () => {
    return (
        <div className='work'>
            <div className='textWork'>
                <h3>How We Work</h3>
                <h1>To Get Your Business <br />
                    To The Next Level</h1>
                <p>Leverage agile frameworks to provide
                    synopsis for high level <br /> overviews.Iterative
                    approaches to corporate strategy foster <br /> collaborative
                    thinking to further the overal.</p>
                <div className='workBox'>
                    <div className='roundWork'>
                        <h1>562+ <br />
                            <span id="workId">Projects</span>
                        </h1>
                    </div>
                    <p>We have 50+ years of <br /> experience. We offer <br />
                        whitecollar services to you</p>
                </div>

                <h2>Planning</h2>
                <h5>Leverage agile frameworks to provide synopsis for high <br />
                    level overviews.</h5>
                <span id='line'></span>

                <h2>Briefing</h2>
                <h5>Leverage agile frameworks to provide synopsis for high <br />
                    level overviews.</h5>
                <span id='line'></span>

                <h2>Evaluation</h2>
                <h5>Leverage agile frameworks to provide synopsis for high <br />
                    level overviews.</h5>

            </div>
            <div className='form'>
                <p>Book Now</p>
                <h1>Get Free Business <br />
                    Appointment
                </h1>
                <div className='formBox'>
                    <input type="text" placeholder='  Your name' />
                    <input type="text" placeholder='  Email Adress' />
                    <input type="text" placeholder='  Phone Number' />
                    <input type="text" placeholder='  Description' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Work