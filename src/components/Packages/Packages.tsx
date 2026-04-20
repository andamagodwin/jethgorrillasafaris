const packagesData = [
    {
        tier: "Luxury Range",
        totalPrice: "$8,340",
        destinations: "Entebbe – Kibale National Park – Queen Elizabeth National Park – Bwindi – Lake Mburo National Park",
        accommodations: [
            { location: "Entebbe", place: "No.5 Boutique Hotel / Protea Hotel Entebbe" },
            { location: "Kibale", place: "Primate Lodge Kibale / Kyaninga Lodge" },
            { location: "Queen Elizabeth", place: "Elephant Plains Lodge / Mweya Safari Lodge" },
            { location: "Bwindi", place: "Buhoma Lodge / Sanctuary Gorilla Forest Camp / Volcanoes Bwindi Lodge" },
            { location: "Lake Mburo", place: "Mihingo Lodge" }
        ],
        pricing: [
            { item: "Luxury Accommodation (6 Nights)", cost: "$5,000" },
            { item: "4x4 Safari Vehicle + Fuel", cost: "$1,190" },
            { item: "Gorilla Permit", cost: "$800" },
            { item: "Chimpanzee Permit", cost: "$250" },
            { item: "Park Entrance Fees", cost: "$300" },
            { item: "Boat Cruise (Kazinga Channel)", cost: "$40" },
            { item: "Professional Guide (7 Days)", cost: "$560" },
            { item: "Meals & Drinking Water", cost: "$200" }
        ],
        highlights: [
            "Gorilla trekking in Bwindi Impenetrable Forest",
            "Chimpanzee tracking in Kibale National Park",
            "Tree-climbing lions in Ishasha sector",
            "Kazinga Channel boat cruise",
            "Walking safari in Lake Mburo",
            "Scenic landscapes and cultural encounters"
        ],
        whyChoose: "This luxury safari offers unmatched comfort, exclusive lodges, expert guiding, and perfectly timed photography experiences across Uganda's most iconic destinations.",
        bgClass: "bg-[#0f0f0f] text-white",
        borderClass: "border border-zinc-800",
        labelColor: "text-zinc-400",
        accentColor: "text-orange-400",
        checkColor: "text-orange-400",
        buttonClass: "bg-orange-500 hover:bg-orange-600 text-white",
        whyBg: "bg-white/5 border border-white/10",
        dividerClass: "border-zinc-700",
        pricingRowClass: "border-zinc-700/50",
        totalBg: "bg-orange-500/10",
        totalText: "text-orange-400"
    },
    {
        tier: "Mid-Range",
        totalPrice: "$4,210",
        destinations: "Entebbe – Kibale National Park – Queen Elizabeth National Park – Bwindi – Lake Mburo National Park",
        accommodations: [
            { location: "Entebbe", place: "2 Friends Beach Hotel / ViaVia Entebbe" },
            { location: "Kibale", place: "Turaco Treetops / Chimpanzee Forest Lodge" },
            { location: "Queen Elizabeth", place: "Twin Lakes Safari Lodge / Buffalo Safari Lodge" },
            { location: "Bwindi", place: "Mahogany Springs Lodge / Lake Mulehe Safari Lodge" },
            { location: "Lake Mburo", place: "Rwakobo Rock / Arcadia Cottages Mburo" }
        ],
        pricing: [
            { item: "Mid-Range Accommodation (6 Nights)", cost: "$1,450" },
            { item: "4x4 Safari Vehicle + Fuel", cost: "$840" },
            { item: "Gorilla Permit", cost: "$800" },
            { item: "Chimpanzee Permit", cost: "$250" },
            { item: "Park Entrance Fees", cost: "$300" },
            { item: "Boat Cruise (Kazinga Channel)", cost: "$40" },
            { item: "Professional Guide (7 Days)", cost: "$350" },
            { item: "Meals & Drinking Water", cost: "$180" }
        ],
        highlights: [
            "Gorilla trekking in Bwindi Impenetrable Forest",
            "Chimpanzee tracking in Kibale National Park",
            "Tree-climbing lions in Ishasha sector",
            "Kazinga Channel boat cruise",
            "Walking safari in Lake Mburo",
            "Scenic landscapes and cultural encounters"
        ],
        whyChoose: "This mid-range safari balances comfort, value, and authentic safari experiences, with carefully selected lodges, expert guiding, and access to Uganda's most celebrated wildlife destinations.",
        bgClass: "bg-white text-gray-900",
        borderClass: "border-2 border-orange-500 lg:-translate-y-4 relative z-10",
        labelColor: "text-gray-400",
        accentColor: "text-emerald-700",
        checkColor: "text-emerald-600",
        buttonClass: "bg-[#0f0f0f] hover:bg-gray-800 text-white",
        whyBg: "bg-orange-50 border border-orange-100",
        dividerClass: "border-gray-200",
        pricingRowClass: "border-gray-100",
        totalBg: "bg-orange-50",
        totalText: "text-orange-600",
        popular: true
    },
    {
        tier: "Budget Range",
        totalPrice: "$3,400",
        destinations: "Entebbe – Kibale National Park – Queen Elizabeth National Park – Bwindi – Lake Mburo National Park",
        accommodations: [
            { location: "Entebbe", place: "Secrets Guest House / Airport Link Guest House / Airport Guest House" },
            { location: "Kibale", place: "Kalitusi Natural Resort / Kibale Forest Lodge / Kibale Echo Lodge" },
            { location: "Queen Elizabeth", place: "Engiri Lodge / Mweya Safari Lodge" },
            { location: "Bwindi", place: "Gorilla Bluff Lodge / Bwindi Guest House" },
            { location: "Lake Mburo", place: "Mburo Eagles Nest / Leopard Rest Camp" }
        ],
        pricing: [
            { item: "Budget Accommodation (6 Nights)", cost: "$1,100" },
            { item: "4x4 Safari Vehicle + Fuel", cost: "$700" },
            { item: "Gorilla Permit", cost: "$800" },
            { item: "Chimpanzee Permit", cost: "$250" },
            { item: "Park Entrance Fees", cost: "$300" },
            { item: "Boat Cruise (Kazinga Channel)", cost: "$40" },
            { item: "Professional Guide", cost: "$210" }
        ],
        highlights: [
            "Gorilla trekking in Bwindi Impenetrable Forest",
            "Chimpanzee tracking in Kibale National Park",
            "Tree-climbing lions in Ishasha sector",
            "Kazinga Channel boat cruise",
            "Walking safari in Lake Mburo",
            "Scenic landscapes and cultural encounters"
        ],
        whyChoose: "This budget-friendly safari offers incredible value, authentic local guesthouses, expert guiding, and perfectly timed photography experiences across Uganda's most iconic destinations.",
        bgClass: "bg-zinc-50 text-gray-900",
        borderClass: "border border-zinc-200",
        labelColor: "text-gray-400",
        accentColor: "text-emerald-600",
        checkColor: "text-emerald-600",
        buttonClass: "bg-emerald-600 hover:bg-emerald-700 text-white",
        whyBg: "bg-emerald-50 border border-emerald-100",
        dividerClass: "border-gray-200",
        pricingRowClass: "border-gray-100",
        totalBg: "bg-emerald-50",
        totalText: "text-emerald-700"
    }
];

const Packages = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const headerOffset = 80;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="packages" className="py-24 px-6 md:px-12 lg:px-20 bg-zinc-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto md:max-w-2xl lg:max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                        General Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                        Uganda Safari Packages
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Choose the perfect style for your adventure. Whether you seek ultimate luxury or incredible budget value, we ensure a life-changing experience in the Pearl of Africa.
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-start pb-8">
                    {packagesData.map((pkg, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl rounded-tr-none p-8 flex flex-col h-full transition-all duration-300 shadow-lg hover:shadow-xl ${pkg.bgClass} ${pkg.borderClass}`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Tier Name & Total */}
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold font-['Campuni']">{pkg.tier}</h3>
                                <div className="mt-3 flex items-baseline gap-2">
                                    <span className={`text-4xl font-extrabold ${pkg.totalText}`}>{pkg.totalPrice}</span>
                                    <span className={`text-sm ${pkg.labelColor}`}>per person</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-8">
                                {/* Destinations */}
                                <div>
                                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${pkg.labelColor}`}>
                                        Destinations Covered
                                    </h4>
                                    <p className="text-sm leading-relaxed font-medium">
                                        {pkg.destinations}
                                    </p>
                                </div>

                                {/* Pricing Table */}
                                <div>
                                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${pkg.labelColor}`}>
                                        Detailed Costing Per Person (USD)
                                    </h4>
                                    <div className="rounded-xl overflow-hidden">
                                        {pkg.pricing.map((row, i) => (
                                            <div 
                                                key={i} 
                                                className={`flex items-center justify-between py-3 px-3 text-sm border-b ${pkg.pricingRowClass} ${i % 2 === 0 ? 'bg-black/[0.02]' : ''}`}
                                            >
                                                <span className="opacity-90 flex-1 pr-4">{row.item}</span>
                                                <span className="font-bold whitespace-nowrap">{row.cost}</span>
                                            </div>
                                        ))}
                                        {/* Total Row */}
                                        <div className={`flex items-center justify-between py-4 px-3 text-sm font-bold rounded-b-xl ${pkg.totalBg}`}>
                                            <span className={`${pkg.totalText} text-base`}>Total Package</span>
                                            <span className={`${pkg.totalText} text-xl`}>{pkg.totalPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Accommodations */}
                                <div>
                                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${pkg.labelColor}`}>
                                        Accommodation Options
                                    </h4>
                                    <ul className="space-y-3">
                                        {pkg.accommodations.map((acc, i) => (
                                            <li key={i} className="text-sm">
                                                <span className={`font-bold mr-2 ${pkg.accentColor}`}>{acc.location}:</span>
                                                <span className="opacity-90">{acc.place}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Highlights */}
                                <div className={`pt-6 border-t ${pkg.dividerClass}`}>
                                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${pkg.labelColor}`}>
                                        Safari Highlights
                                    </h4>
                                    <ul className="space-y-3">
                                        {pkg.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.checkColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="opacity-90">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose */}
                                <div className={`p-4 rounded-xl ${pkg.whyBg}`}>
                                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${pkg.labelColor}`}>
                                        Why Choose This Safari
                                    </h4>
                                    <p className="text-sm leading-relaxed italic opacity-90">
                                        "{pkg.whyChoose}"
                                    </p>
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className={`mt-8 pt-8 border-t ${pkg.dividerClass} text-center`}>
                                <p className="text-sm font-semibold mb-6 opacity-90">
                                    We look forward to hosting you in the Pearl of Africa.
                                </p>
                                <button
                                    onClick={handleContactClick}
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-md hover:shadow-lg ${pkg.buttonClass}`}
                                >
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
