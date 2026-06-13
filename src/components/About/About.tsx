const About = () => {
    return (
        <section id="about" className="relative bg-white -mt-1 z-10">
            {/* Content */}
            <div className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span
                                    className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest font-['Campuni']"
                                >
                                    About Eyre Gorilla Adventures Ltd
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Experience the Magic of Uganda
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Uganda packs a huge range of landscapes into one country.
                                From the misty mountains where gorillas live to the wide savannas full of wildlife,
                                there's always something new to see.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our guides have spent years in these parks and know them well, so you travel
                                in good hands and in comfort.
                            </p>
                        </div>

                        {/* Right Content - Premium Collage */}
                        <div className="relative h-[520px] sm:h-[600px] lg:h-[680px] w-full">

                            {/* Main tall image - left of collage */}
                            <div className="absolute left-0 top-0 w-[58%] h-[75%] overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293870/eyre_gorilla/images/culture.jpg"
                                    alt="Ugandan Culture"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Top-right small image */}
                            <div className="absolute right-0 top-0 w-[38%] h-[36%] overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293925/eyre_gorilla/images/image2.jpg"
                                    alt="Wildlife"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Mid-right image */}
                            <div className="absolute right-0 top-[40%] w-[38%] h-[32%] overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293844/eyre_gorilla/images/adventure.jpg"
                                    alt="Adventure Safari"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Bottom-left image, overlaps the main image slightly */}
                            <div className="absolute left-[5%] bottom-0 w-[42%] h-[30%] overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                                <img
                                    src="https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293924/eyre_gorilla/images/image1.jpg"
                                    alt="Chimpanzee"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Bottom-right image */}
                            <div className="absolute right-0 bottom-0 w-[55%] h-[26%] overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                                <img
                                    src="https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1779293926/eyre_gorilla/images/image4.jpg"
                                    alt="Safari Experience"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
