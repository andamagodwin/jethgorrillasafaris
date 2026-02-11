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
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
                        <img
                            src="/logo-no-txt.png"
                            alt="Eyre Gorilla Adventures Ltd Logo"
                            className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex flex-col">
                            <span
                                className={`font-bold text-lg transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                Eyre Gorilla Adventures Ltd
                            </span>
                            <span
                                className={`text-xs transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'
                                    }`}
                            >
                                Uncovering Hidden Gems
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
