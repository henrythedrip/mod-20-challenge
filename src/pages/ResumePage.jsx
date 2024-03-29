import React from 'react'

const ResumePage = () => {
  return (
    <div className='resume-wrapper'>
        <a href="/henrythomasresume.pdf" download>Download henrythedrip's Resume</a>
        <object data="/henrythomasresume.pdf" type="application/pdf"></object>
    </div>
  )
}

export default ResumePage