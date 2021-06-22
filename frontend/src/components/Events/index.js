// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import events from './events';

// function Events() {
//   const [events, setEvents] = useState();

//   return (
//     <>
//       {showModal && (
//         <Modal>
//           <Events />
//         </Modal>
//       )}
//     </>
//   );
// }

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { displayEvents } from '../../store/events';

const Events = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);

    // Use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(displayEvents());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {"This is my landing page"}
                {/* {loop through my events and display in a li } */}
            </ul>
        </div>
    )
};

export default Events;
