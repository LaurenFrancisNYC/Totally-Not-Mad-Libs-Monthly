import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";


function Responses(props) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('favResponses')) {
        localStorage.setItem('favResponses', JSON.stringify([]));
        }}, []);

  const changeLike = async (response, likes, submission, month) => {
    const localResponses = JSON.parse(localStorage.getItem('favResponses'));
    if (localResponses.includes(response)) {
      localStorage.setItem('favResponses', JSON.stringify(localResponses.filter((localResponse) => localResponse !== response)));
    } else {
      localStorage.setItem('favResponses', JSON.stringify([...localResponses, response]));
    }
    setToggle(!toggle);

    let x = 0
    if (localResponses.includes(response)) {x=likes-0} else {x=likes+.5} 
    
    const fields = {
      submission,
      likes: x, 
      month
    };

    const responseURL = `${baseURL}`+'/'+response
    console.log(responseURL)
    await axios.put(responseURL, { fields }, config);
  }

  const currentMonthResponses = props.responses.filter(function(response){
    return response.fields.month == props.currentMonth})

  console.log(currentMonthResponses)

  return (
    <div>
      {currentMonthResponses.map((response) => (
        <div id={response.id} key={response.id}>
          <h4>{`${response.fields.submission}`}</h4>
          <button onClick={() => changeLike(response.id,response.fields.likes,response.fields.submission,response.fields.month)}>
            {localStorage.getItem('favResponses') && JSON.parse(localStorage.getItem('favResponses')).includes(response.id) ? '💔' : '❤️'}
          </button>
        </div>))}
      <Link to='/'>home</Link>
      <Link to='/hall-of-fame'>Hall of Fame</Link>
    </div>
  )
}
export default Responses

