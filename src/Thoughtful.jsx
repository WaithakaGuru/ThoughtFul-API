import { useState } from 'react'
import { Header } from './Header';
import Advice from './Advice';
import Loader from './Loader';

async function fetchAdvise () {
  try{
    const response = await fetch("https://api.adviceslip.com/");
    const advice = response.json();
    return advice.slip;
  }catch(error){
    console.log(error);
  }
}

function Thoughtful() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState("")
  const [error , setError] = useState(null);

  function getAdvice(){
    setIsLoading(true);
    setAdvice(fetchAdvise);
    setIsLoading(false);
  }

  return (
    <>
    <Header/>
    <Advice info={advice}/>
    <button className='get-advice' title='Get new advice' onClick={getAdvice}>
      {isLoading ? (
        <>
          <Loader /> Loading New Thought<span>Ful</span> Advice...
        </>
      ) : (
        <>
          New Thought<span>Ful</span>Advice
        </>
      )}
    </button>
    </>
  )
}

export default Thoughtful
