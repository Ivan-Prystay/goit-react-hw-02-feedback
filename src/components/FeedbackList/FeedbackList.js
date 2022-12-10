import React, { Component } from 'react';

import { ButtonGrupp, Button } from './FeedbackList.styled';
import { Statistics } from './Statistics/Statistics';

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hangleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <ButtonGrupp>
          {Object.keys(this.state).map(option => (
            <Button
              type="button"
              key={option}
              onClick={() => this.hangleClick(option)}
            >
              {option}
            </Button>
          ))}
        </ButtonGrupp>

        <h2>Feedback statistics</h2>
        <Statistics
          good={this.props.good}
          neutral={this.props.neutral}
          bad={this.props.bad}
          total={this.props.total}
          positivePercentage={this.props.positivePercentage}
        />
      </>
    );
  }
}
