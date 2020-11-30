import React from 'react';
import Quiz from './Quiz';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect

  } from "react-router-dom";
//import quizzes from "./Quizzes";

import "./Imagesquiz.css"
class Imagesquiz extends React.Component{
    constructor(props){
        super(props)
        this.quizzes = []
        this.test = 10
        console.log("Imagesquiz ctor,props",props)
        console.log("Ready to fetch")
        fetch("https://cjgroff-imagequiz.herokuapp.com/quizzes").
        then(x => x.json()).then(y => {
            console.log("test",this.test);
            this.setState({quizzes: y})
            console.log("y",y)})
        console.log("Fetch complete")
        this.state = {quiznum : -1,quizzes:[]}
        

    }
    click = (event) => {
        let q = event.currentTarget.getAttribute("quiz") //Is there a better way to get the quiz
        console.log("click q ", q)
        this.setState({quiznum : parseInt(q)}) 
    }
    //How we planing redirect
    render(){
        if (this.state.quiznum != -1){
            console.log("redirect to quiz",this.state.quiznum)
            let from = { pathname: '/quiz', state: { quiznum: this.state.quiznum } }
            return(
                <Redirect to={from} />
            )
        }
        else{
            
        const images = []
            for (let i = 0 ; i < this.state.quizzes.length; i++)
            {
                images.push(<div onClick= {this.click} quiz = {i+1} >
                    {this.state.quizzes[i][0]}
                    <br/>
                    <img src={process.env.PUBLIC_URL + "/image/" + this.state.quizzes[i][1]} />   
                </div>)
            }
        
            
            return (
                <div>   
                    {images}  
                </div>
            )
            
        }
    }
}




export default Imagesquiz;
