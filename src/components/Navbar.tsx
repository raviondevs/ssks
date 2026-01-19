import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const navbarTitle = isHome
        ? "SSKS - Swaminarayan Sanstha"
        : "Swaminarayan Sukhmay Karan Satsang - SSKS";

    return (
        <>
            <nav className="fixed top-[40px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-container z-[100]">
                <div className="glass-navbar bg-white/95 shadow-xl flex items-center justify-between px-10 border border-white/40">
                    {/* Left: Logo & Title */}
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-14 h-14 flex items-center justify-center">
                            <img src={logo} alt="SSKS Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-katibeh font-[400] text-[42px] leading-tight text-[#E21E25]">
                            {navbarTitle}
                        </span>
                    </Link>

                    {/* Right: Search & Menu */}
                    <div className="flex items-center gap-6">
                        <button className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E21E25]/10 text-[#E21E25] hover:bg-[#E21E25]/20 transition-colors">
                            <Search size={22} />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E21E25]/10 text-[#E21E25] hover:bg-[#E21E25]/20 transition-colors relative"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </nav>

            <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
