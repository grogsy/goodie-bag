/* eslint-disable linebreak-style */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const SingleCandy = ({ name, description, quantity, imageUrl, createdAt }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>Motto: {description}</h2>
//       <h4>Current amount (Max 10): {quantity}</h4>
//       <img src={imageUrl} />
//       <h3>I was birthed: {createdAt}</h3>
//     </div>
//   );
// };

class SingleCandy extends React.Component {
  constructor() {
    super();
    this.state = {
      candy: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data } = await axios.get(`/api/${id}`);
    this.setState({
      candy: data
    });
  }

  render() {
    const {
      name,
      description,
      quantity,
      imageUrl,
      createdAt
    } = this.state.candy;
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

export default SingleCandy;
