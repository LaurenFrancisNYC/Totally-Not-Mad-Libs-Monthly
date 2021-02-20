import { useState, useEffect } from "react";


function TopSubmission(props) {

  const monthSelection = props.monthSelection
  const responses = props.responses
  const toggleFetch = props.toggleFetch
  const [topResponse,setTopResponse] = useState('')

  useEffect(() => {
    //sorts by most likes
    const monthlyResponses = responses.filter(function(response){
      return response.fields.month === monthSelection
    }).sort((a, b) => {
      return a.fields.likes - b.fields.likes;
    }) 

      // console.log(typeof(responses.fields.month))
      // console.log(typeof(monthSelection))

    // const monthlyResponses = responses.filter(function (response) {
    //   return response.fields.month == monthSelection
    //   console.log(typeof (response.fields.month))
    //   console.log(typeof(monthSelection))
    // })
    //sorts by most likes
    //   const sorted = monthlyResponses.sort((a, b) => {
    //   return a.fields.likes - b.fields.likes;
    // })
    
    //gets the most liked entry
    const topResponseIndex = monthlyResponses.length - 1
    const topArray = monthlyResponses[topResponseIndex]
    // const topResponse = topArray.fields.submission
    setTopResponse(topArray.fields.submission)
    
    // props.setTopSelection(topResponse)

    // console.log(typeof(props.responses))

  }, [toggleFetch]);

  
  if (typeof(!props.responses)) {
    return (
      <div>
        {/* <h3 className='largeText'>{props.topSelection}</h3> */}
        <h3 className='largeText'>{topResponse}</h3>
      </div>
    )
  }
  else {
    return (
      <p>loading...</p>
    )
  }
}
export default TopSubmission;