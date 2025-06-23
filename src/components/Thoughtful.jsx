import { useState } from 'react'
import { Header } from './Header';
import Advice from './Advice';
import Loader from './Loader';

function Thoughtful() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState("Alone you go faster, Together you go far")
  const [error , setError] = useState(null);

  async function getAdvice(){
    setIsLoading(true);
    try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const advice = await response.json();
      setAdvice(advice.slip.advice);
    }catch(err){
      console.log(err);
      setError("Something went wrong!! Try again later");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <>
    <Header/>
    <Advice info={advice} err={error}/>
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
