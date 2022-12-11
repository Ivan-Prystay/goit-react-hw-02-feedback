import { Component } from 'react';

import { ListItem, StatInfo } from './Statistics.styled';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* {this.props.countTotalFeedback() > 0 ? ( */}
        <>
          {Object.entries(this.props).map(item => (
            <ListItem key={item[0]}>
              {`${item[0]}: `}
              {item[1]}
            </ListItem>
          ))}
          <StatInfo>
            <p>
              {'Total: '} {this.props.countTotalFeedback}
            </p>
            <p>
              {'Positive feedback: '}
              {this.props.countPositiveFeedbackPercentage}%
            </p>
          </StatInfo>
        </>
        {/* ) : ( */}
        <p>There is no feedback</p>
        {/* )} */}
      </div>
    );
  }
}
