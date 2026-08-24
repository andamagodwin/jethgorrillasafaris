import { HugeiconsIcon } from '@hugeicons/react';
import { Leaf01Icon, HandHeartIcon, Compass01Icon } from '@hugeicons/core-free-icons';

const pillars = [
    {
        icon: Leaf01Icon,
        title: 'Conservation First',
        description: 'We plan trips that protect the forests and wildlife they depend on.',
    },
    {
        icon: HandHeartIcon,
        title: 'Community Powered',
        description: 'Local guides, lodges, and communities benefit directly from every safari.',
    },
    {
        icon: Compass01Icon,
        title: 'Personally Guided',
        description: 'Every itinerary is planned and followed through by someone who knows the parks.',
    },
];

const Mission = () => {
    return (
        <section
            id="mission"
            className="relative text-white py-20 md:py-24 px-6 md:px-12 lg:px-20 z-10 bg-[#0f0f0f] bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(15,15,15,0.55), rgba(15,15,15,0.65)), url('https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293879/eyre_gorilla/images/culture15.jpg')" }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-orange-400 font-bold text-sm md:text-base uppercase inline-block font-['Campuni']">
                    Our Mission
                </span>

                <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                    To Share Uganda's Wild Heart, Responsibly
                </h2>

                <p className="text-lg text-zinc-300 mt-6 leading-relaxed max-w-2xl mx-auto">
                    We exist to give travelers real access to Uganda's gorillas, chimpanzees, and parks,
                    while protecting the forests and communities that make it possible. Every trip we plan
                    puts your safety first, supports the people on the ground, and leaves the parks as wild
                    as we found them.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {pillars.map((pillar) => (
                    <div key={pillar.title} className="text-center md:text-left">
                        <HugeiconsIcon
                            icon={pillar.icon}
                            size={28}
                            strokeWidth={1.5}
                            className="text-orange-400 mx-auto md:mx-0"
                        />
                        <h3 className="text-lg font-bold mt-4 font-['Campuni']">
                            {pillar.title}
                        </h3>
                        <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Mission;
