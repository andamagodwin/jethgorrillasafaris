import { useEffect, useRef } from 'react';
import VariableProximity from '../VariableProximity';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Video autoplay failed:', error);
            });
        }
    }, []);

    const scrollToSection = (sectionId: string) => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Video Background with Fixed Parallax */}
            <div className="fixed top-0 left-0 w-full h-screen z-[1]">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/hero1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay for Better Text Readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-[2]"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-[3] w-full max-w-7xl px-4 sm:px-8 md:px-16 flex flex-col items-center text-center gap-8 md:gap-16">
                <div className="flex flex-col items-center gap-6 animate-fade-in-up">
                    {/* Hero Title with Interactive Effect */}
                    <div ref={containerRef} style={{ position: 'relative' }}>
                        <VariableProximity
                            label="Discover the Wild Beauty of Uganda"
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight"
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={150}
                            falloff="linear"
                        />
                    </div>

                    {/* Hero Subtitle */}
                    <p className="text-base sm:text-xs md:text-sm text-gray-200 max-w-3xl leading-relaxed font-light">
                        Embark on an unforgettable safari adventure through breathtaking landscapes
                        and encounter majestic wildlife in their natural habitat
                    </p>

                    {/* Hero Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto px-4 sm:px-0">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="group relative px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-red-600 text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-95 shadow-[0_10px_30px_rgba(234,179,8,0.2)] flex items-center justify-center gap-3 h-14 sm:h-16 border border-yellow-400/30"
                        >
                            {/* Animated Bubbles - hidden on mobile to prevent overflow */}
                            <div className="hidden sm:block absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-yellow-900"></div>
                            <div className="hidden sm:block absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-orange-600"></div>
                            <div className="hidden sm:block absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-0 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-red-700"></div>
                            <div className="hidden sm:block absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-red-600"></div>

                            {/* Content */}
                            <img src="/icons/gorilla.png" alt="Gorilla" className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                            <span className="relative z-10">Lets Goooo</span>
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-full bg-white/10 text-white border-2 border-white/30 backdrop-blur-md uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/50"
                        >
                            <span className="relative z-10">Plan Your Trip</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
