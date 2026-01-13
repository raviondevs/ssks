import { Mail, MapPin, Youtube, Facebook, Instagram, Send, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-footer-gradient text-white pt-[70px] pb-10 px-[100px] min-h-[405px]">
            <div className="max-w-container mx-auto flex flex-wrap justify-between gap-[50px]">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 max-w-[400px]">
                    <div className="flex gap-4">
                        <MapPin className="shrink-0 text-primary-300" size={20} />
                        <p className="text-sm leading-relaxed">
                            186,187 Siddhi vinayak society, opp. Bhakti International School, Kathodara,surat
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Mail className="shrink-0 text-primary-300" size={20} />
                        <p className="text-sm">Info@sskssurat.org</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-5 h-5 flex items-center justify-center border border-white rounded-[2px] text-[10px]">F</div>
                        <p className="text-sm">Sukhmay Karan Satsang Foundation</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <SocialIcon icon={<Youtube size={18} />} />
                        <SocialIcon icon={<Facebook size={18} />} />
                        <SocialIcon icon={<Instagram size={18} />} />
                        <SocialIcon icon={<Phone size={18} />} />
                        <SocialIcon icon={<Send size={18} />} />
                    </div>
                </div>

                {/* Our Websites */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg mb-2">Our Websites</h3>
                    <FooterLink to="/darshan">Darshan</FooterLink>
                    <FooterLink to="/vachnamrut">Vachnamrut</FooterLink>
                    <FooterLink to="/events">Event</FooterLink>
                    <FooterLink to="/videos">Latest Video</FooterLink>
                    <FooterLink to="/audios">Kirtan & Bhakti</FooterLink>
                    <FooterLink to="/calendar">Calendar</FooterLink>
                    <FooterLink to="/download">Download</FooterLink>
                    <FooterLink to="/donation">Donation</FooterLink>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                    <FooterLink to="/terms">Terms & Condition</FooterLink>
                    <FooterLink to="/privacy">Privacy Policy</FooterLink>
                    <FooterLink to="/disclaimer">Disclaimer</FooterLink>
                    <FooterLink to="/donation">Donation</FooterLink>
                    <FooterLink to="/refund">Donation Refund Policy</FooterLink>
                    <FooterLink to="/feedback">Feedback</FooterLink>
                    <FooterLink to="/smvs">SMVS On Internet</FooterLink>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors">
            {icon}
        </a>
    );
}

function FooterLink({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <Link to={to} className="text-sm text-grey-300 hover:text-white transition-colors">
            {children}
        </Link>
    );
}
