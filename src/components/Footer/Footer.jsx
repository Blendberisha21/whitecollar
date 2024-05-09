import React from 'react'
import "./index.css"

const Footer = () => {
    return (
        <div className='footer'>

            <div className='topFooter'>

                <h1 id='headFoot'>WhiteCo<span id="spanLL">ll</span>ar</h1>

                <h1>Call Us <br /> <span id="spanFoot">+01 569 896 654</span></h1>

                <h1>Mail Us <br /> <span id="spanFoot">Blendberisha3434@gmail.com</span></h1>

                <h1>Location <br /> <span id="spanFoot">Amsterdam, 109-74</span></h1>

            </div>
            <div className='columns'>
            <div className='column1'>
                    <h1>Uitility Page</h1>
                    <p>Style Guide<br />
                        Licenses<br />
                        Instructions<br />
                        Changelog<br />
                        404 Page</p>
                </div>
                <div className='column1'>
                    <h1>Our Services</h1>
                    <p>Financial Consulting <br />
                        Business Management <br />
                        Consultant & Programs <br />
                        Company Management<br />
                        Insurance & Finance</p>

                </div>

                <div className='column1'>
                    <h1>Uitility Page</h1>
                    <p>Style Guide<br />
                        Licenses<br />
                        Instructions<br />
                        Changelog<br />
                        404 Page</p>
                </div>
                <div className='footerBox'>
                 <h1>Subscribe</h1>
                 <p>Join Our Mailing List & to get our news.</p>
                 <div className='inputBox'>
                 <input placeholder='  your email address'></input>
                 <button>Subscribe</button>
                 </div>
                </div>
            </div>

            <div className='footerLastParagraph'>
            <p id="lastParagraph">Copyright © <span id='greenPart'>WhiteCollar</span>  | Designed by <span id="purplePart">VictorFlow</span> Templates - Powered by Webflow</p>
            <p id="lastParagraph2">Email:BlendBerisha3434@gmail.com</p>
            </div>
       
        </div>

    )
}

export default Footer