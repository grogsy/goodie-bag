/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import axios from "axios";
import SingleCandy from "./singlecandy";
import { Link } from "react-router-dom";

// redux later, react now

class CandyList extends React.Component {
  constructor() {
    super();
    this.state = {
      toDisplay: []
    };
    this.description = "Useless constructor ik stop reminding me";
  }

  async componentDidMount() {
    const { data } = await axios.get("/api");
    this.setState({
      toDisplay: data
    });
  }

  render() {
    const { toDisplay } = this.state;
    return (
      <div>
        <h1>Look at all this candy:</h1>
        <ul>
          {toDisplay.map(candy => {
            return (
              <li key={candy.id}>
                <Link to={`/candies/${candy.id}`}>{candy.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CandyList;
