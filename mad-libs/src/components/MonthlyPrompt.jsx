import prompts from "../prompts";
import { useState, useEffect } from "react";
// import Form from "./components/Form";


function Prompt(props) {

  const [currentMonth, setCurrentMonth] = useState();
  const [currentPrompt, setCurrentPrompt] = useState();
  

  useEffect(() => {
    const date = new Date(); 
    const month = date.getMonth();
    const setMonth = () => setCurrentMonth(month);     
    setMonth();
  }, []);

  // useEffect(() => {
  //   const getPrompt = async () => {
  //     const x = await currentMonth;
  //     setCurrentPrompt(prompts[x].text)
  //   };
  //   getPrompt()
  // }, [currentMonth])

  
  useEffect(() => {
    const getPrompt = () => {
      setCurrentPrompt(prompts[currentMonth].text)
      // setCurrentPrompt(prompts[1].text)
    }
    getPrompt()
  }, []);



  return (
    <h1>
      {currentPrompt}
    </h1>
  )
}

export default Prompt;