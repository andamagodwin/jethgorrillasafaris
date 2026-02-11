import Stack from '../Stack';

const images = [
    { id: 1, img: "https://images.pexels.com/photos/27056094/pexels-photo-27056094.png" },
    { id: 2, img: "https://images.pexels.com/photos/8026840/pexels-photo-8026840.jpeg" },
    { id: 3, img: "https://images.pexels.com/photos/6233528/pexels-photo-6233528.jpeg" },
    { id: 4, img: "https://images.pexels.com/photos/27674975/pexels-photo-27674975.jpeg" }
];

const About = () => {
    return (
        <section id="about" className="relative bg-white -mt-1 z-10">
            {/* Content */}
            <div className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span
                                    className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent font-semibold text-5xl tracking-wide"
                                    style={{ fontFamily: "'Dancing Script', cursive" }}
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

                        {/* Right Content - Interactive Stack */}
                        <div className="flex justify-center items-center">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                cardDimensions={{ width: 400, height: 500 }}
                                cardsData={images}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
