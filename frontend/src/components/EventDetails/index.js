import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { oneEvent } from '../../store/events';
import { updateEventAttendees } from '../../store/events';
import formatISO from 'date-fns/formatISO';
import './eventDetails.css';

const EventDetails = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => {
        if(!state.session.user) return null;
        return state.session.user.id
    });
    const eventState = useSelector((state) => state.events);
    const event = eventState.oneEvent;

    const buttonChooser = useSelector((state) => {
        if(!event) {
            return false;
        } else {
            let attendeesArray = state.events.oneEvent[0].attendees;
            console.log(attendeesArray, 'lajdnlfnjal')
            // attendeesArray.forEach((attendee) => {
            //     console.log(attendees, 'lsjzfnljsnfslkj')
            //     if(attendee.id === loggedInUser) {
            //         // console.log(attendees.id, loggedInUser)
            //         return true;
            //     };
            // });
        };
    });

    const hostButton = useSelector((state) => {
        if(!event) {
            return null;
        } else {

        }
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

    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(oneEvent(id));
        dispatch(updateEventAttendees([id, loggedInUser]));
    }, [loggedInUser, id, dispatch]);

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
                    <p>Spots left: {event[0].capacity}</p>
                    <p>Attendees: {event[0].attendees.map((person) => (
                        <li key={person.id}>{person.username}</li>
                    ))}</p>
                    <button onClick={() => loggedInUser}>Join Event</button>
                    <button disabled={buttonChooser} onClick={() => loggedInUser}>Leave Event</button>
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
                    <p>Attendees: {event[0].attendees.map((person) => (
                        <li>{person}</li>
                    ))}</p>
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
