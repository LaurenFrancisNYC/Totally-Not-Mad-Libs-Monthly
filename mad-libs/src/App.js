import Prompt from "./components/MonthlyPrompt";
import prompts from "./prompts";
import Form from "./components/Form";
import Responses from "./components/Responses";
import HallofFame from "./components/HallofFame";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState();
  const [responses, setResponses] = useState([]);
  const [toggle, setToggle] = useState(false);

  // The primary api call
  useEffect(() => {
    const getResponses = async () => {
      const resp = await axios.get(baseURL, config);
      setResponses(resp.data.records);
    };
    getResponses();
  }, [toggle]);

  // Gets the current date and sets it as the current month
  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    setCurrentMonth(month);
    setCurrentPrompt(prompts[month].text);
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Prompt currentPrompt={currentPrompt} />
      </Route>
      <Route path="/submit">
        <Form
          currentPrompt={currentPrompt}
          currentMonth={currentMonth}
          toggle={toggle}
          setToggle={setToggle}
        />
      </Route>
      <Route path="/responses">
        <Responses
          responses={responses}
          currentMonth={currentMonth}
          toggle={toggle}
          setToggle={setToggle}
        />
      </Route>
      <Route path="/hall-of-fame">
        <HallofFame
          responses={responses}
          toggle={toggle}
          setToggle={setToggle}
        />
      </Route>
    </div>
  );
}
export default App;
