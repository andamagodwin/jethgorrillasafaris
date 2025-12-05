import { Link } from 'react-router-dom';

const services = [
    {
        id: "gorilla-trekking",
        title: "Gorilla Trekking",
        description: "Experience the thrill of encountering mountain gorillas in their natural habitat. Our expert guides will lead you through the lush forests of Bwindi Impenetrable National Park.",
        icon: "🦍",
        duration: "3-7 Days",
        price: "From $1,500"
    },
    {
        id: "wildlife-safari",
        title: "Wildlife Safari",
        description: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        icon: "🦁",
        duration: "5-10 Days",
        price: "From $2,000"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        description: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        icon: "🦜",
        duration: "4-8 Days",
        price: "From $1,200"
    },
    {
        id: "chimpanzee-tracking",
        title: "Chimpanzee Tracking",
        description: "Track our closest relatives in Kibale Forest. Watch them play, feed, and interact in their natural environment.",
        icon: "🐵",
        duration: "2-5 Days",
        price: "From $1,000"
    },
    {
        id: "cultural-tours",
        title: "Cultural Tours",
        description: "Immerse yourself in Uganda's rich cultural heritage. Visit local communities and experience traditional customs.",
        icon: "🎭",
        duration: "3-6 Days",
        price: "From $800"
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        description: "White water rafting on the Nile, hiking the Rwenzori Mountains, and more thrilling outdoor adventures.",
        icon: "🏔️",
        duration: "2-7 Days",
        price: "From $900"
    }
];

const Services = () => {
    return (
        <section id="services" className="relative bg-black py-16 px-6 md:px-12 lg:px-20 z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-semibold text-5xl tracking-wide mb-4 inline-block"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Tailored Safari Experiences
                    </h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        Choose from our curated selection of safari packages, each designed to give you an unforgettable adventure in Uganda's wild beauty.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-200 hover:-translate-y-2 border border-white/10 hover:border-emerald-500/50"
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Details */}
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {service.duration}
                                </span>
                                <span className="font-semibold text-emerald-400">
                                    {service.price}
                                </span>
                            </div>

                            {/* CTA Button */}
                            <Link to={`/services/${service.id}`}>
                                <button className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    Learn More
                                </button>
                            </Link>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Services;
