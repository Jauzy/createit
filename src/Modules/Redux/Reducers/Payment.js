const defaultState = {
    payment: null,
    loading: false,
    error: null,
}

const paymentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_PAYMENT_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_PAYMENT_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_PAYMENT_SUCCESS": {
            return {
                ...state,
                ...action.data,
                loading: false,
                error: null,
            }
        }
        case "PAYMENT_RESET": {
            return {
                ...state,
                payment: null,
            }
        }
        default:
            return state
    }
}

export default paymentReducer
