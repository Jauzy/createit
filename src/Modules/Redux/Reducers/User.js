const defaultState = {
    user: null,
    loading: false,
    error: null,
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_USER_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_USER_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_USER_SUCCESS": {
            return {
                ...state,
                ...action.data,
                loading: false,
                error: null,
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                user: null,
            }
        }
        default:
            return state
    }
}

export default userReducer
