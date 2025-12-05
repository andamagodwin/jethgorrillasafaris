const WhyUs = () => {
    const features = [
        {
            icon: "🦍",
            title: "Expert Guides",
            description: "Our experienced guides have decades of knowledge about Uganda's wildlife and ecosystems."
        },
        {
            icon: "🌿",
            title: "Eco-Friendly",
            description: "We practice sustainable tourism to protect Uganda's natural beauty for future generations."
        },
        {
            icon: "⭐",
            title: "Personalized Tours",
            description: "Every safari is tailored to your interests, ensuring a unique and memorable experience."
        },
        {
            icon: "🏕️",
            title: "Premium Comfort",
            description: "Stay in carefully selected lodges and camps that blend luxury with authentic safari experiences."
        },
        {
            icon: "📸",
            title: "Photo Opportunities",
            description: "We know the best spots and times for capturing stunning wildlife and landscape photography."
        },
        {
            icon: "🛡️",
            title: "Safety First",
            description: "Your safety is our priority with comprehensive insurance and experienced safety protocols."
        }
    ];

    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20 z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-semibold text-5xl tracking-wide mb-4 inline-block"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Why Travel With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                        Your Adventure, Our Expertise
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        We combine local knowledge, passion for wildlife, and commitment to excellence to create unforgettable safari experiences.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="group relative px-12 py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-95 shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 mx-auto border border-emerald-400/30">
                        {/* Animated Bubbles */}
                        <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-emerald-900"></div>
                        <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-emerald-800"></div>
                        <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-0 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-teal-700"></div>
                        <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-0 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-teal-600"></div>

                        {/* Content */}
                        <span className="relative z-10">Start Your Adventure</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
