import { useEffect, useRef } from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Video autoplay failed:', error);
            });
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
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
            <div className="relative z-[3] w-full max-w-7xl px-8 md:px-16 flex flex-col items-center text-center gap-16">
                <div className="flex flex-col items-center gap-6 animate-fade-in-up">
                    {/* Hero Title */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight">
                        Discover the Wild Beauty of Uganda
                        {/* <span className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent inline-block"> Uganda</span> */}
                        <span> </span>
                    </h1>

                    {/* Hero Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed font-light">
                        Embark on an unforgettable safari adventure through breathtaking landscapes
                        and encounter majestic wildlife in their natural habitat
                    </p>

                    {/* Hero Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                        <button className="group relative px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] shadow-[0_10px_30px_rgba(245,158,11,0.4)]">
                            <span className="relative z-10">Explore Safaris</span>
                            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-[3] transition-transform duration-600 origin-center"></div>
                        </button>

                        <button className="group relative px-10 py-4 text-lg font-semibold rounded-full bg-white/10 text-white border-2 border-white/30 backdrop-blur-md uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/50">
                            <span className="relative z-10">Plan Your Trip</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
