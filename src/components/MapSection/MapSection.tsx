import { useEffect, useRef } from 'react';

const parks = [
    {
        name: 'Bwindi Impenetrable NP',
        lat: -1.0333, lng: 29.7167,
        type: 'gorilla',
        description: 'Home to half the world\'s mountain gorillas',
        highlight: true,
    },
    {
        name: 'Mgahinga Gorilla NP',
        lat: -1.3667, lng: 29.6333,
        type: 'gorilla',
        description: 'Gorilla trekking & golden monkeys',
        highlight: true,
    },
    {
        name: 'Queen Elizabeth NP',
        lat: -0.1667, lng: 30.0000,
        type: 'wildlife',
        description: 'Tree-climbing lions, hippos & elephants',
        highlight: false,
    },
    {
        name: 'Kibale Forest NP',
        lat: 0.5000, lng: 30.3500,
        type: 'chimp',
        description: 'Chimpanzee tracking capital of Africa',
        highlight: false,
    },
    {
        name: 'Murchison Falls NP',
        lat: 2.2833, lng: 31.7167,
        type: 'wildlife',
        description: 'Africa\'s most powerful waterfall & game drives',
        highlight: false,
    },
    {
        name: 'Lake Mburo NP',
        lat: -0.6167, lng: 30.9500,
        type: 'wildlife',
        description: 'Zebras, impalas & boat safaris',
        highlight: false,
    },
    {
        name: 'Rwenzori Mountains NP',
        lat: 0.3833, lng: 29.9000,
        type: 'adventure',
        description: 'Hiking the Mountains of the Moon',
        highlight: false,
    },
    {
        name: 'Kidepo Valley NP',
        lat: 3.8333, lng: 33.7500,
        type: 'wildlife',
        description: 'Remote wilderness with lions, cheetahs and more',
        highlight: false,
    },
    {
        name: 'Mount Elgon NP',
        lat: 1.1167, lng: 34.5500,
        type: 'adventure',
        description: 'Ancient caldera hikes & Sipi Falls',
        highlight: false,
    },
];

// Safari circuit routes: [from index, to index]
const routes: [number, number][] = [
    [3, 2], // Kibale → Queen Elizabeth
    [2, 0], // Queen Elizabeth → Bwindi
    [0, 1], // Bwindi → Mgahinga
    [2, 5], // Queen Elizabeth → Lake Mburo
    [3, 6], // Kibale → Rwenzori
    [4, 3], // Murchison → Kibale
];

const typeColors: Record<string, string> = {
    gorilla:   '#f97316', // orange-500
    chimp:     '#10b981', // emerald-500
    wildlife:  '#3b82f6', // blue-500
    adventure: '#8b5cf6', // violet-500
};

const legend = [
    { type: 'gorilla',   label: 'Gorilla Trekking',      color: '#f97316' },
    { type: 'chimp',     label: 'Chimpanzee Tracking',   color: '#10b981' },
    { type: 'wildlife',  label: 'Wildlife Safari',        color: '#3b82f6' },
    { type: 'adventure', label: 'Adventure / Hiking',     color: '#8b5cf6' },
];

const MapSection = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<unknown>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        const initMap = async () => {
            const L = (await import('leaflet')).default;
            await import('leaflet/dist/leaflet.css');

            const map = L.map(mapRef.current!, {
                center: [1.0, 31.5],
                zoom: 7,
                zoomControl: true,
                scrollWheelZoom: false,
            });

            mapInstanceRef.current = map;

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© <a href="https://carto.com/">CARTO</a> © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
                maxZoom: 18,
            }).addTo(map);

            // Draw routes
            routes.forEach(([fromIdx, toIdx]) => {
                const from = parks[fromIdx];
                const to   = parks[toIdx];
                L.polyline(
                    [[from.lat, from.lng], [to.lat, to.lng]],
                    { color: '#f97316', weight: 2, opacity: 0.5, dashArray: '6 6' }
                ).addTo(map);
            });

            // Draw park markers
            parks.forEach((park) => {
                const color = typeColors[park.type];
                const size  = park.highlight ? 18 : 14;

                const icon = L.divIcon({
                    className: '',
                    html: `
                        <div style="
                            width:${size}px;height:${size}px;
                            background:${color};
                            border:3px solid white;
                            border-radius:50%;
                            box-shadow:0 2px 8px rgba(0,0,0,0.3);
                            ${park.highlight ? 'outline:3px solid ' + color + '44;' : ''}
                        "></div>`,
                    iconSize:   [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

                L.marker([park.lat, park.lng], { icon })
                    .addTo(map)
                    .bindPopup(`
                        <div style="font-family:sans-serif;min-width:180px">
                            <div style="font-weight:700;font-size:14px;color:#111;margin-bottom:4px">${park.name}</div>
                            <div style="font-size:12px;color:#555">${park.description}</div>
                            <div style="margin-top:6px">
                                <span style="background:${color};color:white;font-size:10px;font-weight:600;padding:2px 8px;border-radius:99px">
                                    ${legend.find(l => l.type === park.type)?.label}
                                </span>
                            </div>
                        </div>
                    `, { maxWidth: 220 });
            });
        };

        initMap();

        return () => {
            if (mapInstanceRef.current) {
                (mapInstanceRef.current as { remove: () => void }).remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <section className="relative bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-widest mb-4 inline-block font-['Campuni']">
                        Explore Uganda
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                        Safari Routes &amp; Game Parks
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        See where each of our destinations sits, from the gorilla forests of Bwindi to the plains of Murchison Falls.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {legend.map((l) => (
                        <span
                            key={l.type}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-50 border border-gray-200 text-gray-700"
                        >
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                            {l.label}
                        </span>
                    ))}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-50 border border-gray-200 text-gray-700">
                        <span className="w-6 h-0.5 bg-orange-400 inline-block opacity-60" style={{ borderTop: '2px dashed #f97316' }} />
                        Safari Route
                    </span>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <div ref={mapRef} style={{ height: '520px', width: '100%' }} />
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                    Click any marker to learn more about each destination.
                </p>
            </div>
        </section>
    );
};

export default MapSection;
