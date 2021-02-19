import { Link, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function Form(props) {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [likes, setLikes] = useState(0);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //takes the 2 words the user submitted and concatenates them with the prompt, resulting in a string
    const submission = props.currentPrompt.replace('____', `${field1}`).replace('____', `${field2}`)

    //This creates the api post frields
    const fields = {
      submission,
      likes,
      month: props.currentMonth,
    };
    //post to the api
    await axios.post(baseURL, { fields }, config);
    // console.log(fields)
    //returns to the homepage
    history.push("/");
  };
  return (
    <div id="formComp">
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h2>This month's prompt is as follows:</h2>
      <h3 className='largeText'>{props.currentPrompt}</h3>
      <form id="formFields" onSubmit={handleSubmit}>
        {/* <label htmlFor="field1"></label> */}
        <input
          id="field1"
          className="textField"
          type="text"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
        />
        {/* <label htmlFor="field2"></label> */}
        <input
          id="field2"
          className="textField"
          type="text"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
      <div className="nav">
        <Link className="buttons" to="/">
          Go Home
        </Link>
        <Link className="buttons" to="/hall-of-fame">
          Hall of Fame
        </Link>
      </div>
    </div>
  );
}
export default Form;
