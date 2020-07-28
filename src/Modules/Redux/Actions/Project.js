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
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/project/${projectID}`, config)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { project: data.project } })
            dispatch({ type: "FIND_PARTICIPATION_SUCCESS", data: { participations: data.participations } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
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

const pushComment = (text, projectID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/project/${projectID}/comment`, { text, user_name: cookies.get('user').name, uid: cookies.get('user')._id }, config)
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

const joinProject = (projectID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/project/${projectID}/join`, null, config)
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

const approveDesigner = (projectID, userID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const up = await baseUrl.put(`/project/${projectID}/approve/${userID}`, null, config)
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

const getProjectByClient = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/project/user`, config)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { projects: data.project } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

const getProjects = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_PROJECT_LOADING" })
            const { data } = await baseUrl.get(`/project/`)
            dispatch({ type: "FIND_PROJECT_SUCCESS", data: { projects: data.projects } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "PROJECT_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    approveDesigner,
    joinProject,
    pushComment,
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    uploadReference,
    cancelProject,
    getProjectByClient
}