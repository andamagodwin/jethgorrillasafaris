import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
    ];

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
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🦍</span>
                        </div>
                        <div className="flex flex-col">
                            <span
                                className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                Jeth Gorilla Safaris
                            </span>
                            <span
                                className={`text-xs transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'
                                    }`}
                            >
                                Discover Uganda's Wild Beauty
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-semibold transition-colors duration-300 hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Book Safari
                        </button>
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
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-900 font-semibold hover:text-emerald-500 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                            Book Safari
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
