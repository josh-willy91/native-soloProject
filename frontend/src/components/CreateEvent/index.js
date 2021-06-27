import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createEvent } from '../../store/events';

import './createEvent.css';

const CreateForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { id } = useParams(); import from react-router-dom

    // const eventState = useSelector((state) => state.events); import from react-redux

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateUsername = (event) => setUsername(event.target.value);
    const updateEmail = (event) => setEmail(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);

    const handleEventSubmit = (event) => {
        event.preventDefault();

        const payload = {
            username,
            email,
            password,
        };

        dispatch(createEvent(payload));
        // history.push('/')
    };


    useEffect(() => {
    }, [dispatch])


    return (
        <div>
            <div className="topDiv">
                    <img src="/images/flKeys2.jpg" alt="" className="topImage"/>
                </div>
            <div className="formDiv">
                <div className="login-wrapper">
                    <form action="/createForm" method="post" className="event-form">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Username"
                                name='username'
                                value={username}
                                required
                                onChange={updateUsername}/>
                            <label htmlFor='username'/> Username
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Email"
                                name='email'
                                value={email}
                                required
                                onChange={updateEmail}/>
                            <label htmlFor='email'/> Email
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                required
                                onChange={updatePassword}/>
                            <label htmlFor='password'/> Password
                        </div>
                        <div className="input-group">
                            <input
                                type="confirmPassword"
                                placeholder="Confirm Password"
                                name='confirmPassword'
                                required/>
                            <label htmlFor='confirmPassword'/> Confirm Password
                        </div>
                            <button type='submit' className='submit-btn' onClick={handleEventSubmit}/> Create Event
                    </form>
                </div>
            </div>
        </div>
    );
};
/* <input type='hidden' name='_csrf' value={csrfToken}/> */

export default CreateForm;
