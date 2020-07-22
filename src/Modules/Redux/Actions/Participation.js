import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const getParticipations = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const { data } = await baseUrl.get(`/participation/`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const getContestParticipation = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const { data } = await baseUrl.get(`/participation/contest/${contestID}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const getProjectParticipation = (projectID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const { data } = await baseUrl.get(`/participation/project/${projectID}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const joinContest = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.post(`/participation/contest/${contestID}`, null, config)
            const { data } = await baseUrl.get(`/participation/contest/${contestID}`)
            swal({
                title: "Success!",
                text: "You joined this contest, upload design to contribute!",
                icon: "success",
                button: "Nice!",
            })
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const giveRating = (participationID, type, id, rate) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/participation/${participationID}/rate`, { rate }, config)
            const { data } = await baseUrl.get(`/participation/${type}/${id}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const updateParticipation = (participationID, contestID, desc) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/participation/${participationID}/update`, { desc }, config)
            const { data } = await baseUrl.get(`/participation/contest/${contestID}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const uploadDesign = (type, id, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/participation/image/${type}/${id}`, payload, config)
            const { data } = await baseUrl.get(`/participation/${type}/${id}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const comment = (participationID, type, contestID, text) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/participation/${participationID}/comment`, { text }, config)
            const { data } = await baseUrl.get(`/participation/${type}/${contestID}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    comment,
    uploadDesign,
    updateParticipation,
    giveRating,
    getParticipations,
    getContestParticipation,
    getProjectParticipation,
    joinContest
}