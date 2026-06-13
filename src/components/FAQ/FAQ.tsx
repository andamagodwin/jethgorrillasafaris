import { useState } from 'react';

const faqs = [
    {
        question: "What is the best time to go gorilla trekking?",
        answer: "The best time for gorilla trekking is during the dry seasons from June to September and December to February. During these months, the trails are less muddy and hiking conditions are more favorable."
    },
    {
        question: "How fit do I need to be for gorilla trekking?",
        answer: "Gorilla trekking can be moderately challenging, requiring hikes of 1-8 hours through uneven terrain. A reasonable level of fitness is recommended, but our guides pace the trek according to your abilities."
    },
    {
        question: "What should I pack for a gorilla trekking safari?",
        answer: "Essential items include sturdy hiking boots, long trousers and long-sleeved shirts, rain gear, gardening gloves, a hat, sunscreen, insect repellent, and plenty of water. We provide a detailed packing list upon booking."
    },
    {
        question: "How close can I get to the gorillas?",
        answer: "Visitors are allowed to get within 7 meters (21 feet) of the gorillas. This distance is strictly enforced to protect both the gorillas and visitors. The experience typically lasts one hour once the gorillas are located."
    },
    {
        question: "Are gorilla trekking permits included in the package?",
        answer: "Yes, gorilla trekking permits are included in our safari packages. We handle all the permit bookings and logistics so it's sorted before you arrive."
    },
    {
        question: "What is the age limit for gorilla trekking?",
        answer: "The minimum age for gorilla trekking is 15 years old. This is strictly enforced by the park authorities. There is no upper age limit, provided you are in good health."
    },
    {
        question: "Is it safe to visit the gorillas?",
        answer: "Yes, gorilla trekking is very safe. The gorillas are habituated to human presence and are generally peaceful. Our experienced guides ensure your safety throughout the trek and provide detailed briefings before the experience."
    },
    {
        question: "Can I combine gorilla trekking with other activities?",
        answer: "Absolutely! We offer customizable packages that combine gorilla trekking with wildlife safaris, bird watching, chimpanzee tracking, cultural tours, and adventure activities like white water rafting."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest mb-4 inline-block font-['Campuni']"
                    >
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Uganda Gorilla Trekking Safaris
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about our gorilla trekking experiences and safari packages.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-orange-200 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <span
                                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                        openIndex === index
                                            ? 'border-orange-500 bg-orange-500 text-white'
                                            : 'border-gray-300 text-gray-400'
                                    }`}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-45' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
