const initialState = {
  preLoader: false,
  toast: {},
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'PRE_LOADER': {
      return {...state, preLoader: action.payload};
    }

    default:
      return state;
  }
}
