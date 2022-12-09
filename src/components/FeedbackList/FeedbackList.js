import React, { Component } from 'react';

import {
  ListFeed,
  Container,
  ListItem,
  ButtonGrupp,
  Button,
  StatInfo,
} from './FeedbackList.styled';

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //!=================================================//

  // hangleClick = item => {
  //   this.setState({
  //     good: item[1] + 1,
  //     neutral: item[1] + 1,
  //     bad: item[1] + 1,
  //   });
  // };
  hangleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  //!=================================================//

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    return (
      <Container>
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

        {this.countTotalFeedback() > 0 ? (
          <>
            <ListFeed>
              {Object.entries(this.state).map(item => (
                <ListItem key={item[0]}>
                  {`${item[0]}: `}
                  {item[1]}
                </ListItem>
              ))}
            </ListFeed>
            <StatInfo>
              <p>
                {'Total: '} {this.countTotalFeedback()}
              </p>
              <p>
                {'Positive feedback: '}
                {this.countPositiveFeedbackPercentage()}%
              </p>
            </StatInfo>
          </>
        ) : (
          <p>There is no feedback</p>
        )}
      </Container>
    );
  }
}
