import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState, dispatchAction } from "../Redux/hooks";
import { makeAPIRequest, makeAPIRequestFormData, setAuthorization } from "../Utils/apiGlobal";
import { FORGOT_EMAIL, PRE_LOADER, USER_INFO } from "../Redux/actionTypes";
import { setAsyncToken, setAsyncUserInfo } from "../Utils/asyncStorage";
import { handleErrorRes, handleSuccessRes } from "./commonActionFunction";
import { POST, api } from "../Utils/apiConstant";
import { successToast } from "../Utils/CommonFunction";



export const onAddSolarEnquiry = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequestFormData({
            method: POST,
            url: api.addSolarEnquiry,
            data: request?.data
        })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    // dispatchAction(dispatch, ON_COMMNET_POST, response?.data?.data)
                })
            })
            .catch((error) => {
                handleErrorRes(error, request, dispatch)
            });
    };

export const onAddMaintenanceEnquiry = (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatchAction(dispatch, PRE_LOADER, true)
        return makeAPIRequestFormData({
            method: POST,
            url: api.addMaintenanceEnquiry,
            data: request?.data
        })
            .then(async (response: any) => {
                handleSuccessRes(response, request, dispatch, () => {
                    // dispatchAction(dispatch, ON_COMMNET_POST, response?.data?.data)
                })
            })
            .catch((error) => {
                handleErrorRes(error, request, dispatch)
            });
    };