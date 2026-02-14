import { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Image as ImageIcon,
    Calendar,
    Bell,
    Video,
    Music,
    BookOpen,
    MessageSquare,
    LogOut,
    Menu,
    X,
    FileText,
    Download
} from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../hooks/useAuth';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Updates', href: '/admin/updates', icon: Bell },
    { name: 'Darshan', href: '/admin/darshan', icon: ImageIcon },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'Audios', href: '/admin/audios', icon: Music },
    { name: 'Satsang', href: '/admin/satsang', icon: BookOpen },
    { name: 'Practices', href: '/admin/practices', icon: FileText },
    { name: 'Publications', href: '/admin/publications', icon: Download },
    { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
];

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] flex">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 
                    transform transition-transform duration-300 ease-in-out h-screen flex flex-col
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    shadow-[10px_0_30px_-15px_rgba(0,0,0,0.05)]
                `}
            >
                <div className="h-full flex flex-col">
                    {/* Logo Section */}
                    <div className="h-24 flex items-center gap-4 px-8 border-b border-gray-50 bg-white">
                        <div className="w-12 h-12 rounded-2xl bg-[#E21E25] flex items-center justify-center p-2 shadow-lg shadow-red-200">
                            <img src={logo} alt="SSKS" className="w-full h-full object-contain brightness-0 invert" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-katibeh text-3xl text-[#005382] leading-none">SSKS</span>
                            <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#E21E25] font-bold">Admin Portal</span>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="ml-auto lg:hidden text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-2 custom-scrollbar">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href ||
                                (item.href !== '/admin' && location.pathname.startsWith(item.href));
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 font-outfit relative group
                                        ${isActive
                                            ? 'bg-[#005382] text-white shadow-xl shadow-blue-100 translate-x-1'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-[#005382] hover:translate-x-1'
                                        }
                                    `}
                                >
                                    <item.icon size={22} className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#005382]'} transition-colors`} />
                                    <span className="text-[15px] font-medium tracking-wide">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 w-1.5 h-6 bg-[#E21E25] rounded-full"
                                        />
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Footer / Logout */}
                    <div className="p-6 border-t border-gray-50">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 text-[#E21E25] hover:bg-red-50 rounded-2xl transition-all duration-300 font-outfit font-bold group border border-transparent hover:border-red-100"
                        >
                            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Sign Out Account
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 lg:ml-72">
                {/* Header */}
                <header className="sticky top-0 z-30 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 lg:px-12">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 text-[#005382] hover:bg-blue-50 rounded-xl transition-colors"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-6 ml-auto ">
                        <div className="flex flex-col items-end hidden sm:flex ">
                            <span className="text-sm font-bold text-[#005382] font-outfit">Satyaprakash Das</span>
                            <span className="text-[10px] text-gray-400 font-outfit uppercase font-bold tracking-widest">Super Administrator</span>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#005382] flex items-center justify-center text-white font-bold font-katibeh text-xl shadow-lg shadow-blue-100 ring-4 ring-blue-50">
                            S
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

