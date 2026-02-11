import Masonry from '../Masonry';

const items = [
    {
        id: "1",
        img: "https://images.pexels.com/photos/35002913/pexels-photo-35002913.jpeg",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://images.pexels.com/photos/35018550/pexels-photo-35018550.jpeg",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg",
        url: "https://example.com/three",
        height: 600,
    },
    {
        id: "4",
        img: "https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg",
        url: "https://example.com/four",
        height: 350,
    },
    {
        id: "5",
        img: "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg",
        url: "https://example.com/five",
        height: 450,
    },
    {
        id: "6",
        img: "https://images.pexels.com/photos/1524628/pexels-photo-1524628.jpeg",
        url: "https://example.com/six",
        height: 300,
    },
    {
        id: "7",
        img: "https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg",
        url: "https://example.com/seven",
        height: 500,
    },
    {
        id: "8",
        img: "https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg",
        url: "https://example.com/eight",
        height: 380,
    },
    {
        id: "9",
        img: "https://images.pexels.com/photos/913652/pexels-photo-913652.jpeg",
        url: "https://example.com/nine",
        height: 420,
    },
    {
        id: "10",
        img: "https://images.pexels.com/photos/46540/hippo-hippopotamus-animal-look-46540.jpeg",
        url: "https://example.com/ten",
        height: 650,
    },
    {
        id: "11",
        img: "https://images.pexels.com/photos/18115745/pexels-photo-18115745.jpeg",
        url: "https://example.com/eleven",
        height: 620,
    },
    {
        id: "12",
        img: "https://images.pexels.com/photos/325976/pexels-photo-325976.jpeg",
        url: "https://example.com/twelve",
        height: 480,
    },
    {
        id: "13",
        img: "https://images.pexels.com/photos/624044/pexels-photo-624044.jpeg",
        url: "https://example.com/thirteen",
        height: 400,
    },
    {
        id: "14",
        img: "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg",
        url: "https://example.com/fourteen",
        height: 350,
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="relative bg-white py-16 px-6 md:px-12 lg:px-20 z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span
                        className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent font-semibold text-5xl tracking-wide mb-4 inline-block"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Safari Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                        Moments from the Wild
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore stunning captures from our unforgettable safari adventures across Uganda's breathtaking landscapes.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="w-full" style={{ height: '600px' }}>
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
