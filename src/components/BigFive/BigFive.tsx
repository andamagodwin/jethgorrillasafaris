const bigFiveAnimals = [
    {
        name: "Lion",
        subtitle: "King of the Savannah",
        description: "Spot the majestic lions and rare tree-climbing lions of the Ishasha sector in Queen Elizabeth National Park.",
        image: "/images/safari10.jpeg"
    },
    {
        name: "Leopard",
        subtitle: "The Elusive Shadow",
        description: "Track the stealthy leopard through the dense forests and open plains of Uganda's premier national parks.",
        image: "/images/Leopard.jpeg"
    },
    {
        name: "Elephant",
        subtitle: "The Gentle Giant",
        description: "Witness herds of African elephants roaming freely across the savannahs of Queen Elizabeth and Murchison Falls.",
        image: "/images/elephant.jpeg"
    },
    {
        name: "Buffalo",
        subtitle: "The Unpredictable Force",
        description: "Encounter massive herds of Cape buffalo grazing on the open plains and along the Kazinga Channel.",
        image: "/images/buffalo.jpeg"
    },
    {
        name: "Rhino",
        subtitle: "The Armoured One",
        description: "Visit Ziwa Rhino Sanctuary, the only place in Uganda where you can track Southern White Rhinos on foot.",
        image: "/images/safari7.jpeg"
    }
];

const BigFive = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                        Africa's Iconic Wildlife
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                        The Big Five
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
                        Encounter the legendary Big Five on an unforgettable Ugandan safari.
                    </p>
                </div>

                {/* Big Five Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {bigFiveAnimals.map((animal, index) => (
                        <div
                            key={index}
                            className="group relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${animal.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                            {/* Number */}
                            <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                                <span className="text-white/60 text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                                    <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-2">
                                        {animal.subtitle}
                                    </span>
                                    <h3 className="text-3xl font-bold mb-3 font-['Campuni']">
                                        {animal.name}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        {animal.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BigFive;
