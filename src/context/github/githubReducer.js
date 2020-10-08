// import { findAllByDisplayValue } from '@testing-library/react';
import { SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPO, GET_REPOS  } from '../types'


    export default (state, action) => {

        switch(action.type) {
            case SEARCH_USERS:
                return {
                    // return the current state with '...state'
                    ...state,
                    users: action.payload,
                    loading: false
                };            
            case GET_USER:
                return {
                    ...state,
                    user: action.payload,
                    loading: false
                };
            case GET_REPOS:
                return {
                    ...state,
                    repos: action.payload,
                    loading:false
                }
            case CLEAR_USERS:
                return {
                    ...state,
                    users: [],
                    loading: false
                };
            
            case SET_LOADING:
                return { 
                    // copiaza tot ce e in state
                    ...state,
                    loading: true
                };            
            default: 
                return state;

        }

    }