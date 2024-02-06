import React from 'react';
import {Link } from "react-router-dom"


  
function VendingMachine() {
    return (
      <div>
        <h2>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h2>
        <img 
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFrbWViOGJhcTYzMTNrZzQwcTRhOHpqb3lkN2h3NHVmZXNld3JwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3fQcDOZ3M3iBfv0I/giphy.gif"
          alt="Robot Hungry"
          />
        <ul>
          <li><Link to="/soda">Soda</Link></li>
          <li><Link to="/chips">Chips</Link></li>
          <li><Link to="/freshSardines">Fresh Sardines</Link></li>
        </ul>
      </div>
    );
  }


export default VendingMachine;
