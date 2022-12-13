import { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGrupp, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    return (
      <ButtonGrupp>
        {this.props.option.map(option => (
          <Button
            type="button"
            key={option}
            onClick={() => this.props.onLeaveFeedback([option])}
          >
            {option}
          </Button>
        ))}
      </ButtonGrupp>
    );
  }
}

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
