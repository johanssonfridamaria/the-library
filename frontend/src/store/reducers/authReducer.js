import actiontypes from '../actiontypes';

const initState = {
  isAuthenticated: false
}

const authReducer = (state = initState, action) => {
 switch(action.type){
   case actiontypes().auth.login:
     state.isAuthenticated = action.payload
     return state

   case actiontypes().auth.loginout:
     state.isAuthenticated = action.payload
     return state

     default:
       return state
 }

}

export default authReducer;