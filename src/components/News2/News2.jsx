import React from 'react'
import "./index.css"
import laptop from "../images/laptop.png"
import study from "../images/study.png"
import boximage1 from "../images/boximage1.png"
import boximage2 from "../images/boximage2.png"

const News = () => {
    return (
        <div className='news2'>
            <div className='textPart20'>
            <p>Our Recent News</p>
            <h2>Featured News And Insights</h2>
            </div>
            <div className='newsBoxes2'>
                <div className='newsBox2'>
                    <img src={laptop} alt="laptop"/>
                    <div className='bar'>
                        <div className='bar11'><p>2023</p></div>
                        <div className='bar22'><p> Miranda Doe</p></div>
                        <div className='bar33'><p>Business</p></div>

                    </div>
                </div>
                <div className='newsBox2'>
                    <img src={study} alt="study" />
                    <div className='bar'>
                        <div className='bar11'><p>2023</p></div>
                        <div className='bar22'><p> Miranda Doe</p></div>
                        <div className='bar33'><p>Business</p></div>

                    </div>
                    
                </div>
            </div>
            <br/>
            <div className='newsBoxes2'>
                <div className='newsBox2'>
                    <img src={boximage1} alt="laptop"/>
                    <div className='bar'>
                        <div className='bar1'><p>2023</p></div>
                        <div className='bar2'><p> Miranda Doe</p></div>
                        <div className='bar3'><p>Business</p></div>

                    </div>
                </div>
                <div className='newsBox2'>
                    <img src={boximage2} alt="study" />
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