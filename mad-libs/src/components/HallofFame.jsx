import { Link, Route } from "react-router-dom";
import MonthSelection from "../components/MonthSelection"
import TopSubmission from "../components/TopSubmission"
import { useState, useEffect } from "react";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0)
  
useEffect(() => {
  console.log(monthSelection)
  const responses = props.responses 
  console.log(responses)

  // responses.filter

  // const respArray = [] 
  // responses.forEach(response =>
  //   console.log(response.fields.month))
  
  }, [monthSelection]);
  

  return (
    <div>
      <MonthSelection setMonthSelection={setMonthSelection} MonthSelection={MonthSelection}/>
      <TopSubmission MonthSelection={MonthSelection} />
      <Link to='/'>home</Link>
    </div>
  )
}
export default HallofFame;