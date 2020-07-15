import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const createContest = (category, subCategory, history) => {
    return async (dispatch) => {
        try {
            if (!cookies.get('token')) {
                swal({
                    title: "Login required!",
                    icon: "error",
                    button: "Okay!",
                }).then(() => {
                    history.replace('/login')
                })
            }
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.post(`/contest/`, { category, subCategory }, config)
            history.replace(`/brief/contest/${data.contest._id}`)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getContestById = (contestID, history) => {
    return async (dispatch) => {
        try {
            if (!cookies.get('token')) {
                swal({
                    title: "Login required!",
                    icon: "error",
                    button: "Okay!",
                }).then(() => {
                    history.replace('/login')
                })
            }
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/contest/${contestID}`, config)
            if (cookies.get('user')._id != data.contest.user) {
                swal({
                    title: "Not Authorized!",
                    icon: "error",
                    button: "Run!",
                }).then(() => {
                    dispatch({ type: "FIND_CONTEST_SUCCESS" })
                    history.replace('/')
                })
            } else
                dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const updateContest = (contestID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/contest/${contestID}`, payload, config)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const cancelContest = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.delete(`/contest/${contestID}`, config)
            const { data } = await baseUrl.get(`/contest/${contestID}`, config)
            swal({
                title: "Contest Canceled!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const getContestByClient = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/contest/user`, config)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contests: data.contests } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

const uploadReference = (contestID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_CONTEST_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/contest/${contestID}/reference`, payload, config)
            const { data } = await baseUrl.get(`/contest/${contestID}`, config)
            dispatch({ type: "FIND_CONTEST_SUCCESS", data: { contest: data.contest } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_CONTEST_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    uploadReference,
    createContest,
    getContestById,
    updateContest,
    getContestByClient,
    cancelContest
}
