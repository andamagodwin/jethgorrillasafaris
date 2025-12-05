import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { getServiceById } from '../../data/services';

const ServiceDetail = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();
    const service = serviceId ? getServiceById(serviceId) : undefined;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        travelers: '2',
        date: '',
        message: ''
    });

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <Link to="/" className="text-emerald-600 hover:text-emerald-700">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking request:', formData, 'Service:', service.title);
        // Handle booking submission here
        alert(`Thank you! We'll contact you soon about your ${service.title} booking.`);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-24 left-6 md:left-12 lg:left-20 z-10 flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-semibold">Back to Home</span>
                </button>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div>
                        <span className="text-6xl mb-4 block">{service.icon}</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            {service.shortDescription}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-2xl font-bold">{service.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {service.fullDescription}
                            </p>
                        </section>

                        {/* Quick Facts */}
                        <section className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Best Time</h3>
                                <p className="text-gray-600">{service.bestTime}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Difficulty</h3>
                                <p className="text-gray-600">{service.difficulty}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Group Size</h3>
                                <p className="text-gray-600">{service.groupSize}</p>
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
                            <div className="space-y-6">
                                {service.itinerary.map((day) => (
                                    <div key={day.day} className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {day.day}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {day.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {day.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                                <ul className="space-y-3">
                                    {service.inclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Excluded</h3>
                                <ul className="space-y-3">
                                    {service.exclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Gallery */}
                        {service.gallery.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {service.gallery.map((image, index) => (
                                        <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                            <img
                                                src={image}
                                                alt={`${service.title} ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column - Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Experience</h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                                            placeholder="+256 123 456 789"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="travelers" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Number of Travelers *
                                        </label>
                                        <select
                                            id="travelers"
                                            name="travelers"
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Special Requests
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                                            placeholder="Any special requirements or questions..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        Request Booking
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        We'll contact you within 24 hours to confirm your booking
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
