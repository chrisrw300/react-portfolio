import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  const pageRender = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe/>;
      // case 'Portfolio':
      //   return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
        case 'Resume':
          return <Resume/>;
      default:
        return <AboutMe/>;
    }
  };

  return (
    <main>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>

      <section>{pageRender(currentPage)}</section>
      
      <section><Footer/></section>
    </main>
  );
}

export default App;
