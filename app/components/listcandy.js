/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import axios from "axios";
import SingleCandy from "./singlecandy";

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
        {toDisplay.map(candy => {
          return <SingleCandy key={candy.id} {...candy} />;
        })}
      </div>
    );
  }
}

export default CandyList;
