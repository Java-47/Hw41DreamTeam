import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState } from 'react';
import { navItems } from './utils/constants';
import { ChangePageContext } from './utils/constants';
const App = () =>
{
  const [currentPage, setCurrentPage] = useState(navItems[0]);

  const changePage = currentPage => {
    setCurrentPage(currentPage);
  }
    return (
      <div className="container-fluid">

         <ChangePageContext.Provider value={
         {
          changePage
          }}>
        <Header changePage={changePage}/>
        </ChangePageContext.Provider>

        <Main currentPage={currentPage} />
        <Footer />
      </div>
    );
  

}

export default App;
