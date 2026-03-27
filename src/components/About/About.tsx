// import Stack from '../Stack';

// const images = [
//     { id: 1, img: "https://images.pexels.com/photos/27056094/pexels-photo-27056094.png" },
//     { id: 2, img: "https://images.pexels.com/photos/8026840/pexels-photo-8026840.jpeg" },
//     { id: 3, img: "https://images.pexels.com/photos/6233528/pexels-photo-6233528.jpeg" },
//     { id: 4, img: "https://images.pexels.com/photos/27674975/pexels-photo-27674975.jpeg" }
// ];

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
                                    className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide font-['Campuni']"
                                >
                                    About Eyre Gorilla Adventures Ltd
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

                        {/* Right Content - Premium Collage */}
                        <div className="relative h-[520px] sm:h-[600px] lg:h-[680px] w-full">

                            {/* Main tall image - left of collage */}
                            <div className="absolute left-0 top-0 w-[58%] h-[75%] overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="/images/culture.jpeg"
                                    alt="Ugandan Culture"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Top-right small image */}
                            <div className="absolute right-0 top-0 w-[38%] h-[36%] overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="/images/image2.jpeg"
                                    alt="Wildlife"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Mid-right image */}
                            <div className="absolute right-0 top-[40%] w-[38%] h-[32%] overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="/images/adventure.jpeg"
                                    alt="Adventure Safari"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Bottom-left image — overlaps the main image slightly */}
                            <div className="absolute left-[5%] bottom-0 w-[42%] h-[30%] overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                                <img
                                    src="/images/gorilla/gorilla1.jpeg"
                                    alt="Mountain Gorilla"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Bottom-right image */}
                            <div className="absolute right-0 bottom-0 w-[55%] h-[26%] overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                                <img
                                    src="/images/image4.jpeg"
                                    alt="Safari Experience"
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
