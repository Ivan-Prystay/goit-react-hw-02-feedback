import { Component } from 'react';

import { ListItem, StatInfo } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <div>
        {this.countTotalFeedback() > 0 ? (
          <>
            {Object.entries(this.state).map(item => (
              <ListItem key={item[0]}>
                {`${item[0]}: `}
                {item[1]}
              </ListItem>
            ))}
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
      </div>
    );
  }
}
