import { HugeiconsIcon } from '@hugeicons/react';
import { Route01Icon, Calendar03Icon, UserGroupIcon, GlobalIcon } from '@hugeicons/core-free-icons';
import { destinations } from '../../data/destinations';

/*
 * The first three figures are placeholders carried over from the reference
 * layout. Replace them with the real numbers before this goes live. The
 * destination count is derived from the destinations data, so it stays correct
 * on its own.
 */
const stats = [
    {
        icon: Route01Icon,
        label: 'Tours Completed',
        value: '19+',
        iconClass: 'text-amber-600',
        cardClass: 'bg-[#f5f0e8] border-[#e8e0d0]',
    },
    {
        icon: Calendar03Icon,
        label: 'Years of Experience',
        value: '3+',
        iconClass: 'text-orange-600',
        cardClass: 'bg-white border-gray-200',
    },
    {
        icon: UserGroupIcon,
        label: 'Happy Travellers',
        value: '22+',
        iconClass: 'text-emerald-600',
        cardClass: 'bg-orange-50 border-orange-100',
    },
    {
        icon: GlobalIcon,
        label: 'Destinations Covered',
        value: String(destinations.length),
        iconClass: 'text-sky-700',
        cardClass: 'bg-white border-gray-200',
    },
];

const Stats = () => {
    return (
        <section id="stats" className="relative bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase inline-block font-['Campuni']">
                        By the Numbers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Safaris, Guests and Places
                    </h2>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className={`rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${stat.cardClass}`}
                        >
                            <HugeiconsIcon
                                icon={stat.icon}
                                size={36}
                                strokeWidth={1.5}
                                className={stat.iconClass}
                            />

                            <p className="text-gray-600 font-medium mt-5">
                                {stat.label}
                            </p>

                            <p className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 font-['Campuni']">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
