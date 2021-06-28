import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createEvent } from '../../store/events';

import './createEvent.css';

const CreateForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { id } = useParams(); import from react-router-dom

    // const eventState = useSelector((state) => state.events); import from react-redux

    const loggedInUser = useSelector((state) => {
        if(!state.session.user) return null;
        return state.session.user.id
    });

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');

    const [venueName, setVenueName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const [type, setType] = useState('');

    const updateName = (event) => setName(event.target.value);
    const updateDetails = (event) => setDetails(event.target.value);
    const updateDate = (event) => setDate(event.target.value);
    const updateTime = (event) => setTime(event.target.value);
    const updateCapacity = (event) => setCapacity(event.target.value);

    const updateVenueName = (event) => setVenueName(event.target.value);
    const updateAddress = (event) => setAddress(event.target.value);
    const updateCity = (event) => setCity(event.target.value);
    const updateState = (event) => setState(event.target.value);
    const updateZipCode = (event) => setZipCode(event.target.value);
    const updateLat = (event) => setLat(event.target.value);
    const updateLon = (event) => setLon(event.target.value);

    const updateType = (event) => setType(event.target.value);


    const handleEventSubmit = (event) => {
        event.preventDefault();

        const payload = {
            event: {
                hostId: loggedInUser,
                name,
                details,
                date,
                time,
                capacity,
            },
            venue: {
                venueName,
                address,
                city,
                state,
                zipCode,
                lat,
                lon,
            },
            group: {
                type,
            },
        };

        dispatch(createEvent(payload));
        history.push('/')
    };


    useEffect(() => {
    }, [dispatch])


    return (
        <div>
            <div className="topDiv">
                    <img src="/images/flKeys2.jpg" alt="" className="topImage"/>
                </div>
            <div className="formDiv">
                <form action="/createForm/event" method="post" className="event-form">
                    <h3 className="newEvent">New Event
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Event Name"
                                name='name'
                                value={name}
                                required
                                onChange={updateName}/>
                            <label htmlFor='name'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Details"
                                name='details'
                                value={details}
                                required
                                onChange={updateDetails}/>
                            <label htmlFor='details'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="date"
                                placeholder="Date"
                                name='date'
                                value={date}
                                required
                                onChange={updateDate}/>
                            <label htmlFor='date'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="time"
                                placeholder="Time"
                                name='time'
                                required
                                onChange={updateTime}/>
                            <label htmlFor='time'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="capacity"
                                placeholder="Capacity"
                                name='capacity'
                                required
                                onChange={updateCapacity}/>
                            <label htmlFor='capacity'/>
                        </div>
                    </h3>
                    <h3 className="newVenue">Venue for Event
                        <div className="input-group">
                            <input
                                type="venueName"
                                placeholder="Venue Name"
                                name='venueName'
                                required
                                onChange={updateVenueName}/>
                            <label htmlFor='venueName'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="address"
                                placeholder="Address"
                                name='address'
                                required
                                onChange={updateAddress}/>
                            <label htmlFor='address'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="city"
                                placeholder="City"
                                name='city'
                                required
                                onChange={updateCity}/>
                            <label htmlFor='city'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="state"
                                placeholder="State"
                                name='state'
                                required
                                onChange={updateState}/>
                            <label htmlFor='state'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="zipCode"
                                placeholder="Zip Code"
                                name='zipCode'
                                required
                                onChange={updateZipCode}/>
                            <label htmlFor='zipCode'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="lat"
                                placeholder="Lat"
                                name='lat'
                                required
                                onChange={updateLat}/>
                            <label htmlFor='lat'/>
                        </div>
                        <div className="input-group">
                            <input
                                type="lon"
                                placeholder="Lon"
                                name='lon'
                                required
                                onChange={updateLon}/>
                            <label htmlFor='lon'/>
                        </div>
                    </h3>
                    <h3 className="newGroup">Group Type
                        <div className="input-group">
                            <input
                                type="type"
                                placeholder="Sports, Running, Fishing, ect..."
                                name='type'
                                required
                                onChange={updateType}/>
                            <label htmlFor='type'/>
                        </div>
                    </h3>
                        <button type='submit' className='submit-btn'
                            onClick={handleEventSubmit}> Create Event</button>
                </form>
            </div>
        </div>
    );
};
/* <input type='hidden' name='_csrf' value={csrfToken}/> */

export default CreateForm;
