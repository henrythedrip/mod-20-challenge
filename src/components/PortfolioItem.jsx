import React from 'react'

const PortfolioItem = ({imgSrc, gitLink, hostedLink}) => {
  return (
    <div className='portfolio-item' style={{backgroundImage: `url(${imgSrc})`}}>
      {/* <img src={imgSrc} alt="cat" /> */}
      <div className='portfolio-text'>
      <a href={hostedLink}>Website</a>
      <a href={gitLink}>GitHub</a>
      </div>
    </div>
  )
}

export default PortfolioItem