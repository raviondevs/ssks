import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import Sidebar from './Sidebar';
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
            <nav className="fixed top-0 left-0 right-0 mx-auto w-full max-w-container z-[100] px-[10px] md:px-[20px] pt-[10px] md:pt-[20px] pb-4">
                <div className="glass-navbar bg-white/95 shadow-xl flex items-center justify-between px-4 md:px-10 border border-white/40 h-[70px] md:h-[88px]">
                    {/* Left: Logo & Title */}
                    <Link to="/" className="flex items-center gap-2 md:gap-4">
                        <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                            <img src={logo} alt="SSKS Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-katibeh font-[400] text-[32px] md:text-[42px] leading-tight text-[#E21E25]">
                            <span className="md:hidden">SSKS</span>
                            <span className="hidden md:block">{navbarTitle}</span>
                        </span>
                    </Link>

                    {/* Right: Search & Menu */}
                    <div className="flex items-center gap-3 md:gap-6">
                        <button className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#E21E25]/10 text-[#E21E25] hover:bg-[#E21E25]/20 transition-colors">
                            <Search size={20} className="md:w-[22px] md:h-[22px]" />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#E21E25]/10 text-[#E21E25] hover:bg-[#E21E25]/20 transition-colors relative"
                        >
                            <Menu size={20} className="md:w-[22px] md:h-[22px]" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Desktop Mega Menu */}
            <div className="hidden md:block">
                <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            </div>

            {/* Mobile Sidebar */}
            <div className="md:hidden">
                <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            </div>
        </>
    );
}
