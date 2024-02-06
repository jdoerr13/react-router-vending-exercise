import React from "react";
import { Link } from "react-router-dom"

function Soda() {
  return (
    <div>
      <h1>SO MANY CHOICES OF SODA</h1>
      <img 
      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhlbWI2b211Y3RtOGRmcmtzeTgydHJ1ZWJkYXJrbmJycTRsdDZwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dRYBjtthrSEEg/giphy.gif"
      alt="Pop off the bottle"
       />
        <Link to="/">Go Back</Link>
    </div>
  );
}

export default Soda;