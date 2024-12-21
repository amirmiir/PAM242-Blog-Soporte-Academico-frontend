/**
 * Defining constant routes to specify them later and reduce misspells
 */

export const publicRoutes = {

    LANDING: {
        ROOT: '/',
        HOME: '/#home',
        ABOUT: '/#about',
        US: '/#us',
        FAQ: '/#faq',
        CONTACT: '/#contact'
    },
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVERPASSWORD: '/recover-password', //to be deleted for a dynamic route (deleted when used or after a short time span)
    RECOVEREMAIL: '/recover-email', //static route to submit forms that send an email to the address sent

    SUBJECTS: {
        ROOT: '/subjects',
    },
    QUESTIONS: {
        ROOT: '/questions'
    },
    ADMIN: '/admin',
} as const;

export const protectedRoutes = {
    QUESTIONS: {
        MAKEQUESTION: '/questions/make-a-question'
    }
}

export const ROUTES = {
    ...publicRoutes,
    ...protectedRoutes,
    /**
     * Matches must be merged after, as otherwise, would lead to
     * routes being overwritten.
     */
    QUESTIONS: {
        ...publicRoutes.QUESTIONS,
        ...protectedRoutes.QUESTIONS,
    },
}