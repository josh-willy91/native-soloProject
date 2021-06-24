import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { oneEvent } from '../../store/events';
import formatISO from 'date-fns/formatISO';

const EventDetails = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const event = eventState.oneEvent;
    // ('+020201-06-26T00:00:00.000Z')

    // formatISO(date, [options]) syntax for function
    // formats the data string returned from query
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
        <>
            <div>
                <h1>{event && event[0].name}</h1>
                <h3>Hosted by user {event && event[0].User.username}</h3>
                {/* {create NavLink to link to user profile} */}
                <h3>{event && isoFormat(event[0].date)}</h3>
            </div>
            <div>
                <img src="/images/defaultImage.jpg"/>
            </div>
            <div>
                <p>{event && event[0].time}</p>
                <p>{event && isoFormat(event[0].date)}</p>
            </div>
            <div>
                {/* <p>{add a details field for seeder and migration}</p> */}
            </div>
        </>
    )
};

export default EventDetails;
