import actiontypes from '../actiontypes';

const initState = {
  isAuthenticated = false
}

const authReducer = (state = initState, action) => {
 switch(action.type){
   case actiontypes().auth.signin:
     state.isAuthenticated = action.payload
     return state

   case actiontypes().auth.signout:
     state.isAuthenticated = action.payload
     return state

     default:
       return state
 }

}

export default authReducer;