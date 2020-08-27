import Cookies from 'universal-cookie'
import swal from 'sweetalert'
import baseUrl from '../../../Constants/BaseUrl'
import socketIOClient from "socket.io-client";
const cookies = new Cookies()
const ROUTES = require('../../../Constants/Routes')

const adminRegister = (userData, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/admin/register', userData)
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
            swal({
                title: "Register Success!",
                text: "You need to login to continue!",
                icon: "success",
                button: "Login now!",
            }).then((value) => history.push('/login/admin'));
        } catch (error) {
            console.log(error, 'kok error')
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const clientRegister = (userData, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/client/register', userData)
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
            swal({
                title: "Register Success!",
                text: "You need to login to continue!",
                icon: "success",
                button: "Login now!",
            })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data?.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const creatorRegister = (userData, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/creator/register', userData)
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
            swal({
                title: "Register Success!",
                text: "You need to login to continue!",
                icon: "success",
                button: "Login now!",
            })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response?.data?.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const login = (userData, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/login', userData)

            cookies.set("token", data.token, { path: '/' })
            cookies.set("user", data.user, { path: '/' })

            dispatch({ type: "FIND_USER_SUCCESS", data: { user: data.user } })

            // const socket = socketIOClient(ROUTES.ENDPOINTS)
            // dispatch({ type: "UTILS", data: { socket } })

            history.push('/home')
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: 'error',
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const logout = (history) => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
        cookies.remove('token')
        cookies.remove('user')
        dispatch({ type: "UTILS", data: { socket: null } })
        history.push('/home')
    }
}

const getUserData = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/user`, config)
            dispatch({ type: "FIND_USER_SUCCESS", data: { user: data.user } })
            // if (!getState().utils.socket) {
            //     const socket = socketIOClient(ROUTES.ENDPOINTS)
            //     dispatch({ type: "UTILS", data: { socket } })
            // }
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const getPublicProfile = (creatorID) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            console.log(creatorID)
            const { data } = await baseUrl.get(`/public/${creatorID}`, config)
            dispatch({ type: "FIND_USER_SUCCESS", data: { public_user: { data: data.user, participations: data.participations } } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const changePassword = (password, newPassword) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/update/password`, { password, newPassword }, config)
            swal({
                title: "Password Changed!",
                text: "Your password successfully updated!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const userUpdate = (userData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/update`, userData, config)
            swal({
                title: "Userdata Updated!",
                text: "Your user data successfully updated!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const sendVerificationEmail = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.put(`/verify/send`, null, config)
            swal({
                title: "Email Sent!",
                text: "Check your email now!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const verifyEmail = (token) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.put(`/verify/${token}`, null)
            swal({
                title: "Email Verified!",
                text: "Your Email has been verified now!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const sendResetPasswordEmail = (email, type) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.put(`/reset/${email}/${type}`, null)
            swal({
                title: "Email Sent!",
                text: "Check your email now!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const resetPassword = (token, newPassword) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.put(`/reset/${token}`, { newPassword })
            swal({
                title: "Password Reset Success!",
                text: "You can now login to continue!",
                icon: "success",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_SUCCESS", data: null })
        } catch (error) {
            console.log(error)
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const updateProfilePict = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            dispatch({ type: "LOGOUT" })
            const update = await baseUrl.put(`/update/profile_pict`, payload, config)
            const { data } = await baseUrl.get(`/user`, config)
            swal({
                title: "Profile Pict Updated!",
                text: "Your profile pict successfully updated!",
                icon: "success",
                button: "Okay!",
            })
            const { profile_pict, ...rest } = data.user
            dispatch({ type: "FIND_USER_SUCCESS", data: { user: { ...rest, profile_pict: update.data.profile_pict } } })
        } catch (error) {
            swal({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                button: "Okay!",
            })
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    getPublicProfile,
    updateProfilePict,
    adminRegister,
    creatorRegister,
    clientRegister,
    login,
    logout,
    getUserData,
    changePassword,
    userUpdate,
    verifyEmail,
    sendVerificationEmail,
    sendResetPasswordEmail,
    resetPassword,
}
