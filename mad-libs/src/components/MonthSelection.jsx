
import { useState } from "react";

function MonthSelection(props) {
  const [monthSelectionTemp,setMonthSelectionTemp] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthSelectionTempInt = parseInt(monthSelectionTemp)
    props.setMonthSelection(monthSelectionTempInt)
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Month:</label>
        <select id="months" name="months" onChange={(e) => setMonthSelectionTemp(e.target.value)}>
          <option value='0'>Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
        </select>
        <input type="submit"></input>
      </form>
    </div>
  )
}
export default MonthSelection;