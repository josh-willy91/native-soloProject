// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import UserProfile from "./components/UserProfile";
import CreateForm from "./components/CreateEvent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <Events/>
          </Route>
          <Route path="/event/:id" exact>
            <EventDetails/>
          </Route>
          <Route path="/userProfile/:id" exact>
            <UserProfile/>
          </Route>
          <Route>
            <CreateForm path="/createForm/event" exact></CreateForm>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
