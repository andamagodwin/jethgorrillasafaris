import { HugeiconsIcon } from '@hugeicons/react';
import { PassportIcon, GloveIcon, Backpack01Icon, WalkingIcon } from '@hugeicons/core-free-icons';

const categories = [
    {
        icon: PassportIcon,
        title: 'Documents & Permits',
        items: [
            'Passport',
            'Gorilla trekking permit',
            'Travel insurance',
            'Visa, if required',
            'Booking/itinerary confirmation',
            'Emergency contact details',
        ],
    },
    {
        icon: GloveIcon,
        title: 'What to Wear',
        items: [
            'Long-sleeved shirt',
            'Long, comfortable trousers',
            'Waterproof hiking boots',
            'Waterproof jacket',
            'Mask',
        ],
    },
    {
        icon: Backpack01Icon,
        title: 'Gear to Pack',
        items: [
            'Small waterproof backpack',
            'Drinking water',
            'Snacks',
            'Insect repellent',
            'Camera/phone',
            'Personal medication',
            'Walking stick',
        ],
    },
    {
        icon: WalkingIcon,
        title: 'Fitness & Age',
        items: [
            'Moderate fitness level',
            'Steep, muddy terrain',
            'Minimum age of 15',
            'Porters available',
        ],
    },
];

const TrekkingChecklist = () => {
    return (
        <section id="trekking-checklist" className="relative bg-zinc-50 py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase inline-block font-['Campuni']">
                        Get Ready
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Gorilla Trekking Preparation Guide
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Everything to sort out and pack before you head into the forest.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div key={category.title} className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-7">
                            <HugeiconsIcon
                                icon={category.icon}
                                size={30}
                                strokeWidth={1.5}
                                className="text-gray-900"
                            />

                            <h3 className="text-lg font-bold text-gray-900 mt-5 font-['Campuni']">
                                {category.title}
                            </h3>

                            <ul className="mt-4 space-y-2.5">
                                {category.items.map((item) => (
                                    <li key={item} className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-orange-200">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrekkingChecklist;
