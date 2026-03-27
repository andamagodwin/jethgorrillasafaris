import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Handle hash navigation after route change
        if (location.hash) {
            setTimeout(() => {
                const targetId = location.hash.replace('#', '');
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
            }, 100);
        }
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Check if we're on the home page
        if (location.pathname !== '/') {
            // Navigate to home page with hash
            navigate(`/${href}`);
        } else {
            // We're already on home, just scroll to section
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            {/* Top Subheader - Simplified on mobile, full on desktop */}
            <div className={`block border-b transition-colors duration-300 ${isScrolled ? 'border-gray-100' : 'border-white/10'}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 h-8 md:h-10 flex items-center justify-between text-[10px] md:text-[11px] font-medium tracking-wider uppercase">
                    <div className="flex items-center gap-4 md:gap-6">
                        <a 
                            href="tel:0750537127" 
                            className={`flex items-center gap-1.5 md:gap-2 transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        >
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span className="hidden sm:inline">0750 537 127</span>
                            <span className="sm:hidden">Call Us</span>
                        </a>
                        <a 
                            href="mailto:info@eyregorillaadventures.com" 
                            className={`flex items-center gap-1.5 md:gap-2 transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        >
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <span className="hidden md:inline">info@eyregorillaadventures.com</span>
                            <span className="md:hidden">Email</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                        <a 
                            href="https://www.facebook.com/eyre_gorilla_adventures_ltd" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        >
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/eyre_gorilla_adventures_ltd" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        >
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@eyre.gorilla.adve?_r=1&_t=ZS-952avi7uknB" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        >
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <nav className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
                        <img
                            src="/logo-no-txt.png"
                            alt="Eyre Gorilla Adventures Ltd Logo"
                            className="w-14 h-14 md:w-24 md:h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex flex-col min-w-0">
                            <span
                                className={`font-bold text-xs md:text-lg transition-colors duration-300 leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                Eyre Gorilla Adventures Ltd
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`font-semibold text-xs transition-colors duration-300 hover:text-yellow-500 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="py-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 px-4 shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block py-2 text-gray-900 font-semibold hover:text-yellow-500 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
