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
        accommodation?: string;
        meals?: string;
        image?: string;
    }[]>;
    countryItineraries?: Record<string, Record<string, {
        day: number;
        title: string;
        description: string;
        accommodation?: string;
        meals?: string;
        image?: string;
    }[]>>;
    inclusions: string[];
    exclusions: string[];
    durationInclusions?: Record<string, string[]>;
    durationExclusions?: Record<string, string[]>;
    note?: string;
    pricingTiers?: {
        name: string;
        description?: string;
        highlight?: boolean;
        dark?: boolean;
        prices?: { label: string; amount: string }[];
    }[];
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
        duration: "3-15 Days",
        price: "From $1,500",
        heroImage: "/images/gorilla/gorilla1.jpeg",
        gallery: [
            "/images/gorilla/gorilla2.jpeg",
            "/images/gorilla/gorilla3.jpeg",
            "/images/gorilla/gorilla4.jpeg",
            "/images/gorilla/gorilla5.jpeg",
            "/images/gorilla/gorilla6.jpeg",
            "/images/gorilla10.jpeg",
            "/images/gorilla11.jpeg"
        ],
        itinerary: {},
        countryItineraries: {
            "Uganda": {
                "3 Days": [
                    {
                        day: 1,
                        title: "Travel to Bwindi Impenetrable National Park",
                        description: "You will be picked from the Airport on arrival or from your Hotel by one of our experienced Uganda gorilla safari driver/ guide who will transfer you to Bwindi Impenetrable national park. You will have a stopover at the equator for photography and lunch break in Mbarara town. The drive will take you through different villages with fascinating scenery, make stopovers for pictures then proceed to check-in to your lodge for dinner and overnight.",
                        accommodation: "Mahogany Springs (Luxury) / Bakiga Lodge (Semi-luxury) / Buhoma Community Rest Camp (Budget)"
                    },
                    {
                        day: 2,
                        title: "Gorilla Trekking & Community Walk",
                        description: "In the morning take an early breakfast, head to the park office headquarters with parked lunch for a vital briefing ready to trek the gorillas in the thick impenetrable forest. You get to spend and hour with the gorillas after having trekked for about 3-6 hours. If you still feel strong in the afternoon, you will head for a community walk to meet the local people and Batwa community to learn about their traditional way of living. Also available are curio shops drinking joints children's school among others. After all, return to the lodge for Dinner and overnight stay.",
                        accommodation: "Mahogany Springs (Luxury) / Bakiga Lodge (Semi-luxury) / Buhoma Community Rest Camp (Budget)"
                    },
                    {
                        day: 3,
                        title: "Transfer back to Kampala or Entebbe",
                        description: "On this day after relaxed breakfast, you will travel to Kampala, reaching early in the afternoon. The tour driver will drive you to your Hotel or in the same way continue taking you to Entebbe international airport to catch up with your departure flight if on schedule."
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
                ],
                "15 Days": [
                    {
                        day: 1,
                        title: "Arrival and Transfer to the hotel",
                        description: "On arrival at Entebbe international Airport, our experienced Classic Uganda safari guide will meet and transfer you to your Hotel for an overnight stay.",
                        accommodation: "CASSIA LODGE / LE PETITE VILLAGE BOUTIQUE HOTEL"
                    },
                    {
                        day: 2,
                        title: "Transfer to Murchison Falls via Ziwa Rhino Sanctuary",
                        description: "An early morning start after breakfast, depart to Murchison falls national park with en route visit to Ziwa Rhino Sanctuary for Rhinoceros tracking. Murchison falls national park is Uganda's largest savannah park with largest concentration of animals, so expect to see a lot of Giraffes, Elephants, Jacksons hartebeests, Oribi Uganda kob, buffalos, birds, crocodiles in water or basking on sand hippos warthogs if lucky lions and leopards, Jackals and hyenas. You will continue and make it to the top of the falls for photography before reaching your lodge.",
                        accommodation: "PARAA SAFARI LODGE / PAKUBA SAFARI LODGE / FORT MURCHISON"
                    },
                    {
                        day: 3,
                        title: "Full Day in Murchison Falls",
                        description: "Morning game drive where you stand chances to see and take pictures of savannah game such as Elephants, giraffes, buffalos, hartebeests, Uganda kobs, warthogs, oribi as well as birds of different species. After lunch, take a boat cruise to the bottom of the falls that will reward you with hippos, crocodiles, and possibly Elephants coming to drink water.",
                        accommodation: "PARAA SAFARI LODGE / PAKUBA SAFARI LODGE / FORT MURCHISON"
                    },
                    {
                        day: 4,
                        title: "Morning Game Drive & Transfer to Hoima",
                        description: "After breakfast, go on a final game drive for more chances to try early raisers like lions and leopards. Then later you will transfer to Hoima town where the seat of the bunyoro kitara kingdom is found to shorten the journey to Kibale national park the next day.",
                        accommodation: "HOIMA CULTURAL LODGE / HOTEL KONTIK"
                    },
                    {
                        day: 5,
                        title: "Transfer to Kibale Forest National Park",
                        description: "After your relaxed breakfast, you will start your journey heading to Kibale forest national park, the home to over 13 primate species including the red colobus and the chimpanzee, besides these, there are around 350 bird species recorded.",
                        accommodation: "KYANINGA LODGE / PRIMATE LODGE KIBALE / CHIMPANZEE FOREST LODGE"
                    },
                    {
                        day: 6,
                        title: "Chimpanzee Tracking & Bigodi Nature Walk",
                        description: "Assemble at the ranger station for your chimpanzee tracking briefing, thereafter proceed on your trek which will take you 3 to 4 hours. After lunch, visit Bigodi wetland sanctuary for more primate and bird watching walk that will take approximately 3 hours.",
                        accommodation: "KYANINGA LODGE / PRIMATE LODGE KIBALE / CHIMPANZEE FOREST LODGE"
                    },
                    {
                        day: 7,
                        title: "Semuliki National Park & Crater Region",
                        description: "Driven to a scenic route to Semuliki national park for a morning nature walk to see variety of monkey, Sempaya hot springs and forest birds. On your return, explore the crater region for scenic views.",
                        accommodation: "MOUNTAINS OF THE MOON / RWENZORI VIEW GUEST HOUSE"
                    },
                    {
                        day: 8,
                        title: "Transfer to Queen Elizabeth National Park",
                        description: "Transfer to Queen Elizabeth national park, the second largest protected area with a huge number of animal and bird species. Once you enter the park, you will visit salt lake katwe before proceeding to the lodge.",
                        accommodation: "MWEYA SAFARI LODGE / ENGANZI LODGE / BUSH LODGE"
                    },
                    {
                        day: 9,
                        title: "Game Drive & Kazinga Channel Boat Safari",
                        description: "Set off to kasenyi plains for your early morning game drive in search of lions, leopards, and other savanna game. In the afternoon, take a boat cruise on Kazinga channel to view hippos, birds, and crocodiles at close range.",
                        accommodation: "MWEYA SAFARI LODGE / ENGANZI LODGE / BUSH LODGE"
                    },
                    {
                        day: 10,
                        title: "Transfer to Ishasha Sector",
                        description: "Transfer to Ishasha, the southern sector of Queen Elizabeth national park which is famous for tree climbing lions that are seen clinging between the fig trees. Enjoy an afternoon game drive in search of them.",
                        accommodation: "ISHASHA JUNGLE LODGE / ENJOJO LODGE"
                    },
                    {
                        day: 11,
                        title: "Game Drive & Transfer to Bwindi",
                        description: "Morning game drive to try more chances for tree climbing lions and other game animal. Then transfer to Bwindi impenetrable national park, the home to the world's few remaining mountain gorillas.",
                        accommodation: "MAHOGANY SPRING LODGE / BUHOMA HAVEN LODGE / BAKIGA LODGE"
                    },
                    {
                        day: 12,
                        title: "Gorilla Tracking & Community Walk",
                        description: "Report to the ranger station for a briefing about gorilla tracking, then ascend to the forest for your gorilla adventure. Once located, spend 1 hour with these gentle giants. Later, take a community walk to learn about local culture.",
                        accommodation: "MAHOGANY SPRING LODGE / BUHOMA HAVEN LODGE / BAKIGA LODGE"
                    },
                    {
                        day: 13,
                        title: "Transfer to Lake Bunyonyi & Boat Ride",
                        description: "Transfer to Lake Bunyonyi, Uganda's deepest and most beautiful lake. Upon arrival, go for a boat ride to visit historical islands including the Punishment Island.",
                        accommodation: "BIRDNEST RESORT / ARCADIA COTTAGES / BUNYONYI OVERLAND RESORT"
                    },
                    {
                        day: 14,
                        title: "Transfer to Lake Mburo National Park",
                        description: "Transfer to Lake Mburo national park, Uganda's smallest Savannah park. In the evening, go for a night game drive in search of nocturnal animals like leopards and bush babies.",
                        accommodation: "MIHINGO SAFARI LODGE / RWAKOBO ROCK / LAKE MBURO SAFARI LODGE"
                    },
                    {
                        day: 15,
                        title: "Morning Game Drive & Transfer to Entebbe",
                        description: "Final game drive in search of Impalas, giraffes, Plain zebra, and Topis. Then drive back to Entebbe with a stopover at the equator for photography and craft shopping."
                    }
                ]
            },
            "Rwanda": {
                "2 Days": [
                    {
                        day: 1,
                        title: "Arrival Kigali & Transfer to Volcanoes NP",
                        description: "Upon arrival at Kigali International Airport, you will be met by our professional safari guide and transferred to Volcanoes National Park. Enjoy the scenic drive through the famous 'Thousand Hills' of Rwanda. Arrive and check in for dinner and overnight.",
                        accommodation: "Five Volcanoes Boutique Hotel (Luxury) / Da Vinci Gorilla Lodge (Mid-range) / Kinigi Guest House (Budget)"
                    },
                    {
                        day: 2,
                        title: "Gorilla Tracking & Departure",
                        description: "After an early breakfast, proceed to the park headquarters for a briefing by the rangers. Enter the misty forests of Volcanoes National Park for a once-in-a-lifetime encounter with the mountain gorillas. Spend one magical hour with them. In the afternoon, drive back to Kigali for your departure flight.",
                        meals: "Breakfast & Lunch"
                    }
                ],
                "3 Days": [
                    {
                        day: 1,
                        title: "Kigali – Transfer to Volcanoes NP",
                        description: "Pick up from Kigali International Airport or your Kigali Hotel. Your driver-guide may propose a visit to Kigali city which includes the Genocide Memorial centre at Gisozi. Later, transfer to Kinigi at the foothills of the Volcanoes. Go for a community/village walk in the afternoon to enjoy their different performances and explore more about their unique culture.",
                        accommodation: "MOUNTAIN GORILLA VIEW LODGE / DAVINCI GORILLA LODGE / LA PALME HOTEL",
                        meals: "Half Board"
                    },
                    {
                        day: 2,
                        title: "Gorilla Trekking in Volcanoes National Park",
                        description: "After breakfast, depart for the park headquarters where your driver-guide will accomplish the necessary formalities. Meet your ranger guide(s) for a briefing about the greatest animal experience ever! Enter the forest for gorilla trekking. Spend an unforgettable hour with the majestic mountain gorillas.",
                        accommodation: "MOUNTAIN GORILLA VIEW LODGE / DAVINCI GORILLA LODGE / LA PALME HOTEL",
                        meals: "Full Board"
                    },
                    {
                        day: 3,
                        title: "Golden Monkey Tracking & Return to Kigali",
                        description: "After breakfast, go for golden monkey tracking in the park. Thereafter, return to Kigali. If you missed the city tour on the first day, you will visit the Genocide Memorial centre at Gisozi and other landmarks. Finally, transfer to the Airport for your departure flight.",
                        meals: "Breakfast & Lunch"
                    }
                ],
                "6 Days": [
                    {
                        day: 1,
                        title: "Kigali Airport pick up & City tour",
                        description: "Upon arrival at Kigali International Airport, you will be picked by one of our experienced Rwanda Gorillas & Chimpanzee Tracking Safari driver/guide who will transfer you to Kigali for a city tour. You will visit many places including Kigali Genocide Memorial and museum, Caplaki craft market, Camp Kigali among others, then drive to your Hotel where you will spend the night.",
                        accommodation: "FIVE TO FIVE HOTEL / HOTEL DES MILLE COLLINES / KIGALI SERENA HOTEL"
                    },
                    {
                        day: 2,
                        title: "Depart Kigali – for Nyungwe Forest",
                        description: "In the morning after your breakfast, drive to Nyungwe Forest National Park. You will visit the King's palace in Nyanza, Ethnographic museum in Butare/Huye and Murambi Genocide memorial with lunch break along the way. Later continue through the forest to Gisakura.",
                        accommodation: "GISAKURA GUEST HOUSE / NYUNGWE HILL TOP VIEW HOTEL / ONE & ONLY NYUNGWE HOUSE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 3,
                        title: "Chimpanzee tracking & Transfer to Kibuye",
                        description: "Early morning breakfast, then report at the ranger station for Chimpanzee tracking briefing. Explore the forest with a park guide for your chimpanzee experience. Afterwards, you will be driven to Kibuye on Lake Kivu.",
                        accommodation: "BETHANY HOTEL / MORIAH HILL RESORT / COMORAN LODGE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 4,
                        title: "Colobus Monkey Tracking & Transfer to Volcanoes NP",
                        description: "Go for Angolan Colobus monkey tracking, a rare species found in this part of the forest. Later, transfer northwards to Volcanoes National Park via a western scenic route along the shores of Lake Kivu.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 5,
                        title: "Rwanda Gorilla Trekking & Gorilla Guardians Village",
                        description: "Report at the park office for a briefing before entering the forest for your gorilla tracking adventure (3-6 hours). Spend one hour with the gorillas. In the evening, visit Gorilla Guardians Village for cultural entertainment and traditional dances.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 6,
                        title: "Golden Monkey tracking & Departure",
                        description: "Morning Golden monkey tracking in Volcanoes National Park. Afterwards, transfer to Kigali International Airport for your departure flight.",
                        meals: "Breakfast & Lunch"
                    }
                ]
            }
        },
        inclusions: [],
        exclusions: [],
        pricingTiers: [
            {
                name: "Budget Friendly",
                description: "Basic yet comfortable accommodations like Buhoma Community Rest Camp. Ideal for travelers focused on the experience."
            },
            {
                name: "Mid Range",
                highlight: true,
                description: "Mid-to-upper range lodges like Bakiga Lodge, offering better views and enhanced amenities."
            },
            {
                name: "Luxury Safari",
                dark: true,
                description: "Premium stays at high-end lodges like Mahogany Springs, featuring world-class service and luxury interiors."
            }
        ],
        bestTime: "June to September, December to February",
        difficulty: "Moderate to Challenging",
        groupSize: "Maximum 8 people per group",
        durationInclusions: {
            "6 Days": [
                "Transport in 4WD Comfortable Vehicle with Fuel",
                "Airport drop at the end of the tour",
                "Service of a professional English-speaking driver/guide",
                "Gorilla trekking permits ($1500 each in Rwanda)",
                "Chimpanzee Tracking permit (Nyungwe forest)",
                "Golden monkey tracking fees",
                "All activities mentioned in the itinerary",
                "Accommodation for 5 Nights, 6 Days (All Meals, except meals in Kigali Hotel)",
                "Bottled drinking water while on tour",
                "Government taxes"
            ]
        },
        durationExclusions: {
            "6 Days": [
                "Any domestic or International flights",
                "Visa fees",
                "All optional activities",
                "Medical and travel Insurance",
                "Tips and gratuities to the guide/driver and hotel staffs.",
                "Any item not mentioned in the itinerary of personal nature like laundry and beverages, souvenirs and telephone bills."
            ]
        }
    },
    {
        id: "wildlife-safari",
        title: "10 Days 9 Nights Uganda Safari",
        shortDescription: "Explore Uganda's diverse wildlife across multiple national parks. Spot lions, elephants, leopards, and more on guided game drives.",
        fullDescription: "Discover the incredible diversity of Uganda's wildlife on this comprehensive 10-day safari adventure. Journey through multiple national parks including Queen Elizabeth, Murchison Falls, and Lake Mburo. Experience thrilling game drives, boat safaris, chimpanzee habituation, and gorilla trekking while spotting the Big Five and countless other species.",
        duration: "3-21 Days",
        price: "$1,428 Per Person",
        heroImage: "/images/safari1.jpeg",
        gallery: [
            "/images/safari1.jpeg",
            "/images/safari2.jpeg",
            "/images/safari3.jpeg",
            "/images/safari4.jpeg",
            "/images/safari5.jpeg",
            "/images/safari6.jpeg"
        ],
        itinerary: {
            "3 Days": [
                {
                    day: 1,
                    title: "Transfer to Murchison Falls via Ziwa Rhinos",
                    description: "Pick-up from your hotel for a transfer to Murchison Falls National Park. Stop en-route at Ziwa Rhino Sanctuary to track white rhinos on foot. Enjoy lunch and continue with en-route game viewing for lions, elephants, and giraffes.",
                    accommodation: "Paraa (Luxury) / Murchison River Lodge (Mid-Range) / Fort Murchison (Budget)",
                    meals: "Lunch & Dinner"
                },
                {
                    day: 2,
                    title: "Game Drive & Afternoon Nile Boat Cruise",
                    description: "Embark on an early morning game drive to spot the Big Five and various antelope species. In the afternoon, enjoy a boat cruise along the Nile to the base of the falls, seeing hippos and crocodiles.",
                    accommodation: "Paraa (Luxury) / Murchison River Lodge (Mid-Range) / Fort Murchison (Budget)",
                    meals: "Full Board"
                },
                {
                    day: 3,
                    title: "Morning Game Drive, Top of Falls & Return",
                    description: "Start with a final game drive, then visit the breathtaking Top of the Falls where the Nile crashes through a narrow gorge. Afterwards, drive back to Kampala/Entebbe.",
                    meals: "Breakfast & Lunch"
                }
            ],
            "5 Days": [
                { day: 1, title: "Arrival & Transfer", description: "Airport pickup and transfer to Murchison Falls National Park." },
                { day: 2, title: "Murchison Falls Game Drive", description: "Early morning game drive to spot lions, elephants, and giraffes. Afternoon boat cruise on the Nile." },
                { day: 3, title: "Transfer to Queen Elizabeth", description: "Drive south to Queen Elizabeth National Park along the scenic Albertine Rift." },
                { day: 4, title: "Kazinga Channel Safari", description: "Morning game drive and afternoon boat cruise on the Kazinga Channel, famous for hippo pods." },
                { day: 5, title: "Return to Entebbe", description: "Morning game drive and transfer back to Entebbe for departure." }
            ],
            "7 Days": [
                {
                    day: 1,
                    title: "Transfer to Kibale National Park",
                    description: "Early morning breakfast at your hotel followed by a pick-up for a scenic drive to Kibale National Park, the primate capital of the world. After check-in and lunch, head out for a community tour to explore the local surroundings.\n\nTransfer Time: 6h 50min (340km)",
                    accommodation: "Chimp Nest Safari Lodge",
                    meals: "Lunch & Dinner"
                },
                {
                    day: 2,
                    title: "Chimpanzee Tracking & Banana Experience",
                    description: "After an early breakfast, head into the forest for your chimpanzee tracking experience. Spend time observing our closest relatives in their natural habitat. In the evening, you can opt for a unique Banana Experience, learning about banana gin and beer production.",
                    accommodation: "Chimp Nest Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 3,
                    title: "Transfer to Bwindi via Queen Elizabeth NP",
                    description: "Transfer to Queen Elizabeth National Park for a morning game drive in the Kasenyi plains and channel tracks. Enjoy an Equator experience and a packed lunch. Later, continue to Bwindi Impenetrable National Park via the Ishasha sector, famous for tree-climbing lions.\n\nTransfer: 225km (approx. 5h 30min combined)",
                    accommodation: "Bwindi Home Stay",
                    meals: "Full Board"
                },
                {
                    day: 4,
                    title: "Mountain Gorilla Experience",
                    description: "The highlight of your journey: trekking the majestic mountain gorillas in Bwindi. Spend one life-changing hour with a gorilla family. In the afternoon, you can optionally take a nature walk to visit the incredible 3-course cascaded waterfalls.",
                    accommodation: "Bwindi Home Stay",
                    meals: "Full Board"
                },
                {
                    day: 5,
                    title: "Community Engagement & Batwa Walk",
                    description: "A day dedicated to cultural immersion. Take a mid-morning community walk to meet the Batwa people and learn about their traditional forest life. In the late afternoon, visit a local orphanage school to see the community impact projects.",
                    accommodation: "Bwindi Home Stay",
                    meals: "Full Board"
                },
                {
                    day: 6,
                    title: "Transfer to Lake Mburo & Boat Cruise",
                    description: "Drive to Lake Mburo National Park, Uganda's smallest Savannah park. After check-in, enjoy an afternoon boat cruise on the lake to spot hippos, crocodiles, and diverse birdlife.\n\nTransfer: 198km (4h 10min)",
                    accommodation: "Kigarama Wilderness Lodge",
                    meals: "Full Board"
                },
                {
                    day: 7,
                    title: "Game Drive & Return to Entebbe",
                    description: "Start the day with an early morning game drive to spot elands, zebras, and giraffes. After check-out, begin your journey back to Entebbe for your departure flight.\n\nTransfer: 275km (5h 40min)",
                    meals: "Breakfast & Lunch"
                }
            ],
            "10 Days": [
                {
                    day: 1,
                    title: "Pick up Entebbe",
                    description: "You will meet your driver guide at Entebbe International Airport who will be already waiting for you and then, he will drive your lodge for an overnight stay.",
                    accommodation: "Airport Link Guest House",
                    meals: "Full Board"
                },
                {
                    day: 2,
                    title: "Transfer to Murchison Falls National Park and Rhino Tracking at Ziwa Sanctuary",
                    description: "Enjoy breakfast at your hotel early in the morning before hitting the road for the most beautiful protected area in Uganda: Murchison Falls National Park.\n\nThis park is located about 300 kilometres north of Kampala, passing through the famous Luwero triangle and has a stopover at Ziwa Rhino sanctuary and then have lunch at Kabalega dinners.\n\nWe later proceed on entering the park through Kichombanyobo gate and visit the magnificent falls where you will enjoy and marvel at the mighty Nile, being forced into a seven meter crevice to thunder 45 meters below in a series of cascades that can be viewed at different points.",
                    accommodation: "Heritage Site Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 3,
                    title: "Full Day Murchison Falls National Park",
                    description: "After an early morning breakfast, we drive to the park to start our game drive towards the Delta area, in search for wildlife that includes; the Rothschild Giraffe, elephant, Jackson’s Hartbeast, Lions, Warthogs, Kobs, Jackals, Oribis, Waterbucks, Patus monkeys and Leopards among others.\n\nHere also a variety of Savannah woodland birds can be seen. We go back to the lodge, relax around, have lunch and later in the afternoon, at 02:00pm go for the boat cruise on the Nile, for game viewing at close quarters as they come to cool off on the shores of the mighty Nile.\n\nHere you get a chance of seeing many schools of Hippos, Crocodiles, Buffaloes, Elephants and a variety of water birds. We come back to the lodge after about 3 hours, for dinner and overnight.",
                    accommodation: "Heritage Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 4,
                    title: "Transfer to Kibale National Park",
                    description: "You will start your drive to western Uganda through the beautiful green scenery and the tea plantations.\n\nYou will have a chance to interact with local people during the walk through the market after lunch. After lunch, you will have a one hour drive to Kibale forest where you will be able to spot some monkeys, birds and Baboons on your way and during the stop-over.",
                    accommodation: "Chimpanzee Capital Lodge",
                    meals: "Full Board"
                },
                {
                    day: 5,
                    title: "Chimpanzee trekking",
                    description: "Today you will have your breakfast at the lodge and prepare for your trip for Chimpanzee walk. Kibale forest National Park consists of around 13 primate species.\n\nWhile at the park, you will be able to see many types of monkeys like; the wonderful Red Columbus, Grey cheeked mangabey, Black and white Columbus monkey, L’hoest monkey and the amazing Chimpanzees.\n\nHere you will experience our cousins today for one hour and the trip takes 3-4 hours walk through the tropical rain forest with the experienced guide.\n\nAfter lunch you will visit Bigodi swamp for the walk to spot some monkeys and bird species and that takes you through grassland, small communities, see local gardens, people's way of leaving and many others.\n\nAfter we shall drive straight to Queen Elizabeth National Park and arrive late evening.",
                    accommodation: "Irungu Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 6,
                    title: "Full Day Queen Elizabeth National Park",
                    description: "Wake up early morning, have your breakfast and drive to the park through the Kasenyi gate for the early morning game drive where you will be able to spot animals like lions, Leopards, elephants, beards of buffaloes, Uganda Kob and other antelopes, warthogs and birds like the Eagles, Guinea Fowls, Spurfowls, falconlins and more.\n\nThe drive back to the lodge for your lunch and then we enter the park again for the boat cruise at Kazinga Channel to see aquatic life and spot some water birds, crocodiles, elephants, buffaloes, monitor lizards, Hippos and more others.",
                    accommodation: "Irungu Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 7,
                    title: "Transfer to Bwindi Impenetrable National Park",
                    description: "Early morning breakfast, then drive heading to the Southern gate of Queen Elizabeth National Park (Ishasha sector) for another game drive to look for the climbing lions, enjoy your picnic lunch and we continue our drive to Bwindi.",
                    accommodation: "Buhoma Community Rest Camp",
                    meals: "Full Board"
                },
                {
                    day: 8,
                    title: "Gorilla Tracking and Community Walk",
                    description: "Today experience what most of the people define as a life-changing a experience, adventure meeting the gentle giants of Bwindi Impenetrable National Park.\n\nHave your morning breakfast early in the morning at 6:30 and then set off to the park headquarters for briefing. This is conducted by skilled local rangers who then again guide to the entire activity.\n\nThe you will embark and enter into the rain forest that is full of uncommon animal species such as monkeys, beautiful butterflies and exotic birds.\n\nGorilla Trekking will take 2-3 hours taking you on the challenging steep trails and dense vegetation with beautiful views.\n\nYour efforts applied for the trek will be later paid off when you meet one of the family of the endangered Mountain Gorillas. You find them feasting, grooming each other, playing and napping. Their behaviour is so catchy as you feel you have known them for your entire life.\n\nYou will spend 1 hour with the gorillas, taking pictures and then have your lunch and head back to centre for your gorilla trekking certificates.\n\nAfter this superb activity, transfer to Lake Bunyonyi a fabulous tropical gem of Kigezi Highlands. When here you will be blown by the attractiveness of this scenery lake.\n\nOn arrival, enjoy a tranquil boat cruise as you explore some of the lake's popular 29 Islands.",
                    accommodation: "Seeds of Hope Island",
                    meals: "Full Board"
                },
                {
                    day: 9,
                    title: "Transfer to Lake Mburo, Game drive and a Nature walk",
                    description: "Have a hearty laze breakfast on this 9th day of your 10 days Uganda Experience, checkout of the lodge and head North East for 4-5 hours drive to Lake Mburo National Park.\n\nCheck into your lodge, relax and then head for Nature Walk to see the Long Horned Ankole cows, do milking in the local areas and then head for the evening game drive to spot animal like the Elands, Impalas, Zebras giraffes and more.",
                    accommodation: "Kigarama Wilderness Lodge",
                    meals: "Full Board"
                },
                {
                    day: 10,
                    title: "Enjoy a morning walk, and transfer to Entebbe",
                    description: "Have your breakfast and enter into the park with a park ranger to spot more wildlife like the Topis, water bucks, bush bucks, giraffes, hynas and various bird species plus the scenic views of the park.\n\nAfter this walk, transfer to Entebbe which will take 3-4 hours. However on this journey, stop to the equator for pictures in both the Southern Hemisphere and the Northern Hemisphere at one point as your chance to stand in the middle of the world.\n\nThe drive to Entebbe to shop for your favourite souvenirs arriving evening at the airport depending on your flight schedule.\n\nYour driver will be there to drive you to the airport or to any hotel if you have a day room. A day room is applicable if you have a late flight."
                }
            ],
            "21 Days": [
                {
                    day: 1,
                    title: "Arrival at Entebbe Airport & Transfer to Hotel",
                    description: "Upon arrival at Entebbe international Airport, your tour guide will transfer you to your hotel in either Entebbe or Kampala for an overnight stay.",
                    accommodation: "PROTEA HOTEL / ADMAS GRAND HOTEL / CASSIA LODGE"
                },
                {
                    day: 2,
                    title: "Kampala City Tour & Transfer to Jinja",
                    description: "Explore the cultural and historical sites of Kampala, including Kasubi Royal Tombs, Namugongo martyrs shrine, and the Uganda National Museum. Later, drive to Jinja town.",
                    accommodation: "HAVEN RIVER LODGE / 2 FRIENDS GUEST HOUSE / EXPLORERS CAMP",
                    meals: "Lunch & Dinner"
                },
                {
                    day: 3,
                    title: "Source of the Nile, Speke Monument & Return to Kampala",
                    description: "Visit the source of the Nile River and the Speke monument by boat. Explore local markets, then head back to Kampala with a visit to Sezibwa Falls or Mabira forest.",
                    accommodation: "SHERATON HOTEL / LE PETITE VILLAGE HOTEL / CASSIA LODGE",
                    meals: "Full Board"
                },
                {
                    day: 4,
                    title: "Transfer to Kitgum via Ziwa Rhino Sanctuary",
                    description: "Depart for Kitgum town with a stop at Ziwa Rhino sanctuary for tracking. This sanctuary is home to the only wild rhinos in Uganda.",
                    accommodation: "BOMAH HOTEL / FUGLEYS GUEST HOUSE",
                    meals: "Full Board"
                },
                {
                    day: 5,
                    title: "Drive to Kidepo Valley National Park",
                    description: "Head to north-eastern Uganda to Kidepo Valley NP, one of Uganda's best game parks. Observe the unique Karamojongo lifestyle and enjoy an afternoon game drive.",
                    accommodation: "APOKA LODGE / SAVANNAH LODGE",
                    meals: "Full Board"
                },
                {
                    day: 6,
                    title: "Full Day in Kidepo Valley NP",
                    description: "Enjoy morning and afternoon game drives with chances to see giraffes, elephants, lions, leopards, and uniquely, cheetahs and ostriches.",
                    accommodation: "APOKA LODGE / SAVANNAH LODGE",
                    meals: "Full Board"
                },
                {
                    day: 7,
                    title: "Transfer to Murchison Falls National Park",
                    description: "Drive to Uganda's largest park, Murchison Falls. Enjoy en-route game viewing as you enter this stunning landscape bisected by the Nile.",
                    accommodation: "PARAA SAFARI LODGE / PAKUBA SAFARI LODGE / FORT MURCHISON",
                    meals: "Full Board"
                },
                {
                    day: 8,
                    title: "Game Drive & Boat Trip to Bottom of Falls",
                    description: "A morning game drive for savannah game, followed by an afternoon boat ride to the base of the mighty Murchison Falls.",
                    accommodation: "PARAA SAFARI LODGE / PAKUBA SAFARI LODGE / FORT MURCHISON",
                    meals: "Full Board"
                },
                {
                    day: 9,
                    title: "Morning Game Drive & Transfer to Hoima",
                    description: "A final game drive in Murchison Falls to catch early raisers, followed by a transfer to Hoima town, the seat of the Bunyoro Kitara kingdom.",
                    accommodation: "HOIMA CULTURAL LODGE / HOTEL KONTIK",
                    meals: "Full Board"
                },
                {
                    day: 10,
                    title: "Transfer to Kibale Forest National Park",
                    description: "Drive to the primate capital of the world, Kibale Forest. Enjoy the scenic Albertine rift views along the way.",
                    accommodation: "KYANINGA LODGE / PRIMATE LODGE KIBALE / CHIMPANZEE FOREST LODGE",
                    meals: "Full Board"
                },
                {
                    day: 11,
                    title: "Chimpanzee Tracking & Bigodi Wetland Walk",
                    description: "Morning chimp tracking in the rain forest, followed by a nature walk in the Bigodi wetland sanctuary for more primates and birds.",
                    accommodation: "KYANINGA LODGE / PRIMATE LODGE KIBALE / CHIMPANZEE FOREST LODGE",
                    meals: "Full Board"
                },
                {
                    day: 12,
                    title: "Transfer to Queen Elizabeth National Park",
                    description: "Drive towards Queen Elizabeth NP with views of the Rwenzori Mountains. Cross the equator and enjoy an evening game drive.",
                    accommodation: "MWEYA SAFARI LODGE / ENGANZI LODGE / BUSH LODGE",
                    meals: "Full Board"
                },
                {
                    day: 13,
                    title: "Morning Game Drive & Kazinga Channel Boat Cruise",
                    description: "Morning safari in the Kasenyi plains followed by a 2-hour boat cruise on the natural Kazinga channel.",
                    accommodation: "MWEYA SAFARI LODGE / ENGANZI LODGE / BUSH LODGE",
                    meals: "Full Board"
                },
                {
                    day: 14,
                    title: "Ishasha Sector Game Drive (Tree-Climbing Lions)",
                    description: "Transfer to the southern Ishasha sector. Enjoy an afternoon game drive in search of its famous tree-climbing lions.",
                    accommodation: "ISHASHA WILDERNESS CAMP / ISHASHA JUNGLE LODGE",
                    meals: "Full Board"
                },
                {
                    day: 15,
                    title: "Game Drive & Transfer to Bwindi National Park",
                    description: "Final game drive in Ishasha followed by a transfer to the misty forests of Bwindi, home to the mountain gorillas.",
                    accommodation: "MAHOGANY SPRINGS / BUHOMA HAVEN / BUHOMA COMMUNITY REST CAMP",
                    meals: "Full Board"
                },
                {
                    day: 16,
                    title: "Gorilla Tracking in Bwindi & Nature Walk",
                    description: "A life-changing encounter with Bwindi's gentle giants. Spend an hour with a gorilla family. Optional waterfall walk in the afternoon.",
                    accommodation: "MAHOGANY SPRINGS / BUHOMA HAVEN / BUHOMA COMMUNITY REST CAMP",
                    meals: "Full Board"
                },
                {
                    day: 17,
                    title: "Batwa Community Walk & Transfer to Lake Bunyonyi",
                    description: "Meet the Batwa pygmies and learn about their traditional forest life. Later, drive to Lake Bunyonyi, Uganda's deepest lake.",
                    accommodation: "BIRDNEST RESORT / ARCADIA COTTAGES / BUNYONYI OVERLAND RESORT",
                    meals: "Full Board"
                },
                {
                    day: 18,
                    title: "Lake Bunyonyi Boat Ride & Transfer to Rwanda",
                    description: "Explore the 29 islands of Lake Bunyonyi by boat. In the afternoon, cross the border at Cyanika to Volcanoes National Park in Rwanda.",
                    accommodation: "MOUNTAIN GORILLA VIEW LODGE / DAVINCI GORILLA LODGE / LA PALME HOTEL",
                    meals: "Full Board"
                },
                {
                    day: 19,
                    title: "2nd Gorilla Trekking (Volcanoes NP) & Cultural Tour",
                    description: "A second gorilla experience in Rwanda's Volcanoes NP. Later, visit the Iby'iwacu Cultural Village for a traditional demonstration.",
                    accommodation: "MOUNTAIN GORILLA VIEW LODGE / DAVINCI GORILLA LODGE / LA PALME HOTEL",
                    meals: "Full Board"
                },
                {
                    day: 20,
                    title: "Golden Monkey Tracking & Transfer to Kigali",
                    description: "Track the rare golden monkeys or hike to Dian Fossey's grave. In the afternoon, transfer to Rwanda's clean and vibrant capital, Kigali.",
                    accommodation: "KIGALI SERENA / HOTEL DES MILLE COLLINES / FIVE TO FIVE HOTEL",
                    meals: "Full Board"
                },
                {
                    day: 21,
                    title: "Kigali City Tour & Departure",
                    description: "Tour Kigali city, visiting the Genocide Memorial and local craft markets before your final transfer to the airport."
                }
            ]
        },
        inclusions: [
            "Airport pick and drop",
            "English speaking Driver guide",
            "Gorilla tracking permits and park fees",
            "Mid range accommodation (full Board)",
            "All handling and itinerary planning"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Porter tips, guide tips",
            "Personal expenses (souvenirs)",
            "Optional activities",
            "Meals not specified"
        ],
        durationInclusions: {
            "3 Days": [
                "Park Entry fees",
                "Gorilla Tracking permit",
                "Golden monkey tracking fee (Rwanda)",
                "Accommodation and Meals as per itinerary",
                "Transport in a comfortable 4wd safari vehicle",
                "Full time knowledgeable English speaking safari guide/driver",
                "Airport transfers",
                "Rhinoceros tracking at Ziwa sanctuary (Uganda)",
                "Game drives and Boat cruises (Uganda)",
                "Drinking water while on tour",
                "Local taxes"
            ]
        },
        durationExclusions: {
            "3 Days": [
                "International flights and Airfares",
                "Visa fees",
                "All optional activities",
                "Medical and travel Insurance",
                "Tips and gratuities",
                "Items of personal nature (laundry, beverages, souvenirs)"
            ]
        },
        pricingTiers: [
            {
                name: "Budget Friendly",
                description: "Features comfortable guest houses and standard safari lodges. Ideal for those seeking an authentic experience on a budget."
            },
            {
                name: "Mid Range",
                highlight: true,
                description: "Our most popular choice. Includes well-appointed safari lodges and tented camps with enhanced amenities and service."
            },
            {
                name: "Luxury Safari",
                dark: true,
                description: "The ultimate experience. Stay in Uganda's finest boutique lodges and luxury camps with premium services and locations."
            }
        ],
        note: "Bwindi impenetrable national park has been open for tourism since 1993. 20% of every gorilla permit fee goes directly to farmers as compensation for crop protection. A recent census confirmed that 426 chimpanzees call Bwindi home.",

        bestTime: "December to February, June to September",
        difficulty: "Easy to Moderate",
        groupSize: "Flexible group sizes"
    },
    {
        id: "15-days-best-of-uganda",
        title: "15 Days Best of Uganda Safari",
        shortDescription: "This 15-day all-round Uganda safari showcases the very best of the Pearl of Africa, combining wildlife, landscapes, and culture.",
        fullDescription: "From the mighty waterfalls of Murchison Falls National Park to the primate-rich forests of Kibale National Park and Bwindi Impenetrable National Park, this journey combines wildlife, landscapes, and culture. You will experience rhino tracking, classic game drives, boat safaris, chimpanzee and gorilla trekking, cultural encounters, and relaxation at Lake Bunyonyi and Lake Mburo.",
        duration: "15 Days",
        price: "$11,000 for 2 People",
        heroImage: "/images/safari7.jpeg",
        gallery: [
            "/images/safari7.jpeg",
            "/images/safari8.jpeg",
            "/images/safari9.jpeg",
            "/images/safari10.jpeg",
            "/images/safari11.jpeg",
            "/images/safari12.jpeg",
            "/images/safari13.jpeg",
            "/images/safari14.jpeg",
            "/images/safari15.jpeg",
            "/images/elephant10.jpeg",
            "/images/elephant11.jpeg",
            "/images/elephant12.jpeg",
            "/images/tour-car-1.jpeg",
            "/images/tour-car-2.jpeg"
        ],
        itinerary: {
            "15 Days": [
                {
                    day: 1,
                    title: "Arrival in Entebbe – Relaxation",
                    description: "Upon arrival at Entebbe International Airport, you will be warmly welcomed by your safari guide and transferred to your hotel. Depending on arrival time, relax by the shores of Lake Victoria, enjoy the cool breeze, and recover from your journey.\n\nExperience: Relaxation by Lake Victoria, briefing for safari",
                    accommodation: "Sienna Beach Hotel",
                    meals: "Dinner"
                },
                {
                    day: 2,
                    title: "Transfer to Murchison Falls via Ziwa Rhino Sanctuary",
                    description: "After breakfast, begin your journey to Murchison Falls National Park.\n\nEn route, stop at Ziwa Rhino Sanctuary for a guided rhino tracking experience on foot. This is the only place in Uganda where you can see rhinos in the wild.\n\nContinue to Murchison Falls, entering Uganda’s largest national park with beautiful savannah landscapes and the Nile River cutting through.\n\nExperience: Rhino tracking & scenic drive",
                    accommodation: "Bamboo Village Safari Lodge",
                    meals: "Breakfast, Lunch & Dinner"
                },
                {
                    day: 3,
                    title: "Morning Game Drive & Nile Boat Safari",
                    description: "Start early with a sunrise game drive on the northern bank of the park. Expect sightings of elephants, lions, giraffes, buffaloes, and various antelope species.\n\nIn the afternoon, enjoy a boat safari along the Nile River to the base of Murchison Falls. Along the way, see large pods of hippos, crocodiles, and abundant birdlife.\n\nOptionally, hike to the top of the falls for a breathtaking view.\n\nExperience: Big game viewing & Nile river cruise",
                    accommodation: "Bamboo Village Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 4,
                    title: "Transfer to Kibale National Park",
                    description: "After breakfast, embark on a scenic drive southwest to Kibale National Park.\n\nThe journey passes through traditional villages, lush countryside, and tea plantations.\n\nExperience: Scenic countryside & tea plantation views",
                    accommodation: "Turaco Treetops Lodge",
                    meals: "Full Board"
                },
                {
                    day: 5,
                    title: "Chimpanzee Trekking & Community Walk",
                    description: "After briefing, head into the forest for chimpanzee trekking. Kibale is home to one of Africa’s highest concentrations of primates.\n\nWatch chimpanzees swinging through trees, grooming, feeding, and communicating.\n\nIn the afternoon, enjoy a guided community walk, visiting local villages and learning about traditional lifestyles.\n\nExperience: Chimp tracking & cultural interaction",
                    accommodation: "Turaco Treetops Lodge",
                    meals: "Full Board"
                },
                {
                    day: 6,
                    title: "Transfer to Queen Elizabeth National Park",
                    description: "Drive to Queen Elizabeth National Park, arriving in time for relaxation.\n\nEnjoy views of crater lakes and the Rwenzori Mountains along the way.\n\nExperience: Scenic landscapes & relaxation",
                    accommodation: "Kikorongo Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 7,
                    title: "Game Drive & Kazinga Channel Boat Safari",
                    description: "Early morning game drive in search of lions, elephants, buffaloes, and more.\n\nIn the afternoon, enjoy a boat cruise along the Kazinga Channel, one of Africa’s best wildlife viewing experiences.\n\nExperience: Close-up wildlife viewing by boat",
                    accommodation: "Kikorongo Safari Lodge",
                    meals: "Full Board"
                },
                {
                    day: 8,
                    title: "Transfer to Ishasha Sector – Evening Game Drive",
                    description: "Drive to Ishasha, the southern sector of Queen Elizabeth National Park.\n\nThis area is famous for its unique tree-climbing lions. Enjoy an evening game drive searching for them.\n\nExperience: Tree-climbing lions",
                    accommodation: "Enjojo Lodge",
                    meals: "Full Board"
                },
                {
                    day: 9,
                    title: "Game Drive & Transfer to Bwindi",
                    description: "Morning game drive in Ishasha before continuing to Bwindi Impenetrable National Park.\n\nArrive at the lodge surrounded by dense forest.\n\nExperience: Transition from savannah to rainforest",
                    accommodation: "Gorilla Mist Camp",
                    meals: "Full Board"
                },
                {
                    day: 10,
                    title: "Gorilla Trekking & Transfer to Lake Bunyonyi",
                    description: "Early morning briefing before heading into the forest for gorilla trekking.\n\nOnce you find the gorillas, spend one hour observing them in their natural habitat.\n\nAfterward, transfer to Lake Bunyonyi, one of Africa’s most beautiful lakes.\n\nExperience: Gorilla encounter & scenic lake relaxation",
                    accommodation: "Keije Resort Bunyonyi",
                    meals: "Full Board"
                },
                {
                    day: 11,
                    title: "Lake Bunyonyi Activities",
                    description: "Enjoy a relaxed day with optional activities such as canoeing, island hopping, swimming, or cultural visits.\n\nExperience: Relaxation & scenic beauty",
                    accommodation: "Keije Resort Bunyonyi",
                    meals: "Full Board"
                },
                {
                    day: 12,
                    title: "Transfer to Lake Mburo National Park",
                    description: "Drive to Lake Mburo National Park.\n\nIn the evening, enjoy a guided community walk to interact with local people.\n\nExperience: Cultural interaction",
                    accommodation: "Rwakobo Rock Lodge",
                    meals: "Full Board"
                },
                {
                    day: 13,
                    title: "Walking Safari & Boat Safari",
                    description: "Morning walking safari with a ranger—one of the few parks in Uganda where this is possible.\n\nIn the afternoon, enjoy a boat ride on Lake Mburo with hippos and birds.\n\nExperience: Up-close wildlife encounters on foot",
                    accommodation: "Rwakobo Rock Lodge",
                    meals: "Full Board"
                },
                {
                    day: 14,
                    title: "Return to Kampala – City Tour",
                    description: "Drive to Kampala.\n\nIn the evening, enjoy a brief city tour including local markets, landmarks, and cultural sites.\n\nExperience: Urban culture & local life",
                    accommodation: "Hotel in Kampala / Entebbe",
                    meals: "Full Board"
                },
                {
                    day: 15,
                    title: "Mabamba Shoebill Tracking & Departure",
                    description: "Early morning transfer to Mabamba Swamp for a canoe excursion in search of the rare shoebill stork.\n\nReturn and transfer to the airport for departure.\n\nExperience: Unique birding adventure",
                    meals: "Breakfast"
                }
            ]
        },
        inclusions: [
            "Gorilla & chimpanzee trekking permits",
            "Rhino tracking at Ziwa Rhino Sanctuary",
            "All accommodations listed above",
            "All meals as per itinerary",
            "Private 4x4 safari vehicle & professional guide",
            "All game drives & boat safaris",
            "Park entrance fees",
            "Mabamba canoe experience",
            "Bottled drinking water"
        ],
        exclusions: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Tips & gratuities",
            "Personal expenses",
            "Optional activities not listed"
        ],
        pricingTiers: [
            {
                name: "Private Safari",
                highlight: true,
                description: "This 15-day comprehensive journey is designed as a high-end private experience. Experience the best of Uganda with a dedicated professional guide and premium 4x4 transport."
            }
        ],
        note: "Contact us for a personalized quote based on your preferred dates and group size.",
        bestTime: "June to September, December to February",
        difficulty: "Moderate",
        groupSize: "Private safari"
    },
    {
        id: "bird-watching",
        title: "Bird Watching Tours",
        shortDescription: "Discover over 1,000 bird species in Uganda's rich ecosystems. Perfect for both amateur and experienced birders.",
        fullDescription: "Uganda is a birder's paradise with over 1,060 recorded bird species. Join our expert ornithologists on specialized birding tours through diverse habitats from wetlands to montane forests. Spot rare species including the Shoebill Stork, African Green Broadbill, and numerous endemic species.",
        duration: "4-8 Days",
        price: "From $1,200",
        heroImage: "/images/bird1.jpeg",
        gallery: [
            "/images/bird1.jpeg",
            "/images/bird2.jpeg",
            "/images/bird3.jpeg"
        ],
        itinerary: {},
        countryItineraries: {
            "Uganda": {
                "4 Days": [
                    { day: 1, title: "Mabamba Swamp", description: "Early morning boat ride to Mabamba Swamp in search of the rare Shoebill Stork and other wetland species." },
                    { day: 2, title: "Lake Mburo", description: "Transfer to Lake Mburo National Park. Afternoon bird walk focusing on acacia-associated species." },
                    { day: 3, title: "Lake Mburo Boat Cruise", description: "Morning boat cruise for water birds, then afternoon savanna birding." },
                    { day: 4, title: "Return to Entebbe", description: "Final morning bird walk and transfer back to the airport." }
                ],
                "6 Days": [
                    {
                        day: 1,
                        title: "Arrival & Entebbe Botanical Gardens",
                        description: "Arrival at Entebbe International Airport, meet your guide and transfer to your hotel. Later, visit Entebbe Botanical Gardens for an introduction to Uganda's common birds including Great Blue Turaco and Ross's Turaco."
                    },
                    {
                        day: 2,
                        title: "Mabamba Swamp & Transfer to Lake Mburo",
                        description: "Early morning visit to Mabamba Swamp to search for the prehistoric Shoebill Stork via traditional canoe. Afterwards, drive to Lake Mburo National Park with birding stops along the way."
                    },
                    {
                        day: 3,
                        title: "Birding in Lake Mburo National Park",
                        description: "Morning bird walk in the acacia woodlands of Lake Mburo. In the afternoon, enjoy a boat trip on the lake to spot species like the African Finfoot, White-backed Night-Heron, and various kingfishers."
                    },
                    {
                        day: 4,
                        title: "Transfer to Queen Elizabeth NP & Kazinga Channel",
                        description: "Drive to Queen Elizabeth National Park. In the afternoon, embark on a boat safari along the Kazinga Channel, a highlight for birders with hundreds of water birds and hippos."
                    },
                    {
                        day: 5,
                        title: "Game Drive & Savanna Birding",
                        description: "Morning game drive in the Kasenyi plains to look for savanna birds and predators. Afternoon explore the crater lakes region or Maramagambo forest for specialized bird species."
                    },
                    {
                        day: 6,
                        title: "Return to Entebbe via Equator",
                        description: "Final morning birding in the park before beginning the journey back to Entebbe. Stop at the Equator for photos and lunch. Transfer to the airport for your departure."
                    }
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
            "Rwanda": {
                "6 Days": [
                    {
                        day: 1,
                        title: "Kigali Airport pick up & City tour",
                        description: "Upon arrival at Kigali International Airport, you will be picked by one of our experienced Rwanda Gorillas & Chimpanzee Tracking Safari driver/guide who will transfer you to Kigali for a city tour. You will visit many places including Kigali Genocide Memorial and museum, Caplaki craft market, Camp Kigali among others, then drive to your Hotel where you will spend the night.",
                        accommodation: "FIVE TO FIVE HOTEL / HOTEL DES MILLE COLLINES / KIGALI SERENA HOTEL"
                    },
                    {
                        day: 2,
                        title: "Depart Kigali – for Nyungwe Forest",
                        description: "In the morning after your breakfast, drive to Nyungwe Forest National Park. You will visit the King's palace in Nyanza, Ethnographic museum in Butare/Huye and Murambi Genocide memorial with lunch break along the way. Later continue through the forest to Gisakura.",
                        accommodation: "GISAKURA GUEST HOUSE / NYUNGWE HILL TOP VIEW HOTEL / ONE & ONLY NYUNGWE HOUSE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 3,
                        title: "Chimpanzee tracking & Transfer to Kibuye",
                        description: "Early morning breakfast, then report at the ranger station for Chimpanzee tracking briefing. Explore the forest with a park guide for your chimpanzee experience. Afterwards, you will be driven to Kibuye on Lake Kivu.",
                        accommodation: "BETHANY HOTEL / MORIAH HILL RESORT / COMORAN LODGE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 4,
                        title: "Colobus Monkey Tracking & Transfer to Volcanoes NP",
                        description: "Go for Angolan Colobus monkey tracking, a rare species found in this part of the forest. Later, transfer northwards to Volcanoes National Park via a western scenic route along the shores of Lake Kivu.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 5,
                        title: "Rwanda Gorilla Trekking & Gorilla Guardians Village",
                        description: "Report at the park office for a briefing before entering the forest for your gorilla tracking adventure (3-6 hours). Spend one hour with the gorillas. In the evening, visit Gorilla Guardians Village for cultural entertainment and traditional dances.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 6,
                        title: "Golden Monkey tracking & Departure",
                        description: "Morning Golden monkey tracking in Volcanoes National Park. Afterwards, transfer to Kigali International Airport for your departure flight.",
                        meals: "Breakfast & Lunch"
                    }
                ]
            }
        },
        inclusions: [],
        exclusions: [],
        durationInclusions: {
            "6 Days": [
                "Transport in 4WD Comfortable Vehicle with Fuel",
                "Airport drop at the end of the tour",
                "Service of a professional English-speaking driver/guide",
                "Gorilla trekking permits ($1500 each in Rwanda)",
                "Chimpanzee Tracking permit (Nyungwe forest)",
                "Golden monkey tracking fees",
                "All activities mentioned in the itinerary",
                "Accommodation for 5 Nights, 6 Days (All Meals, except meals in Kigali Hotel)",
                "Bottled drinking water while on tour",
                "Government taxes"
            ]
        },
        durationExclusions: {
            "6 Days": [
                "Any domestic or International flights",
                "Visa fees",
                "All optional activities",
                "Medical and travel Insurance",
                "Tips and gratuities to the guide/driver and hotel staffs.",
                "Any item not mentioned in the itinerary of personal nature like laundry and beverages, souvenirs and telephone bills."
            ]
        },
        bestTime: "November to April (migratory season)",
        difficulty: "Easy to Moderate",
        groupSize: "Maximum 6 birders"
    },
    {
        id: "chimpanzee-tracking",
        title: "Uganda Gorilla & Chimpanzee Safari",
        shortDescription: "Track chimps in Kibale Forest, gorillas in Bwindi, and explore Queen Elizabeth & Lake Mburo on this complete 7-day primate adventure.",
        fullDescription: "Kibale Forest is the primate capital of the world, home to over 1,500 chimpanzees. Combined with gorilla trekking at Bwindi Impenetrable Forest, game drives at Queen Elizabeth NP, and island canoeing at Lake Bunyonyi, this 7-day journey is a complete East African safari experience.",
        duration: "6-7 Days",
        price: "From $2,920",
        heroImage: "/images/chimp.jpeg",
        gallery: [
            "/images/chimp1.jpg",
            "/images/chimp2.jpg",
            "/images/chimp3.jpg",
            "/images/chimp4.jpg",
            "/images/chimp5.jpg",
            "/images/chimp10.jpeg"
        ],
        itinerary: {},
        countryItineraries: {
            "Uganda": {
                "7 Days": [
                    {
                        day: 1,
                        title: "Scenic Drive to the Forest of Kibale",
                        description: "You will be warmly welcomed at the airport or your hotel by your private guide. After a short briefing, step into your private Land Cruiser and set off to begin your safari adventure.\n\nBegin your journey towards Kibale Forest, traveling through one of Uganda's most scenic regions. The area is well known for its rolling tea plantations, lush countryside, and beautiful crater lakes, offering a striking introduction to western Uganda as you make your way towards the forest.\n\nTransfer Time: 7 hours",
                        image: "/images/chimp.jpeg"
                    },
                    {
                        day: 2,
                        title: "Chimpanzee Trekking at the Primate Capital of the World",
                        description: "This morning, head into Kibale National Park for an unforgettable chimpanzee trekking experience. Kibale is home to the highest density of chimpanzees in the region — over 1,500 individuals — making it one of the best places in the world to see them in the wild.\n\nWith the guidance of expert trackers, you'll follow signs through the forest until you find one of the habituated chimp families. Once located, you'll spend one hour observing their natural behavior — grooming, feeding, calling loudly through the forest, or moving swiftly through the canopy.\n\nAfter the trek, continue your journey to Queen Elizabeth National Park.\n\nTransfer time: 1–2 hours",
                        image: "/images/chimp1.jpg"
                    },
                    {
                        day: 3,
                        title: "Game Drive and Boat Safari at Kazinga Channel",
                        description: "Start your morning with a game drive through Queen Elizabeth National Park, one of Uganda's premier wildlife destinations. The park is home to an incredible variety of animals, including lions, elephants, buffaloes, and elusive leopards often seen lounging in the shade.\n\nIn the afternoon, set off on a boat safari along the Kazinga Channel, home to one of the world's largest hippo populations. You'll glide past massive pods of hippos, crocodiles basking on the banks, and large herds of elephants and buffaloes coming to drink. Few places in Africa offer such consistent and close-up encounters with wildlife.\n\nIn the evening, rest in your lodge or continue with a sunset game drive.",
                        image: "/images/chimp2.jpg"
                    },
                    {
                        day: 4,
                        title: "Drive to Gorilla Land and Visit Batwa Community",
                        description: "Today, we leave the open savannah landscapes behind and journey toward Uganda's ancient montane forests, a dramatic change in scenery and atmosphere. As we travel deeper into the highlands, the environment becomes cooler, greener, and more densely forested — the natural home of the endangered mountain gorillas.\n\nIf time allows, you may choose to take part in a guided walk through the Batwa community. This experience includes visits to basket weavers and a local school, storytelling about Batwa history and present-day life.\n\nTransfer time: 5 hours",
                        image: "/images/chimp3.jpg"
                    },
                    {
                        day: 5,
                        title: "Gorilla Trekking at Bwindi Forest",
                        description: "Today you'll trek in Bwindi Impenetrable Forest, a UNESCO World Heritage Site that is home to nearly half of the world's remaining mountain gorillas. After a short briefing, set off with your guide into the forest to track one of the habituated gorilla families. Once located, you'll spend one unforgettable hour observing them up close — playing, moving through the trees, and interacting with each other in their natural environment.\n\nAfter the trek, continue your adventure to Lake Bunyonyi, one of the most breathtaking and peaceful places in Uganda. Check in and rest at your lodge, surrounded by the lake's calm waters and dotted islands that create an unforgettable view.\n\nTransfer time: 1–2 hours",
                        image: "/images/chimp4.jpg"
                    },
                    {
                        day: 6,
                        title: "Islands of Lake Bunyonyi",
                        description: "Start your day at Lake Bunyonyi, one of the most beautiful and serene spots in Uganda. Surrounded by terraced hills and dotted with 29 small islands, this lake is Africa's second deepest — and completely free of crocodiles and hippos, making it ideal for a peaceful experience. Here you will embark on a boat adventure to explore some of these islands, taking in the stunning scenery and getting a glimpse of local life along the lakeshore.\n\nAfterward, begin your journey towards Lake Mburo National Park.\n\nTransfer time: 5 hours",
                        image: "/images/chimp5.jpg"
                    },
                    {
                        day: 7,
                        title: "Walking Safari at Lake Mburo National Park",
                        description: "Begin the day with a guided walking safari, led by an armed ranger — a unique way to get closer to the animals in Lake Mburo National Park. The park is one of the best places in Uganda to see large herds of zebras and the striking Rothschild's giraffes.\n\nAfter the walk, you'll begin the drive back to Entebbe. Along the way, you'll stop at the Equator for photos and a chance to pick up some local crafts.\n\nTransfer time: 5 hours",
                        image: "/images/chimp.jpeg"
                    }
                ]
            },
            "Rwanda": {
                "6 Days": [
                    {
                        day: 1,
                        title: "Kigali Airport pick up & City tour",
                        description: "Upon arrival at Kigali International Airport, you will be picked by one of our experienced Rwanda Gorillas & Chimpanzee Tracking Safari driver/guide who will transfer you to Kigali for a city tour. You will visit many places including Kigali Genocide Memorial and museum, Caplaki craft market, Camp Kigali among others, then drive to your Hotel where you will spend the night.",
                        accommodation: "FIVE TO FIVE HOTEL / HOTEL DES MILLE COLLINES / KIGALI SERENA HOTEL"
                    },
                    {
                        day: 2,
                        title: "Depart Kigali – for Nyungwe Forest",
                        description: "In the morning after your breakfast, drive to Nyungwe Forest National Park. You will visit the King's palace in Nyanza, Ethnographic museum in Butare/Huye and Murambi Genocide memorial with lunch break along the way. Later continue through the forest to Gisakura.",
                        accommodation: "GISAKURA GUEST HOUSE / NYUNGWE HILL TOP VIEW HOTEL / ONE & ONLY NYUNGWE HOUSE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 3,
                        title: "Chimpanzee tracking & Transfer to Kibuye",
                        description: "Early morning breakfast, then report at the ranger station for Chimpanzee tracking briefing. Explore the forest with a park guide for your chimpanzee experience. Afterwards, you will be driven to Kibuye on Lake Kivu.",
                        accommodation: "BETHANY HOTEL / MORIAH HILL RESORT / COMORAN LODGE",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 4,
                        title: "Colobus Monkey Tracking & Transfer to Volcanoes NP",
                        description: "Go for Angolan Colobus monkey tracking, a rare species found in this part of the forest. Later, transfer northwards to Volcanoes National Park via a western scenic route along the shores of Lake Kivu.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 5,
                        title: "Rwanda Gorilla Trekking & Gorilla Guardians Village",
                        description: "Report at the park office for a briefing before entering the forest for your gorilla tracking adventure (3-6 hours). Spend one hour with the gorillas. In the evening, visit Gorilla Guardians Village for cultural entertainment and traditional dances.",
                        accommodation: "MUHABURA HOTEL / DAVICI GORILLA LODGE / FIVE VOLCANOES BOUTIQUE HOTEL",
                        meals: "Breakfast, Lunch, Dinner"
                    },
                    {
                        day: 6,
                        title: "Golden Monkey tracking & Departure",
                        description: "Morning Golden monkey tracking in Volcanoes National Park. Afterwards, transfer to Kigali International Airport for your departure flight.",
                        meals: "Breakfast & Lunch"
                    }
                ]
            }
        },
        inclusions: [
            "Gorilla & chimpanzee trekking permits",
            "Rhino tracking at Ziwa Rhino Sanctuary",
            "All accommodations listed above",
            "All meals as per itinerary",
            "Private 4x4 safari vehicle & professional guide",
            "All game drives & boat safaris",
            "Park entrance fees",
            "Mabamba canoe experience",
            "Bottled drinking water"
        ],
        exclusions: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Tips & gratuities",
            "Personal expenses",
            "Optional activities not listed"
        ],
        durationInclusions: {
            "6 Days": [
                "Transport in 4WD Comfortable Vehicle with Fuel",
                "Airport drop at the end of the tour",
                "Service of a professional English-speaking driver/guide",
                "Gorilla trekking permits ($1500 each in Rwanda)",
                "Chimpanzee Tracking permit (Nyungwe forest)",
                "Golden monkey tracking fees",
                "All activities mentioned in the itinerary",
                "Accommodation for 5 Nights, 6 Days (All Meals, except meals in Kigali Hotel)",
                "Bottled drinking water while on tour",
                "Government taxes"
            ]
        },
        durationExclusions: {
            "6 Days": [
                "Any domestic or International flights",
                "Visa fees",
                "All optional activities",
                "Medical and travel Insurance",
                "Tips and gratuities to the guide/driver and hotel staffs.",
                "Any item not mentioned in the itinerary of personal nature like laundry and beverages, souvenirs and telephone bills."
            ]
        },
        pricingTiers: [
            {
                name: "Budget Friendly",
                description: "Focuses on quality budget-friendly accommodations and efficient travel logistics."
            },
            {
                name: "Mid Range",
                highlight: true,
                description: "Upgraded lodges and more immersive experiences throughout the 7-day journey."
            },
            {
                name: "Luxury Safari",
                dark: true,
                description: "Top-tier luxury lodges and exclusive private experiences in every national park."
            }
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
        duration: "3-12 Days",
        price: "From $800",
        heroImage: "/images/culture12.jpeg",
        gallery: [
            "/images/culture10.jpeg",
            "/images/culture11.jpeg",
            "/images/culture12.jpeg",
            "/images/culture15.jpeg",
            "/images/culture16.jpeg",
            "/images/culture17.jpeg",
            "/images/culture18.jpeg",
            "/images/culture19.jpeg",
            "/images/culture20.jpeg",
            "/images/culture21.jpeg",
            "/images/culture22.jpeg",
            "/images/culture23.jpeg",
            "/images/culture24.jpeg",
            "/images/coffee1.jpeg"
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
            ],
            "12 Days": [
                { day: 1, title: "Arrival – Rhino tracking & transfer to Murchison falls.", description: "Meet your guide at the airport, get a briefing over breakfast, and drive to Ziwa Rhino sanctuary for foot-tracking of white rhinos. Proceed to Murchison Falls NP to view the spectacular waterfalls." },
                { day: 2, title: "Game drive & Nile Boat Safari in Murchison falls.", description: "Sunrise game drive across the northern sector of the park to spot lions, leopards, giraffes, and elephants. In the afternoon, embark on a launch cruise towards the base of Murchison Falls." },
                { day: 3, title: "Transfer to Kibale NP & Community Experience.", description: "Drive to Kibale National Park through breathtaking landscapes. In the afternoon, engage in an authentic community visit to learn about daily life, tradition, and the Local Banana Gin experience." },
                { day: 4, title: "Chimpanzee tracking and Bigodi wetland Experience.", description: "Morning chimpanzee tracking through the tropical rainforest of Kibale. Later, visit the Bigodi wetland sanctuary for a nature walk and cultural interactions." },
                { day: 5, title: "Sempaya Hot Springs & Amabeere Ga Nyinamwiru Caves.", description: "Visit the dramatic Sempaya Hot Springs in Semliki National Park, followed by an exploration of the legendary Amabeere Ga Nyinamwiru caves and a scenic hike with views of crater lakes." },
                { day: 6, title: "Game drive & Kazinga channel Boat cruise.", description: "Sunrise game drive in Queen Elizabeth National Park's Kasenyi sector. Enjoy an afternoon boat cruise along the Kazinga Channel for close-up wildlife viewing of hippos, crocodiles, and elephants." },
                { day: 7, title: "Ishasha Sector – in Search of Tree-climbing Lions.", description: "Game drive through the Ishasha sector, scanning the sprawling fig trees for the region's famous tree-climbing lions. Spot topis, buffalo herds, and elephants along the way." },
                { day: 8, title: "Transfer to Bwindi & Community activity.", description: "Exit Queen Elizabeth NP and drive to the dense rainforest of Bwindi. Engage in a meaningful cultural visit with the indigenous Batwa pygmies to learn their traditional forest survival skills." },
                { day: 9, title: "Mountain Gorilla Trekking Experience.", description: "Venture deep into Bwindi Impenetrable Forest. Spend one magical, unforgettable hour in the presence of a mountain gorilla family observing them in their natural habitat." },
                { day: 10, title: "Transfer to Lake Bunyonyi – Relaxation & Scenic Exploration.", description: "Drive through the beautifully terraced Kigezi Highlands to Lake Bunyonyi. Relax by the lake and take a dugout canoe or motorized boat excursion to explore its 29 historic islands." },
                { day: 11, title: "Transfer to Lake Mburo & Evening Activity.", description: "Journey to Lake Mburo National Park. Embark on an evening game drive to spot massive elands, zebras, impalas, topis, and buffalos amidst the scenic acacia-dotted savannah." },
                { day: 12, title: "Cycling or Horseback Safari & Transfer back to Entebbe.", description: "Experience Lake Mburo via an adventurous morning cycling or horseback safari. In the afternoon, transfer back to Entebbe with a stopover at the Equator for photos before your departure flight." }
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
        heroImage: "/images/activity.jpg",
        gallery: [
            "/images/activity.jpg",
            "/images/activity1.webp",
            "/images/activity2.jpg",
            "/images/activity3.webp",
            "/images/activity4.webp"
        ],
        itinerary: {
            "2 Days": [
                { day: 1, title: "Jinja - Adventure Capital", description: "Transfer to Jinja. Evening briefing and preparation for white water rafting.", image: "/images/activity4.webp" },
                { day: 2, title: "White Water Rafting", description: "Full day white water rafting on the Nile River. Navigate through Grade 5 rapids. Return to Kampala.", image: "/images/activity1.webp" }
            ],
            "5 Days": [
                { day: 1, title: "Arrival & Transfer to Jinja", description: "Pickup and transfer to the source of the Nile.", image: "/images/activity4.webp" },
                { day: 2, title: "Rafting & Bungee", description: "Morning Grade 5 rafting followed by afternoon bungee jumping over the Nile.", image: "/images/activity1.webp" },
                { day: 3, title: "Quad Biking & Transfer", description: "Morning quad biking through local villages. Transfer to Mt. Elgon region." },
                { day: 4, title: "Sipi Falls Hike & Abseiling", description: "Hike the magnificent Sipi Falls and attempt a thrilling 100m abseil.", image: "/images/activity2.jpg" },
                { day: 5, title: "Departure", description: "Morning coffee tour and return transfer." }
            ],
            "7 Days": [
                { day: 1, title: "Arrival", description: "Airport pickup." },
                { day: 2, title: "Jinja Adrenaline", description: "White water rafting on the Nile.", image: "/images/activity1.webp" },
                { day: 3, title: "Drive to Rwenzori", description: "Long scenic drive to the foothills of the Mountains of the Moon." },
                { day: 4, title: "Rwenzori Trekking (Day 1)", description: "Start the Mahoma trail trek through the bamboo zone." },
                { day: 5, title: "Rwenzori Trekking (Day 2)", description: "Hike to Lake Mahoma, experiencing unique afro-alpine flora.", image: "/images/activity3.webp" },
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
