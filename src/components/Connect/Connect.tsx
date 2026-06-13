import { Link } from 'react-router-dom';

const owner = {
    name: 'Ahebwa Evans',
    title: 'Owner & Safari Director',
    phoneDisplay: '+256 750 537 127',
    phoneDial: '+256750537127',
    email: 'info@eyregorillaadventuresltd.com',
    poBox: 'P.O BOX 203725',
    city: 'Kampala GPO, Uganda',
    whatsapp: 'https://wa.me/256750537127?text=Hello%20Eyre%20Gorilla%20Adventures%2C%20I%20would%20like%20to%20book%20a%20safari.',
    vcfUrl: '/owner-contact.vcf',
    socialLinks: [
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/share/1FK9hLGhQV/?mibextid=wwXIfr'
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/eyre_gorilla_adventures_ltd'
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/256750537127'
        },
        {
            label: 'TikTok',
            href: 'https://www.tiktok.com/@eyre.gorilla.adve?_r=1&_t=ZS-952avi7uknB'
        }
    ]
};

const Connect = () => {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <section className="rounded-3xl border border-amber-100 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-8 md:p-12 text-white">
                        <div className="inline-flex items-center gap-3 mb-5 rounded-2xl bg-white/10 px-3 py-2">
                            <img
                                src="https://res.cloudinary.com/ddfpgrpdj/image/upload/q_auto/eyre_gorilla/logo-no-txt.png"
                                alt="Eyre Gorilla Adventures Ltd Logo"
                                className="w-11 h-11 object-contain"
                            />
                            <span className="text-sm md:text-base font-semibold tracking-wide">Eyre Gorilla Adventures Ltd</span>
                        </div>
                        <p className="uppercase tracking-[0.22em] text-[11px] md:text-xs font-semibold text-orange-100 mb-3">
                            Quick Contact Card
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Connect with Eyre Gorilla Adventures</h1>
                        <p className="mt-3 text-orange-50 max-w-2xl">
                            Save the owner&apos;s contact in one tap, chat on WhatsApp, and jump back to our safari packages.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 grid gap-10 md:grid-cols-[1.2fr_1fr]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">Owner Contact</p>
                            <h2 className="text-3xl font-bold text-gray-900">{owner.name}</h2>
                            <p className="text-lg text-orange-600 font-semibold mt-1">{owner.title}</p>

                            <div className="mt-6 space-y-3 text-gray-700 selectable">
                                <a href={`tel:${owner.phoneDial}`} className="block hover:text-orange-600 transition-colors">
                                    <span className="text-sm text-gray-500">Phone:</span> {owner.phoneDisplay}
                                </a>
                                <a href={`mailto:${owner.email}`} className="block hover:text-orange-600 transition-colors break-all">
                                    <span className="text-sm text-gray-500">Email:</span> {owner.email}
                                </a>
                                <div className="pt-2">
                                    <p className="text-sm text-gray-500">P.O. Box:</p>
                                    <p>{owner.poBox}</p>
                                    <p>{owner.city}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-gray-500 mb-3">Follow Us:</p>
                                <div className="flex flex-wrap gap-2">
                                    {owner.socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-colors"
                                        >
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={owner.vcfUrl}
                                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors"
                            >
                                Save to Contacts
                            </a>

                            <a
                                href={owner.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-colors"
                            >
                                Chat on WhatsApp
                            </a>

                            <Link
                                to="/#packages"
                                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-base font-bold text-gray-900 hover:border-orange-300 hover:text-orange-600 transition-colors"
                            >
                                View Tour Packages
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Connect;
