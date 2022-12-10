import { Component } from 'react';

export class Section extends Component {
  constructor(props) {
    super(props);
  }
  this.state = {
    value: this.props.initialValue,
  };

  render() {
    return <p>Santa Barbara</p>;
  }
}
