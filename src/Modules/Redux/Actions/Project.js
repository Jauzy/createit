import baseUrl from '../../../Constants/BaseUrl'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
const cookies = new Cookies()

const createProject = (category, subCategory, history) => {
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
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.post(`/project/`, { category, subCategory }, config)
            history.replace(`/brief/project/${data.project._id}`)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

const getProjectById = (projectID, history) => {
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
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/project/${projectID}`, config)
            if (cookies.get('user')._id != data.project.user) {
                swal({
                    title: "Not Authorized!",
                    icon: "error",
                    button: "Run!",
                }).then(() => {
                    dispatch({ type: "FIND_PROJECT_SUCCESS" })
                    history.replace('/')
                })
            } else
                dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

const updateProject = (projectID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/project/${projectID}`, payload, config)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

const uploadReference = (projectID, payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/project/${projectID}/reference`, payload, config)
            const { data } = await baseUrl.get(`/project/${projectID}`, config)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

const cancelProject = (projectID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.delete(`/project/${projectID}`, config)
            const { data } = await baseUrl.get(`/project/${projectID}`, config)
            swal({
                title: "Project Canceled!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    createProject,
    getProjectById,
    updateProject,
    uploadReference,
    cancelProject
}