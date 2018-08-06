import {
  TEST_ACTION,
  TEST_RESET_ACTION,
} from '../actions/types';

TEST_INITIAL_STATE = {
  someKey: "an initial value here",
  cities: [],
  countries: [],

}

export default function (state=TEST_INITIAL_STATE, action) {
  console.log('[test_reducer] action.type=', action.type, state);

  switch (action.type) {
    case TEST_ACTION:
      return {
        someKey: action.payload,
        cities: action.payload.cities,
        countries: action.payload.countries,
      }
    case TEST_RESET_ACTION:
      return TEST_INITIAL_STATE;
    default:
      return state
  }
}
