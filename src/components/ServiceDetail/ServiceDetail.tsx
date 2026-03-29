import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getServiceById, services } from '../../data/services';
import emailjs from '@emailjs/browser';

const ServiceDetail = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const currentService = serviceId ? getServiceById(serviceId) : undefined;
    const service = currentService;

    // Scroll to top when service changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    const availableCountries = service?.countryItineraries ? Object.keys(service.countryItineraries) : null;
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    // Update selected country when service changes
    useEffect(() => {
        if (availableCountries) {
            setSelectedCountry(availableCountries[0]);
        } else {
            setSelectedCountry(null);
        }
    }, [serviceId, availableCountries?.length]);

    const getInitialDuration = () => {
        if (selectedCountry && service?.countryItineraries) {
            return Object.keys(service.countryItineraries[selectedCountry])[0] || '3 Days';
        }
        return service ? Object.keys(service.itinerary)[0] : '3 Days';
    };

    const [selectedDuration, setSelectedDuration] = useState<string>(getInitialDuration());

    // Update duration when country changes
    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        if (service?.countryItineraries?.[country]) {
            const countryDurations = Object.keys(service.countryItineraries[country]);
            setSelectedDuration(countryDurations[0]);
        }
    };

    const currentItineraryOptions = selectedCountry && service?.countryItineraries
        ? service.countryItineraries[selectedCountry]
        : service?.itinerary || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        travelers: '2',
        date: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // EmailJS credentials from environment variables
            // Temporarily logging to debug
            console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
            console.log('Booking Template ID:', import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID);
            console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || 'template_xmbf09r',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    tour_interest: service.title,
                    travelers: formData.travelers,
                    preferred_date: formData.date,
                    message: formData.message || 'No special requests',
                    to_email: 'info@eyregorillaadventures.com',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );

            console.log('Booking request sent successfully:', result);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                travelers: '2',
                date: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Booking request failed:', error);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
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

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div>
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
                                <span className="text-lg font-medium">{service.duration}</span>
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

                        {/* Dynamic Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Itinerary Planner</h2>
                            
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
                                <p className="text-gray-700 italic text-sm md:text-base">
                                    "Your journey, your rules. We meticulously craft out journeys according to your schedule and preferences. Below are some of our most popular, expertly designed fixed itineraries to inspire you. Select a destination and duration:"
                                </p>
                            </div>

                            {/* Country Selector Pills */}
                            {availableCountries && availableCountries.length > 0 && (
                                <div className="mb-6">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-3">
                                        Select Country
                                    </span>
                                    <div className="flex flex-wrap gap-3">
                                        {availableCountries.map((country) => (
                                            <button
                                                key={country}
                                                onClick={() => handleCountryChange(country)}
                                                className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 border-2 ${
                                                    selectedCountry === country
                                                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                                                        : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                                                }`}
                                            >
                                                {country}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Duration Selector Pills */}
                            <div className="mb-8">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-3">
                                    Select Duration
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {Object.keys(currentItineraryOptions).map((durationKey) => (
                                        <button
                                            key={durationKey}
                                            onClick={() => setSelectedDuration(durationKey)}
                                            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                                                selectedDuration === durationKey
                                                    ? 'bg-orange-500 text-white shadow-md transform scale-105'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                                            }`}
                                        >
                                            {durationKey}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamically Rendered Itinerary Steps */}
                            <div className="space-y-12">
                                {currentItineraryOptions[selectedDuration]?.map((day) => (
                                    <div key={day.day} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                                        <div className="flex-shrink-0 md:w-32 pt-1">
                                            <span className="text-gray-400 font-bold uppercase tracking-wider text-sm block mb-1">
                                                Day {day.day}
                                            </span>
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                                {day.title}
                                            </h3>
                                            
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px] md:text-base">
                                                        {day.description}
                                                    </div>
                                                    
                                                </div>

                                                {day.image && (
                                                    <div className="flex-shrink-0 lg:w-64 xl:w-72">
                                                        <img
                                                            src={day.image}
                                                            alt={day.title}
                                                            className="w-full h-48 lg:h-56 object-cover rounded-xl"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions, Exclusions & Notes */}
                        {/* Inclusions, Exclusions & Notes */}
                        {((service.durationInclusions?.[selectedDuration] || service.inclusions).length > 0 || 
                          (service.durationExclusions?.[selectedDuration] || service.exclusions).length > 0) && (
                            <section className="grid md:grid-cols-2 gap-8 mt-12 mb-8 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                                {(service.durationInclusions?.[selectedDuration] || service.inclusions).length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Price Includes</h3>
                                        <ul className="space-y-3">
                                            {(service.durationInclusions?.[selectedDuration] || service.inclusions).map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {(service.durationExclusions?.[selectedDuration] || service.exclusions).length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Price Excludes</h3>
                                        <ul className="space-y-3">
                                            {(service.durationExclusions?.[selectedDuration] || service.exclusions).map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        )}

                        {service.pricingTiers && service.pricingTiers.length > 0 && (
                            <section className="mt-12 mb-10">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Private Safari Cost</h2>
                                    <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                                        The price of each safari depends on the number of travelers, trip duration, and accommodation type. Below you can see approximate prices for each category.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 overflow-hidden rounded-2xl">
                                    {service.pricingTiers.map((tier, index) => (
                                        <div
                                            key={index}
                                            className={`p-8 md:p-10 ${
                                                tier.dark
                                                    ? "bg-[#1a3d1a] text-white"
                                                    : tier.highlight
                                                    ? "bg-[#5c3d11] text-white"
                                                    : "bg-gray-100 text-gray-900"
                                            }`}
                                        >
                                            <h3 className={`text-xl font-bold mb-3 ${tier.dark || tier.highlight ? "text-white" : "text-orange-700"}`}>
                                                {tier.name}
                                            </h3>
                                            {tier.description && (
                                                <p className={`text-sm mb-5 leading-relaxed ${tier.dark || tier.highlight ? "text-gray-300" : "text-gray-600"}`}>
                                                    {tier.description}
                                                </p>
                                            )}
                                            {tier.prices && tier.prices.length > 0 && (
                                                <ul className="space-y-3">
                                                    {tier.prices.map((price, i) => (
                                                        <li key={i} className={`text-sm leading-snug ${tier.dark || tier.highlight ? "text-gray-200" : "text-gray-700"}`}>
                                                            {price.label}: <span className="font-semibold">{price.amount}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {service.note && !service.pricingTiers && (
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-10 rounded-r-lg">
                                <p className="text-sm text-orange-800 leading-relaxed font-medium">
                                    <span className="font-bold">Note:</span> {service.note}
                                </p>
                            </div>
                        )}

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
                            <div className="bg-white rounded-2xl p-8">
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 outline-none"
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
                                            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                                            placeholder="Any special requirements or questions..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-red-600 text-white font-semibold rounded-lg transition-all duration-300 ${
                                            isSubmitting
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'hover:shadow-xl hover:scale-105'
                                        }`}
                                    >
                                        {isSubmitting ? 'Sending Request...' : 'Request Booking'}
                                    </button>

                                    {/* Success Message */}
                                    {submitStatus === 'success' && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                                            Thank you for your booking request! We'll contact you within 24 hours to confirm your {service.title} experience.
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {submitStatus === 'error' && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                                            Sorry, something went wrong. Please try again or contact us directly at info@eyregorillaadventures.com
                                        </div>
                                    )}

                                    <p className="text-sm text-gray-500 text-center">
                                        We'll contact you within 24 hours to confirm your booking
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* You May Also Like Section */}
                <section className="mt-24 pt-16 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
                                Continue Exploring
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                You May Also Like
                            </h2>
                        </div>
                        <Link 
                            to="/#services" 
                            className="text-gray-900 font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all duration-300 inline-flex items-center gap-2 group"
                        >
                            View All Safaris
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services
                            .filter(s => s.id !== serviceId)
                            .slice(0, 3)
                            .map((otherService) => (
                                <Link
                                    key={otherService.id}
                                    to={`/services/${otherService.id}`}
                                    className="group block relative h-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${otherService.heroImage})` }}
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                                        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                                            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 block">
                                                {otherService.duration}
                                            </span>
                                            <h3 className="text-xl font-bold mb-1">
                                                {otherService.title}
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

export default ServiceDetail;
