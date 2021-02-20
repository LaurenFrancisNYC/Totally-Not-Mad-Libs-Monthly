import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function TopSubmission(props) {
  const monthSelection = props.monthSelection;
  const responses = props.responses;
  const toggle = props.toggle;
  // const [responses, setResponses] = useState([]);
  const [topResponse, setTopResponse] = useState("");

  // useEffect(() => {
  //   const getResponses = async () => {
  //     const resp = await axios.get(baseURL, config);
  //     setResponses(resp.data.records);
  //   };
  //   getResponses();
  // }, []);

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
