
import { useState } from "react";

function MonthSelection(props) {
  const [monthSelectionTemp, setMonthSelectionTemp] = useState(0)
  
//this component lets the user select which of the other months they'd like to see the top post of 
  const handleSubmit = (e) => {
    e.preventDefault();
    const monthSelectionTempInt = parseInt(monthSelectionTemp)
    props.setMonthSelection(monthSelectionTempInt)
    props.setToggleFetch((curr) => !curr);
  }

  // const monthsArray
  return (
    <div id='monthSelection'>
      <form onSubmit={handleSubmit}>
      {/* <label>Month:</label> */}
        <select id="months" name="months" onChange={(e) => setMonthSelectionTemp(e.target.value)}>
          <option value='0'>January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value='4'>May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value='8'>September	</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <input className="submitButton" id='monthSubmit' type="submit"></input>
      </form>
    </div>
  )
}
export default MonthSelection;