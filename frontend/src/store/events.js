
// define action types as constants
const GET_EVENTS = '/GET_EVENTS';

// define action creators
const getEvents = (events) => ({
    type: GET_EVENTS,
    events,
});

//// Define thunks
// Thunk to get all events
export const displayEvents = () => async(dispatch) => {
    const res = await fetch('/api/')

    if(res.ok) {
        const events = await res.json();
        dispatch(getEvents(events))
    };
};

// define an initial state
const initialState = {};

// define a reducer
export default function landingReducer(state = initialState, action) {
    switch(action.type) {
        case GET_EVENTS:
            const allEvents = {};
            return {...state, ...allEvents}
        default:
            return state
    };
};
