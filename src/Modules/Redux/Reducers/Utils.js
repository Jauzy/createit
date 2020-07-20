const defaultState = {
    isSignInModalOpen: false,
    isSignUpModalOpen: false,
}

const utilsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UTILS': {
            return {
                ...state,
                ...action.data,
            }
        }
        case "RESET": {
            return {
                ...defaultState
            }
        }
        default:
            return state
    }
}

export default utilsReducer
