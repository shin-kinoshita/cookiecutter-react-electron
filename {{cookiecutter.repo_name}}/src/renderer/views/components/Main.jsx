import React from 'react';
import IncrementButton from '../containers/IncrementButton';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is test app</p>
        <IncrementButton/>
      </div>
    );
  }
}
