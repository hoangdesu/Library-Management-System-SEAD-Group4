// TYPES
const COUNTER_INCREMENT = "INCREMENT";
const COUNTER_DECREMENT = "DECREMENT";


// REDUCERS
const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return { count: state.count + action.payload };
        case COUNTER_DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

export default counter;

// ACTIONS
export const Increment = (value) => {
    return {
        type: COUNTER_INCREMENT,
        payload: value
    }
}

export const Decrement = (value) => {
    return {
        type: COUNTER_DECREMENT,
        payload: value
    }
}