import React, { useState } from 'react'
import "./index.css"
import { Link } from 'react-router-dom';
import menu from "../images/menu.png"

const Navbar = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <>
      <div className='top'>

        <div className='left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path d="M8.76493 1C4.47804 1 1 4.25865 1 8.27211C1 12.8902 6.17662 20.2085 8.07741 22.7362C8.15631 22.8429 8.25972 22.9297 8.37921 22.9896C8.49869 23.0494 8.63086 23.0806 8.76493 23.0806C8.899 23.0806 9.03117 23.0494 9.15066 22.9896C9.27014 22.9297 9.37355 22.8429 9.45245 22.7362C11.3532 20.2095 16.5299 12.8939 16.5299 8.27211C16.5299 4.25865 13.0518 1 8.76493 1Z" stroke="#40DDB6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.76515 12.6475C10.4805 12.6475 11.8711 11.2569 11.8711 9.54152C11.8711 7.82614 10.4805 6.43555 8.76515 6.43555C7.04977 6.43555 5.65918 7.82614 5.65918 9.54152C5.65918 11.2569 7.04977 12.6475 8.76515 12.6475Z" stroke="#40DDB6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p id="paragraph"> 24 Olive Street, Prairie, NY 53590</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
            <path d="M19.7779 1.27539H3.47151C2.39939 1.27539 1.53027 2.14451 1.53027 3.21662V14.864C1.53027 15.9361 2.39939 16.8053 3.47151 16.8053H19.7779C20.85 16.8053 21.7191 15.9361 21.7191 14.864V3.21662C21.7191 2.14451 20.85 1.27539 19.7779 1.27539Z" stroke="#40DDB6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.63672 4.38184L11.6252 9.81729L18.6136 4.38184" stroke="#40DDB6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>  whitecollar@gmail.com</p>
        </div>

        <div className='right'>

          <p> Mon - Fri: 8:00 am - 5:00 pm</p>


        </div>
      </div>
      <nav>

        <div className='logo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="30" viewBox="0 0 43 30" fill="none">
            <path d="M14.3756 0.5H8.49649L25.2608 29.5L28.2003 24.4152L14.3756 0.5Z" fill="#40DDB6" />
            <path d="M5.8791 0.5H0L16.5506 29.1299L19.4084 23.9051L5.8791 0.5Z" fill="#40DDB6" />
            <path d="M32.5307 17.1948L36.3049 10.6629H30.4274L29.5911 12.11L25.433 4.9196H39.62L42.1706 0.5H17L29.5945 22.2863L32.5324 17.1981L32.5307 17.1948Z" fill="#6B77E5" />
          </svg>
          <h1>WhiteCo<span id="span">ll</span>ar</h1>
        </div>
        <input type="checkbox" id="check" checked={isMenuVisible} onChange={toggleMenu} />
        <label htmlFor="check" className='checkBtn'>
          <img src={menu} alt="menu" />
        </label>
        <div className={`nav ${isMenuVisible ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About us</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>Blog</Link>
            </li>
            <button> Get Consulting</button>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar