const actiontypes = () => {
  return {
    auth: {
      loginFailed: 'LOGIN_FAILED',
      loginSuccess: 'LOGIN_SUCCESS',
      logout: 'LOGOUT'
    },
  }
}

export default actiontypes;