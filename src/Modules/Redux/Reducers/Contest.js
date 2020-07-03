const defaultState = {
    contest: null,
    winner: null,
    loading: false,
    error: null,
}

const contestReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_CONTEST_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_CONTEST_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_CONTEST_SUCCESS": {
            return {
                ...state,
                ...action.data,
                loading: false,
                error: null,
            }
        }
        case "CLEAR": {
            return {
                ...state,
                contest: null,
                winner: null
            }
        }
        default:
            return state
    }
}

export default contestReducer
