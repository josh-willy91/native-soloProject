import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';

import './createEvent.css';

const CreateEvent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const eventState = useSelector((state) => state.events);

    useEffect(() => {
    }, [dispatch])

    return (
        <div>
            <div className="topDiv">
                    <img src="/images/flKeys2.jpg" alt="" className="topImage"/>
                </div>
            <div className="formDiv">
                <div className="login-wrapper">
                    <form action="/createEvent" method="post" class="event-form">
                        <div className="input-group">
                            <input type="text" name='userName' required/>
                            <label for='userName'/> Event
                        </div>
                        <div className="input-group">
                            <input type="password" name='password' required/>
                            <label for='password'/> Date
                        </div>
                            <h2></h2>
                                <button type='submit' class='login-btn'/> Create Event
                    </form>
                </div>
            </div>
        </div>
    );
};
/* <input type='hidden' name='_csrf' value={csrfToken}/> */

export default CreateEvent;
