import {
  TEST_ACTION,
  TEST_RESET_ACTION
} from './types';

export const aTestFunction = () => {
  console.log("[test_action] aTestFunction");

  return {
    type: TEST_ACTION,
    payload: 'someDataHere'
  };
}

export const testReset = () => {
  console.log("[test_action] testReset");

  return {
    type: TEST_RESET_ACTION
  };
}


export const populateCitiesAndCountries = () => {

  // cities
  // countries

  return {
    type: POPULATE_CITIES_AND_COUNTRIES,
    payload: {
      cities: cities,
      countries: countries
    }
  }
}
