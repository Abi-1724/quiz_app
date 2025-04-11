
 
             // src/Result.js 
import React from 'react'; 
 
function Result({ score, totalQuestions, onPlayAgain }) { 
  return ( 
    <div className="result"> 
      <h2>Quiz Completed!</h2> 
      <p> 
        You scored {score} out of {totalQuestions}. 
      </p> 
      <button className="play-again-btn" onClick={onPlayAgain}> 
        Play Again 
      </button> 
    </div> 
  ); 
} 
 
export default Result; 
