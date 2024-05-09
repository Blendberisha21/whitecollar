import React from 'react'
import "./style.css"
import expert1 from "../images/expert1.png"
import expert2 from "../images/expert2.png"
import expert3 from "../images/expert3.png"



const Experts = () => {
    return (
        <div className='experts'>
            <p>Our Team</p>
            <h1>Meet Our Experts</h1>
            <div className='expertsImage'>
                <div className='expertsBox'>
                    <img src={expert1} alt="" />
                    <div className='whiteboxExpert'>
                        <h1>Nattasha Kelvin</h1>
                        <p>Managing Director</p>
                    </div>
                </div>
                <div className='expertsBox'>
                    <img src={expert2} alt="" />
                    <div className='whiteboxExpert'>
                        <h1>David Simpson</h1>
                        <p>Designer</p>
                    </div>
                </div>
                <div className='expertsBox'>
                    <img src={expert3} alt="" />
                    <div className='whiteboxExpert'>
                        <h1>Madeleine Grant</h1>
                        <p>Marketing Specialist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experts