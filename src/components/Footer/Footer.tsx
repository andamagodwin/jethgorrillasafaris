import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate(`/${href}`);
        } else {
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="relative bg-gray-900 text-white z-10">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                        <a href="/" onClick={handleLogoClick} className="inline-flex items-center gap-3 mb-4 group">
                            <img
                                src="/logo-no-txt.png"
                                alt="Eyre Gorilla Adventures Ltd"
                                className="w-16 h-16 object-contain transform group-hover:scale-105 transition-transform"
                            />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white">
                                    Eyre Gorilla Adventures Ltd
                                </span>
                                <span className="text-xs text-gray-400">
                                    Uncovering Hidden Gems
                                </span>
                            </div>
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Experience the wild beauty of Uganda with expert-guided safari tours. Creating unforgettable memories since 2010.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/eyre_gorilla_adventures_ltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/eyre_gorilla_adventures_ltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Safari Tours */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Safari Tours</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Gorilla Trekking
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Wildlife Safari
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Bird Watching
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Chimpanzee Tracking
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Cultural Tours
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <p className="text-xs text-gray-500 mb-1">Address</p>
                                <p className="text-sm text-gray-400">P.O BOX 203725</p>
                                <p className="text-sm text-gray-400">Kampala GPO, Uganda</p>
                            </li>
                            <li>
                                <p className="text-xs text-gray-500 mb-1">Phone</p>
                                <a href="tel:0750537127" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    0750 537 127
                                </a>
                            </li>
                            <li>
                                <p className="text-xs text-gray-500 mb-1">Email</p>
                                <a href="mailto:info@eyregorillaadventures.com" className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                                    info@eyregorillaadventures.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {currentYear} Eyre Gorilla Adventures Ltd. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-gray-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-gray-400 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-gray-400 transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
