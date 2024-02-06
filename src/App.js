import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Soda from "./Soda"
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';


function App() {
  // const [page, setPage] = useState('vendingMachine');//use a string to store what page we are on

  // const showPage = () => {
  //   if (page === 'vendingMachine') return <VendingMachine />
  //   if (page === 'soda') return <Soda />
  //   if (page === 'chips') return <Chips />
  //   if (page === 'freshSardines') return <FreshSardines />
  // }

  //don't do href in the nav, bc you don't want it to refresh the page
  //can't click back button
  return (
    <div>
        <BrowserRouter>
        <NavBar />
        <nav>
          {/* <div><a onClick ={() => setPage('vendingMachine')}>Home</a></div>
          <div><a onClick ={() => setPage('soda')}>Soda</a></div>
          <a onClick ={() => setPage('chips')}>Chips</a>
          <a onClick ={() => setPage('freshSardines')}>Fresh Sardines</a> */}
          {/* <Link to="/">Home</Link>
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/freshSardines">Fresh Sardines</Link> */}
        </nav>
          {/* {showPage()}  */}
            <Routes>
                <Route>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/soda" element={<Soda />} />
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/freshSardines" element={<FreshSardines />} />
                </Route>
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
