import React from 'react';
import {Link } from "react-router-dom"

function FreshSardines() {
    return (
        <div>
    
          <h1> Yummy! Sardines! </h1>
          <img 
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThpM3V5OTI3eTVpYjljdmRybTd0bGRrM2pwNngxeW85N3k1OW9qMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gihtXHs2hwlAz6ykaV/giphy.gif"
          alt="Audrey II wants to eat"
          />
           <Link to="/">Go Back</Link>
        </div>
        );
      }
    



export default FreshSardines;