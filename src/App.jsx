import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      {/* <Test/> */}
    </>
  )
}

export default App
