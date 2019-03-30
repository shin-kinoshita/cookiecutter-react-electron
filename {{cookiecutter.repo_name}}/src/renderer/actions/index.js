export const INCREMENT = 'INCREMENT';

export const increment = (count) => {
  return {
    type: INCREMENT,
    payload: {
      count,
    },
  }
};

