import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-[40px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-container z-[100]">
                <div className="glass-navbar bg-white/10 shadow-navbar flex items-center justify-between px-8 border border-white/20">
                    {/* Left: Logo & Title */}
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img src={logo} alt="SSKS Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[#D32F2F] text-2xl font-bold tracking-tight">
                            SSKS-Swaminarayan Sanstha
                        </span>
                    </Link>

                    {/* Right: Search & Menu */}
                    <div className="flex items-center gap-4">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCE4E4] text-[#D32F2F] hover:bg-[#F8D2D2] transition-colors">
                            <Search size={22} />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCE4E4] text-[#D32F2F] hover:bg-[#F8D2D2] transition-colors relative"
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
