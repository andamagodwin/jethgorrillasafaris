import MagicBento from '../MagicBento';

const features = [
    {
        icon: "/icons/tour.png",
        title: "Expert Guides",
        description: "Our experienced guides have decades of knowledge about Uganda's wildlife and ecosystems.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293923/eyre_gorilla/images/guide.jpg"
    },
    {
        icon: "/icons/ecology.png",
        title: "Eco-Friendly",
        description: "We practice sustainable tourism to protect Uganda's natural beauty for future generations.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293838/eyre_gorilla/images/activity2.jpg"
    },
    {
        icon: "/icons/adjust.png",
        title: "Personalized Tours",
        description: "Every safari is tailored to your interests, ensuring a unique and memorable experience.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293941/eyre_gorilla/images/safari2.jpg"
    },
    {
        icon: "/icons/crown.png",
        title: "Premium Comfort",
        description: "Stay in carefully selected lodges and camps that blend luxury with authentic safari experiences.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293952/eyre_gorilla/images/tour-car-2.jpg"
    },
    {
        icon: "/icons/image.png",
        title: "Photo Opportunities",
        description: "We know the best spots and times for capturing stunning wildlife and landscape photography.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293931/eyre_gorilla/images/photo.jpg"
    },
    {
        icon: "/icons/shield.png",
        title: "Safety First",
        description: "Your safety is our priority with comprehensive insurance and experienced safety protocols.",
        color: "#0f0f0f",
        image: "https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293829/eyre_gorilla/car-1.jpg"
    }
];

const WhyUs = () => {
    return (
        <section className="relative bg-zinc-50 py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span
                        className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest mb-6 inline-block font-['Campuni']"
                    >
                        Why Travel With Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Your Adventure, Our Expertise
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        We know Uganda's parks and wildlife well, and we put that into every trip we plan.
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
                    glowColor="249, 115, 22"
                    cardsData={features}
                />
            </div>
        </section>
    );
};

export default WhyUs;
