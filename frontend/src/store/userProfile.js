import { csrfFetch } from './csrf';

// define action types as constants
const GET_USER = 'userProfile/GET_USER';
// const DELETE_USER = 'profile/DELETE_USER';

//// define action creators
// get user info action
const getUser = (id) => ({
    type: GET_USER,
    payload: id,
});


// Thunk for getting a users info
export const getUserProfile = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/userProfile/${id}`);

    if(res.ok) {
        const userInfo = await res.json();
        dispatch(getUser(userInfo));
    };
};

// define an initial state
const initialState = {};

// userProfile Reducer
export default function userProfileReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {...state, getUser: [action.payload]}
        default:
            return state
    };
};
