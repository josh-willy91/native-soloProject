import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { oneEvent } from '../../store/events';

const Event = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const event = eventState.allEvents;

    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(oneEvent());
    }, [dispatch]);

    return (
        <>
            <div>
                {'hello from the event details page'}
            </div>
        </>
    )
};

export default EventsDetails;
