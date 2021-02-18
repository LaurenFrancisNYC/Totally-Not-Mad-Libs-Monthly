import { Link, Route } from "react-router-dom";

function Prompt(props) {
  return (
    <div>
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h2>This month's prompt is as follows:</h2>
      <h1>{props.currentPrompt}</h1>
      <Link to='/submit'>Submit a Response</Link>
      <Link to='/responses'>See Other's Responses</Link>
      <Link to='/hall-of-fame'>Hall of Fame</Link>
    </div>
  )
}
export default Prompt;