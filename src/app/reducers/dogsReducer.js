import * as DogsConstants from '../constants/dogsConstants';

import DogsActions from "../actions/dogsActions";

export function dogsReducer(state = { dogs: [], is_loading: false, imgs: [], is_loading_img: false }, action) {
    switch (action.type) {
        case DogsConstants.GET_DOGS_PENDING: {
            state = { ...state, is_loading: true };
            break;
        }
        case DogsConstants.GET_DOGS_FULFILLED: {
            //let dogList=Object.keys(action.payload.data.message.tasks)
            state = {
                ...state, is_loading: false, dogs: action.payload.data.message.tasks
            };
            console.log('DogsConstants.GET_DOGS_FULFILLED ', action.payload)
            //DogsActions.getImg(dogList)
            break;
        }
        case DogsConstants.GET_DOGS_REJECTED: {
            state = { ...state, is_loading: false, error_message: action.payload };
            break;
        }
        case DogsConstants.GET_IMG_PENDING: {
            state = { ...state, is_loading_img: true };
            break;
        }
        case DogsConstants.GET_IMG_FULFILLED: {
            state = {
                ...state, is_loading_img: false, imgs: action.payload//Object.keys(action.payload.data.message)
            };
            break;
        }
        case DogsConstants.GET_IMG_REJECTED: {
            state = { ...state, is_loading_img: false, error_message: action.payload };
            break;
        }
        case DogsConstants.ADD_DOGS: {
            let dogs = state.dogs;
            dogs.push(action.payload);
            state = { ...state, dogs };
            break;
        }
        case DogsConstants.GET_DOG_PENDING: {
            state = { ...state };
            break;
        }
        case DogsConstants.GET_DOG_REJECTED: {
            state = { ...state };
            break;
        }
        case DogsConstants.GET_DOG_FULFILLED: {
            let dogList = action.payload.data
            console.log('DogsConstants.GET_DOG ', dogList)
            state = {
                ...state, dogs: dogList
            };
            break;
        }
    }
    return state;
}
