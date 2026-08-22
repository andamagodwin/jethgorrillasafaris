import { Link } from 'react-router-dom';

const director = {
    name: 'Ahebwa Evans',
    title: 'Managing Director, Eyre Gorilla Adventures Ltd',
    photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787423074/WhatsApp_Image_2026-08-22_at_20.31.18_opox3y.jpg',
    whatsapp: 'https://wa.me/256750537127?text=Hello%20Evans%2C%20I%20would%20like%20to%20plan%20a%20safari.',
};

const ManagingDirector = () => {
    return (
        <section id="managing-director" className="relative bg-[#f5f0e8] py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Portrait */}
                    <div className="relative max-w-md w-full mx-auto md:mx-0">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#e8e0d0] shadow-sm">
                            <img
                                src={director.photo}
                                alt={director.name}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <span className="text-orange-500 font-bold text-sm md:text-base uppercase inline-block font-['Campuni']">
                            Meet Your Host
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                            Every safari is planned by Ahebwa Evans
                        </h2>

                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            {director.title}
                        </p>

                        <p className="text-lg text-gray-600 mt-5 leading-relaxed">
                            Evans owns Eyre Gorilla Adventures and plans every trip himself. He works out the
                            routes, checks permit availability, picks the lodges and answers your messages, so
                            you are dealing with the person who actually runs the safari rather than a booking desk.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href={director.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                            >
                                Message Evans
                            </a>
                            <Link
                                to="/connect"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold uppercase tracking-wider text-sm hover:border-orange-300 hover:text-orange-600 transition-colors duration-300"
                            >
                                Contact Card
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagingDirector;
