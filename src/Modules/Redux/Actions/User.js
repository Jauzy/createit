import Cookies from 'universal-cookie'
import swal from 'sweetalert'
import baseUrl from '../../../Constants/BaseUrl'
const cookies = new Cookies()

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
            }).then((value) => history.push('/login'));
        } catch (error) {
            console.log(error, 'kok error')
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
            }).then((value) => history.push('/login'));
        } catch (error) {
            console.log(error, 'kok error')
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
            swal({
                title: "Login Success!",
                icon: "success",
                button: "Continue",
            }).then((value) => history.push('/'));
        } catch (error) {
            console.log(error, 'kok error')
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const logout = (history) => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
        cookies.remove('token')
        cookies.remove('user')
        history.push('/login')
    }
}

const getUser = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FIND_USER_LOADING" })
            const config = { headers: { token: `CREATEIT ${cookies.get('token')}` } }
            const { data } = await baseUrl.get(`/user`, config)
            dispatch({ type: "FIND_USER_SUCCESS", data: { user: data.user } })
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
            console.log(error)
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

export default {
    adminRegister,
    creatorRegister,
    clientRegister,
    login,
    logout,
    getUser,
    changePassword,
    userUpdate
}
