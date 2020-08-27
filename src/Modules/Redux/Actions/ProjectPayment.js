import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const getPayments = (projectID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECTPAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/payment-project/${projectID}`, config)
            dispatch({ type: "FIND_PROJECTPAYMENT_SUCCESS", data: { payments: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECTPAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

const getPaymentByID = (paymentID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECTPAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/payment-project/get/${paymentID}`, config)
            dispatch({ type: "FIND_PROJECTPAYMENT_SUCCESS", data: { payment: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECTPAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

const creatorUpdate = (projectID, payload, room) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "FIND_PROJECTPAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const payment = await baseUrl.post(`/payment-project/${projectID}`, payload, config)
            swal({
                title: "Issue Success!",
                icon: "success",
                button: "Nice!",
            })
            console.log(payment)
            const user = getState().user.user
            getState().utils.socket.emit('chatMessage', ({ uid: user._id, utype: user.type, msg: 'Issue Payment.', room, payment: payment.data.paymentID }))
            const { data } = await baseUrl.get(`/payment-project/${projectID}`, config)
            dispatch({ type: "FIND_PROJECTPAYMENT_SUCCESS", data: { payments: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECTPAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

const clientUpdate = (paymentID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECTPAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            await baseUrl.put(`/payment-project/update/${paymentID}`, payload, config)
            swal({
                title: "Update Success!",
                icon: "success",
                button: "Nice!",
            })
            const { data } = await baseUrl.get(`/payment-project/get/${paymentID}`, config)
            dispatch({ type: "FIND_PROJECTPAYMENT_SUCCESS", data: { payment: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECTPAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

const uploadProofOfPayment = (paymentID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECTPAYMENT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            await baseUrl.put(`/payment-project/update/${paymentID}/proof`, payload, config)
            swal({
                title: "Bukti Pembayaran Sukses Di Upload!",
                icon: "success",
                button: "Nice!",
            })
            const { data } = await baseUrl.get(`/payment-project/get/${paymentID}`, config)
            dispatch({ type: "FIND_PROJECTPAYMENT_SUCCESS", data: { payment: data.payment } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECTPAYMENT_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    getPayments, getPaymentByID, clientUpdate, uploadProofOfPayment, creatorUpdate
}