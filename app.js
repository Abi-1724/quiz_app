import React, { useState } from 'react'; 
import Question from './Question'; 
import Result from './Result'; 
import VantaBackground from './VantaBackground'; 
import './index.css'; 
 
const quizData = [ 
  { 
    question: "What is the capital of France?", 
    options: ["Paris", "London", "Berlin", "Madrid"], 
    answer: "Paris" 
  }, 
  { 
    question: "Who wrote 'To Kill a Mockingbird'?", 
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"], 
    answer: "Harper Lee" 
  }, 
  { 
    question: "What is 2 + 2?", 
    options: ["3", "4", "5", "6"], 
    answer: "4" 
  }, 
  { 
    question: "What is the chemical symbol for water?", 
    options: ["H2O", "CO2", "O2", "NaCl"], 
    answer: "H2O" 
  }, 
  { 
    question: "Who painted the Mona Lisa?", 
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude 
Monet"], 
    answer: "Leonardo da Vinci" 
  }, 
  { 
    question: "What planet is known as the Red Planet?", 
    options: ["Earth", "Mars", "Jupiter", "Saturn"], 
    answer: "Mars" 
  }, 
  { 
    question: "What is the largest mammal?", 
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], 

 
    answer: "Blue Whale" 
  }, 
  { 
    question: "What is the smallest prime number?", 
    options: ["0", "1", "2", "3"], 
    answer: "2" 
  }, 
  { 
    question: "Who was the first President of the United States?", 
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John 
Adams"], 
    answer: "George Washington" 
  }, 
  { 
    question: "What is the square root of 64?", 
    options: ["6", "7", "8", "9"], 
    answer: "8" 
  } 
]; 
 
function App() { 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [score, setScore] = useState(0); 
  const [showResult, setShowResult] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [showAnswer, setShowAnswer] = useState(false); 
 
  const handleAnswerSelection = (option) => { 
    setSelectedOption(option); 
    setShowAnswer(true); 
    if (option === quizData[currentQuestionIndex].answer) { 
      setScore(score + 1); 
    } 
  }; 
 
  const handleNextQuestion = () => { 
    setShowAnswer(false); 
    setSelectedOption(null); 
    if (currentQuestionIndex < quizData.length - 1) { 
      setCurrentQuestionIndex(currentQuestionIndex + 1); 
    } else { 
      setShowResult(true); 
    } 
  }; 
 
  const handlePlayAgain = () => { 
    setCurrentQuestionIndex(0); 

    setScore(0); 
    setShowResult(false); 
    setSelectedOption(null); 
    setShowAnswer(false); 
  }; 
 
  return ( 
    <VantaBackground> 
      <div className="App"> 
        <div className="streak-count">Streak: {score}   </div> 
        {showResult ? ( 
          <Result score={score} totalQuestions={quizData.length} 
onPlayAgain={handlePlayAgain} /> 
        ) : ( 
          <Question 
            data={quizData[currentQuestionIndex]} 
            selectedOption={selectedOption} 
            showAnswer={showAnswer} 
            onAnswerSelect={handleAnswerSelection} 
            onNextQuestion={handleNextQuestion} 
          /> 
        )} 
        <div className="progress-bar"> 
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%`, 
            }} 
          ></div> 
        </div> 
      </div> 
    </VantaBackground> 
  ); 
} 
 
export default App; 
