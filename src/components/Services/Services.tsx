import { Link } from 'react-router-dom';

const services = [
    {
        id: "gorilla-trekking",
        title: "Gorilla Trekking",
        description: "Experience the thrill of encountering mountain gorillas in their natural habitat. Our expert guides will lead you through the lush forests of Bwindi Impenetrable National Park.",
        icon: "/icons/gorilla-facing-right.png",
        image: "/images/image4.jpeg",
        duration: "3-7 Days",
        price: "From $1,500"
    },
    {
        id: "wildlife-safari",
        title: "Wildlife Safari",
        description: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        icon: "/icons/jeep.png",
        image: "/images/image5.jpeg",
        duration: "5-10 Days",
        price: "From $2,000"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        description: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        icon: "/icons/binocular.png",
        image: "/images/image6.jpeg",
        duration: "4-8 Days",
        price: "From $1,200"
    },
    {
        id: "chimpanzee-tracking",
        title: "Chimpanzee Tracking",
        description: "Track our closest relatives in Kibale Forest. Watch them play, feed, and interact in their natural environment.",
        icon: "/icons/monkey.png",
        image: "/images/image7.jpeg",
        duration: "2-5 Days",
        price: "From $1,000"
    },
    {
        id: "cultural-tours",
        title: "Cultural Tours",
        description: "Immerse yourself in Uganda's rich cultural heritage. Visit local communities and experience traditional customs.",
        icon: "/icons/theater.png",
        image: "/images/image4.jpeg",
        duration: "3-6 Days",
        price: "From $800"
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        description: "White water rafting on the Nile, hiking the Rwenzori Mountains, and more thrilling outdoor adventures.",
        icon: "/icons/zipline.png",
        image: "/images/image5.jpeg",
        duration: "2-7 Days",
        price: "From $900"
    }
];

const Services = () => {
    return (
        <section id="services" className="relative bg-zinc-50 py-16 px-6 md:px-12 lg:px-20 z-10 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide mb-4 inline-block"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                        Tailored Safari Experiences
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Choose from our curated selection of safari packages, each designed to give you an unforgettable adventure in Uganda's wild beauty.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-[400px] rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-2xl"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-colors duration-300" />

                            {/* Content Container */}
                            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10 font-sans">
                                {/* Icon */}
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-md p-3 rounded-xl w-14 h-14 flex items-center justify-center">
                                    <img src={service.icon} alt={service.title} className="w-8 h-8 filter brightness-0 invert" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-200 mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                    {service.description}
                                </p>

                                {/* Details Row */}
                                <div className="flex items-center justify-between text-xs font-semibold mb-6">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {service.duration}
                                    </div>
                                    <div className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30 text-emerald-400 uppercase tracking-wider">
                                        {service.price}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Link to={`/services/${service.id}`} className="block">
                                    <button className="w-full py-3 bg-white hover:bg-orange-500 text-gray-900 hover:text-white font-bold rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg">
                                        View Details
                                    </button>
                                </Link>
                            </div>

                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Services;
