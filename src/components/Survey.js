import React,{useState} from 'react'

import './Survey.css'

const Survey = () => {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    const [count,setcount]=useState(0);
    const[score,setscore]=useState(false);
    const[mark,setmark]=useState(0);
    const handleClick=(isCorrect)=>{
     
     if(isCorrect){
      setmark(mark+1);
  
     }
     
      const nextstate = count + 1;
     if(
       nextstate<questions.length)
     {setcount(nextstate);} 
   
    else
    {
      setscore(true);
      
    }
  }
  const resetvalues=()=>{
    setcount(0)
    setmark(0);
    setscore(false);
  }
      return (
          <div className='app'>
              
              {score ? (
              <>	<div className='score-section sm md xl'>You scored {mark} out of {questions.length}
         <button className='sm md xl' onClick={resetvalues}>RESET</button>
       
        </div>
         
          </>
              ) : (
                  <>
          <div className='sm md xl'>
                      <div className='question-section  '>
                          <div className='question-count  '>
       Question {count + 1}/{questions.length}
                          </div>
              </div>
                          <div className='question-text sm md xl'>{questions[count].questionText}</div>
                      </div>
                      <div className='answer-section sm md xl'>
                      {
              questions[count].answerOptions.map((answer)=>{
                return(<button className='sm md xl' onClick={()=>handleClick(answer.isCorrect)}>{answer.answerText}</button>);
               
              })
             
              
            }
                      </div>
                  </>
              )}
          </div>
      );
  }

export default Survey
