
const languages = [
    { name: 'English', sub: 'Native / Professional', icon: '🇬🇧' },
    { name: 'French', sub: 'Français', icon: '🇫🇷' },
    { name: 'Spanish', sub: 'Español', icon: '🇪🇸' },
    { name: 'German', sub: 'Deutsch', icon: '🇩🇪' },
    { name: 'Kishwahili', sub: 'Swahili', icon: '🌍' }
];

const Languages = () => {
    return (
        <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20 z-10 font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left side: Text */}
                <div className="flex-1 text-center md:text-left">
                    <span
                        className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide mb-4 inline-block"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                        Global Connection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight mb-6">
                        We Speak Your Language
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        To ensure your safari experience is as seamless and comfortable as possible, our team includes expert linguists fluent in major global and local languages. Communication is never a barrier to your adventure.
                    </p>
                </div>

                {/* Right side: Language Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                    {languages.map((lang, index) => (
                        <div 
                            key={index}
                            className="p-6 bg-zinc-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <span className="text-3xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">
                                {lang.icon}
                            </span>
                            <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {lang.name}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">
                                {lang.sub}
                            </p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

export default Languages;
