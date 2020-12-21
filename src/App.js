import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'
import Footer from './components/Footer';


function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  const pageRender = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'ContactForm':
        return <ContactForm/>;
        case 'Resume':
          return <Resume/>;
      default:
        return <AboutMe/>;
    }
  };

  return (
    <main>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>

      <div>{pageRender(currentPage)}</div>
      
      <div><Footer/></div>
    </main>
  );
}

export default App;
