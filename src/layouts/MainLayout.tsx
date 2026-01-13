import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="min-height-screen flex flex-col">
            <Navbar />
            <main className={`flex-grow ${isHomePage ? '' : 'pt-[140px]'}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
