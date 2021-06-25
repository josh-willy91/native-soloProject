import { csrfFetch } from './csrf';

// define action types as constants
const GET_USER = 'profile/GET_USER';
// const DELETE_USER = 'profile/DELETE_USER';

//// define action creators
const getUser = (id) => ({
    type: GET_USER,
    payload: id,
});
