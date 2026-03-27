export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    duration: string;
    price: string;
    heroImage: string;
    gallery: string[];
    itinerary: Record<string, {
        day: number;
        title: string;
        description: string;
    }[]>;
    inclusions: string[];
    exclusions: string[];
    note?: string;
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
        duration: "3-7 Days",
        price: "From $1,500",
        heroImage: "/images/gorilla/gorilla1.jpeg",
        gallery: [
            "/images/gorilla/gorilla2.jpeg",
            "/images/gorilla/gorilla3.jpeg",
            "/images/gorilla/gorilla4.jpeg",
            "/images/gorilla/gorilla5.jpeg",
            "/images/gorilla/gorilla6.jpeg"
        ],
        itinerary: {
            "3 Days": [
                {
                    day: 1,
                    title: "Arrival & Transfer to Bwindi",
                    description: "Meet and greet at Entebbe International Airport or in Kampala. Scenic drive through the countryside to Bwindi Impenetrable National Park."
                },
                {
                    day: 2,
                    title: "Gorilla Trekking Day",
                    description: "Early morning briefing at the park headquarters. Trek through the forest to find the gorilla family. Spend one magical hour observing these incredible creatures."
                },
                {
                    day: 3,
                    title: "Return Journey",
                    description: "Leisure morning at the lodge. Transfer back to Kampala or Entebbe for your departure flight."
                }
            ],
            "5 Days": [
                {
                    day: 1,
                    title: "Arrival in Entebbe",
                    description: "Meet and greet at Entebbe International Airport. Transfer to your hotel in Kampala for an evening briefing."
                },
                {
                    day: 2,
                    title: "Lake Mburo National Park",
                    description: "Drive to Lake Mburo National Park. Afternoon game drive or boat safari."
                },
                {
                    day: 3,
                    title: "Transfer to Bwindi",
                    description: "Morning nature walk in Lake Mburo. Scenic drive to Bwindi Impenetrable forest."
                },
                {
                    day: 4,
                    title: "Gorilla Trekking Day",
                    description: "The highlight of your trip! A full day dedicated to tracking and observing the endangered mountain gorillas."
                },
                {
                    day: 5,
                    title: "Return Journey",
                    description: "Drive back to Entebbe with a stop at the Equator for photos and souvenirs."
                }
            ],
            "7 Days": [
                 { day: 1, title: "Arrival", description: "Welcome to Uganda! Airport transfer and relaxation in Entebbe." },
                 { day: 2, title: "Drive to Queen Elizabeth", description: "Scenic drive to Queen Elizabeth National Park with crater lakes views." },
                 { day: 3, title: "Game Drive & Boat Cruise", description: "Morning game drive to spot lions, then an afternoon Kazinga Channel boat cruise." },
                 { day: 4, title: "Ishasha Sector (Tree-Climbing Lions)", description: "Transfer to the Ishasha sector in search of tree-climbing lions before heading to Bwindi." },
                 { day: 5, title: "Gorilla Trekking", description: "The ultimate primate experience in Bwindi Impenetrable Forest." },
                 { day: 6, title: "Lake Bunyonyi Relaxation", description: "Transfer to Africa's second deepest lake, Lake Bunyonyi, for canoeing and relaxation." },
                 { day: 7, title: "Departure", description: "Morning departure drive back to Entebbe for your outbound flight." }
            ]
        },
        inclusions: [],
        exclusions: [],
        bestTime: "June to September, December to February",
        difficulty: "Moderate to Challenging",
        groupSize: "Maximum 8 people per group"
    },
    {
        id: "wildlife-safari",
        title: "10 Days 9 Nights Uganda Safari",
        shortDescription: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        fullDescription: "Discover the incredible diversity of Uganda's wildlife on this comprehensive 10-day safari adventure. Journey through multiple national parks including Queen Elizabeth, Murchison Falls, and Lake Mburo. Experience thrilling game drives, boat safaris, chimpanzee habituation, and gorilla trekking while spotting the Big Five and countless other species.",
        duration: "5-10 Days",
        price: "$1,428 Per Person",
        heroImage: "https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg",
        gallery: [
            "https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg",
            "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg",
            "https://images.pexels.com/photos/1524628/pexels-photo-1524628.jpeg"
        ],
        itinerary: {
            "5 Days": [
                { day: 1, title: "Arrival & Transfer", description: "Airport pickup and transfer to Murchison Falls National Park." },
                { day: 2, title: "Murchison Falls Game Drive", description: "Early morning game drive to spot lions, elephants, and giraffes. Afternoon boat cruise on the Nile." },
                { day: 3, title: "Transfer to Queen Elizabeth", description: "Drive south to Queen Elizabeth National Park along the scenic Albertine Rift." },
                { day: 4, title: "Kazinga Channel Safari", description: "Morning game drive and afternoon boat cruise on the Kazinga Channel, famous for hippo pods." },
                { day: 5, title: "Return to Entebbe", description: "Morning game drive and transfer back to Entebbe for departure." }
            ],
            "7 Days": [
                 { day: 1, title: "Arrival", description: "Welcome to Uganda! Transfer to hotel in Kampala." },
                 { day: 2, title: "Ziwa Rhino Sanctuary", description: "Drive north with a stop at Ziwa for on-foot Rhino tracking." },
                 { day: 3, title: "Murchison Falls", description: "Game drive in Murchison Falls NP and afternoon boat cruise to the base of the falls." },
                 { day: 4, title: "Kibale Forest", description: "Transfer to Kibale Forest National Park, the primate capital of the world." },
                 { day: 5, title: "Chimp Trekking & Transfer", description: "Morning Chimp trek, then drive to Queen Elizabeth NP." },
                 { day: 6, title: "Queen Elizabeth NP", description: "Full day exploring Queen Elizabeth NP via game drives and the Kazinga Channel boat tour." },
                 { day: 7, title: "Departure", description: "Drive back to Kampala/Entebbe." }
            ],
            "10 Days": [
                { day: 1, title: "Pick up Entebbe", description: "You will meet your driver guide at Entebbe International Airport who will be already waiting for you and then, he will drive your lodge for an overnight stay. Night at Airport Link Guest House. Meal Plan. Full Board." },
                { day: 2, title: "Transfer to Murchison Falls NP & Rhino Tracking", description: "Enjoy breakfast at your hotel early in the morning before hitting the road for the most beautiful protected area in Uganda: Murchison Falls National Park. Passing through the famous Luwero triangle, stopover at Ziwa Rhino sanctuary and then have lunch. Proceed to the magnificent falls to marvel at the mighty Nile. Night at Heritage Site Safari Lodge. Meals: Full Board." },
                { day: 3, title: "Full Day Murchison Falls National Park", description: "Start an early morning game drive towards the Delta area, in search for wildlife including the Rothschild Giraffe, elephant, Lions, Warthogs, and Leopards. Afternoon boat cruise on the Nile for game viewing at close quarters. Night at Heritage Safari Lodge. Meals Full Board." },
                { day: 4, title: "Transfer to Kibale National Park", description: "Start your drive to western Uganda through the beautiful green scenery and tea plantations. One hour drive to Kibale forest to spot monkeys, birds and Baboons. Night at Chimpanzee Capital Lodge. Meals: Full Board." },
                { day: 5, title: "Chimpanzee Trekking & Transfer to QE NP", description: "Trip for Chimpanzee walk in Kibale Forest. Experience our cousins for one hour through the tropical rain forest. Afternoon visit to Bigodi swamp to spot monkeys and birds. Drive straight to Queen Elizabeth National Park arriving late evening. Night at Irungu Safari Lodge. Meals: Full Board." },
                { day: 6, title: "Full Day Queen Elizabeth National Park", description: "Early morning game drive to spot animals like lions, Leopards, elephants, buffaloes, and Uganda Kob. Afternoon boat cruise at Kazinga Channel to see aquatic life, crocodiles, elephants, and Hippos. Night at Irungu Safari Lodge. Meals. Full Board." },
                { day: 7, title: "Transfer to Bwindi Impenetrable National Park", description: "Early morning drive heading to the Southern gate of Queen Elizabeth National Park (Ishasha sector) for another game drive to look for the climbing lions. Picnic lunch and continue drive to Bwindi. Night at Buhoma Community Rest Camp. Meals: Full Board." },
                { day: 8, title: "Gorilla Tracking and Community Walk", description: "Experience a life-changing adventure meeting the gentle giants of Bwindi. Spend 1 hour with the gorillas. Transfer to Lake Bunyonyi, a tropical gem. Enjoy a tranquil boat cruise. Night at Seeds of Hope Island. Meal: Full Board." },
                { day: 9, title: "Transfer to Lake Mburo, Game drive & Nature walk", description: "Head for a 4-5 hours drive to Lake Mburo National Park. Nature Walk to see the Long Horned Ankole cows, do milking in the local areas, followed by an evening game drive. Night at Kigarama Wilderness Lodge. Meals: Full Board." },
                { day: 10, title: "Morning Walk & Transfer to Entebbe via Equator", description: "Enter into the park with a ranger to spot more wildlife. Transfer to Entebbe stopping at the equator for pictures in both hemispheres. Arriving evening at the airport depending on your flight schedule. End of 10 days Uganda Safari." }
            ]
        },
        inclusions: [
            "Transport",
            "Safari Vehicle with POP Up roof",
            "English speaking guide and driver",
            "All Park entrance fees",
            "Water to drink while on Safari",
            "Meals"
        ],
        exclusions: [
            "Drinks",
            "Laundry",
            "Travel Insurance",
            "Chimpanzee Permits ($250 @)",
            "Gorilla Permits ($800 @)",
            "Extra activities added while on Safari"
        ],
        note: "Please feel free to ask any questions on the proposal given above. Both Chimpanzee Permits and Gorilla Permits have to be paid for in time because they have limitations. Please continue and confirm the exact dates for tracking.",

        bestTime: "December to February, June to September",
        difficulty: "Easy to Moderate",
        groupSize: "Flexible group sizes"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        shortDescription: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        fullDescription: "Uganda is a birder's paradise with over 1,060 recorded bird species. Join our expert ornithologists on specialized birding tours through diverse habitats from wetlands to montane forests. Spot rare species including the Shoebill Stork, African Green Broadbill, and numerous endemic species.",
        duration: "4-8 Days",
        price: "From $1,200",
        heroImage: "https://images.pexels.com/photos/27040793/pexels-photo-27040793.jpeg",
        gallery: [
            "https://images.pexels.com/photos/1142995/pexels-photo-1142995.jpeg",
            "https://images.pexels.com/photos/33773537/pexels-photo-33773537.jpeg"
        ],
        itinerary: {
            "4 Days": [
                { day: 1, title: "Mabamba Swamp", description: "Early morning boat ride to Mabamba Swamp in search of the rare Shoebill Stork and other wetland species." },
                { day: 2, title: "Lake Mburo", description: "Transfer to Lake Mburo National Park. Afternoon bird walk focusing on acacia-associated species." },
                { day: 3, title: "Lake Mburo Boat Cruise", description: "Morning boat cruise for water birds, then afternoon savanna birding." },
                { day: 4, title: "Return to Entebbe", description: "Final morning bird walk and transfer back to the airport." }
            ],
            "8 Days": [
                { day: 1, title: "Arrival", description: "Airport pickup and Entebbe Botanical Gardens birding." },
                { day: 2, title: "Murchison Falls", description: "Transfer to Murchison Falls NP. En-route birding at Ziwa Rhino Sanctuary." },
                { day: 3, title: "Nile Delta Birding", description: "Boat cruise to the Nile Delta to look for the Shoebill and other water birds." },
                { day: 4, title: "Kibale Forest", description: "Long drive to Kibale Forest with stops for Rift Valley endemics." },
                { day: 5, title: "Green-breasted Pitta", description: "Early start to find the elusive Green-breasted Pitta in Kibale." },
                { day: 6, title: "Queen Elizabeth NP", description: "Transfer to QENP. Afternoon birding along the Kazinga Channel." },
                { day: 7, title: "Bwindi (Ruhija)", description: "Transfer to the higher altitude Ruhija sector of Bwindi for Albertine Rift endemics." },
                { day: 8, title: "Departure", description: "Morning bird walk in Bwindi and drive back to Entebbe/Kampala." }
            ]
        },
        inclusions: [],
        exclusions: [],
        bestTime: "November to April (migratory season)",
        difficulty: "Easy to Moderate",
        groupSize: "Maximum 6 birders"
    },
    {
        id: "chimpanzee-tracking",
        title: "Chimpanzee Tracking",
        shortDescription: "Track our closest relatives in Kibale Forest. Watch them play, feed, and interact in their natural environment.",
        fullDescription: "Kibale National Park is home to the highest concentration of primates in Africa. Trek through the rainforest to find habituated chimpanzee communities and observe their fascinating behaviors. The park also hosts 12 other primate species, making it a primate lover's dream destination.",
        duration: "2-5 Days",
        price: "From $1,000",
        heroImage: "https://images.pexels.com/photos/46540/hippo-hippopotamus-animal-look-46540.jpeg",
        gallery: [
            "https://images.pexels.com/photos/46540/hippo-hippopotamus-animal-look-46540.jpeg",
            "https://images.pexels.com/photos/18115745/pexels-photo-18115745.jpeg"
        ],
        itinerary: {
            "3 Days": [
                { day: 1, title: "Arrival in Kibale", description: "Transfer to Kibale Forest National Park. Evening nature walk in Bigodi Wetland Sanctuary." },
                { day: 2, title: "Chimpanzee Tracking", description: "Early morning chimpanzee tracking in Kibale Forest. Afternoon primate walk to spot other monkey species." },
                { day: 3, title: "Return Journey", description: "Optional morning activity. Transfer back to Kampala or continue to other destinations." }
            ],
            "5 Days": [
                { day: 1, title: "Arrival", description: "Airport pickup and transfer to Kampala." },
                { day: 2, title: "Drive to Kibale", description: "Scenic drive through tea plantations to Kibale Forest." },
                { day: 3, title: "Chimpanzee Habituation", description: "Full day Chimpanzee Habituation Experience - spend the entire day following the chimps with researchers." },
                { day: 4, title: "Bigodi & Queen Elizabeth", description: "Morning swamp walk in Bigodi. Transfer to Queen Elizabeth NP for an evening game drive." },
                { day: 5, title: "Departure", description: "Morning boat cruise on Kazinga Channel and drive back." }
            ]
        },
        inclusions: [],
        exclusions: [],
        bestTime: "Year-round, best in dry season",
        difficulty: "Moderate",
        groupSize: "Maximum 6 people per group"
    },
    {
        id: "cultural-tours",
        title: "Cultural Tours",
        shortDescription: "Immerse yourself in Uganda's rich cultural heritage. Visit local communities and experience traditional customs.",
        fullDescription: "Experience the vibrant cultures of Uganda through immersive community visits. Meet local tribes, participate in traditional ceremonies, learn about ancient customs, and support sustainable tourism initiatives that benefit local communities.",
        duration: "3-6 Days",
        price: "From $800",
        heroImage: "/images/culture.jpeg",
        gallery: [
            "/images/culture.jpeg",
            "/images/culture1.jpeg",
            "/images/culture2.jpg",
            "/images/culture3.jpg"
        ],
        itinerary: {
            "3 Days": [
                { day: 1, title: "Kampala Cultural Sites", description: "Visit Kasubi Tombs, Kabaka's Palace, and local craft markets. Learn about Buganda Kingdom history." },
                { day: 2, title: "Batwa Community Visit", description: "Transfer to the southwest. Meet the Batwa pygmies and learn about their traditional forest lifestyle and cultural practices." },
                { day: 3, title: "Village Homestay", description: "Stay with a local family, participate in daily activities, and enjoy traditional meals and entertainment." }
            ],
            "6 Days": [
                { day: 1, title: "Arrival", description: "Pickup in Entebbe. Briefing and traditional dinner." },
                { day: 2, title: "Buganda Kingdom", description: "Full day exploring Kampala's historical sites, including Ndere Cultural Centre in the evening." },
                { day: 3, title: "Igongo Cultural Centre", description: "Drive to western Uganda with a stop at Igongo to learn about Ankole culture." },
                { day: 4, title: "Batwa Trail", description: "Experience the Batwa Trail in Mgahinga, learning ancient hunting and survival skills." },
                { day: 5, title: "Karamojong Experience", description: "(Flight/Long drive north) Visit a traditional Manyatta to learn about the pastoralist Karamojong culture." },
                { day: 6, title: "Departure", description: "Return journey and departure operations." }
            ]
        },
        inclusions: [],
        exclusions: [],
        bestTime: "Year-round",
        difficulty: "Easy",
        groupSize: "Flexible"
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        shortDescription: "White water rafting on the Nile, hiking the Rwenzori Mountains, and more thrilling outdoor adventures.",
        fullDescription: "For adrenaline seekers, Uganda offers world-class adventure activities. Experience the thrill of white water rafting on the Nile, trek the legendary Rwenzori Mountains, go bungee jumping, or try zip-lining through the forest canopy.",
        duration: "2-7 Days",
        price: "From $900",
        heroImage: "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg",
        gallery: [
            "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg"
        ],
        itinerary: {
            "2 Days": [
                { day: 1, title: "Jinja - Adventure Capital", description: "Transfer to Jinja. Evening briefing and preparation for white water rafting." },
                { day: 2, title: "White Water Rafting", description: "Full day white water rafting on the Nile River. Navigate through Grade 5 rapids. Return to Kampala." }
            ],
            "5 Days": [
                { day: 1, title: "Arrival & Transfer to Jinja", description: "Pickup and transfer to the source of the Nile." },
                { day: 2, title: "Rafting & Bungee", description: "Morning Grade 5 rafting followed by afternoon bungee jumping over the Nile." },
                { day: 3, title: "Quad Biking & Transfer", description: "Morning quad biking through local villages. Transfer to Mt. Elgon region." },
                { day: 4, title: "Sipi Falls Hike & Abseiling", description: "Hike the magnificent Sipi Falls and attempt a thrilling 100m abseil." },
                { day: 5, title: "Departure", description: "Morning coffee tour and return transfer." }
            ],
            "7 Days": [
                { day: 1, title: "Arrival", description: "Airport pickup." },
                { day: 2, title: "Jinja Adrenaline", description: "White water rafting on the Nile." },
                { day: 3, title: "Drive to Rwenzori", description: "Long scenic drive to the foothills of the Mountains of the Moon." },
                { day: 4, title: "Rwenzori Trekking (Day 1)", description: "Start the Mahoma trail trek through the bamboo zone." },
                { day: 5, title: "Rwenzori Trekking (Day 2)", description: "Hike to Lake Mahoma, experiencing unique afro-alpine flora." },
                { day: 6, title: "Descend & Transfer", description: "Descend the mountain and drive to Queen Elizabeth NP for a relaxed evening." },
                { day: 7, title: "Lion Tracking & Departure", description: "Experiential lion tracking before driving back to Entebbe." }
            ]
        },
        inclusions: [],
        exclusions: [],
        bestTime: "Year-round, best July to February",
        difficulty: "Moderate to Challenging",
        groupSize: "Varies by activity"
    }

];

export const getServiceById = (id: string): Service | undefined => {
    return services.find(service => service.id === id);
};
