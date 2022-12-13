import { Component } from 'react';

import PropTypes from 'prop-types';
import { StatItem, StatList } from './Statistics.styled';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatList>
        <StatItem>Good: {good} </StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        {/* {Object.entries(this.props).map(item => (
          <StatItem key={item[0]}>
            {`${item[0]}: `}
            {item[1]}
          </StatItem>
        ))} */}
      </StatList>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
