import { Link } from 'react-router-dom';
import { destinations } from '../../data/destinations';

const Destinations = () => {
    return (
        <section id="destinations" className="relative bg-[#f5f0e8] py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-[#e8e0d0]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Where We Take You
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        We run trips across East Africa. Pick a country to see its parks, the best months to go, and how to get there.
                    </p>
                </div>

                {/* Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.id}
                            to={`/destinations/${destination.id}`}
                            className="group relative block h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: `url(${destination.cardImage})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative h-full p-6 flex flex-col justify-end text-white z-10">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <span className="text-xs font-bold text-orange-400 uppercase mb-2 block">
                                        {destination.tagline}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 font-['Campuni']">
                                        {destination.name}
                                    </h3>
                                    <p className="text-sm text-gray-200 leading-relaxed line-clamp-3">
                                        {destination.summary}
                                    </p>

                                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Explore
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
