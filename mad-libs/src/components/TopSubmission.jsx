import { useState, useEffect } from "react";


function TopSubmission(props) {

  const monthSelection = props.monthSelection  
  const responses = props.responses 
  const toggleFetch = props.toggleFetch

  useEffect(() => {
    const monthlyResponses = responses.filter(function(response){
      return response.fields.month == monthSelection
    })
    //sorts by most likes
    const sorted = monthlyResponses.sort((a, b) => {
      return a.fields.likes - b.fields.likes;
    }) 
    
    //gets the most liked entry
    const topResponseIndex = monthlyResponses.length - 1
    const topArray = monthlyResponses[topResponseIndex]
    const topResponse = topArray.fields.submission 

    props.setTopSelection(topResponse) 
    }, [toggleFetch]);

  return (
    <div>
      <p>{props.topSelection}</p>
    </div>
  )
}
export default TopSubmission;