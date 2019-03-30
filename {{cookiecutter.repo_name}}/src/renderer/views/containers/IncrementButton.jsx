import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { increment } from '../../actions';

class IncrementButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, onPressIncrement } = this.props;
    return (
      <Button text={`current count: ${count}`}
              onPress={() => {
                onPressIncrement(count);
              }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPressIncrement: (count) => {
      dispatch(increment(count + 1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);
