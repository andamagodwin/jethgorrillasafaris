import Stack from '../Stack';

const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

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
                                <span
                                    className="text-amber-600 font-semibold text-5xl tracking-wide decoration-2 decoration-amber-400 underline-offset-4"
                                    style={{ fontFamily: "'Dancing Script', cursive" }}
                                >
                                    About Jeth Gorilla Safaris
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
                                cardDimensions={{ width: 300, height: 300 }}
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
