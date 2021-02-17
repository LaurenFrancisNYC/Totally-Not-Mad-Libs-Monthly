import { Link, Route } from "react-router-dom";
import MonthSelection from "../components/MonthSelection"
import TopSubmission from "../components/TopSubmission"
import { useState, useEffect } from "react";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0)
  const [topSelection,setTopSelection] = useState('')

useEffect(() => {
  // console.log(monthSelection)
  const responses = props.responses 
  // console.log(responses)
  const monthlyResponses = responses.filter(function(response){
    return response.fields.month == monthSelection
  })

  const sorted = monthlyResponses.sort((a, b) => {
    return a.fields.likes - b.fields.likes;
  })
  
  console.log(sorted)





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