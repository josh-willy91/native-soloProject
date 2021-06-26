import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getUserProfile } from '../../store/userProfile';
import './userProfile.css';


const UserProfile = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();

    const userProfile = useSelector((state) => state.userProfileReducer.getUser);
    // const groups = useSelector((state) => state.userProfileReducer.getUser[0].Groups);
    // const host = useSelector((state) => state.userProfileReducer.getUser[0].Events);
    // const attending = useSelector((state) => state.userProfileReducer.getUser[0].attening);
    // console.log(groups, host, attending)

    useEffect(() => {
        dispatch(getUserProfile(id))
    }, [dispatch])


    if(!userProfile) {
        return null;
    }

    return (
        <div className="userProfileDiv">
            <div className="topDiv">
                <img src="/images/flKeys2.jpg" alt="" className="topImage"/>
            </div>
            <div className="leftDiv">
                <p>Host your own event!!!
                    <NavLink to='/eventForm/create'>Create Event</NavLink>
                </p>
                <img src="/images/palmTrees2.jpg" alt="" className="leftImage"/>
            </div>
            <div className="attendingDiv">
                <h2>Your Events</h2>
                {userProfile[0].attending.map((event) => (
                    <li key={`${event.id}`}>
                        <h3>{event.name}</h3>
                        <p hidden={event.hostId === parseInt(id) ? false: true}
                            >You are hosting this event</p>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                    </li>
                ))}
            </div>
            <div className="groupsDiv">
                <h2>Your Groups</h2>
                {userProfile[0].Groups.map((group) => (
                    <li key={`${group.id}`}>
                        {group.type}
                    </li>
                ))}
            </div>
        </div>
    )
};

export default UserProfile;
