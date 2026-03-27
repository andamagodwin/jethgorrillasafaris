import { Link } from 'react-router-dom';

const services = [
    {
        id: "gorilla-trekking",
        title: "Gorilla Trekking",
        description: "Experience the thrill of encountering mountain gorillas in their natural habitat. Our expert guides will lead you through the lush forests of Bwindi Impenetrable National Park.",
        icon: "/icons/gorilla-facing-right.png",
        image: "/images/image3.jpeg",
        duration: "3-7 Days",
        price: "From $1,500"
    },
    {
        id: "wildlife-safari",
        title: "Wildlife Safari",
        description: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        icon: "/icons/jeep.png",
        image: "/images/elephant.jpeg",
        duration: "5-10 Days",
        price: "From $2,000"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        description: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        icon: "/icons/binocular.png",
        image: "/images/bird.jpeg",
        duration: "4-8 Days",
        price: "From $1,200"
    },
    {
        id: "chimpanzee-tracking",
        title: "Chimpanzee Tracking",
        description: "Track our closest relatives in Kibale Forest. Watch them play, feed, and interact in their natural environment.",
        icon: "/icons/monkey.png",
        image: "/images/image5.jpeg",
        duration: "2-5 Days",
        price: "From $1,000"
    },
    {
        id: "cultural-tours",
        title: "Cultural Tours",
        description: "Immerse yourself in Uganda's rich cultural heritage. Visit local communities and experience traditional customs.",
        icon: "/icons/theater.png",
        image: "/images/culture.jpeg",
        duration: "3-6 Days",
        price: "From $800"
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        description: "White water rafting on the Nile, hiking the Rwenzori Mountains, and more thrilling outdoor adventures.",
        icon: "/icons/zipline.png",
        image: "/images/adventure.jpeg",
        duration: "2-7 Days",
        price: "From $900"
    }
];

const Services = () => {
    return (
        <section id="services" className="relative bg-zinc-50 py-16 px-6 md:px-12 lg:px-20 z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide mb-4 inline-block font-['Campuni']"
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
                            className="group relative h-[380px] rounded-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-sm hover:shadow-xl bg-white border border-gray-100"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Minimalist Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Hover Content */}
                            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
                                <div className="transform transition-all duration-500 flex flex-col h-full group-hover:-translate-y-2">
                                {/* Title & Icon Row */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg border border-white/20">
                                        <img src={service.icon} alt={service.title} className="w-6 h-6 filter brightness-0 invert" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-200 mb-6 leading-relaxed line-clamp-2">
                                    {service.description}
                                </p>

                                {/* Footer: Price & Link */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-sm font-bold text-orange-400">
                                        {service.price}
                                    </span>
                                    <Link 
                                        to={`/services/${service.id}`}
                                        className="text-xs font-bold uppercase tracking-widest hover:text-orange-400 transition-colors flex items-center gap-2"
                                    >
                                        Explore
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Services;
