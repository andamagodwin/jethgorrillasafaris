import MagicBento from '../MagicBento';

const features = [
    {
        icon: "/icons/tour.png",
        title: "Expert Guides",
        description: "Our experienced guides have decades of knowledge about Uganda's wildlife and ecosystems.",
        color: "#0f0f0f",
        image: "/images/safari13.jpeg"
    },
    {
        icon: "/icons/ecology.png",
        title: "Eco-Friendly",
        description: "We practice sustainable tourism to protect Uganda's natural beauty for future generations.",
        color: "#0f0f0f",
        image: "/images/activity2.jpg"
    },
    {
        icon: "/icons/adjust.png",
        title: "Personalized Tours",
        description: "Every safari is tailored to your interests, ensuring a unique and memorable experience.",
        color: "#0f0f0f",
        image: "/images/safari2.jpeg"
    },
    {
        icon: "/icons/crown.png",
        title: "Premium Comfort",
        description: "Stay in carefully selected lodges and camps that blend luxury with authentic safari experiences.",
        color: "#0f0f0f",
        image: "/images/tour-car-2.jpeg"
    },
    {
        icon: "/icons/image.png",
        title: "Photo Opportunities",
        description: "We know the best spots and times for capturing stunning wildlife and landscape photography.",
        color: "#0f0f0f",
        image: "/images/gorilla10.jpeg"
    },
    {
        icon: "/icons/shield.png",
        title: "Safety First",
        description: "Your safety is our priority with comprehensive insurance and experienced safety protocols.",
        color: "#0f0f0f",
        image: "/images/safari7.jpeg"
    }
];

const WhyUs = () => {
    return (
        <section className="relative bg-zinc-50 py-12 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span
                        className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide mb-6 inline-block font-['Campuni']"
                    >
                        Why Travel With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                        Your Adventure, Our Expertise
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        We combine local knowledge, passion for wildlife, and commitment to excellence to create unforgettable safari experiences.
                    </p>
                </div>

                {/* Magic Bento Grid */}
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="16, 185, 129"
                    cardsData={features}
                />

                {/* Call to Action */}
                {/* <div className="text-center mt-10"> */}
                {/* <button className="group relative px-12 py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-95 shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 mx-auto border border-emerald-400/30"> */}
                {/* Animated Bubbles */}
                {/* <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-emerald-900"></div>
                        <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-emerald-800"></div>
                        <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-0 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-teal-700"></div>
                        <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-teal-600"></div> */}

                {/* Content */}
                {/* <span className="relative z-10">Start Your Adventure</span> */}
                {/* </button> */}
                {/* </div> */}
            </div>
        </section>
    );
};

export default WhyUs;
