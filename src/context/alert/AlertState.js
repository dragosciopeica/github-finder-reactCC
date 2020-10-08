import React, {useReducer} from 'react';
import { SET_ALERT, REMOVE_ALERT  } from '../types'

import AlertReducer from './alertReducer';
import alertContext from './alertContext';


const AlertState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);


// Set Alert

const setAlert = (msg, type) => {

    dispatch ({
        type: SET_ALERT,
        payload: {msg, type}
    })

    
    // setAlert({msg: msg, type : type})
    
    
    setTimeout( () => dispatch({type: REMOVE_ALERT}), 2000);
}


    return <alertContext.Provider
    value={{
     alert: state,
     setAlert
    }}>

    {props.children}
    </alertContext.Provider>
}

export default AlertState
