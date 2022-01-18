import { AUTH_REQ, AUTH_SUCCESS, AUTH_FAILURE } from '../types';
import Service from "../../api/services"
import http from "../../http-common";
import { getToken } from '../../api/authenticationService';

// ENDPOINTS
const userEndpoint = "/user"
const authPatch = "/auth"

// TYPES
const GET_USER = "GET_USER";
const RETRIEVE_USERS = "RETRIEVE_USERS";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const CURR_USER_INFO = "CURR_USER_INFO";

// REDUCERS
const initialState = {
    user: {
    },
    userInfo: {},
    error: '',
    loading: false
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQ:
            return { ...state, error: '', loading: true };

        case AUTH_SUCCESS:
            const data = action.payload;
            return { ...state, error: '', loading: false, user: data };

        case AUTH_FAILURE:
            const error = action.payload;
            return { ...state, loading: false, error: error };
        case CURR_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case UPDATE_USER:
            return state;
        case GET_USER:
            return {
                ...state
            }
        default:
            return state;
    }
}


export default auth;


// ACTIONS
export const getUserInfo = () => async (dispatch) => {
    try {
        await http.get(authPatch + "/userinfo", {
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(res => {
            dispatch({
                type: CURR_USER_INFO,
                payload: res.data
            })
        })
    } catch (err) {
        return console.log(err.response)
    }
}

export const updateUser = (data) => async (dispatch) => {
    try {
        await http.put(userEndpoint, data, {
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(res => {
            dispatch({
                type: UPDATE_USER,
                payload: res.data
            })
        })
    } catch (err) {
        return console.log(err.response)
    }
};

export const findUserById = (id) => async (dispatch) => {
    try {
        //     const res = await Service.get(id, userEndpoint);

        //     dispatch({
        //         type: GET_USER,
        //         payload: res.data,
        //     });
    } catch (err) {
        console.log(err);
    }
};