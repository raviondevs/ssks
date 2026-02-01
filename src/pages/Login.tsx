import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Eye, EyeOff, Sparkles, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login verification
        setTimeout(() => {
            login('mock-jwt-token-for-ssks-admin');
            setIsLoading(false);
            navigate('/admin');
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#FFFBF0]">
            {/* Vibrant Spiritual Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1627814409941-c796b4bf0ec0?q=80&w=2070&auto=format&fit=crop")',
                    filter: 'brightness(0.9) contrast(1.1)'
                }}
            />

            {/* Color Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#005382]/40 via-transparent to-[#E21E25]/20 z-1" />
            <div className="absolute inset-0 backdrop-blur-[2px] z-1" />

            {/* Floating Ornamental Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[15%] w-32 h-32 opacity-20 pointer-events-none hidden lg:block"
            >
                <Sparkles size={120} className="text-white" />
            </motion.div>

            {/* Login Card Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg px-6"
            >
                <div className="bg-white/70 backdrop-blur-3xl rounded-[40px] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden p-8 md:p-10 relative group">
                    {/* Inner border glow */}
                    <div className="absolute inset-0 rounded-[40px] border-2 border-white/40 pointer-events-none" />

                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-20 h-20 bg-white rounded-[24px] flex items-center justify-center p-4 mx-auto mb-4 shadow-xl shadow-[#005382]/10 ring-4 ring-white/30"
                        >
                            <img src={logo} alt="SSKS Logo" className="w-full h-full object-contain" />
                        </motion.div>
                        <h1 className="text-5xl font-katibeh text-[#005382] mb-1 leading-none drop-shadow-sm italic">Portal Login</h1>
                        <p className="text-[#57534E] font-outfit text-xs font-black tracking-[0.2em] uppercase opacity-40">Administrative Access</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-[#005382] uppercase tracking-[0.3em] ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#005382]/40" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/80 border-2 border-transparent rounded-[20px] py-3.5 pl-14 pr-6 text-[#005382] outline-none focus:border-[#005382]/20 focus:bg-white transition-all font-outfit font-bold shadow-inner"
                                    placeholder="admin@ssks.org"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-[#005382] uppercase tracking-[0.3em] ml-4">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#005382]/40" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/80 border-2 border-transparent rounded-[20px] py-3.5 pl-14 pr-14 text-[#005382] outline-none focus:border-[#005382]/20 focus:bg-white transition-all font-outfit font-bold shadow-inner"
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#005382]/30 hover:text-[#E21E25] transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-3">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-200 text-[#005382] focus:ring-[#005382] transition-all cursor-pointer" />
                                <span className="text-[#57534E] font-outfit font-bold text-[10px] uppercase tracking-wider">Remember</span>
                            </label>
                            <button type="button" className="text-[#E21E25] hover:underline font-bold font-outfit text-[10px] uppercase tracking-wider transition-colors">Help?</button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`
                                w-full h-14 bg-[#E21E25] text-white rounded-[20px] font-outfit font-bold uppercase tracking-[0.2em]
                                shadow-[0_15px_30px_-10px_rgba(226,30,37,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(226,30,37,0.4)]
                                hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3 group/btn
                                ${isLoading ? 'opacity-90 pointer-events-none' : ''}
                            `}
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span className="text-sm">Access Portal</span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Trust Factor */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-[#005382]/30">
                        <ShieldCheck size={14} />
                        <p className="text-[9px] font-bold font-outfit uppercase tracking-[0.4em]">
                            Encrypted SSKS Session
                        </p>
                    </div>
                </div>

                {/* Bottom Decor */}
                <div className="mt-6 text-center px-4">
                    <p className="text-white/80 text-[10px] font-bold font-outfit uppercase tracking-[0.4em] leading-relaxed">
                        Authorized Personnel Only • Global Administration
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
