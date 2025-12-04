const About = () => {
    return (
        <section className="relative bg-white -mt-1 z-10">

            {/* Content */}
            <div className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full">
                                    About Us
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Experience the Magic of Uganda
                            </h2>

                            <p className="text-md text-gray-600 leading-relaxed">
                                Embark on an extraordinary journey through Uganda's pristine wilderness.
                                From the misty mountains where mountain gorillas roam to the vast savannas
                                teeming with wildlife, every moment is an adventure waiting to unfold.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our expert guides bring decades of experience, ensuring you witness nature's
                                most spectacular moments while traveling in comfort and safety.
                            </p>
                        </div>

                        {/* Right Content - Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
