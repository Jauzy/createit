const defaultState = {
    payment: null,
    payments: null,
    loading: false,
    error: null,
}

const paymentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_PROJECTPAYMENT_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_PROJECTPAYMENT_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_PROJECTPAYMENT_SUCCESS": {
            return {
                ...state,
                ...action.data,
                loading: false,
                error: null,
            }
        }
        case "PROJECTPAYMENT_RESET": {
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
