import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Home(){

  
    
    return (
      <div className="home">
      <h1 className="big-heading"><Link to="/menu" className="a">What's Cooking?</Link></h1>
    </div>
    );
}

export default Home;
