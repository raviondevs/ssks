import { Mail, MapPin, Youtube, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full flex flex-col">
            <div
                className="w-full text-white pt-[70px] px-[100px] pb-10 min-h-[405px] box-border"
                style={{
                    background: 'linear-gradient(90deg, rgba(50, 50, 50, 0.9) -8.74%, rgba(5, 14, 30, 0.9) -8.73%, rgba(18, 32, 66, 0.9) 105.96%)'
                }}
            >
                <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-[135px]">
                    {/* Contact Info - Left Column */}
                    <div className="flex flex-col gap-[35px] w-[358px]">
                        <div className="flex gap-4 items-start">
                            <MapPin className="shrink-0 text-white" size={24} strokeWidth={1.5} />
                            <p className="text-sm leading-relaxed text-white">
                                186,187 Siddhi vinayak society, opp. Bhakti International School, Kathodara,surat
                            </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Mail className="shrink-0 text-white" size={24} strokeWidth={1.5} />
                            <p className="text-sm text-white">Info@sskssurat.org</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            {/* Custom visual for the foundation icon based on description/image if possible, otherwise generic icon */}
                            <div className="shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <line x1="3" x2="21" y1="9" y2="9" />
                                    <line x1="9" x2="21" y1="15" y2="15" />
                                </svg>
                            </div>
                            <p className="text-sm text-white">Sukhmay Karan Satsang Foundation</p>
                        </div>

                        <div className="flex gap-[10px] mt-2">
                            <SocialIcon icon={<Youtube size={20} />} />
                            <SocialIcon icon={<Facebook size={20} />} />
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<MessageCircle size={20} />} />
                            <SocialIcon icon={<Send size={20} />} />
                        </div>
                    </div>

                    {/* Our Websites - Middle Column */}
                    <div className="flex flex-col w-[131px]">
                        <h3 className="font-bold text-lg mb-[12px] text-white">Our Websites</h3>
                        <div className="flex flex-col gap-[8px]">
                            <FooterLink to="/darshan">Darshan</FooterLink>
                            <FooterLink to="/vachnamrut">Vachnamrut</FooterLink>
                            <FooterLink to="/events">Event</FooterLink>
                            <FooterLink to="/videos">Latest Video</FooterLink>
                            <FooterLink to="/audios">Kirtan & Bhakti</FooterLink>
                            <FooterLink to="/calendar">Calendar</FooterLink>
                            <FooterLink to="/download">Download</FooterLink>
                            <FooterLink to="/donation">Donation</FooterLink>
                        </div>
                    </div>

                    {/* Quick Links - Right Column */}
                    <div className="flex flex-col w-[174px]">
                        <h3 className="font-bold text-lg mb-[12px] text-white">Quick Links</h3>
                        <div className="flex flex-col gap-[8px]">
                            <FooterLink to="/terms">Terms & Condition</FooterLink>
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                            <FooterLink to="/disclaimer">Disclaimer</FooterLink>
                            <FooterLink to="/donation">Donation</FooterLink>
                            <FooterLink to="/refund">Donation Refund Policy</FooterLink>
                            <FooterLink to="/feedback">Feedback</FooterLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div
                className="w-full flex items-center justify-center text-white font-laila font-medium text-[12px] leading-[20px] tracking-[-0.01em]"
                style={{
                    backgroundColor: '#DA4B4F',
                    padding: '10px 33.33px',
                    gap: '8.33px'
                }}
            >
                Copyright © 2008-2024 , Shri Swaminarayan Mandir Surat Sanstha (SSKS). All Rights Reserved.
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a
            href="#"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-[0.83px] border-white text-white hover:bg-white/10 transition-colors"
        >
            {icon}
        </a>
    );
}

function FooterLink({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <Link to={to} className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
            {children}
        </Link>
    );
}
