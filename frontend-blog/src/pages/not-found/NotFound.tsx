import { FC } from 'react'
import { ROUTES } from '../../shared/utils/routes';
import { Link } from 'react-router-dom';
import NavBar from '../../components/nav-bar/NavBar';

const NotFound: FC = () => {
    return (
        <div className="h-screen overflow-hidden">
            <NavBar />
            <div className="h-full content-center space-y-6 pl-24">
                <h1 className="text-6xl font-bold">Oh no!</h1>
                <h2 className="text-5xl font-semibold">Parece que ocurrió un error</h2>
                <p className="text-xl">Por favor, revisa que el link ingresado sea el correcto. O ingresa a la <Link to={ROUTES.LANDING.ROOT} className="text-red-500 hover:text-red-800">página de inicio</Link> y a través del menú dirígete a la sección que desees.</p>
            </div>
        </div>
    )
}

export default NotFound;