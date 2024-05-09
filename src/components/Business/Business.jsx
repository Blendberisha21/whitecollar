import React from 'react'
import "./index.css"
import group from "../images/group.png"

const Business = () => {
    return (
        <div className='business'>
            <div className='fPart'>
                <div className='items'>
                    <img src={group} alt="group" />
                    <h1>We’re Ready To Grow Your<br />
                        Business With Us</h1>
                    <p>Leverage agile frameworks to provide a robust<br /> synopsis
                        for high level overviews.
                        thinking to<br /> further the overall
                        value proposition. </p>
                    <h6>Get in Touch</h6>
                </div>
            </div>

            <div className='sPart'>
                <h3>Welcome Whitecollar</h3>
                <h1>We Care About Your <br />
                    Business Plan.</h1>
                <p>Leverage agile frameworks to provide a robust synopsis
                    for high level <br /> overviews.Iterative approaches to corporate
                    strategy foster collaborative <br />thinking to further the overal.
                    <br /> <br />
                    Leverage agile frameworks to provide a robust
                    synopsis for high level <br />
                    overviews.Iterative approaches to corporate strategy
                </p>
                <h5>Components of a Business Strategy</h5>
                <h5>Business Consulting</h5>
                <div className='boxes'>
                    <div className='box'>
                        
                        <h1>Experience</h1>
                        <p>Leverage frameworks<br /> toprovidee werment.</p>
                    </div>
                    <div className='box'>
                        <h1>Awards Winner</h1>
                        <p>Leverage frameworks<br />
                            toprovidee werment.</p>
                    </div>
                </div>
                <button>More About Us</button>

            </div>
        </div>
    )
}

export default Business