import React from 'react'
import "./index.css"

const BlogBody = () => {
  return (
    <div className='blogBody'>
    <div className='main'>
    <svg className='textAbout' xmlns="http://www.w3.org/2000/svg" width="828" height="815" viewBox="0 0 828 815" fill="none">
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
      <div className='textPart3'>
        <h2>Recent News</h2>
        <h1>We Keep You <br/>Updated</h1>

      </div>
    </div>
  </div>  )
}

export default BlogBody