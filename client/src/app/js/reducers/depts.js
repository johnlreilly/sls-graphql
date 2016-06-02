import { GET_DEPTS, GET_DEPT, UPDATE_DEPT} from '../actions/constants';

const INITIAL_STATE = { all: [], user: null, currentUser: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_DEPTS:
      return { ...state, all: action.payload.data.depts };
    case GET_DEPT:
      return { ...state, user: action.payload.data.dept };
    case UPDATE_DEPT:
      return { ...state, currentUser: action.payload.data.dept };
    default:
      return state;
  }
}
