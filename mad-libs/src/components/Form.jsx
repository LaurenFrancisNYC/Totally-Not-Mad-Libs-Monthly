import { Link, Route } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";


function Form(props) {
  // const [submission, setSubmission] = useState("");
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [likes, setLikes] = useState(0);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //takes the 2 words the user submitted and concatenates them with the prompt, resulting in a string
    const createString = () => {
      const subString = props.currentPrompt.replace('____', `${field1}`)
      const subStringField2 = subString.replace('____', `${field2}`)
      return subStringField2
    } 
    const submission = createString()

    const fields = {
      submission,
      likes,
      month: props.currentMonth
    };

    await axios.post(baseURL, { fields }, config)
    
    console.log(fields)
    // history.push("/");

  }
    return (
      <div>
        <h1>{props.currentPrompt}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="field1"></label>
          <input
            id="field1"
            type="text"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
          />
          <label htmlFor="field2"></label>
          <input
            id="field2"
            type="text"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
          />
          <button id="submitbutton" type="submit">Submit!</button>
        </form>
        <Link to='/'>go back</Link>
      </div>
    )
}
export default Form;