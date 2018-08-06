import {
  DUMMY_ACTION,
  DUMMY_GRAPHQL_ACTION,
  DUMMY_AXIOS_ACTION,
} from './types';

export const aDummyFunction = () => {
  console.log("[dummy_actions] aDummyFunction");

  return {
    type: DUMMY_ACTION,
    payload: 'someDummyValue'
  }
}

export const dummyGraphqlFetch = () => {
  console.log("[dummy_actions] dummyGraphqlFetch");

  return {
    type: DUMMY_GRAPHQL_ACTION,
    payload: 'someDummyValue'
  }
}

export const dummyAxiosFetch = () => {
  console.log("[dummy_actions] dummyAxiosFetch");
  // async call demo.. 

  return {
    type: DUMMY_AXIOS_ACTION,
    payload: 'someDummyValue'
  }
}
