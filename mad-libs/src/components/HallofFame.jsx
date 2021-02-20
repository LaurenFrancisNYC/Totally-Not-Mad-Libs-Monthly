import { Link } from "react-router-dom";
import MonthSelection from "../components/MonthSelection";
import TopSubmission from "../components/TopSubmission";
import { useState } from "react";
import prompts from "../prompts";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0);
  const responses = props.responses;
  const toggle = props.toggle;
  const setToggle = props.setToggle;

  return (
    <div id="hallOfFameComp">
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h3>Select a month to see the most liked submission.</h3>
      <MonthSelection
        setMonthSelection={setMonthSelection}
        monthSelection={monthSelection}
        setToggle={setToggle}
        toggle={toggle}
      />
      <h3>The prompt for this month was:</h3>
      <h3 className="largeText">{prompts[monthSelection].text}</h3>
      <TopSubmission
        monthSelection={monthSelection}
        responses={responses}
        toggle={toggle}
      />
      <Link className="buttons" to="/">
        Go Home
      </Link>
    </div>
  );
}
export default HallofFame;
