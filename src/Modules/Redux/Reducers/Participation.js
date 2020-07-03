const defaultState = {
    participation: null,
    loading: false,
    error: null,
}

const participationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_PARTICIPATION_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_PARTICIPATION_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_PARTICIPATION_SUCCESS": {
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
                participation: null,
            }
        }
        default:
            return state
    }
}

export default participationReducer
