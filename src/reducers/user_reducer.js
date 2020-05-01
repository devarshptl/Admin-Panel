import tempUser from '../temp_user';

export default function userReducer(state ={}, action){
    switch(action.type){
        case "USER_UPDATED":
            return action.payload;
        default :
            return tempUser;
    }
}