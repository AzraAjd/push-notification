import axios from 'axios';
import { GET_NOTIFICATION } from './types.js'

export const getNotification = (name) => dispatch => {
    console.log(name)
    axios
        .get('http://localhost:8080/pushNotification', {params: {name}})
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_NOTIFICATION,
                payload: res.data
            });
        }, 
        err => console.log(err))
    }