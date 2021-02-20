import { useState, useEffect } from "react";

function TopSubmission(props) {
  const monthSelection = props.monthSelection;
  const responses = props.responses;
  const toggle = props.toggle;
  const [topResponse, setTopResponse] = useState("");

  useEffect(() => {
    //sorts by most likes
    const monthlyResponses = responses
      .filter(function (response) {
        return response.fields.month === monthSelection;
      })
      .sort((a, b) => {
        return a.fields.likes - b.fields.likes;
      });
    //gets the most liked entry
    const topResponseIndex = monthlyResponses.length - 1;
    const topArray = monthlyResponses[topResponseIndex];
    setTopResponse(topArray.fields.submission);
  }, [toggle]);

  return (
    <div>
      <h3 className="largeText">{topResponse}</h3>
    </div>
  );
}
export default TopSubmission;
