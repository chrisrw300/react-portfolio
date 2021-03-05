import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  return (
    <section>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      <main>
        <AboutMe/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#354f52" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,90.7C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <section className="section-wrapper">
          <Portfolio/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#F3F7F7" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,90.7C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </section>
        <Skills/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#354f52" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,90.7C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      
        <Contact/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#F3F7F7" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,90.7C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        
        <Footer/>
      </main>
    </section>
  );
}

export default App;
