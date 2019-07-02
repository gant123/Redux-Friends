import {
  FETCH_FRIENDS,
  SUCCESS,
  ADDING_FRIEND,
  ADDED_FRIEND,
  FAILURE,
  DELETING_FRIEND,
  DELETED_FRIEND
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      };
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADDING_FRIEND:
      return {
        ...state,
        fetchingFriends: true
      };
    case ADDED_FRIEND:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        friendsSaved: true
      };
    case DELETING_FRIEND:
      return {
        ...state,
        fetchingFriends: true
      };
    case DELETED_FRIEND:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
