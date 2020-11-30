import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style.css"; 
import questionAPI from '../questions/index'; 
import QuestionBox from '../components/QuestionBox'; 
import Result from '../components/ResultBox'; 
  
class Quiz extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      questionBank: [], 
      score: 0, 
      responses: 0 
    }; 
  } 
  
  getQuestions = () => { 
    questionAPI().then(question => { 
      this.setState({questionBank: question}); 
    }); 
  }; 
  
  playAgain = () => {  
    this.setState({score: 0, responses: 0}); 
  }; 
  
  computeAnswer = (answer, correctAns) => { 
    if (answer === correctAns) { 
      this.setState({ 
        score: this.state.score + 1 
      }); 
    } 
    this.setState({ 
      responses: this.state.responses < 6
        ? this.state.responses + 1 
        : 6
    }); 
  }; 
  
  componentDidMount() { 
    this.getQuestions(); 
  } 
  
  render() { 
    return (
    <div>
    <Link to="/">Home</Link>
    <div className="container"> 
      <div className="title"> 
        Quiz7
      </div> 
  
      {this.state.questionBank.length > 0 &&  
       this.state.responses < 6 &&  
       this.state.questionBank.map(({question, answers, 
       correct, questionId}) => <QuestionBox question= 
       {<img src={question}></img>} options={answers} key={questionId} 
       selected={answer => this.computeAnswer(answer, correct)}/>)} 
  
      { 
        this.state.responses === 6
          ? (<Result score={this.state.score} 
            playAgain={this.playAgain}/>) 
          : null
      } 
  
    </div>
    </div>
    ) 
  } 
} 
  
export default Quiz;