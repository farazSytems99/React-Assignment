import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

const Main = (props) => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  console.log({ isLoggedIn });

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
};

export default Main;
