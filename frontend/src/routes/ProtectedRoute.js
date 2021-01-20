import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {

const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <Route {...rest} render={props => {
      if (isAuth) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
      }
    }} />
  )


}