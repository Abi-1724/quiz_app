// src/Question.js 
import React from 'react'; 
 
function Question({ data, selectedOption, showAnswer, onAnswerSelect, 
onNextQuestion }) { 
  return ( 
    <div> 
      <h2>{data.question}</h2> 
      <div className="options"> 
        {data.options.map((option, index) => ( 
          <button 
            key={index} 
            onClick={() => onAnswerSelect(option)} 
            className={`option-btn ${ 
              showAnswer 
                ? option === data.answer 
                  ? 'correct' 
                  : option === selectedOption 
                  ? 'incorrect' 
                  : '' 
                : '' 
            }`} 
            disabled={showAnswer} 
          > 
            {option} 
          </button> 
        ))} 
      </div> 
      {showAnswer && ( 
        <button className="next-btn" onClick={onNextQuestion}> 
          Next Question 
        </button> 

 
      )} 
    </div> 
  ); 
} 
 
export default Question; 
 
