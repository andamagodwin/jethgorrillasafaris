import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDestinationById, destinations } from '../../data/destinations';

const DestinationDetail = () => {
    const { destinationId } = useParams<{ destinationId: string }>();
    const destination = destinationId ? getDestinationById(destinationId) : undefined;

    // Scroll to top when the destination changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [destinationId]);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
                    <Link to="/#destinations" className="text-orange-600 hover:text-orange-700 font-semibold">
                        View all destinations
                    </Link>
                </div>
            </div>
        );
    }

    const otherDestinations = destinations.filter(d => d.id !== destination.id);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div>
                        <span className="text-orange-400 font-bold text-sm uppercase mb-4 block">
                            {destination.tagline}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Campuni']">
                            {destination.name}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {destination.summary}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                {/* Back link */}
                <Link
                    to="/#destinations"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 font-semibold mb-10 transition-colors duration-300 group"
                >
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    All destinations
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {destination.intro}
                            </p>
                        </section>

                        {/* Highlights */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {destination.highlights.map((highlight) => (
                                    <div key={highlight} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0" />
                                        <span className="font-medium leading-relaxed">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Parks */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Parks and Reserves</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {destination.parks.map((park) => (
                                    <article
                                        key={park.name}
                                        className="rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col"
                                    >
                                        <img
                                            src={park.image}
                                            alt={park.name}
                                            className="w-full h-44 object-cover"
                                            loading="lazy"
                                        />
                                        <div className="p-5 flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 font-['Campuni']">
                                                {park.name}
                                            </h3>
                                            <p className="text-[15px] text-gray-600 leading-relaxed">
                                                {park.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right column */}
                    <aside className="space-y-8">
                        {/* Quick facts */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-5 font-['Campuni']">
                                Quick Facts
                            </h3>
                            <dl className="space-y-4">
                                {destination.quickFacts.map((fact) => (
                                    <div key={fact.label}>
                                        <dt className="text-xs font-bold text-gray-400 uppercase mb-1">
                                            {fact.label}
                                        </dt>
                                        <dd className="text-gray-800 font-medium leading-snug">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Best time */}
                        <div className="bg-[#f5f0e8] rounded-2xl p-6 border border-[#e8e0d0]">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Campuni']">
                                Best Time to Go
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{destination.bestTime}</p>
                        </div>

                        {/* Getting there */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Campuni']">
                                Getting There
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{destination.gettingThere}</p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gray-900 rounded-2xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-2 font-['Campuni']">
                                Plan a trip to {destination.name}
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-5">
                                Tell us your dates and we will put together an itinerary and check permit availability.
                            </p>
                            <Link
                                to="/#contact"
                                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </aside>
                </div>

                {/* Other destinations */}
                <section className="mt-24 pt-16 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <span className="text-orange-500 font-bold text-sm uppercase mb-3 block">
                                Continue Exploring
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Other Destinations
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherDestinations.map((other) => (
                            <Link
                                key={other.id}
                                to={`/destinations/${other.id}`}
                                className="group block relative h-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${other.cardImage})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <span className="text-xs font-bold text-orange-400 uppercase mb-2 block">
                                            {other.tagline}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1 font-['Campuni']">
                                            {other.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Learn More
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DestinationDetail;
