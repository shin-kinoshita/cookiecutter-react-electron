import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress();
  }

  render() {
    const { text } = this.props;
    return (
      <div onClick={this.onPress}>{text}</div>
    );
  }
}
