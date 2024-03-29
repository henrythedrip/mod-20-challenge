import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import PortfolioPage from './pages/PortfolioPage'



function App() {
  // possible states include: about, portfolio, resume, contact
  const [selectedPage, setSelectedPage] = useState('about')


  function getPage(state) {
    switch (state) {
      case 'about':
        return <AboutPage />
      case 'portfolio':
        return <PortfolioPage />
      case'resume':
        return <ResumePage />
      case 'contact':
        return <ContactPage />
      default:
        return <AboutPage />
    }
  }


  return (
    <>
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

      {/* page to show */}
      <div className='content-wrapper'>{getPage(selectedPage)}</div>

      <Footer />
    </>
  )
}



export default App
