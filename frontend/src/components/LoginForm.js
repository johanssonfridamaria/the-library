import React from 'react'
import { useRef } from 'react';
import  { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authenticate'

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const email = useRef();
  const password = useRef();

  const onSub = e => {
    e.preventDefault();
    dispatch(login(email.current.value, password.current.value));
    email.current.value = '';
    password.current.value = '';
    history.push('/');
  }

  return (
    <form onSubmit={onSub}>
      <div className="form-outline mb-4">
        <input type="email" id="email" ref={email} className="form-control" />
        <label className="form-label" htmlFor="email">Email address</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="password" className="form-control" ref={password} />
        <label className="form-label" htmlFor="password">Password</label>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  )
}

export default LoginForm
