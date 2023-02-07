/* eslint-disable no-unused-vars */

// Action types
const READ = 'instruments/READ';

const baseURL = 'https://melody-rentals.onrender.com/api/v1';

// Action creators
export const read = (instruments) => ({
  type: READ,
  payload: instruments,
});

// Reducer
const instrumentsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveInstruments = () => async (dispatch) => {
  await fetch(baseURL)
    .then((res) => res.json())
    .then((instruments) => {
      const instrumentsList = instruments;
      dispatch(read(instrumentsList));
      return instrumentsList;
    });
};

export default instrumentsReducer;
