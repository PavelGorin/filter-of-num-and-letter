function Result({results}) {
  return (
  <>
  <p className="result__text" >
  {results.result} : {results.count}
  </p> 
  </>
  )
  }
   
  export default Result;