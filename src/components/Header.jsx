import React from 'react'
import { useState } from 'react'

const Header = ({ selectedPage, setSelectedPage }) => {
  return (
    <header>
      <span>henrythedrip</span>


      <div className={selectedPage === 'about'
        ? 'selected-nav-item'
        : ''}
        onClick={() => setSelectedPage('about')
        }
      >About Me</div>


      <div className={selectedPage === 'portfolio'
        ? 'selected-nav-item'
        : ''}
        onClick={() => setSelectedPage('portfolio')
        }
      >Portfolio</div>


      <div className={selectedPage === 'contact'
        ? 'selected-nav-item'
        : ''}
        onClick={() => setSelectedPage('contact')
        }
      >Contact</div>


      <div className={
        selectedPage === 'resume'
          ? 'selected-nav-item'
          : ''
      }
        onClick={() => setSelectedPage('resume')}
      >Resume</div>
    </header>
  )
}

export default Header