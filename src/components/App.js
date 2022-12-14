import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Auth/Login";
import CreateLink from "./Link/CreateLink";
import ForgotPassword from "./Auth/ForgotPassword";
import SearchLinks from "./Link/SearchLinks";
import LinkList from "./Link/LinkList";
import LinkDetail from "./Link/LinkDetail";
import Header from "./Header";
import useAuth from "./Auth/useAuth";
import firebase, { FirebaseContext } from "../firebase";

function App() {
  const user = useAuth();
  return (
    <Router>
      <FirebaseContext.Provider value={{ firebase, user }}>
        <div className="app-container">
          <Header />
          <div className="router-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLinks} />
              <Route path="/top" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </Router>
  );
}

export default App;
