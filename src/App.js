import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
import { navItems } from './utils/constants';

const App = props => {
  const getItemByRoute = () => {
    const route = window.location.hash.substring(2);
    const page = navItems.find(item => item.route === route);
    return page ?? navItems[0];
  }
  const [currentPage, setCurrentPage] = useState(getItemByRoute());

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const page = getItemByRoute();
      setCurrentPage(page);
    })
  }, []);

  return (
    <div className="container-fluid">
      <Header changePage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
