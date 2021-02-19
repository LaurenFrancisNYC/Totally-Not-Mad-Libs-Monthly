import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import prompts from "../prompts";

function Responses(props) {
  const [toggle, setToggle] = useState(false);

  //opens local storage arrays
  useEffect(() => {
    if (!localStorage.getItem('favResponses')) {
        localStorage.setItem('favResponses', JSON.stringify([]));
        }}, []);

  //controls the like button toggles
  const changeLike = async (response, likes, submission, month) => {
    const localResponses = JSON.parse(localStorage.getItem('favResponses'));
    if (localResponses.includes(response)) {
      localStorage.setItem('favResponses', JSON.stringify(localResponses.filter((localResponse) => localResponse !== response)));
    } else {
      localStorage.setItem('favResponses', JSON.stringify([...localResponses, response]));
    }
    setToggle(!toggle);

    //sets the rules for the adjustments on the like counts 
    let x = 0
    if (localResponses.includes(response)) {x=likes-0} else {x=likes+.5} 
    const fields = {
      submission,
      likes: x, 
      month
    };

  //makes the api put requests to adjust the number of likes
    const responseURL = `${baseURL}`+'/'+response
    console.log(responseURL)
    await axios.put(responseURL, { fields }, config);
  }

  //makes sure only the current month's responses are shown
  const currentMonthResponses = props.responses.filter(function(response){
    return response.fields.month == props.currentMonth})

  // console.log(currentMonthResponses)
  return (
    <div id='responsesComp'>
      <h2>Welcome to Totally Not Mad Libs Monthly</h2>
      <h2>This month's prompt is as follows:</h2>
      <h1>{prompts[props.currentMonth].text}</h1>
      <div id='responsesContainer'>
        {currentMonthResponses.map((response) => (
          <div className='responses' id={response.id} key={response.id}>
            <h5 className='responseText'> {`${response.fields.submission}`}</h5> 
            <button className='likeButtons' onClick={() => changeLike(response.id,response.fields.likes,response.fields.submission,response.fields.month)}>
              {localStorage.getItem('favResponses') && JSON.parse(localStorage.getItem('favResponses')).includes(response.id) ? '💔' : '❤️'}
            </button>
          </div>))}
      </div>  
      <Link className='buttons' to='/'>Go Home</Link>
      <Link className='buttons' to='/hall-of-fame'>Hall of Fame</Link>
    </div>
  )
}
export default Responses

