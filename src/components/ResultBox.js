import React from 'react'; 
import './Home.css';
import { Link } from "react-router-dom";

const Result = ({score, playAgain}) => ( 
  <div> 
    <div><h1>Your result is {score} / 6 correct answer.</h1></div><br /><br />
    <button onClick={playAgain} > Test Again </button> 
    <div><h4><Link to='/'>Home</Link></h4></div>
  </div> 
) 
  
export default Result; 