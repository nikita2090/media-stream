import { combineReducers } from 'redux';
import { RECEIVE_STREAM, STOP_STREAM, } from "./actions";


const counterInitialState = {
    stream: null,
};

const streamReducer = (state = counterInitialState, { type, data }) => {
    switch (type) {
        case RECEIVE_STREAM:
            return {
                ...state,
                stream: data,
            };
        case STOP_STREAM:
            return {
                ...state,
                stream: data,
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({ streamReducer });

export default rootReducer;