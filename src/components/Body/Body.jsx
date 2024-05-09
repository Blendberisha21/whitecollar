import React from 'react'
import "./index.css"


const Body = () => {
  return (
    <div className='body'>
      <div className='blluri'>
        <svg className='blur' xmlns="http://www.w3.org/2000/svg" width="828" height="815" viewBox="0 0 828 815" fill="none">
          <g filter="url(#filter0_b_1_4179)">
            <path d="M0 0H828V815H0V0Z" fill="#37393F" fillOpacity="0.91" />
          </g>
          <defs>
            <filter id="filter0_b_1_4179" x="-19" y="-19" width="866" height="853" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.5" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_4179" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_4179" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className='text'>
          <h2>Welcome to Whitecollar Solution</h2>
          <h1>The Best Value<br />
            for <span id="business">Business </span>and<br />
            Corporation</h1>
          <p>Collaboratively administrate empowered markets plug<br />
            and play networks dynamically procrastinated </p>
          <div className='buttons'>
            <button>Get Consulting</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
              <circle cx="30" cy="30.5" r="30" fill="#6B77E5" />
              <path d="M27.4397 40.143L37.4841 31.6113C37.6459 31.4738 37.7758 31.3032 37.8648 31.1112C37.9539 30.9193 38 30.7105 38 30.4992C38 30.2879 37.9539 30.0791 37.8648 29.8872C37.7758 29.6952 37.6459 29.5246 37.4841 29.3871L27.4397 20.8554C26.4809 20.0411 25 20.7162 25 21.9675V39.0334C25 40.2846 26.4809 40.9597 27.4397 40.143Z" fill="white" />
            </svg>
            <p>Watch Videos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body