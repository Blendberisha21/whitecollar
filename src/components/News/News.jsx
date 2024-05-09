import React from 'react'
import "./index.css"
import laptop from "../images/laptop.png"
import study from "../images/study.png"

const News = () => {
    return (
        <div className='news'>
            <div className='textPart'>
            <p>Our Recent News</p>
            <h2>Latest Posts</h2>
            </div>
            <div className='newsBoxes'>
                <div className='newsBox'>
                    <img src={laptop} alt="laptop"/>
                    <div className='bar'>
                        <div className='bar1'><p>2023</p></div>
                        <div className='bar2'><p> Miranda Doe</p></div>
                        <div className='bar3'><p>Business</p></div>

                    </div>
                </div>
                <div className='newsBox'>
                    <img src={study} alt="study" />
                    <div className='bar'>
                        <div className='bar1'><p>2023</p></div>
                        <div className='bar2'><p> Miranda Doe</p></div>
                        <div className='bar3'><p>Business</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default News