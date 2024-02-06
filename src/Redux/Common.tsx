import { PRE_LOADER, USER_INFO } from "./actionTypes";

const initialState = {
  preLoader: false,
  toast: {},
  userId: '',
  userData: undefined
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case PRE_LOADER: {
      return { ...state, preLoader: action.payload };
    }
    case USER_INFO:
      return { ...state, userId: action.payload._id, userData: action.payload };
    default:
      return state;
  }
}
