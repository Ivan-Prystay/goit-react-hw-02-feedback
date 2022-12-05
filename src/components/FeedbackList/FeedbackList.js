import React, { Component } from 'react';

import { ListFeed, Container } from './FeedbackList.styled';
/*
 static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };
  }

  handleIncrement = (evt) => {
    console.log("Increment button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };

  handleDecrement = (evt) => {
    console.log("Decrement button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };

 render() {
    const { step } = this.props;

    return (
      <div>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <span> {this.state.value} </span>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
*/

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 20,
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Please leave feedback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Feedback statistics</h2>
        <ListFeed>
          <li>
            {'Good: '}
            <span style={{ color: 'green' }}>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span style={{ color: 'blue' }}>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span style={{ color: 'red' }}>{this.state.bad}</span>
          </li>
        </ListFeed>
        <div>
          <p>Total: </p>
          <p>Positive feedback: </p>
        </div>
      </Container>
    );
  }
}
console.dir('FeedbackList: ', typeof FeedbackList);
