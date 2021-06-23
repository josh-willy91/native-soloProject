import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { displayEvents } from '../../store/events';
import './events.css';

const Events = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const eventState = useSelector((state) => state.events);
    const events = eventState.allEvents;

    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(displayEvents());
    }, [dispatch]);

    return (
        <>
            <div className='eventDiv'>
                <div>
                    <h1>
                        {'Explore Florida'}
                    </h1>
                    <h3>{'Become a native Floridian'}</h3>
                </div>
                <p>
                    {`Most people aren't born in Florida, but that doesn't mean you
                    can't live like the locals do and be a native Floridan at heart`}
                </p>
                <div className='listDiv'>
                    <h1>{'Explore events around Florida'}</h1>
                    <ul className='eventList'>
                        {events && events.map((event) => (
                            <li key={event.id} onClick={() => `/event/${event.id}`}>
                                {event.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Events;
