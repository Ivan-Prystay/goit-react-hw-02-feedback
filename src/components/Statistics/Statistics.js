import { Component } from 'react';

import PropTypes from 'prop-types';
import { ListItem, StatInfo } from './Statistics.styled';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatInfo>
        <ListItem>Good: {good} </ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive feedback: {positivePercentage}%</ListItem>
      </StatInfo>
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
