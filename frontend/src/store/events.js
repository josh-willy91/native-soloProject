import { csrfFetch } from './csrf';

// define action types as constants
const GET_EVENTS = 'events/GET_EVENTS';
const GET_USER_EVENTS = 'events/GET_USER_EVENTS';
const GET_ONE_EVENT = 'events/GET_ONE_EVENT';
const UPDATE_ATTENDEES = 'event/UPDATE_ATTENDEES';
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
const updateAttendees = (arrayOfData) => ({
    type: UPDATE_ATTENDEES,
    payload: arrayOfData,
});
// delete an event
const deleteEventById = (arrayOfIds) => ({
    type: DELETE_EVENT,
    payload: arrayOfIds,
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
export const updateEventAttendees = ([id, user]) => async(dispatch) => {
    const res = await csrfFetch(`/api/event/${id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify([id, user])
    })

    if(res.ok) {
        const updated = await res.json();
        dispatch(updateAttendees(updated))
    };
};
// Thunk to delete an event
export const deleteEvent = ([eventId, hostId]) => async(dispatch) => {
    const res = await csrfFetch(`/api/event/${eventId}`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify([eventId, hostId])
    });

    if(res.ok) {
        res.redirected('/')
        dispatch(deleteEventById([eventId, hostId]))
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
        case UPDATE_ATTENDEES:
            return {...state, updateEventAttendees: [action.payload]}
        default:
            return state
    };
};
