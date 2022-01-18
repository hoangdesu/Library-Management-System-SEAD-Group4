import { AUTH_REQ, AUTH_SUCCESS, AUTH_FAILURE } from '../types';
import Service from "../../api/services"
import http from "../../http-common";
import { getToken } from '../../api/authenticationService';

// ENDPOINTS
const userEndpoint = "/users"
const authPatch = "/auth"
const bookEndpoint = "/book"

// TYPES
const GET_USER = "GET_USER";
const RETRIEVE_USERS = "RETRIEVE_USERS";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const CURR_USER_INFO = "CURR_USER_INFO";

const SEARCH_BOOK_TITLE = "SEARCH_BOOK_TITLE";

// REDUCERS
const initialState = {
    user: {
        // "id": 1,
        // "USER_NAME": "duc123",
        // "USER_KEY": "password",
        // "first_name": "duc",
        // "last_name": "nguyen trung",
        // "email": "ntduc@gmail.com",
        // "phone_number": "0192122121"
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


// export const retrieveUsers = () => async (dispatch) => {
//     try {
//         const res = await Service.getAll(userEndpoint);

//         dispatch({
//             type: RETRIEVE_USERS,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
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

export const searchBookByTitle = () => async (dispatch) => {
    try {
        await http.get(authPatch + "/search", {
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(res => {
            dispatch({
                type: SEARCH_BOOK_TITLE,
                payload: res.data
            })
        })
    } catch (err) {
        return console.log(err.response)
    }
}

export const updateUser = (id, data) => async (dispatch) => {
    try {
        // const res = await Service.update(id, data, userEndpoint);

        // dispatch({
        //     type: UPDATE_USER,
        //     payload: data,
        // });

        // return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
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