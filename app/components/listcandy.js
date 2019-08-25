/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getPreviewData } from "../reducers";
import { connect } from "react-redux";

// redux later, react now

class CandyList extends React.Component {
  constructor() {
    super();
    this.state = {
      toDisplay: []
    };
  }

  componentDidMount() {
    // const { data } = await axios.get("/api/ids");
    // this.setState({
    //   toDisplay: data
    // });
    this.props.getPreviewData();
  }

  render() {
    const { previewData } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Look at all this candy:</h1>
        <ul>
          {previewData.map(candy => {
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

const mapDispatch = dispatch => {
  return {
    getPreviewData: () => dispatch(getPreviewData())
  };
};

const mapState = state => {
  return {
    previewData: state.previewData
  };
};

export default connect(
  mapState,
  mapDispatch
)(CandyList);
