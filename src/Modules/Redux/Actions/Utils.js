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

export default {
    toggleSignInModal,
    toggleSignUpModal
}