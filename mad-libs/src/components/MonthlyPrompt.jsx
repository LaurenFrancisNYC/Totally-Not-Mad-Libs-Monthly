import { Link, Route } from "react-router-dom";
import "../App.css";


function Prompt(props) {
  return (
    <div id='monthlyPromptComp'>
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h2>This month's prompt is as follows:</h2>
      <h1>{props.currentPrompt}</h1>
      <Link class='buttons' to='/submit'>Submit a Response</Link>
      <Link class='buttons' to='/responses'>See Other's Responses</Link>
      <Link class='buttons' to='/hall-of-fame'>Hall of Fame</Link>
    </div>
  )
}
export default Prompt;