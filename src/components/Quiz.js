import React from 'react';
import {
    useParams,
    Link
  } from "react-router-dom";
//import quizzes from './Quizzes';
import Imagesquiz from './Imagesquiz';

/*
function Quiz (props){
        let { id } = useParams()
        console.log("Quiz ctor,props",props,id)
        return (
            <div>This Quiz {id}</div>
        )
    }  
*/
class Quiz extends React.Component{
    constructor(props){
        super(props)
        //console.log("quiz ctor,props",props)
        //console.log("Quiz Number:",props.location.state.quiznum)
        this.state = {
            //quiz : quizzes[props.location.state.quiznum][2],
            quiz: null,
            questionnumber : 0,
            correct : 0,
            quiznum : props.location.state.quiznum
        }
        const api = `https://cjgroff-imagequiz.herokuapp.com/quiz/${this.state.quiznum}`
        console.log('api',api)
        fetch(api).then(x => x.json()).then(y => {this.setState({quiz: y});
            console.log("quiz",y)}).catch(e => console.log("Fetch quiz error",e))
    }

    clickchoice = (event) => {
        let quiz = this.state.quiz
        let question = quiz[this.state.questionnumber]
        let selected = event.currentTarget.innerText
        let expect = quiz[this.state.questionnumber][2]
        //console.log("select,answer",selected,expect)
        if (selected == expect){
            this.setState({correct: this.state.correct + 1})
            //console.log('correct')
        }
        this.setState({questionnumber : this.state.questionnumber + 1})
    }
    repeat = (event) => {
        this.setState({questionnumber : 0,correct : 0})
    }
    render () { 

        let quiz = this.state.quiz
        if (quiz == null){
            return(<div></div>)
        }
        if (this.state.questionnumber == quiz.length){
            const api = "https://cjgroff-imagequiz.herokuapp.com/score"
            let data = {quizid: this.state.quiznum, correct: this.state.correct, outof: quiz.length }
            fetch(api,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)}
            ).catch(e => console.log("Terrible score caused error"))

            return(
            <div>Score : {this.state.correct} / {quiz.length}
                <br/>
                <Link to= {this.props.location}> </Link> 
                <div onClick= {this.repeat}>Repeat Quiz</div>
                <br/>
                <Link to= "/imagesquiz">New Quiz </Link> 
                
            </div>   
            )   
        }
        let question = quiz[this.state.questionnumber]
        let distractors = question[1]
        let choices  = []
        for (let i = 0; i < distractors.length; i++){
            choices.push(<div onClick = {this.clickchoice} >{distractors[i]}</div>)
        }
        
        return(
            <div>
                
                <img src={process.env.PUBLIC_URL + "/image/" + question[0]}/>
                <br/>
                Which word matches the image?
                {choices}
                <br/>
                Correct {this.state.correct} / {quiz.length}
                
            </div>
        )
    }       
}  

    
   



export default Quiz;