import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { displayEvents } from '../../store/events';

const Events = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const events = eventState.allEvents;
    console.log(events, 'talejdnfkjnfjkdea')

    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(displayEvents());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {/* {events.forEach((event) => {
                    <li>
                        {event.name}
                    </li>
                })} */}
            </ul>
        </div>
    )
};

export default Events;
