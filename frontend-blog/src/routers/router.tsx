import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { ROUTES } from '../shared/utils/routes'

import Landing from '../pages/landing/Landing';
import NotFound from '../pages/not-found/NotFound';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Questions from '../pages/questions/Questions';
import QuestionID from '../pages/questions/question-id/QuestionID';
import MakeQuestion from '../pages/questions/questions-make-question/MakeQuestion';
import Subjects from '../pages/subjects/Subjects';
import SubjectID from '../pages/subjects/subject-id/SubjectID';
import RecoverPassword from '../pages/recover-password/RecoverPassword';

const publicRoutes: RouteObject[] = [
    {
        path: ROUTES.LANDING.ROOT  ,
        element: <Landing />
    },
    {
        path: ROUTES.LOGIN,
        element: <Login />
    },
    {
        path: ROUTES.REGISTER,
        element: <Register />
    },
    {
        path: ROUTES.RECOVERPASSWORD,
        element: <RecoverPassword />
    },
    {
        path: ROUTES.QUESTIONS.ROOT,
        element: <Questions />
    },
    {
        path: ROUTES.QUESTIONS.MAKEQUESTION,
        element: <MakeQuestion />
    },
    {
        path: ROUTES.SUBJECTS.ROOT,
        element: <Subjects />
    }
]

const routes: RouteObject[] =[
    ...publicRoutes,
    {
        path: '*',
        element: <NotFound />
    }
]
const router = createBrowserRouter(routes);
export default router