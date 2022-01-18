import http from "../../http-common";
import { getToken } from '../../api/authenticationService';

// ENDPOINTS
const bookPath = "/book"

// TYPES
const GET_BY_TITLE = "GET_BY_TITLE"

const initialState = {
    books: []
}

const book = (state = initialState, action) => {
    switch (action.type) {
        case GET_BY_TITLE:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
}

export default book;

// ACTIONS
export const getAllBooks = () => async (dispatch) => {
    try {
        await http.get(bookPath + "/getall", {
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(res => {
            dispatch({
                type: GET_BY_TITLE,
                payload: res.data
            })
        })
    } catch (err) {
        return console.log(err.response)
    }
}