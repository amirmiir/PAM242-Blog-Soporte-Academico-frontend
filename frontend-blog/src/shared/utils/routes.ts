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
    RECOVERPASSWORD: '/recover-password',

    SUBJECTS: {
        ROOT: '/subjects',
    },
    QUESTIONS: {
        ROOT: '/questions'
    },
} as const;

export const protectedRoutes = {
    QUESTIONS: {
        MAKEQUESTION: '/questions/make-a-question'
    }
}

export const ROUTES = {
    ...publicRoutes,
    QUESTIONS: {
        ...publicRoutes.QUESTIONS,
        ...protectedRoutes.QUESTIONS,
    },
    ...protectedRoutes
}