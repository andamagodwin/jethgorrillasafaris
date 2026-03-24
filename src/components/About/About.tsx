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
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span
                                    className="text-orange-500 font-bold text-2xl md:text-3xl capitalize tracking-wide"
                                    style={{ fontFamily: "'Libre Baskerville', serif" }}
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
                        <div className="relative flex justify-center items-center w-full">
                            {/* <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                cardDimensions={{ width: 400, height: 500 }}
                                cardsData={images}
                            /> */}
                            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg">
                                <div className="space-y-4 md:space-y-6">
                                    <img 
                                        src="/images/image1.jpeg" 
                                        alt="Experience Uganda" 
                                        className="w-full h-40 sm:h-52 object-cover rounded-2xl shadow-xl hover:scale-[1.02] transform transition duration-300"
                                    />
                                    <img 
                                        src="/images/image3.jpeg" 
                                        alt="Safari Adventures" 
                                        className="w-full h-32 sm:h-44 object-cover rounded-2xl shadow-xl hover:scale-[1.02] transform transition duration-300"
                                    />
                                </div>
                                <div className="pt-8 md:pt-12">
                                    <img 
                                        src="/images/image2.jpeg" 
                                        alt="Mountain Gorillas" 
                                        className="w-full h-56 sm:h-[400px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transform transition duration-300"
                                    />
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
