import React from "react";

const SingleCandy = ({ name, description, quantity, imageUrl, createdAt }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Motto: {description}</h2>
      <h4>Current amount (Max 10): {quantity}</h4>
      <img src={imageUrl} />
      <h3>I was birthed: {createdAt}</h3>
    </div>
  );
};

export default SingleCandy;
