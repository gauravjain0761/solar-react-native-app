import { navigationRef } from "../Navigation/Navigation";
import { errorToast } from "../Utils/CommonFunction";
import { PRE_LOADER } from "../Redux/actionTypes";
import { dispatchAction } from "../Redux/hooks";
import { removeAuthorization } from "../Utils/apiGlobal";

export const handleSuccessRes = (res: any, req: any, dispatch: any, fun?: () => void) => {
    if (res?.status === 200 || res?.status === 201) {
        dispatchAction(dispatch, PRE_LOADER, false)
        if (res?.data.status) {
            if (fun) fun()
            if (req?.onSuccess) req?.onSuccess(res?.data);
        }
    }
}

export const handleErrorRes = (err: any, req: any, dispatch: any, fun?: () => void) => {

    console.log(err)
    if (err?.response?.status == 401) {
        dispatchAction(dispatch, PRE_LOADER, false)
        removeAuthorization()
        navigationRef.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
        errorToast('Please login again')
    } else {
        dispatchAction(dispatch, PRE_LOADER, false)
        if (err?.response?.data?.errors) {
            errorToast(err?.response?.data?.errors[0]?.msg);
        } else if (err?.response?.data?.message) {
            errorToast(err?.response?.data?.message);
        } else if (err?.response?.data?.error) {
            errorToast(err?.response?.data?.error?.message);
        } else {
            errorToast('Something went wrong! Please try again')
        }
        if (fun) fun()
        if (req?.onFailure) req.onFailure(err?.response);
    }

}