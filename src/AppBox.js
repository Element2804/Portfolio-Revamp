import React, { useState } from 'react';
// import Home from './pages/Home';
import About from './components/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

export default function AppBox() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    // }
    // // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    // if (currentPage === 'Contact') {
    //   return <Blog />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
          {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
  
      {renderPage()}
    </div>
  );
  };
