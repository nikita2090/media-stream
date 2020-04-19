import { RECEIVE_STREAM, STOP_STREAM } from './actions';


export const receiveStream = (data) => ({
    type: RECEIVE_STREAM,
    data
});

export const stopStream = (data) => ({
    type: STOP_STREAM,
    data
});

