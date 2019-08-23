import React from 'react';
import axios from 'axios';

// redux later, react now

class CandyList extends React.Component {
  constructor() {
    super();
    this.state = {
      toDisplay: [],
    };
    this.description = 'Useless constructor ik stop reminding me';
  }

  async componentDidMount() {
    const { data } = await axios.get('/api');
    this.setState({
      toDisplay: data,
    });
  }

  render() {
    const { toDisplay } = this.state;
    return (
      <div>
        <h1>Look at all this candy</h1>
        {toDisplay.map(candy => {
          return (
            <div key={candy.id}>
              <h1>{candy.name}</h1>
              <img src={candy.imageUrl} />
              <h3>I was birthed: {candy.createdAt}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CandyList;
