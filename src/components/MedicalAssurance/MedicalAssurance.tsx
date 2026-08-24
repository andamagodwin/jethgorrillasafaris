import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';

const refundConditions = [
    {
        title: 'Severe Illness or Injury',
        description: 'A serious health condition that prevents travel, confirmed by a medical certificate.',
    },
    {
        title: 'Pregnancy-Related Complications',
        description: 'A serious health condition that prevents travel, confirmed by a medical certificate.',
    },
    {
        title: 'Valid Proof Documents',
        description: 'All medical certificates or proof documents must be submitted to Eyre Gorilla Adventures Ltd.',
    },
];

const MedicalAssurance = () => {
    return (
        <section id="medical-assurance" className="relative bg-zinc-50 py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-3xl mx-auto">
                <div className="rounded-2xl bg-orange-50 border border-orange-100 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        For only <span className="italic font-serif">Medical Purpose</span> you can get a refund
                    </h2>

                    <ul className="mt-6 space-y-5">
                        {refundConditions.map((item) => (
                            <li key={item.title} className="flex items-start gap-3">
                                <HugeiconsIcon
                                    icon={CheckmarkCircle02Icon}
                                    size={22}
                                    strokeWidth={1.5}
                                    className="text-gray-700 flex-shrink-0 mt-0.5"
                                />
                                <p className="text-gray-700 leading-relaxed">
                                    <span className="font-bold text-gray-900">{item.title}</span> – {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MedicalAssurance;
