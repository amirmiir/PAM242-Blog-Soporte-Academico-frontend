/**
 * Defining constant routes to specify them later and reduce misspells
 */

import axios from "axios";
import { useEffect } from "react";



export const ROUTES = {

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
        ROOT: '/questions',
        MAKEQUESTION: '/questions/make-a-question'
    },

} as const;

export const protectedRoutes = {

}