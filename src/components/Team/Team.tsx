const teamMembers = [
    {
        initials: 'AE',
        name: 'Ahebwa Evans',
        role: 'Managing Director',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787423074/WhatsApp_Image_2026-08-22_at_20.31.18_opox3y.jpg',
    },
    {
        initials: 'NT',
        name: 'Namanya Travis',
        role: 'Lawyer',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787577883/WhatsApp_Image_2026-08-24_at_16.24.01_thiubw.jpg',
    },
    {
        initials: 'BD',
        name: 'Betty Davis',
        role: 'Operations',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787578690/WhatsApp_Image_2026-08-24_at_16.36.37_xrxhvm.jpg',
    },
    {
        initials: 'AD',
        name: 'Abeho Danis',
        role: 'Guest Relations',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787578602/WhatsApp_Image_2026-08-24_at_16.35.49_rzeqtp.jpg',
    },
    {
        initials: 'NS',
        name: 'Nayebare Stacie',
        role: 'Guest Relations',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787579448/WhatsApp_Image_2026-08-24_at_16.40.27_w3by1h.jpg',
    },
    {
        initials: 'AA',
        name: 'Alfred Abasa',
        role: 'Driver-Guide',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787578312/WhatsApp_Image_2026-08-24_at_16.31.27_vmheci.jpg',
    },
    {
        initials: 'AK',
        name: 'Akankwasa Kevin',
        role: 'Field Guide',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787580146/WhatsApp_Image_2026-08-24_at_17.01.38_zu7kwv.jpg',
    },
    {
        initials: 'MB',
        name: 'Matej Benko',
        role: 'Booking Agent',
        photo: 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/v1787578097/WhatsApp_Image_2026-08-24_at_16.25.31_p2hydo.jpg',
    },
];

const Team = () => {
    return (
        <section id="team" className="relative bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase inline-block font-['Campuni']">
                        Meet The Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        The People Behind Your Safari
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Guides, drivers, and staff who make every trip run smoothly.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="border border-black rounded-2xl p-6 text-center">
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-20 h-20 rounded-full object-cover mx-auto"
                                />
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl font-bold mx-auto font-['Campuni']">
                                    {member.initials}
                                </div>
                            )}
                            <h3 className="text-base font-bold text-gray-900 mt-4 font-['Campuni']">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
