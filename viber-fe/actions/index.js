const AppActions = {
    LOGIN: "LOGIN",
    SIGNUP: "SIGNUP"
};

const login = () => dispatch => dispatch({type: AppActions.LOGIN})

const singup = () => dispatch => dispatch({type: AppActions.SIGNUP})

export { AppActions, login, singup };