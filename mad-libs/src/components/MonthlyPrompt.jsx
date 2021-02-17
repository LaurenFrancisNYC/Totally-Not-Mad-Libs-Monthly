import { Link, Route } from "react-router-dom";

function Prompt(props) {
  return (
    <div>
      <h1>{props.currentPrompt}</h1>
      <Link to='/submit'>submit</Link>
      <Link to='/responses'>responses</Link>
      <Link to='/hall-of-fame'>Hall of Fame</Link>
    </div>
  )
}
export default Prompt;