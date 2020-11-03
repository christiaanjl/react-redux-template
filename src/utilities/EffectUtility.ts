import ActionUtility from "./ActionUtility";
import {AxiosError, AxiosResponse} from "axios";
import {ThunkAction} from "@reduxjs/toolkit";
import Store from "../models/Store";
import Action from "../models/Action";

export default class EffectUtility {
    public static createEffect<ResultType>(actionType: string,
                                           effect: () => Promise<AxiosResponse<ResultType>>): ThunkAction<void, Store, unknown, Action<any>> {
        return async dispatch => {
            dispatch(ActionUtility.createAction(actionType));

            try {
                const response: AxiosResponse<ResultType> = await effect();
                if(response.status === 200) {
                    dispatch(ActionUtility.createAction(`${actionType}_SUCCESS`, response.data as ResultType));
                } else {
                    // TODO custom messages for error codes
                    dispatch(ActionUtility.createAction(`${actionType}_FAILED`, response.statusText));
                }
            } catch (error) {
                this.logError(error);
                dispatch(ActionUtility.createAction(`${actionType}_FAILED`, error.message));
            }
        }
    }

    private static logError<T>(error: AxiosError<T>) {
        // TODO - https://github.com/axios/axios/pull/2014
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    }
}

