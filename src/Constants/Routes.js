export const LANDING = '/'
export const HOME = '/home'
export const LOGIN = '/login'
export const REGISTER = '/register'

export const CLIENT = {
    DASHBOARD: '/client/dashboard',
    CONTESTLIST: '/list/contest',
    PROJECTLIST:'/list/project'
}

export const CREATOR = {
    DASHBOARD: '/creator/dashboard',
    CONTESTLIST : '/list/contest/creator'
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

export const CONTESTDASHBOARDCREATOR = '/contest/dashboard/creator/:contestID'

export const BROWSE = {
    CONTEST : '/contests/',
    PROJECT : '/projects/',
    CREATOR : '/creators/'
}

export const CREATORPORTOFOLIO = '/creator/:creatorID'