import { Component } from 'react';
import { ListItem, StatInfo } from './Statistics.styled';

// import { ListItem, StatInfo } from './Statistics.styled';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    return (
      <div>
        {this.props.total > 0 ? (
          <StatInfo>
            <ListItem>Good: {this.props.good} </ListItem>
            <ListItem>Neutral: {this.props.neutral}</ListItem>
            <ListItem>Bad: {this.props.bad}</ListItem>
            <ListItem>Total: {this.props.total}</ListItem>
            <ListItem>
              Positive feedback: {this.props.positivePercentage}%
            </ListItem>
          </StatInfo>
        ) : (
          /* <StatInfo>
            {Object.entries(this.props).map(item => (
              <ListItem key={item[0]}>
                {`${item[0]}: `} {item[1]}
              </ListItem>
            ))}
          </StatInfo> */
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}
