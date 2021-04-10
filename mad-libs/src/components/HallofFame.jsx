import { Link } from "react-router-dom";
import MonthSelection from "../components/MonthSelection";
import TopSubmission from "../components/TopSubmission";
import { useState, useEffect } from "react";
import prompts from "../prompts";
import Fade from "../fade";

function HallofFame(props) {
  const [monthSelection, setMonthSelection] = useState(0);
  const responses = props.responses;
  const toggle = props.toggle;
  const setToggle = props.setToggle;
  const [show, setShow] = useState(false);

  //loads up fade effects
  useEffect(() => {
    setShow((show) => !show);
  }, []);

  return (
    <div id="hallOfFameComp">
      <h2>Welcome to Totally Not Mad Libs Monthly: 2021 Edition</h2>
      <Fade show={show}>
        <h3>Select a month to see the most liked submission.</h3>
      </Fade>
      <Fade show={show}>
        <MonthSelection
          setMonthSelection={setMonthSelection}
          monthSelection={monthSelection}
          setToggle={setToggle}
          toggle={toggle}
        />
      </Fade>
      <Fade show={show}>
        <h3>The prompt for this month was:</h3>
      </Fade>
      <Fade show={show}>
        <h3 className="largeText">{prompts[monthSelection].text}</h3>
      </Fade>
      <Fade show={show}>
        <TopSubmission
          monthSelection={monthSelection}
          responses={responses}
          toggle={toggle}
        />
      </Fade>
      <Fade show={show}>
        <Link className="buttons" to="/">
          Go Home
        </Link>
      </Fade>
    </div>
  );
}
export default HallofFame;
