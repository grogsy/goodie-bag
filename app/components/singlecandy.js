/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import React from "react";
import { Link } from "react-router-dom";
import { getSingleItem } from "../reducers";
import { connect } from "react-redux";

class SingleCandy extends React.Component {
  componentDidMount() {
    this.props.getSingleItem(this.props.match.params.id);
  }

  render() {
    const {
      name,
      description,
      quantity,
      imageUrl,
      createdAt
    } = this.props.singleItem;
    return (
      <div>
        <Link to="/candies">Go back to yo leeeeeeeest</Link>
        <h1>{name}</h1>
        <h2>Motto: {description}</h2>
        <h4>Current amount (Max 10): {quantity}</h4>
        <img src={imageUrl} />
        <h3>I was birthed: {createdAt}</h3>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleItem: id => dispatch(getSingleItem(id))
  };
};

const mapState = state => {
  return {
    singleItem: state.singleItem
  };
};

export default connect(
  mapState,
  mapDispatch
)(SingleCandy);
