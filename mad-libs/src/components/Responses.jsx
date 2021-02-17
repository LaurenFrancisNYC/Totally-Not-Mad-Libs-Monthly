import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

function Responses(props) {
  const [responses, setResponses] = useState()
  
  useEffect(() => {
  const getResponses = async () => {
      const resp = await axios.get(baseURL, config);
      setResponses(resp.data.records);
    };
    getResponses();
  }, []);

  console.log(responses)

  const handleSubmit = () => {
    
  }

  return (
    <div>
      {responses.map((response) => (
        <p key={response.id}>{`${response.fields.submission}`}
          <form onSubmit={handleSubmit}>
            <input type='checkbox'></input>
          </form>   
        </p>)
        )
      }
      <Link to='/'>go back</Link>
    </div>
  )
}
export default Responses





