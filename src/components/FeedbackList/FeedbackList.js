import React, { Component } from 'react';

import {
  ListFeed,
  Container,
  ListItem,
  ButtonGrupp,
  Button,
  StatInfo,
} from './FeedbackList.styled';
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
    neutral: 'f',
    bad: 0,
  };

  render() {
    const totalFeedback = Object.values(this.state).reduce((a, b) => a + b);
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <ButtonGrupp>
          {Object.entries(this.state).map(item => (
            <Button type="button" key={item[0]}>
              {item[0]}
            </Button>
          ))}
        </ButtonGrupp>
        <h2>Feedback statistics</h2>
        <ListFeed>
          {Object.entries(this.state).map(item => (
            <ListItem key={item[0]}>
              <span>{item[0]} </span>
              <span>{item[1]}</span>
            </ListItem>
          ))}
        </ListFeed>
        <StatInfo>
          <p>Total: {totalFeedback}</p>
          <p>
            Positive feedback:
            {(this.state.good / totalFeedback) * 100}%
          </p>

          <p>ErrorErrorErrorError</p>
        </StatInfo>
      </Container>
    );
  }
}
