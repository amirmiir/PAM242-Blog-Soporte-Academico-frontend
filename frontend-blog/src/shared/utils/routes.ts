/**
 * Defining constant routes to specify them later and reduce misspells
 */

import axios from "axios";
import { useEffect } from "react";

type SubjectRoute = {
    ROUTE: string,
    ID: string
}

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
        {

        }
    },
    QUESTIONS: {
        ROOT: '/questions'
    },
} as const;

export const protectedRoutes = {
    QUESTIONS:{
        MAKEQUESTION: '/questions/make-a-question'
    }
}