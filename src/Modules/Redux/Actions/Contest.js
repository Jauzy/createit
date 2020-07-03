import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const getAllContest = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const { data } = await baseUrl.get(`/contest/get`)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contests } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getClientContest = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/contest/get/client`, config)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contests } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getPublishedContest = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const { data } = await baseUrl.get(`/contest/get/published`)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contests } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getContestById = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const { data } = await baseUrl.get(`/contest/get/${contestID}`)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getWinner = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const { data } = await baseUrl.get(`/contest/winner/${contestID}`)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { winner: data } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const clearContest = () => {
    return (dispatch) => {
        dispatch({ type: "CLEAR" })
    }
}

const cancelContest = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.delete(`/contest/delete/${contestID}`, config)
            swal({
                title: "Contest Canceled!",
                text: "Your contest successfully canceled!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const createContest = (contestData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.post(`/contest/create`, contestData, config)
            swal({
                title: "Contest Created!",
                text: "New contest created, please check further details!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const editContest = (contestData, contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/contest/edit/${contestID}`, contestData, config)
            swal({
                title: "Contest Updated!",
                text: "Your contest successfully updated!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const notifyAdmin = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/contest/notify/${contestID}`, config)
            swal({
                title: "Notification Sent!",
                text: "Wait for admin verification!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const publishContest = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/contest/publish/${contestID}`, config)
            swal({
                title: "Contest Published!",
                text: "Contest successfully published!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const addPaymentInfo = (paymentInfo, contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/contest/payment/${contestID}`, paymentInfo, config)
            swal({
                title: "Payment Info Added!",
                text: "Your payment info successfully added!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    getAllContest,
    getClientContest,
    getContestById,
    getPublishedContest,
    getWinner,
    clearContest,
    cancelContest,
    createContest,
    editContest,
    notifyAdmin,
    publishContest,
    addPaymentInfo
}
