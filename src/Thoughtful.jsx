import { useState } from 'react'
import { Header } from './components/Header';
import Advice from './components/Advice';
import Loader from './components/Loader';

function Thoughtful() {
  const [isLoading, setIsLoading] = useState(true);
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
          <Loader/> Loading New Thought<span>Ful</span>Advice...
        </>
      ) : (
        <>
          New Thought<span>Ful</span> Advice
        </>
      )}
    </button>
    </>
  )
}

export default Thoughtful
