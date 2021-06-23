
// define action types as constants
const GET_EVENTS = 'events/GET_EVENTS';
const GET_USER_EVENTS = 'events/GET_USER_EVENTS';
const GET_ONE_EVENT = 'events/GET_ONE_EVENT';

//// define action creators
// all events
const getEvents = (events) => ({
    type: GET_EVENTS,
    payload: events,
});
// user events
const onlyUserEvents = (events) => ({
    type: GET_USER_EVENTS,
    payload: events,
});
// get one event
const getOneEvent = (event) => ({
    type: GET_ONE_EVENT,
    payload: event,
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
// Thunk to get all user events
export const userEvents = (user) => async(dispatch) => {
    const res = await fetch(`/api/${user.id}`)

    if(res.ok) {
        const events = await res.json();
        dispatch(onlyUserEvents(events))
    };
};
// Thunk to get a single event
export const oneEvent = (event) => async(dispatch) => {
    const res = await fetch(`/api/event/${event.id}`)

    if(res.ok) {
        const event = await res.json();
        dispatch(getOneEvent(event))
    };
};


// define an initial state
const initialState = {};


// define a reducer
export default function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_EVENTS:
            return {...state, allEvents: [...action.payload]}
        case GET_USER_EVENTS:
            return {...state, onlyUserEvents: [...action.payload]}
        case GET_ONE_EVENT:
            return {...state, oneEvent: [...action.payload]}
        default:
            return state
    };
};
