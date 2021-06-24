import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { displayEvents } from '../../store/events';
import './events.css';

const EventDetails = () => {
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
                <div className="topDiv">
                    <h1>
                        {'Explore Florida'}
                    </h1>
                    <h3>{'Become a native Floridian'}</h3>
                    <img src="/images/flKeys2.jpg" alt="" className="topImage"/>
                </div>
                <div className="leftDiv">
                    <p className="leftP">
                        {`Most people aren't born in Florida, but that doesn't mean you
                        can't live like the locals do and be a native Floridan at heart`}
                    </p>
                    <img src="/images/palmTrees2.jpg" alt="" className="leftImage"/>
                </div>
                <div className='listDiv'>
                    <h1>{'Explore events around Florida'}</h1>
                    <ul className='eventList'>
                        {events && events.map((event) => (
                            <li key={event.id}>
                                <NavLink to={`/event/${event.id}`}>{event.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default EventDetails;
