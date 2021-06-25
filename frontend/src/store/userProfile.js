import { csrfFetch } from './csrf';

const GET_USER = 'profile/GET_USER';
// const DELETE_USER = 'profile/DELETE_USER';

const getUser = (id) => ({
    type: GET_USER,
    payload: id,
});
