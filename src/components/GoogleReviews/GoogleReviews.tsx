import { useEffect } from 'react';

const GoogleReviews = () => {
    useEffect(() => {
        // Load Elfsight script if not already present
        const scriptId = 'elfsight-platform-js';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section id="reviews" className="relative bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20 z-10 overflow-hidden">
            {/* Subtle background pattern to match the site's theme */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Guest Reviews
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We take pride in providing exceptional safari experiences. See what our guests have to say about their adventures with us.
                    </p>
                </div>

                {/* Elfsight Widget Container */}
                <div className="min-h-[400px]">
                    <div className="elfsight-app-5353df75-77a8-4c62-9d3c-1cc477e42315" data-elfsight-app-lazy></div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
