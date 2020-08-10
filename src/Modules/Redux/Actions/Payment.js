import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const updatePaymentContest = (contestID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            await baseUrl.post(`/payment/${contestID}`, payload, config)
            const { data } = await baseUrl.get(`/payment/${contestID}`, config)
            dispatch({ type: "FIND_PAYMENT_SUCCESS", data: { payment: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

const getContestPayment = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/payment/${contestID}`, config)
            dispatch({ type: "FIND_PAYMENT_SUCCESS", data: { payment: data.payment } })
        } catch (error) {

        }
    }
}

export default {
    getContestPayment,
    updatePaymentContest
}