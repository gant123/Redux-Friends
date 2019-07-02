import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDED_FRIEND = 'ADDED_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = 'DELETED_FRIEND';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends/')
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err.data }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post('http://localhost:5000/api/friends/', friend)
    .then(res => dispatch({ type: ADDED_FRIEND, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const deleteFriend = friend => dispatch => {
  dispatch({ type: DELETING_FRIEND });
  axios
    .delete(`http://localhost:5000/api/friends/${friend.id}`)
    .then(res => dispatch({ type: DELETED_FRIEND, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
