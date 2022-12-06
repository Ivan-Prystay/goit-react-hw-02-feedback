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
    good: 5,
    neutral: 5,
    bad: 5,
  };

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <div>
          {Object.entries(this.state).map(item => (
            <button>
              <span>{item[0]}</span>
            </button>
          ))}
        </div>

        <h2>Feedback statistics</h2>
        <ListFeed>
          {Object.entries(this.state).map(item => (
            <li>
              <span>{item[0]} </span>
              <span>{item[1]}</span>
            </li>
          ))}
        </ListFeed>
        <div>
          <p>Total: {this.state.good + this.state.neutral + this.state.bad} </p>
          <p>
            Positive feedback:
            {(this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)) *
              100}
            %
          </p>
        </div>
        <div>
          <p>ErrorErrorErrorError</p>
        </div>
      </Container>
    );
  }
}
console.dir('FeedbackList: ', typeof FeedbackList);
