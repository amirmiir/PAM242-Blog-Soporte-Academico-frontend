import { FC } from 'react'
import NavBar from '../../components/nav-bar/NavBar';
import LandingSections from './landing-sections/LandingSections';
import Footer from '../../components/footer/Footer';

const Landing: FC = () => {
    return (
        <div>
            <NavBar />
            <LandingSections />
            <Footer />
        </div>
    );
}

export default Landing;