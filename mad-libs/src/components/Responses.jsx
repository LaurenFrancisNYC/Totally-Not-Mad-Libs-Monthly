import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

function Responses(props) {
  


  const handleSubmit = () => {

  }

  return (
    <div>
      {props.responses.map((response) => (
        <p key={response.id}>{`${response.fields.submission}`}
          <form onSubmit={handleSubmit}>
            <input type='button'></input>
          </form>   
        </p>))}
      <Link to='/'>go back</Link>
    </div>
  )
}
export default Responses





