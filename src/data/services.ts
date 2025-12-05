export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    duration: string;
    price: string;
    heroImage: string;
    gallery: string[];
    itinerary: {
        day: number;
        title: string;
        description: string;
    }[];
    inclusions: string[];
    exclusions: string[];
    bestTime: string;
    difficulty: string;
    groupSize: string;
}

export const services: Service[] = [
    {
        id: "gorilla-trekking",
        title: "Gorilla Trekking",
        shortDescription: "Experience the thrill of encountering mountain gorillas in their natural habitat. Our expert guides will lead you through the lush forests of Bwindi Impenetrable National Park.",
        fullDescription: "Embark on an unforgettable journey to encounter the majestic mountain gorillas in their natural habitat. Trek through the misty forests of Bwindi Impenetrable National Park, one of the most biodiverse areas in Africa. This once-in-a-lifetime experience brings you face-to-face with these gentle giants, observing their behavior and social interactions in the wild.",
        icon: "🦍",
        duration: "3-7 Days",
        price: "From $1,500",
        heroImage: "https://images.pexels.com/photos/35002913/pexels-photo-35002913.jpeg",
        gallery: [
            "https://images.pexels.com/photos/35002913/pexels-photo-35002913.jpeg",
            "https://images.pexels.com/photos/35018550/pexels-photo-35018550.jpeg",
            "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Entebbe",
                description: "Meet and greet at Entebbe International Airport. Transfer to your hotel in Kampala. Evening briefing about the trek."
            },
            {
                day: 2,
                title: "Transfer to Bwindi",
                description: "Early morning departure to Bwindi Impenetrable National Park. Scenic drive through the countryside with stops at the Equator and local markets."
            },
            {
                day: 3,
                title: "Gorilla Trekking Day",
                description: "Early morning briefing at the park headquarters. Trek through the forest to find the gorilla family. Spend one magical hour observing these incredible creatures."
            },
            {
                day: 4,
                title: "Return Journey",
                description: "Leisure morning at the lodge. Afternoon transfer back to Kampala or Entebbe for your departure flight."
            }
        ],
        inclusions: [
            "Gorilla trekking permit",
            "Professional guide services",
            "All park entrance fees",
            "Accommodation and meals",
            "Ground transportation in 4x4 vehicle",
            "Bottled water during trek"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Tips and gratuities",
            "Alcoholic beverages"
        ],
        bestTime: "June to September, December to February",
        difficulty: "Moderate to Challenging",
        groupSize: "Maximum 8 people per group"
    },
    {
        id: "wildlife-safari",
        title: "Wildlife Safari",
        shortDescription: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        fullDescription: "Discover the incredible diversity of Uganda's wildlife on this comprehensive safari adventure. Journey through multiple national parks including Queen Elizabeth, Murchison Falls, and Kidepo Valley. Experience thrilling game drives, boat safaris, and nature walks while spotting the Big Five and countless other species.",
        icon: "🦁",
        duration: "5-10 Days",
        price: "From $2,000",
        heroImage: "https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg",
        gallery: [
            "https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg",
            "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg",
            "https://images.pexels.com/photos/1524628/pexels-photo-1524628.jpeg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Kampala City Tour",
                description: "Airport pickup and transfer to hotel. Optional Kampala city tour visiting cultural sites and markets."
            },
            {
                day: 2,
                title: "Murchison Falls National Park",
                description: "Drive to Murchison Falls. Visit the top of the falls for spectacular views. Evening game drive."
            },
            {
                day: 3,
                title: "Game Drive & Boat Safari",
                description: "Early morning game drive to spot lions, elephants, and giraffes. Afternoon boat cruise on the Nile to the base of the falls."
            },
            {
                day: 4,
                title: "Queen Elizabeth National Park",
                description: "Transfer to Queen Elizabeth National Park. Evening game drive in search of tree-climbing lions."
            },
            {
                day: 5,
                title: "Kazinga Channel Cruise",
                description: "Morning game drive. Afternoon boat cruise on Kazinga Channel to see hippos, crocodiles, and water birds."
            }
        ],
        inclusions: [
            "All park entrance fees",
            "Professional safari guide",
            "4x4 safari vehicle",
            "Accommodation and meals",
            "Boat cruises",
            "Game drives"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities",
            "Tips and gratuities"
        ],
        bestTime: "December to February, June to September",
        difficulty: "Easy to Moderate",
        groupSize: "Flexible group sizes"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        shortDescription: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        fullDescription: "Uganda is a birder's paradise with over 1,060 recorded bird species. Join our expert ornithologists on specialized birding tours through diverse habitats from wetlands to montane forests. Spot rare species including the Shoebill Stork, African Green Broadbill, and numerous endemic species.",
        icon: "🦜",
        duration: "4-8 Days",
        price: "From $1,200",
        heroImage: "https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg",
        gallery: [
            "https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg",
            "https://images.pexels.com/photos/913652/pexels-photo-913652.jpeg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Mabamba Swamp",
                description: "Early morning boat ride to Mabamba Swamp in search of the rare Shoebill Stork and other wetland species."
            },
            {
                day: 2,
                title: "Bwindi Forest",
                description: "Birding in Bwindi Impenetrable Forest. Target species include African Green Broadbill and Albertine Rift endemics."
            },
            {
                day: 3,
                title: "Queen Elizabeth National Park",
                description: "Birding along Kazinga Channel and in various habitats. Over 600 species recorded in this park."
            }
        ],
        inclusions: [
            "Expert birding guide",
            "All park fees",
            "Boat trips",
            "Accommodation and meals",
            "Transportation",
            "Bird checklist"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal binoculars",
            "Tips and gratuities"
        ],
        bestTime: "November to April (migratory season)",
        difficulty: "Easy to Moderate",
        groupSize: "Maximum 6 birders"
    },
    {
        id: "chimpanzee-tracking",
        title: "Chimpanzee Tracking",
        shortDescription: "Track our closest relatives in Kibale Forest. Watch them play, feed, and interact in their natural environment.",
        fullDescription: "Kibale National Park is home to the highest concentration of primates in Africa. Trek through the rainforest to find habituated chimpanzee communities and observe their fascinating behaviors. The park also hosts 12 other primate species, making it a primate lover's dream destination.",
        icon: "🐵",
        duration: "2-5 Days",
        price: "From $1,000",
        heroImage: "https://images.pexels.com/photos/46540/hippo-hippopotamus-animal-look-46540.jpeg",
        gallery: [
            "https://images.pexels.com/photos/46540/hippo-hippopotamus-animal-look-46540.jpeg",
            "https://images.pexels.com/photos/18115745/pexels-photo-18115745.jpeg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kibale",
                description: "Transfer to Kibale Forest National Park. Evening nature walk in Bigodi Wetland Sanctuary."
            },
            {
                day: 2,
                title: "Chimpanzee Tracking",
                description: "Early morning chimpanzee tracking in Kibale Forest. Afternoon primate walk to spot other monkey species."
            },
            {
                day: 3,
                title: "Return Journey",
                description: "Optional morning activity. Transfer back to Kampala or continue to other destinations."
            }
        ],
        inclusions: [
            "Chimpanzee tracking permit",
            "Professional guide",
            "Park entrance fees",
            "Accommodation and meals",
            "Ground transportation"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Tips and gratuities"
        ],
        bestTime: "Year-round, best in dry season",
        difficulty: "Moderate",
        groupSize: "Maximum 6 people per group"
    },
    {
        id: "cultural-tours",
        title: "Cultural Tours",
        shortDescription: "Immerse yourself in Uganda's rich cultural heritage. Visit local communities and experience traditional customs.",
        fullDescription: "Experience the vibrant cultures of Uganda through immersive community visits. Meet local tribes, participate in traditional ceremonies, learn about ancient customs, and support sustainable tourism initiatives that benefit local communities.",
        icon: "🎭",
        duration: "3-6 Days",
        price: "From $800",
        heroImage: "https://images.pexels.com/photos/325976/pexels-photo-325976.jpeg",
        gallery: [
            "https://images.pexels.com/photos/325976/pexels-photo-325976.jpeg",
            "https://images.pexels.com/photos/624044/pexels-photo-624044.jpeg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kampala Cultural Sites",
                description: "Visit Kasubi Tombs, Kabaka's Palace, and local craft markets. Learn about Buganda Kingdom history."
            },
            {
                day: 2,
                title: "Batwa Community Visit",
                description: "Meet the Batwa pygmies and learn about their traditional forest lifestyle and cultural practices."
            },
            {
                day: 3,
                title: "Village Homestay",
                description: "Stay with a local family, participate in daily activities, and enjoy traditional meals and entertainment."
            }
        ],
        inclusions: [
            "Cultural guide",
            "Community fees",
            "Accommodation and meals",
            "Transportation",
            "Cultural performances"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Tips and gratuities"
        ],
        bestTime: "Year-round",
        difficulty: "Easy",
        groupSize: "Flexible"
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        shortDescription: "White water rafting on the Nile, hiking the Rwenzori Mountains, and more thrilling outdoor adventures.",
        fullDescription: "For adrenaline seekers, Uganda offers world-class adventure activities. Experience the thrill of white water rafting on the Nile, trek the legendary Rwenzori Mountains, go bungee jumping, or try zip-lining through the forest canopy.",
        icon: "🏔️",
        duration: "2-7 Days",
        price: "From $900",
        heroImage: "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg",
        gallery: [
            "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg"
        ],
        itinerary: [
            {
                day: 1,
                title: "Jinja - Adventure Capital",
                description: "Transfer to Jinja. Evening briefing and preparation for white water rafting."
            },
            {
                day: 2,
                title: "White Water Rafting",
                description: "Full day white water rafting on the Nile River. Navigate through Grade 5 rapids with expert guides."
            },
            {
                day: 3,
                title: "Optional Activities",
                description: "Choose from bungee jumping, kayaking, quad biking, or horseback riding along the Nile."
            }
        ],
        inclusions: [
            "Professional instructors",
            "Safety equipment",
            "Activity permits",
            "Accommodation and meals",
            "Transportation"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities"
        ],
        bestTime: "Year-round, best July to February",
        difficulty: "Moderate to Challenging",
        groupSize: "Varies by activity"
    }
];

export const getServiceById = (id: string): Service | undefined => {
    return services.find(service => service.id === id);
};
