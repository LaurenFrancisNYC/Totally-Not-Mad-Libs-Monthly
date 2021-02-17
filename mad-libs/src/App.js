import Prompt from './components/MonthlyPrompt';
import prompts from "./prompts";
import Form from './components/Form';
import Responses from './components/Responses';
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { baseURL, config } from "./services";

function App() {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentPrompt, setCurrentPrompt] = useState(prompts[currentMonth].text);
  
  // Gets the current date and sets it as the current month
  // useEffect(() => {
  //   const date = new Date(); 
  //   const month = date.getMonth();
  //   const setMonth = () => setCurrentMonth(month);     
  //   setMonth();
  // }, []);
  
    // Gets the current month and sets the appropriate prompt from the prompts.js file 
  // useEffect(() => {
  //   const getPrompt = () => {
  //     setCurrentPrompt(prompts[currentMonth].text)
  //   }
  //   getPrompt()
  // }, []);

  return (
    <div className="App">
      <Route exact path='/'>
        <Prompt currentPrompt={currentPrompt}/>
      </Route>
      <Route path='/submit'>
        <Form
          currentPrompt={currentPrompt} 
          currentMonth={currentMonth} />
      </Route>
      <Route path='/responses'>
          <Responses/>
      </Route>
    </div>
  );
}
export default App;




  // const [responses,setResponses] = useState()
  // const getResponses = async () => {
  //   const resp = await axios.get(baseURL, config);
  //   setResponses(resp.data.records);
  // };
  // getResponses();
  // console.log(responses)