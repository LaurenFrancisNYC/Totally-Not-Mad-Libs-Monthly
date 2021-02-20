import { Link } from "react-router-dom";
import "../App.css";

import Fade from "../fade";
import { useState, useEffect } from "react";

function Prompt(props) {
  const [show, setShow] = useState(false);
  //loads up fade effects
  useEffect(() => {
    setShow((show) => !show);
  }, []);

  // const [show2, setShow2] = useState(false);
  // useEffect(() => { setShow2(show2 => !show2) }, [])

  return (
    <div id="monthlyPromptComp">
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h2>This month's prompt is as follows:</h2>
      <h3 className="largeText">{props.currentPrompt}</h3>
      <Fade show={show}>
        <div className="nav">
          <Link className="buttons" to="/submit">
            Submit a Response
          </Link>
          <Link className="buttons" to="/responses">
            See Other's Responses
          </Link>
          <Link className="buttons" to="/hall-of-fame">
            Hall of Fame
          </Link>
        </div>
      </Fade>
    </div>
  );
}
export default Prompt;

// return (
//   <Fade show={show}>
//   <div id="monthlyPromptComp">
//     <h2>Welcome to Totally Not Mad Libs Monthly</h2>
//     <h2>This month's prompt is as follows:</h2>
//     <h3 className="largeText">{props.currentPrompt}</h3>
//     <div className="nav">
//       <Link className="buttons" to="/submit">
//         Submit a Response
//       </Link>
//       <Link className="buttons" to="/responses">
//         See Other's Responses
//       </Link>
//       <Link className="buttons" to="/hall-of-fame">
//         Hall of Fame
//       </Link>
//     </div>
//     </div>
//   </Fade>
// );
// }
// export default Prompt;
