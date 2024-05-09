import React from 'react';
import first from "../images/01.png";
import second from "../images/02.png";
import third from "../images/03.png";
import fourth from "../images/04.png";
import fifth from "../images/05.png";
import "./index.css";

const Expertise = () => {
    return (
        <div className='expertise'>
            <div className='theLogos'>
                <img src={first} alt="logo" />
                <img src={second} alt="logo" />
                <img src={third} alt="logo" />
                <img src={fourth} alt="logo" />
                <img src={fifth} alt="logo" />
            </div>
            <div className='theTexts'>
                <p>We Are Expertise In</p>
                <h1>We Provide Professional<br />
                    Business Solutions.</h1>
            </div>

            <div className='firstBoxes'>
                <div className='theBox'>
                    <div className='textInBox'>
                        <h1>Financial <br />Consultancy</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
                            <circle cx="36.5" cy="36" r="36" fill="#40DDB6" />
                            <path d="M18.625 30H54.375L36.5 18L18.625 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24.125 30V45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32.375 30V45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M40.625 30V45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M48.875 30V45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 45H53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.25 51H55.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Read More</p>
                </div>

                <div className='theBox'>
                    <div className='textInBox'>
                        <h1>Business<br />
                            Management</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
                            <circle cx="36.5" cy="36" r="36" fill="#6B77E5" />
                            <path d="M53 52.5H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M39.5 27V45C39.5 45.8284 40.1716 46.5 41 46.5H48.5C49.3284 46.5 50 45.8284 50 45V27C50 26.1716 49.3284 25.5 48.5 25.5H41C40.1716 25.5 39.5 26.1716 39.5 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 18H24.5C23.6716 18 23 18.6716 23 19.5V45C23 45.8284 23.6716 46.5 24.5 46.5H32C32.8284 46.5 33.5 45.8284 33.5 45V19.5C33.5 18.6716 32.8284 18 32 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Read More</p>
                </div>
                <div className='theBox'>
                    <div className='textInBox'>
                        <h1>Consultants & <br />
                            program</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
                            <circle cx="36.5" cy="36" r="36" fill="#40DDB6" />
                            <path d="M40.4375 20.25V29.4375H49.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M39.7812 36L43.7188 39.9375L39.7812 43.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33.2188 36L29.2812 39.9375L33.2188 43.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M48.3125 51.75C48.6606 51.75 48.9944 51.6117 49.2406 51.3656C49.4867 51.1194 49.625 50.7856 49.625 50.4375V29.4375L40.4375 20.25H24.6875C24.3394 20.25 24.0056 20.3883 23.7594 20.6344C23.5133 20.8806 23.375 21.2144 23.375 21.5625V50.4375C23.375 50.7856 23.5133 51.1194 23.7594 51.3656C24.0056 51.6117 24.3394 51.75 24.6875 51.75H48.3125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Read More</p>
                </div>
            </div>

            <div className='firstBoxes'>
                <div className='theBox'>
                    <div className='textInBox'>
                        <h1>Company <br />
                            Management</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <circle cx="36" cy="36" r="36" fill="#40DDB6" />
                            <path d="M17.625 50.4375H54.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38.625 50.4375V21.5625C38.625 21.2144 38.4867 20.8806 38.2406 20.6344C37.9944 20.3883 37.6606 20.25 37.3125 20.25H21.5625C21.2144 20.25 20.8806 20.3883 20.6344 20.6344C20.3883 20.8806 20.25 21.2144 20.25 21.5625V50.4375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M51.75 50.4375V32.0625C51.75 31.7144 51.6117 31.3806 51.3656 31.1344C51.1194 30.8883 50.7856 30.75 50.4375 30.75H38.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25.5 26.8125H30.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28.125 37.3125H33.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25.5 43.875H30.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M43.875 43.875H46.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M43.875 37.3125H46.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Read More</p>
                </div>
                <div className='theBox'>
                    <div className='textInBox'>
                        <h1>Financial & Insurance<br />
                            jobs</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <circle cx="36" cy="36" r="36" fill="#40DDB6" />
                            <path d="M41.4997 52.12H28.6597C26.3197 52.12 24.4297 50.23 24.4297 47.89V27" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M21.5801 19H43.2801C45.5501 19 47.4001 20.84 47.4001 23.12V32.39" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M24.42 26.28H19V21.71C19 20.21 20.21 19 21.71 19C23.21 19 24.42 20.21 24.42 21.71V26.28Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M52.3201 39.9999L51.1001 41.8199L50.6701 43.9699L48.5201 44.3999L46.7001 45.6199L44.8801 44.3999L42.7301 43.9699L42.3001 41.8199L41.0801 39.9999L42.3001 38.1799L42.7301 36.0299L44.8801 35.5999L46.7001 34.3799L48.5201 35.5999L50.6701 36.0299L51.1001 38.1799L52.3201 39.9999Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M49.8104 43.8501V51.3301L46.7104 49.2501L43.6104 51.3301V43.8501" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M30.0703 25.25H40.2803" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M30.0703 30.5H40.2803" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M30.0703 35.6899H40.2803" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M30.0703 40.77H36.8403" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M30.0703 45.96H36.8403" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                    <p>Read More</p>
                </div>
                <div className='theBox2'>
                    <h1>More Services</h1>
                </div>
            </div>
        </div>
    )
}

export default Expertise;
