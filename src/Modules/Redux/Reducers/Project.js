const defaultState = {
    project: null,
    projects: null,
    loading: false,
    error: null,
}

const projectReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_PROJECT_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_PROJECT_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_PROJECT_SUCCESS": {
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
                project: null,
                winner: null
            }
        }
        default:
            return state
    }
}

export default projectReducer
