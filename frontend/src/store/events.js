import { csrfFetch } from './csrf';

// define action types as constants
const GET_EVENTS = 'events/GET_EVENTS';
const GET_USER_EVENTS = 'events/GET_USER_EVENTS';
const GET_ONE_EVENT = 'events/GET_ONE_EVENT';
const ADD_ATTENDEE = 'event/UPDATE_ATTENDEE';
const REMOVE_ATTENDEE = 'event/REMOVE_ATTENDEE';
const DELETE_EVENT = 'event/DELETE_EVENT';

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
// update attendees for event
const addAnAttendee = (dataObj) => ({
    type: ADD_ATTENDEE,
    payload: dataObj,
});
// remove attendee from event
const removeAnAntendee = (dataObj) => ({
    type: REMOVE_ATTENDEE,
    payload: dataObj,
});
// delete an event
const deleteEventById = (eventId) => ({
    type: DELETE_EVENT,
    payload: eventId,
});

//// Define thunks
// Thunk to get all events
export const displayEvents = () => async(dispatch) => {
    const res = await csrfFetch('/api/')

    if(res.ok) {
        const events = await res.json();
        dispatch(getEvents(events))
    };
};
// Thunk to get all user events
export const userEvents = (user) => async(dispatch) => {
    const res = await csrfFetch(`/api/${user.id}`)

    if(res.ok) {
        const events = await res.json();
        dispatch(onlyUserEvents(events))
    };
};
// Thunk to get a single event
export const oneEvent = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/event/${id}`)

    if(res.ok) {
        const event = await res.json();
        dispatch(getOneEvent(event))
    };
};
// Thunk to update attendees for an event
export const addAttendee = (id, user) => async(dispatch) => {
    console.log('================', id, user)
    const res = await csrfFetch(`/api/event/${id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({string: 'add', id, user})
    });

    if(res.ok) {
        const updated = await res.json();
        console.log(updated, '=====================')
        dispatch(addAnAttendee(updated))
    };
};
// Thunk to remove a attendee from an event
export const removeAttendee = (id, user) => async(dispatch) => {
    const res = await csrfFetch(`/api/event/${id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({string: 'remove', id, user})
    });

    if(res.ok) {
        const updated = await res.json();
        console.log(updated, '===================')
        dispatch(removeAnAntendee(updated));
    };
};
// Thunk to delete an event
export const deleteEvent = (eventId) => async(dispatch) => {
    const res = await csrfFetch(`/api/event/${eventId}`, {
        method: 'delete',
    });

    if(res.ok) {
        dispatch(deleteEventById(eventId))
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
            return {...state, oneEvent: [action.payload]}
        case ADD_ATTENDEE:
            return {...state, addAttendees: [action.payload]}
        case REMOVE_ATTENDEE:
            return {...state, removeAnAntendee: [action.payload]}
        case DELETE_EVENT:
            const oldState = {...state};
            delete oldState.allEvents[action.payload];
            return oldState;
        default:
            return state
    };
};
