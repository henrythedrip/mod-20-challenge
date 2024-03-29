import React from 'react'
import PortfolioItem from '../components/PortfolioItem'

const PortfolioPage = () => {
  return (
    <div className='portfolio-wrapper'>
    <PortfolioItem imgSrc='/cmsblog.png' gitLink="https://github.com/henrythedrip/mod-14-challenge/" hostedLink="https://mod-14-challenge-99fb72dafb88.herokuapp.com/" className="portfolio-item-thing"/>
    <PortfolioItem imgSrc='/henrythedripwebsite.png' gitLink="https://github.com/henrythedrip/mod-16-challenge" hostedLink="https://arcane-temple-12581-520f66f1bd6b.herokuapp.com/"/>
    <PortfolioItem imgSrc='/henryresume.png' gitLink="https://github.com/henrythedrip/experimental/" hostedLink="https://henrythedrip.github.io/experimental/"/>
    <PortfolioItem imgSrc='/weatherwebsite.png' gitLink="https://github.com/henrythedrip/mod-6-challenge/" hostedLink="https://henrythedrip.github.io/mod-6-challenge/"/>
    <PortfolioItem imgSrc='/passwordgenerator.png' gitLink="https://github.com/henrythedrip/password-generator" hostedLink="https://henrythedrip.github.io/password-generator/"/>
    <PortfolioItem imgSrc='/codingquiz.png' gitLink="https://github.com/henrythedrip/mod-4-challenge" hostedLink="https://henrythedrip.github.io/mod-4-challenge/"/>
    </div>
  )
}

export default PortfolioPage