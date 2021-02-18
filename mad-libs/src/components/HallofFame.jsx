import { Link, Route } from "react-router-dom";
import MonthSelection from "../components/MonthSelection"
import TopSubmission from "../components/TopSubmission"
import { useState, useEffect } from "react";
import prompts from "../prompts";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0)
  const [topSelection, setTopSelection] = useState('')
  const [toggleFetch, setToggleFetch] = useState(false);
  const responses = props.responses 

  return (
    <div>
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h3>Select a month to see the most liked submission.</h3>
      <h3>The prompt for January was:</h3>
      <h2>{prompts[monthSelection].text}</h2>
      <MonthSelection
        setMonthSelection={setMonthSelection}
        monthSelection={monthSelection}
        setToggleFetch={setToggleFetch}
        toggleFetch={toggleFetch} />
      <TopSubmission
        monthSelection={monthSelection}
        responses={responses}
        toggleFetch={toggleFetch}
        setTopSelection={setTopSelection}
        topSelection={topSelection} />
      <Link className='buttons' to='/'>Go Home</Link>
    </div>
  )
}
export default HallofFame;