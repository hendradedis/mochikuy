import {
  DUMMY_ACTION,
} from '../actions/types';

DUMMY_INITIAL_STATE = {
  dummyKey: "a dummy value here"
}

export default function (state=DUMMY_INITIAL_STATE, action) {
  console.log('[dummy_reducer] action.type=', action.type);

  switch (action.type) {
    case DUMMY_ACTION:
      return {
        dummyKey: action.payload
      }
    default:
      return state
  }
}
