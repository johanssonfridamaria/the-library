import axios from '../../axios';
import actiontypes from '../actiontypes';

export const login = (email, password) => {
  return async dispatch => {
    const admin = {
      email,
      password
    }
    await axios.post('/admin/login', admin)
      .then(res => {
        console.log(res);

        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          dispatch(loginSuccess(true))
        } else {
          return dispatch(loginFailed(false))
        }
      })
  }
}

export const loginSuccess = (payload) => {
  return {
    type: actiontypes().auth.loginSuccess,
    payload
  }
}

export const loginFailed = (payload) => {
  return {
    type: actiontypes().auth.loginFailed,
    payload
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
    payload: false
  }
}