import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { oneEvent } from '../../store/events';

const EventDetails = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const event = eventState.oneEvent;

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
                <h3>{event && event[0].hostId}</h3>
            </div>
            <div>
                {event && event[0].name}
            </div>
        </>
    )
};

export default EventDetails;
