import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    );
};


export default App