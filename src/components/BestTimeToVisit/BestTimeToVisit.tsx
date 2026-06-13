const months = [
    { name: 'January',   rating: 'Excellent',  rainfall: 'Low',             note: 'Occasional afternoon showers' },
    { name: 'February',  rating: 'Excellent',  rainfall: 'Low',             note: 'Driest month in some years' },
    { name: 'March',     rating: 'Good',       rainfall: 'Moderate',        note: 'Rains begin, mostly afternoons' },
    { name: 'April',     rating: 'Fair',       rainfall: 'High',            note: 'Heaviest rainfall month' },
    { name: 'May',       rating: 'Good',       rainfall: 'Moderate–High',   note: 'Decreasing through the month' },
    { name: 'June',      rating: 'Excellent',  rainfall: 'Low',             note: 'Dry season begins' },
    { name: 'July',      rating: 'Excellent',  rainfall: 'Very Low',        note: 'Driest period' },
    { name: 'August',    rating: 'Excellent',  rainfall: 'Very Low',        note: 'Dry season continues' },
    { name: 'September', rating: 'Excellent',  rainfall: 'Low',             note: 'Dry season ends late September' },
    { name: 'October',   rating: 'Very Good',  rainfall: 'Moderate',        note: 'Afternoon showers return' },
    { name: 'November',  rating: 'Very Good',  rainfall: 'Moderate',        note: 'Easing by late November' },
    { name: 'December',  rating: 'Excellent',  rainfall: 'Low',             note: 'Dry season returns' },
];

type Rating = 'Excellent' | 'Very Good' | 'Good' | 'Fair';

const ratingConfig: Record<Rating, { badge: string; dot: string }> = {
    Excellent: {
        badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
        dot:   'bg-emerald-400',
    },
    'Very Good': {
        badge: 'bg-sky-50 text-sky-700 border border-sky-200',
        dot:   'bg-sky-400',
    },
    Good: {
        badge: 'bg-amber-50 text-amber-700 border border-amber-200',
        dot:   'bg-amber-400',
    },
    Fair: {
        badge: 'bg-rose-50 text-rose-600 border border-rose-200',
        dot:   'bg-rose-400',
    },
};

const BestTimeToVisit = () => {
    return (
        <section className="relative bg-[#f5f0e8] py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-[#e8e0d0]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest mb-4 inline-block font-['Campuni']">
                        Plan Your Visit
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        When to Go: Month-by-Month Guide
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Gorilla trekking runs every day of the year — but which month is best for you?
                    </p>

                    {/* Legend */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {(Object.keys(ratingConfig) as Rating[]).map((r) => (
                            <span
                                key={r}
                                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${ratingConfig[r].badge}`}
                            >
                                <span className={`w-2 h-2 rounded-full ${ratingConfig[r].dot}`} />
                                {r}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Month Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {months.map((m) => {
                        const cfg = ratingConfig[m.rating as Rating];
                        return (
                            <div
                                key={m.name}
                                className="bg-white rounded-2xl p-5 border border-[#e8e0d0] hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col gap-3"
                            >
                                <h3 className="text-xl font-bold text-gray-900 font-['Campuni']">
                                    {m.name}
                                </h3>
                                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${cfg.badge}`}>
                                    {m.rating}
                                </span>
                                <p className="text-sm text-gray-500 leading-snug">
                                    <span className="font-semibold text-gray-700">{m.rainfall}</span>
                                    {' — '}
                                    {m.note}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Peak season note */}
                <div className="mt-14 text-center">
                    <p className="text-gray-600 text-lg">
                        Peak season is <span className="font-semibold text-gray-900">June – September</span> &amp; <span className="font-semibold text-gray-900">December – February</span>. Book early — permits sell out fast.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BestTimeToVisit;
