import { useState } from 'react'
import { Header } from './components/Header';
import Advice from './components/Advice';
import Loader from './components/Loader';

function Thoughtful() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState("")
  const [error , setError] = useState(null);

  async function getAdvice(){
    setIsLoading(true);
    try{
      const response = await fetch("https://ai.adviceslip.com/advice");
      const advice = await response.json();
      setAdvice(advice.slip);
      if(!response.ok) setError("Something went wrong!! Try again later");
      console.log(advice.slip);
    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <>
    <Header/>
    <Advice info={advice} error ={error}/>
    <button className='get-advice' title='Get new advice' onClick={getAdvice}>
      {isLoading ? 
        <><Loader/> Loading New Thought<span>Ful</span>Advice...</>
       : 
        <> New Thought<span>Ful</span> Advice</>
      }
    </button>
    </>
  )
}

export default Thoughtful
