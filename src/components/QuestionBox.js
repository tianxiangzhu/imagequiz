import React, {useState} from "react"; 
import "../style.css"; 
  
const QuestionBox = ({ question, options, selected}) => { 
  const [answer, setAnswer] = useState(options); 
  if(answer){
  return ( 
    <div className="questionBox"> 
        <div className="question">{question}</div> 
        {answer.map((text, index) => ( 
          <button 
              key={index} 
              className="answerBtn"
              onClick={()=>{ 
                    setAnswer(); 
                    selected(text); 
                  }}> {text} 
         </button> 
        ))} 
    </div> 
  )}
  else{
    return(
      <div><h3>You have done this</h3></div>
    )
  }
}; 
  
export default QuestionBox;