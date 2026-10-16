import React ,{useState,useEffect}from 'react'
const App = () => {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
    console.log("increment clicked");
  }
  useEffect(()=>{
    document.title = `Count:${count}`;
    console.log("component rendered");
  },[]) 
  return (
    <div>
      <h1>Counter</h1>
      <div></div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default App
