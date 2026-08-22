import { HugeiconsIcon } from '@hugeicons/react';
import { Message01Icon, Ticket01Icon, Car03Icon } from '@hugeicons/core-free-icons';

const steps = [
    {
        icon: Message01Icon,
        title: 'Tell us your dates',
        description: 'Send the dates you have in mind and the parks you want to see. A short message is enough to start.',
    },
    {
        icon: Ticket01Icon,
        title: 'We secure permits',
        description: 'Gorilla permits are capped daily and often go months ahead. We confirm what is open before you pay.',
    },
    {
        icon: Car03Icon,
        title: 'You travel',
        description: 'We meet you at Entebbe. Your guide and vehicle stay with you for the whole trip.',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="relative bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest inline-block font-['Campuni']">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Three steps, start to finish
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.title} className="border border-gray-200 rounded-2xl p-6 lg:p-7">
                            <span className="block text-xs font-semibold tracking-[0.2em] text-gray-400">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <HugeiconsIcon
                                icon={step.icon}
                                size={30}
                                strokeWidth={1.5}
                                className="text-gray-900 mt-6"
                            />

                            <h3 className="text-lg font-bold text-gray-900 mt-5 font-['Campuni']">
                                {step.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed mt-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
