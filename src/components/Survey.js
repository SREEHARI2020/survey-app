import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';

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
          <div className='survey-section'>
              
              {score ? (
              <>	<div className='score-section'>
               
               <div className="score-section-total"> Congratulations You scored {mark} out of {questions.length} </div> 
        
       <div className="score-section-piechart-color-container"> <div className="score-section-piechart-color1"></div> <span>Correct</span> </div>
       <div className="score-section-piechart-color-container">  <div className="score-section-piechart-color2"></div> <span>Wrong</span> </div>
        
       <div className="score-section-piechart-container">
         <PieChart
  data={[
    { title: 'True', value: mark, color: '#E38627'  },
    { title: 'False', value: questions.length-mark, color: '#C13C37' },
    
 
  ]}    /> 
  </div>
<div className='survey-button'> <Button  variant="contained" color="secondary" size="large" onClick={resetvalues}>RESET</Button></div>

        </div>
         
          </>
              ) : (
                  <>
          <div className=' question-answer-container'>
                      <div className='question-section  '>
                          <div className='question-count  '>
                            Question {count + 1}/{questions.length}
                          </div>
                             
                          <div className='question-text '>{questions[count].questionText}</div>
                      </div></div>
                      <div className='answer-section '>
                      {
              questions[count].answerOptions.map((answer)=>{
                return(<Button  variant="contained" color="secondary" className='' onClick={()=>handleClick(answer.isCorrect)}>{answer.answerText}</Button>);
               
              })
             
              
            }
                      </div>
                  </>
              )}
          </div>
      );
  }

export default Survey
