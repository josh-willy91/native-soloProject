import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { oneEvent } from '../../store/events';
import formatISO from 'date-fns/formatISO';
import './eventDetails.css';

const EventDetails = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const event = eventState.oneEvent;

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
    }, [id, dispatch]);

    if(!eventState) {
        return null
    };

    return (
        <div className="eventDetails">
            <div className="topDiv">
                <h1>{event && event[0].name}</h1>
                <h3>Hosted by user {event && event[0].User.username}</h3>
                {/* {create NavLink to link to user profile} */}
                <h3>{event && isoFormat(event[0].date)}</h3>
            </div>
            <div className="leftDiv">
                <img src="/images/defaultImage.jpg" alt="event"/>
            </div>
            <div className="topPDiv">
                <p>Capacity: {event && event[0].capacity}</p>
                <p>Spots left: {event && event[0].capacity}</p>
                <p>Attendees: {event && event[0].User.username}</p>
            </div>
            <div className="midPDiv">
                <h3>It's going down...</h3>
                <p className="topP">Time: {event && event[0].time}</p>
                <p className="topP">Date: {event && isoFormat(event[0].date)}</p>
                <p className="topP">I'm the top P</p>
            </div>
            <div className="bttmPDiv">
                <h3>Location Details</h3>
                <p className="midP">Where: {event && event[0].Venue.name}</p>
                <p className="midP">Street: {event && event[0].Venue.address}</p>
                <p className="midP">City: {event && event[0].Venue.city}</p>
                <p className="midP">Zip Code: {event && event[0].Venue.zipCode}</p>
                <p className="midP">Lat: {event && event[0].Venue.lat}</p>
                <p className="midP">Lon: {event && event[0].Venue.lon}</p>
            </div>
            <div className="bottomDiv">
                {/* <p>{add a details field for seeder and migration}</p> */}
            </div>
        </div>
    )
};

export default EventDetails;
