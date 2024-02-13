import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState, dispatchAction } from "../Redux/hooks";
import { makeAPIRequest, makeAPIRequestFormData, setAuthorization } from "../Utils/apiGlobal";
import { FORGOT_EMAIL, PRE_LOADER, USER_INFO } from "../Redux/actionTypes";
import { setAsyncToken, setAsyncUserInfo } from "../Utils/asyncStorage";
import { handleErrorRes, handleSuccessRes } from "./commonActionFunction";
import { GET, PATCH, POST, api } from "../Utils/apiConstant";
import { successToast } from "../Utils/CommonFunction";


export const onsendVerificationCode = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequest({ method: POST, url: api.sendVerificationCode, data: request.data, })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    successToast(response?.data?.message + '. Your verification code is ' + response?.data?.data?.verificationCode)
                    dispatchAction(dispatch, USER_INFO, response?.data?.data)
                })
            })
            .catch((error) => { handleErrorRes(error, request, dispatch) });
    };
export const onverifyVerificationCode = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequest({ method: POST, url: api.verifyVerificationCode, data: request.data, })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    successToast(response?.data?.message)
                    dispatchAction(dispatch, USER_INFO, response?.data?.data)
                })
            })
            .catch((error) => { handleErrorRes(error, request, dispatch) });
    };

export const onCustomerSignUp = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequestFormData({ method: POST, url: api.customerSignUp, data: request.data, })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    dispatchAction(dispatch, USER_INFO, response?.data?.data)
                })
            })
            .catch((error) => {
                handleErrorRes(error, request, dispatch)
            });
    };

export const onGetUserData = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequest({ method: GET, url: api.getUserData + '/' + request?.userId, data: request.data, })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    console.log('response-------', response)
                    dispatchAction(dispatch, USER_INFO, response?.data?.data)
                })
            })
            .catch((error) => {
                handleErrorRes(error, request, dispatch)
            });
    };

export const onUpdateCustomerData = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequestFormData({ method: PATCH, url: api.updateCustomerData + '/' + request?.userId, data: request.data, })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    // console.log('response-------', response?.data?.data)
                    dispatchAction(dispatch, USER_INFO, response?.data?.data)
                })
            })
            .catch((error) => {
                handleErrorRes(error, request, dispatch)
            });
    };