import { Link, Route } from "react-router-dom";
import MonthSelection from "../components/MonthSelection"
import TopSubmission from "../components/TopSubmission"
import { useState, useEffect } from "react";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0)
  const [topSelection, setTopSelection] = useState('')
  const [toggleFetch, setToggleFetch] = useState(false);
  const responses = props.responses 

  return (
    <div>
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
      <Link to='/'>home</Link>
    </div>
  )
}
export default HallofFame;