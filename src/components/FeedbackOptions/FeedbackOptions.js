import { Component } from 'react';
import { ButtonGrupp, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}
