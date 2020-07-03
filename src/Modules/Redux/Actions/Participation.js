import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const getContestParticipation = (contestID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const { data } = await baseUrl.get(`/participation/get/${contestID}`)
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participation: data.participation } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const selectWinner = (participationID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/participation/select/${participationID}`, config)
            swal({
                title: "Winner Selected!",
                text: "Contest winner successfully selected!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

const cancelParticipation = (participationID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PARTICIPATION_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.delete(`/participation/cancel/${participationID}`, config)
            swal({
                title: "Participation Canceled!",
                text: "Your participation successfully canceled!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_PARTICIPATION_ERROR", data: { error: error.response } })
        }
    }
}

export {
    selectWinner,
    getContestParticipation,
    cancelParticipation
}