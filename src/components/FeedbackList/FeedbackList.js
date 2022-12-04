import React, { Component } from 'react';

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 20,
  };

  render() {
    return (
      <div>
        <ul>
          Statistics feedback
          <li>
            Good<span>{this.state.good}</span>
          </li>
          <li>
            Neutral<span>{this.state.neutral}</span>
          </li>
          <li>
            Bad<span>{this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}
console.dir('FeedbackList: ', typeof FeedbackList);
