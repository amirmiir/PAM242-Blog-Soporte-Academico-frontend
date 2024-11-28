/**
 * Defining constant routes to specify them later and reduce misspells
 */
export const ROUTES = {
    
    LANDING: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVERPASSWORD: '/recover-password',

    SUBJECTS: {
        ROOT: '/subjects',
        ID: '/subjects/id',
    },

    QUESTIONS:{
        ROOT: '/questions',
        ID: '/questions/id',
        MAKEQUESTION: '/questions/make-a-question'
    },

} as const;

export const protectedRoutes = {

}