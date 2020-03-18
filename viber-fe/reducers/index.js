import { AppActions } from "../actions";
import { initialState } from "../store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case AppActions.LOGIN:
            return state
        case AppActions.SIGNUP:
            return state
            default:
        return state;
    }
}

export default reducer;