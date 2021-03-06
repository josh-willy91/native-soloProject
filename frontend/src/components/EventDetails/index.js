import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { oneEvent } from '../../store/events';
import { addAttendee } from '../../store/events';
import { removeAttendee } from '../../store/events';
import { deleteEvent } from '../../store/events';
import formatISO from 'date-fns/formatISO';
import './eventDetails.css';

const EventDetails = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const history = useHistory();

    const loggedInUser = useSelector((state) => {
        if(!state.session.user) return null;
        return state.session.user.id
    });
    const eventState = useSelector((state) => state.events);
    const event = eventState.oneEvent;

    // Checks to see if the logged in user has already joined the event (returns boolean)
    const disableButton = () => {
        let attendeesArray = event[0].attendees;
        for(let i = 0; i < attendeesArray.length; i++) {
            let attendee = attendeesArray[i];
            if(attendee.id === loggedInUser) {
                return true;
            }
        };
        return false;
    };

    // checks to see if logged in user is the host of the event
    const hostButton = useSelector((state) => {
        if(!event || !state.session.user) {
            return false;
        } else {
            const hostId = state.events.oneEvent[0].hostId;
            const userId = state.session.user.id;
            if(hostId === userId) return true;
        };
    });

    // formatISO(date, [options]) syntax for function
    // formats the data string returned from query
    // ('+020201-06-26T00:00:00.000Z')
    let isoFormat = function(dateString) {
        const result = formatISO(new Date(dateString), { representation: 'date' })
        return result;
    };

    // Get the id with useParams hook and pass into the thunk
    // on line 19 when I make a call to dispatch the store
    let { id } = useParams();

    // leave event function for button click
    const leaveEvent = () => {
        dispatch(removeAttendee(id, loggedInUser))
        history.push(`/event/${id}`)
    };

    // cancel event function for button click
    const rsvpEvent = () => {
        dispatch(addAttendee(id, loggedInUser));
        history.push(`/event/${id}`)
    };

    // delete event function for button click
    const deleteHostEvent = () => {
        dispatch(deleteEvent(id, loggedInUser));
        history.push('/');
    };


    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(oneEvent(id));
    }, [dispatch]);


    if(!event) {
        return null
    };

    if(loggedInUser) {

        return (
            <div className="eventDetails">
                <div className="topDiv">
                    <h1>{event[0].name}</h1>
                    <h3>Hosted by user {event[0].User.username}</h3>
                    {/* {create NavLink to link to user profile} */}
                    <h3>{isoFormat(event[0].date)}</h3>
                </div>
                <div className="leftDiv">
                    <img src="/images/defaultImage.jpg" alt="event"/>
                </div>
                <div className="topPDiv">
                    <h3>Who will be there</h3>
                    <p>Capacity: {event[0].capacity}</p>
                    <p>Spots left: {event[0].capacity - 1 - event[0].attendees.length}</p>
                    <p>Attendees: {event[0].attendees.map((person) => (
                        <li key={person.id}>{person.username}</li>
                    ))}</p>
                    <button hidden={event[0].capacity === event[0].attendees.length + 1 ? true: false}
                        disabled={disableButton()}
                        onClick={() => rsvpEvent()}>Join Event</button>
                    <p hidden={event[0].capacity === event[0].attendees.length + 1 ? false: true}>
                        Sorry it looks like this event is all full</p>
                    <button disabled={false} onClick={() => leaveEvent()}>Leave Event</button>
                    <button disabled={!hostButton} onClick={() => deleteHostEvent()}>Cancel Event</button>
                </div>
                <div className="midPDiv">
                    <h3>It's going down...</h3>
                    <p className="topP">Time: {event[0].time}</p>
                    <p className="topP">Date: {isoFormat(event[0].date)}</p>
                </div>
                <div className="bttmPDiv">
                    <h3>Location Details</h3>
                    <p className="midP">Where: {event[0].Venue.name}</p>
                    <p className="midP">Street: {event[0].Venue.address}</p>
                    <p className="midP">City: {event[0].Venue.city}</p>
                    <p className="midP">Zip Code: {event[0].Venue.zipCode}</p>
                    <p className="midP">Lat: {event[0].Venue.lat}</p>
                    <p className="midP">Lon: {event[0].Venue.lon}</p>
                </div>
                <div className="bottomDiv">
                    <p>{event[0].details}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="eventDetails">
                <div className="topDiv">
                    <h1>{event[0].name}</h1>
                    <h3>Hosted by user {event[0].User.username}</h3>
                    {/* {create NavLink to link to user profile} */}
                    <h3>{isoFormat(event[0].date)}</h3>
                </div>
                <div className="leftDiv">
                    <img src="/images/defaultImage.jpg" alt="event"/>
                </div>
                <div className="topPDiv">
                    <h3>Who will be there</h3>
                    <p>Capacity: {event[0].capacity}</p>
                    <p>Spots left: {event[0].capacity}</p>
                    <p>Sorry, only logged in members can join an event</p>
                </div>
                <div className="midPDiv">
                    <h3>It's going down...</h3>
                    <p className="topP">Time: Not a member, just sign up</p>
                    <p className="topP">Date: {isoFormat(event[0].date)}</p>
                </div>
                <div className="bttmPDiv">
                    <h3>Location Details</h3>
                    <p className="midP">Where: Wouldn't you like to know</p>
                    <p className="midP">Street: There's an easy way to find out</p>
                    <p className="midP">City: A city near you!</p>
                    <p className="midP">Zip Code: Just sign up already</p>
                    <p className="midP">Lat: This is probably a really cool event</p>
                    <p className="midP">Lon: I'd sure hate to miss out</p>
                </div>
                <div className="bottomDiv">
                    <p>No details for non members....</p>
                </div>
            </div>
        )
    };
};

export default EventDetails;
