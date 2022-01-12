import { AUTH_REQ, AUTH_SUCCESS, AUTH_FAILURE } from '../types';
import Service from "../../api/services"

// ENDPOINTS
const userEndpoint = "/users"

// TYPES
const GET_USER = "GET_USER";
const RETRIEVE_USERS = "RETRIEVE_USERS";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

// REDUCERS
const initialState = {
    user: {
        "id": 1,
        "USER_NAME": "duc123",
        "USER_KEY": "password",
        "first_name": "duc",
        "last_name": "nguyen trung",
        "email": "ntduc@gmail.com",
        "phone_number": "0192122121"
    },
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
        case UPDATE_USER:
            return state;
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}


export default auth;

// ACTIONS
export const retrieveUsers = () => async (dispatch) => {
    try {
        const res = await Service.getAll(userEndpoint);

        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await Service.update(id, data, userEndpoint);

        dispatch({
            type: UPDATE_USER,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

// export const deleteUserById = (id, endpoint) => async (dispatch) => {
//     try {
//         await Service.remove(id, endpoint);

//         dispatch({
//             type: DELETE_USER,
//             payload: { id },
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

export const findUserById = (id) => async (dispatch) => {
    try {
        const res = await Service.get(id, userEndpoint);

        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};