export const ENDPOINTS = 'https://server.createit.id'
// export const ENDPOINTS = 'http://localhost:5000'

export const LANDING = '/'
export const HOME = '/home'
export const LOGIN = '/login'
export const REGISTER = '/register'

export const CLIENT = {
    DASHBOARD: '/client/dashboard',
    CONTESTLIST: '/list/contest',
    PROJECTLIST: '/list/project'
}

export const CREATOR = {
    DASHBOARD: '/creator/dashboard',
    CONTESTLIST: '/list/contest/creator'
}

export const ADMIN = {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin/dashboard',
    REGISTER: '/admin/register'
}

export const DESIGNCATEGORY = '/categories'

export const BRIEFCONTEST = '/brief/contest/:contestID'
export const BRIEFCONTESTREVIEW = '/brief/contest/:contestID/review'
export const PRICING = '/pricing/:contestID'
export const PAYMENT = '/payment/:contestID'
export const CONTESTDASHBOARD = '/contest/dashboard/:contestID'

export const BRIEFPROJECT = '/brief/project/:projectID'
export const BRIEFPROJECTREVIEW = '/brief/project/:projectID/review'
export const PROJECTDASHBOARD = '/project/dashboard/:projectID'
export const PROJECTPAYMENT = '/project/dashboard/:projectID/payment/:paymentID'

export const CONTESTDASHBOARDCREATOR = '/contest/dashboard/creator/:contestID'

export const BROWSE = {
    CONTEST: '/contests/',
    PROJECT: '/projects/',
    CREATOR: '/creators/'
}

export const CREATORPORTOFOLIO = '/creator/:creatorID'
export const VERIFYEMAIl = '/email'
export const FORGOTPASSWORD = '/forgot-password'

export const TENTANGKAMI = '/seputar-createit/tentang-kami'

export const MAINEVENT = '/event'
export const EVENT = '/event/:eventID'
export const PROGRAM = '/program/:programID'

export const BUATCONTEST = '/layanan-kami/contest'
export const BUATPROJECT = '/layanan-kami/project'

export const PROJECT = '/project'