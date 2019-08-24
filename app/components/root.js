/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from "react";
import CandyList from "./listcandy";
import { Route, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/candies">Goodie Bag</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path="/candies" component={CandyList} />
      </main>
    </div>
  );
};

export default Root;
