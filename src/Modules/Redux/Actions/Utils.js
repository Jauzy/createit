const toggleSignInModal = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "UTILS", data: { isSignInModalOpen: !getState().utils.isSignInModalOpen } })
    }
}

const toggleSignUpModal = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "UTILS", data: { isSignUpModalOpen: !getState().utils.isSignUpModalOpen } })
    }
}

const setupSocket = (socket) => {
    return async (dispatch) => {
        dispatch({ type: "UTILS", data: { socket } })
    }
}

export default {
    toggleSignInModal,
    toggleSignUpModal,
    setupSocket
}