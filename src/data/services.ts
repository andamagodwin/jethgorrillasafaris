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
                "14 Days": [
                    { day: 1, title: "Arrival day", description: "On your arrival at Entebbe international airport, you will be highly welcomed by our safari guide from African skimmer tours who will be eagerly waiting to pick you up. You will then be dropped at your booked hotel in Kampala or Entebbe." },
                    { day: 2, title: "Pick up from place of accommodation and transfer to Murchison Falls National Park", description: "After early morning breakfast, meet your guide to transfer to Murchison Falls National Park, the largest in Uganda. The drive takes 4-5 hours, with a lunch stop in Masindi town. Upon arrival, visit the top of the falls where the Nile forces its way through a 7-meter rocky gap. Check in to the lodge for dinner and overnight." },
                    { day: 3, title: "Full day explore Murchison Falls National Park", description: "Start with a warm cup of coffee/tea and meet your guide for a morning game drive. Look for unique savannah wildlife like solitary cape buffaloes, giraffes, elephants, Uganda kobs, lions, and leopards. Return for a full breakfast and relax.\n\nIn the afternoon, enjoy an adventure boat cruise on the River Nile to the bottom of the thundering falls, viewing crocodiles, hippo schools, and water birds like the shoebill stork." },
                    { day: 4, title: "Transfer to Fort Portal", description: "Have early morning breakfast and check out. Transfer to Fort Portal via the Albertine escarpments of the western rift valley. Drive through Hoima town of the Bunyoro kingdom and the amazing countryside filled with tea plantations. Reach Fort Portal by the afternoon and check in to your booked lodge." },
                    { day: 5, title: "Explore Kibale National Park", description: "After early morning breakfast, transfer to the briefing center in Kanyanchu. Ranger guides will lead you into the forest for primate watching. In the afternoon, go for the Bigodi wetland swamp walk or visit community families for a cultural view. Return to the lodge for dinner and overnight." },
                    { day: 6, title: "Transfer to Semuliki National Park & Afternoon Transfer to Queen Elizabeth NP", description: "Visit Semuliki National Park to see the fantastic scenery, hot springs, and birdlife. At the Sempaya hot springs, enjoy a scenic walk and a picnic lunch. Later, drive to Queen Elizabeth National Park, arriving by late evening to check in for dinner and overnight." },
                    { day: 7, title: "Morning Visit to Kyambura Gorge and Afternoon Boat Cruise on Kazinga Channel", description: "Rise before the sun and drive to Kyambura Gorge for thrilling chimpanzee trekking (2-5 hours), with chances to meet other primates. Return to the lodge for lunch.\n\nIn the afternoon, take an adventure boat cruise on the Kazinga channel. Explore wildlife on the water, including schools of hippos, crocodiles, bathing elephants, and buffaloes alongside water birds." },
                    { day: 8, title: "Game Drive in Ishasha Sector to look for Tree Climbing Lions", description: "Check out after breakfast and take a morning game drive to the remote southern Ishasha sector, known for rare tree-climbing lions. Meet wildlife along the way like hippos, elephants, leopards, and waterbucks.\n\nReach by midday, relax, and have lunch. After lunch, take another game drive through the Katooke gate to spot lions. Return to the hotel for dinner and overnight." },
                    { day: 9, title: "Transfer to Bwindi Impenetrable National Park", description: "After a relaxed breakfast, check out and transfer to Buhoma. Enjoy interesting views of tea plantations and factories in Kayoza. Proceed to Bwindi Impenetrable National Park, check in to your booked hotel, have lunch, and relax until dinner and overnight." },
                    { day: 10, title: "Gorilla Experience in Bwindi Impenetrable National Park", description: "Enjoy an early morning game drive, then transfer to the park headquarters for a briefing by Uganda Wildlife Authority rangers. Start your 2-8 hour gorilla trek into the forest. Upon finding the gentle apes, you will spend 1 hour with them before returning to the lodge for the rest of the day." },
                    { day: 11, title: "Morning Relaxation at the Lodge and Afternoon Community Walk to Batwa", description: "Have a relaxed breakfast and enjoy your morning at the lodge, recovering from the gorilla trek.\n\nAfter lunch, walk to the Batwa community on the edges of Bwindi forest. Learn about the culture of these ancient pygmies who lived as hunter-gatherers in the forest." },
                    { day: 12, title: "Transfer to Lake Mburo National Park", description: "Enjoy a relaxed breakfast, check out, and transfer to Lake Mburo National Park. Experience the amazing sceneries of rolling hills and slopes of the Kigezi region. Stop at the calm town of Mbarara for lunch, then continue to the booked lodge for the rest of the day." },
                    { day: 13, title: "Morning Game Drive and Afternoon Boat Cruise", description: "Wake up early for a cup of coffee and a morning game drive to search for wildlife like sitatungas, elands, zebras, giraffes, and buffaloes. Return to the lodge for full breakfast and lunch.\n\nIn the afternoon, embark on an adventure boat cruise on Lake Mburo to see more wildlife on the water. Return for dinner and overnight." },
                    { day: 14, title: "Transfer to Kampala and Departure", description: "Have a relaxed breakfast, check out, and transfer to Kampala. Enjoy en-route game viewing as you exit the park, and stop at the Uganda Equator line for photos and souvenir shopping. Reach Kampala by lunchtime, check in or relax until your flight time." }
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
                {
                    day: 1,
                    title: "Arrive in Entebbe",
                    description: "On arrival at Entebbe International Airport, you will be warmly welcomed by a guide for Explore Eco Safaris and transfer you to a hotel in Entebbe or Kampala. If you arrive early, you could have a tour of either Entebbe or Kampala city.\n\nEntebbe city is a beautiful scenic town with amazing attractions such as Uganda Wildlife and Education Center (the Zoo), botanical gardens and Lake Victoria.",
                    accommodation: "Hotel in Entebbe / Kampala"
                },
                {
                    day: 2,
                    title: "Transfer to Queen Elizabeth – Afternoon game drive",
                    description: "After breakfast you will transfer to Queen Elizabeth national park, along the way you will have a stop at the equator crossing for pictures and buy souvenirs before proceeding to park. The journey will take you through parts of the East Africa Rift Valley, amazing tea plantation and scenic views of Rwenzori Mountains, peasant farms, small towns and so much more.\n\nWhen you arrive in the park, you will have en-route game drive as you head to your lodge for check-in and lunch, in the afternoon you will go for a game drive in the Kasenyi sector of the park where you will spot waterbucks, elephants, bushbucks, buffaloes among others.",
                    accommodation: "Simba Camp (Budget) / Elephant Hab Safari Lodge (Midrange) / Jacana Safari Lodge (Luxury)",
                    meals: "Full Board"
                },
                {
                    day: 3,
                    title: "Morning game drive – Afternoon launch cruise on the Kazinga Channel",
                    description: "Wake up early for a cup of coffee and head to the park for a morning game drive in Kasenyi sector where you will spot predators heading back to their dens after hunting in the night, you will also have encounters with buffaloes, bushbucks, elephants, giant forest hogs, hyenas among others.\n\nAfter morning game drive, you will head back to the lodge for lunch and relaxation. In the afternoon, go for a launch cruise at Kazinga Channel that connects Lake Edward to Lake George and hosts one of the highest concentrations of wildlife in Africa. You'll see buffaloes, elephants, crocodiles, and hippos along the banks.",
                    accommodation: "Simba Camp (Budget) / Elephant Hab Safari Lodge (Midrange) / Jacana Safari Lodge (Luxury)",
                    meals: "Full Board"
                },
                {
                    day: 4,
                    title: "Chimpanzee Trekking in Kyambura Gorge – Visit the Katwe Salt Lake",
                    description: "Head to the briefing point for chimpanzee trekking in Kyambura gorge, home to an underground forest which hosts several bird species, chimpanzees, small primates and other mammals. After briefing you will descend into the gorge to begin searching for the chimpanzees. Along the way you will be able to see other primates such as olive baboons, black and white colobus monkeys.\n\nIn the afternoon, visit Lake Katwe in the Mweya Peninsula, one of the leading producers of salt in Uganda, and watch the way salt is mined locally.",
                    accommodation: "Simba Camp (Budget) / Elephant Hab Safari Lodge (Midrange) / Jacana Safari Lodge (Luxury)",
                    meals: "Full Board"
                },
                {
                    day: 5,
                    title: "Tree Climbing Lions of Ishasha – Transfer back to Kampala",
                    description: "After breakfast you will head to the Ishasha Sector of Queen Elizabeth national Park for game drive on which you will have an opportunity to see the tree climbing lions lounging on tree branches. You will also be able to see antelopes, Uganda kobs, warthogs among others. Exit the park and embark on a journey back to Kampala with a stop in Mbarara for lunch. Proceed to Kampala arriving in evening and transfer to the airport for your flight back home.",
                    meals: "Breakfast & Lunch"
                }
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
            "9 Days": [
                { day: 1, title: "Depart from Kampala to Murchison Falls National Park", description: "After an early breakfast at your hotel in Kampala. Our company guide will pick you up and transfer you to Murchison Falls National Park which is Uganda’s largest National park. The park is a habitat for animals like Lions, Leopards, elephants, buffaloes, giraffes and a variety of antelopes plus a good number of bird species. You will have a stopover for lunch in Masindi Town. Proceed and reach the famous National Park which was named after the magnificent Murchison falls. Upon arrival, Visit the Top of the falls on a beautiful African sunset where water thunders through different rapids from a 7-metre gap to fall over 40 meters Gorge below forming the strongest waterfalls in the world, have fun a take great pictures on top of the waterfalls.", accommodation: "Red Chili" },
                { day: 2, title: "Game drive and launch cruise along the Albert Nile", description: "After an early breakfast, you will go for a game drive on the Northern Bank of River Nile. The activity takes about 3-5 hours and Wildlife in the Park includes elephants, Rothschild giraffes, Leopards, buffaloes, lions, Hartebeest, Uganda kobs, oribis, waterbucks and many more. After the drive you will return to the lodge for lunch and in the afternoon go for a launch cruise on the Albert Nile which will give you an exciting panoramic view at the bottom of the mighty Murchison falls. Along the cruise, you will encounter crocodiles, hippos, and different water bird species on the river banks like kingfisher, cormorants, bee-eater and the rare shoebill stork.", accommodation: "Red Chili" },
                { day: 3, title: "Transfer to Kibale Forest National Park", description: "Early morning after breakfast, you will set out for your long journey to Kibale Forest National Park. This Park is a home to the almost 13 primate species. These include Chimpanzees, red colobus and L’Hoest’s monkey, Red tailed monkey, Black and white colobus monkey and many more. You will have lunch in Fort Portal (Uganda’s tourism city). Proceed with the journey to Kibale forest. Later in the evening, go for a short drive in the amazing crater lakes in kasenda region like Lake Nkuruba, Lake Nyabikele and the famous Lake Nyinambuga that was depicted on a 20k Ugandan shillings note.", accommodation: "Chimpanzee Forest Lodge" },
                { day: 4, title: "Chimpanzee tracking and Transfer to Queen Elizabeth National Park", description: "After breakfast, your guide will drive you to the park offices where you will meet the expert guides and rangers that will take you through the chimpanzee trekking experience. During your trekking, expect to see a lot of primate species like chimpanzees, different types of monkeys and other animals like the forest elephants, buffaloes, bush pig and duiker, warthogs, reptiles and amphibians as well as a colorful variety of butterflies. Return to the Lodge for lunch. After lunch you will transfer to Queen Elizabeth National Park reaching the park Headquarters at Kasenyi. On your way to Queen Elizabeth NP, you will stop at the amazing Equator monument in kikorongo and continue in a short evening game drive and look out to spot animals such as the Elephants, lions, buffaloes, Leopards, bush pigs, warthogs, antelopes such as kobs and waterbucks.", accommodation: "ENGIRI GAME LODGE & CAMPSITE" },
                { day: 5, title: "Game drive and Launch cruise", description: "Early in the morning, go for a morning game drive in the Kasenyi area which is well known as the Kob mating grounds and therefore in this place one is able to see a lot of Uganda kobs and other animals like lions, leopards, buffalos, elephants, bush pigs, situnga, and the hyenas and many more. This takes 2-3 hour. Return to the lodge for lunch and in the afternoon go for a Launch cruise on the Kazinga channel. You may be able to see a lot of crocodiles along the channels bank sides, a lot of the hippopotamus since in Africa this place is regarded as the highest concentration of the hippos, elephants taking water and a lot of bird species at the pelican point.", accommodation: "ENGIRI GAME LODGE & CAMPSITE" },
                { day: 6, title: "Game drive and transfer to Bwindi Impenetrable National Park", description: "This morning you will set out for the game drive in Ishasha area and expect to see the rare tree climbing lions. The lions can be seen up on the fig trees. However, it’s not a guarantee that the lions will be seen. Sometimes it depends on the luck and time of reaching the area. You will have lunch in kihihi town and proceed to Bwindi Impenetrable National Park in preparation for your next day Gorilla trek (expect to have a humpy road experience along the kihihi_Bwindi road).", accommodation: "Buhoma Gorilla Camp" },
                { day: 7, title: "Gorilla trekking in Bwindi Park and transfer to Lake Bunyonyi", description: "Early in the morning after breakfast, your guide will drive you to the park offices and have a briefing from the UWA officials, set off for the gorilla tracking. This is a once life time experience and unforgettable adventure. The ranger guides will lead you into the thick forest and start your search for the endangered Mountain Gorillas. You will move up and down the rugged terrain until you finally meet these harmonious creatures that will entertain you with performances for about 1hour. The activity can take 4-6 hours since the gorillas move up and down. This is an awesome and exciting moment. You might also see other primates like chimpanzees, monkeys, birds and so more. Return to your lodge for lunch and prepare for the Batwa experience activity in the evening, these are indigenous people who were once staying in the Bwindi forest with Gorillas, have fun with them enjoying their dances, stories and learn their way of life.", accommodation: "Buhoma Gorilla Camp" },
                { day: 8, title: "Lake Bunyonyi", description: "You will have breakfast and after go for the boat ride to various Islands on the Lake. This will enable you visit most of the islands on the Lake. Each Island is named according to the bird species found on the Island and some were named because of their purposes for example the Punishment Island which is the smallest and was used by the Bakiga people to drop their girls who got pregnant before marriage. On this day, your night will be special on one of the Islands named Itambira.", accommodation: "Seeds of Hope" },
                { day: 9, title: "Drop off day", description: "Have a morning sunrise breakfast on the showers of the lake and then transfer back to Kampala having a stopover at the Equator and at Kayabwe for souvenirs. Lunch on the way and Drop off will be at your Hotel in Kampala." }
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
            ],
            "5 Days": [
                "Park Entrance fees",
                "3 Game drives in Queen Elizabeth NP",
                "Chimpanzee Tracking Permits (Kyambura Gorge)",
                "Boat cruise along the Kazinga Channel",
                "Visit to Lake Katwe Salt Lake",
                "Transport in a standard tour van",
                "Services of an experienced English speaking Driver/Guide",
                "Full-board Accommodation for 4 nights",
                "Food and water throughout the trip",
                "Airport transfers",
                "All activities mentioned in the itinerary"
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
            ],
            "5 Days": [
                "Accommodation on the last day of the tour",
                "Flights and visa fees",
                "Expenditures of a personal nature such as alcoholic drinks, cigars and wines",
                "Medical insurance"
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
        duration: "4-15 Days",
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
                ],
                "11 Days": [
                    { day: 1, title: "Arrive in Uganda at Entebbe International Airport", description: "You will meet our guide from African skimmer tours who will be eagerly waiting to pick you at Entebbe international airport and transfer you at booked place of accommodation for relaxation, dinner and overnight stay on your first day with us." },
                    { day: 2, title: "Pick up from Place of Accommodation and Transfer to Semuliki National Park", description: "Today we drive to the western part of Uganda passing through the beautiful homestead and country side in fort portal with many tea plantations along the way. We different and amazing stopovers along the way and arrival check in to the booked place of accommodation in Semuliki." },
                    { day: 3, title: "Birding in Semuliki", description: "Birding in Semuliki forests starts early morning while driving down Semuliki valleys for forest experience, visit the Sempaya hot springs and bird around Kirumia trail the rest of the day. Bird species include spot breasted ibis, Grey throated rail, capuchin babbler, Congo serpent eagle, piping hornbill, rebilled dwarf hornbill, white crested hornbill, African piculet, and red bellied Malimbe return to the lodge late afternoon for relaxation until dinner and overnight stay." },
                    { day: 4, title: "Transfer to Kibale Forest National Park", description: "You will have relaxed breakfast and check out of the lodge and transfer to Kibale forest national park while birding along the way and reaching by lunch time and check in the lodge booked lodge to spend the rest of the day." },
                    { day: 5, title: "Birding and Chimp Trekking in Kibale Forest", description: "Wake up early in the morning and have breakfast and after you will meet your guide you will driving you at the briefing center. After you will led by ranger guides into the forest the forest for birding and primate tracking experience. Common bird species found include white colored olive back, red tailed bristle bill, yellow billed barbet, white bellied fly catcher, and joyful green bull, black billed Turaco, blue shouldered robin chat, green breasted pitta, white spotted fluff tail. Common primates like chimpanzees are seen here. In the afternoon we go for swamp walk in Bigodi wetland.\n\nYou will later return to the lodge for dinner and over night" },
                    { day: 6, title: "Transfer to Bwindi Impenetrable National Park", description: "Drive to south to Bwindi, passing by terraced hillsides and most beautiful place in Uganda kigezi highlands. Stop en-rute for lunch and continue to the impenetrable forest later. Check in the booked placed of accommodation." },
                    { day: 7, title: "Bwindi Forest Experience", description: "At Bwindi you will have chance to look for 350 species of birds recorded in this forest of which 23 species are endemics. Birding along the forest trails led by experienced guides. This an amazing experience because you will also have chance to see gorillas in Bwindi. Starting at 8:00am, you will trek up into the jungles which might take 2- hours. Thrilling experience when you get to see gorillas one of the best highlights in the park. Later you will return to the lodge for relaxation dinner and overnight" },
                    { day: 8, title: "Birding in Ruhija Sector of Bwindi Forest", description: "Early morning breakfast, we head out to Ruhija section of Bwindi impenetrable forest which is key birding area in the Albertine region. some of the key bird sighted here include; African green brood bill , Dusky Twine Sport, mountain yellow warble, colored Apatis, Narina Erogon, strange weaver, and broadbill camp." },
                    { day: 9, title: "Transfer to Lake Mburo National Park", description: "To day you will have relaxed breakfast and check out of the lodge to transfer to Lake Mburo national park and have lunch stop in calm town of Mbarara before heading to the lodge. You will have chance to view most of wildlife while heading to the lodge\n\nDinner and overnight at booked place of accommodation" },
                    { day: 10, title: "Explore Lake Mburo National Park", description: "An early morning game drive in Lake Mburo national park to see zebras, elands, topi, waterbuck, and many more. common conspicuous birds seen include; crested francolin, emerald spotted wood  dove , brown parrot, bare face go away bird,  African grey hornbill, spot flanked barbet, Nubian woodpecker, trilling cisticola and many others. The woodland in the immediate vicinity of Rwonyo also supports many of these widespread species. Later afternoon enjoy a boat safari on Lake Mburo while birding. Return in the lodge for dinner and overnight stay." },
                    { day: 11, title: "Transfer to Mabamba Swamp and Flight Back Home", description: "Your tour guide will transfer you to Mamba swamp in Entebbe. Several stop-overs on our way to Kampala including the equator line where you can have lunch also buy souvenirs to take back home. At Mabamba swamp, enjoy an awesome birding experience in search for the famous shoebill. After drop you at Entebbe international airport for the departure flight back home." }
                ],
                "14 Days": [
                    { day: 1, title: "Arrival at Entebbe International Airport", description: "Today on arrival at Entebbe international airport our guide from African skimmer tours will be eagerly waiting to pick you and transfer you at booked hotel for dinner and overnight" },
                    { day: 2, title: "Drive to Ziwa Rhino Sanctuary and Birding Budongo Forest", description: "In the morning after early breakfast, drive northwest to Budongo forest reserve with in Masindi town. This route offers you impressive views of the flat landscape of central Uganda before making a stop at Ziwa Rhino sanctuary to view white rhinos and birds\n\nThe savannah thickets also features counts of birds  over 250 species of birds and expert guides will enable  you spot range of birds including broad billed, blue spotted dove, booted eagale,abyssinial ground hornbill, African blue flycatcher\n\nHave lunch at the sanctuary and transfer to Masindi and Budongo forest in the evening" },
                    { day: 3, title: "Morning in Budongo Forest and Later Transfer to Murchison Falls National Park", description: "After breakfast at exactly 06:30 am, you will start your full day birding in Uganda in the forest starting with the royal mile area of the forest.\n\nThis royal mile is referred to as the country’s premier forest birding locality home and number of species such as western black headed oriole and purple headed starling bandes, snake eagle, crowned and African pied hornbill and bat howl seen at dust, white tingled hornbill, yellow billed barbets, the chocolate baked blue Beasted and Africa dwarf kingfisher and the green bulls. You will have picnic lunch in the forest and then evening transfer to Murchison falls national park a home to over 455 bird species." },
                    { day: 4, title: "Morning Birding and Afternoon Boat Cruise", description: "After breakfast you will be transferred to the northern game viewing circuit traversing the whistling thorn acacia where you have possibilities of encountering birds like speckle fronted weaker, crested francolin, scaly francolin, raptors, sunbirds  among others\n\nIn the afternoon go for birding along the Nile with the boat cruise where you will have chance to view a lot of fish eating birds like Egyptian geese, goliath heron, pied king fisher African Bart weavers, African skimmer and return to the lodge for lunch and then afternoon boat ride at the delta area of the sunset with possibilities of viewing the rare shoebill and other bird species seen" },
                    { day: 5, title: "Transfer to Semuliki National Park", description: "Semuliki national park is one of the best birding spots in Uganda and it is known for central African species which cannot be seen anywhere else in east Africa yet their some continents most specular and most sought after birds such as long tailed hawk, Congo serpent eagle, lyre- tailed honeyguide, black-casqued wattled hornbill, Nkulengu rail, and other species like swamp palm bulbul, spotted Greenbul, white-starred robin, lowland akalat, red throated alethea among others" },
                    { day: 6, title: "Full Day Birding in Semuliki and Later Transfer to Kibale Forest National Park", description: "Early morning after breakfast we drive to the briefing point, we will go to the forest and take on the Kirumi trail for our whole day birding experience. The alluring bird listwith albertine rift valley endemic, Semliki specials and other restricted bird guides specials, makes Semliki an essential destination for serious birders.   We look out for a number of predominantly Central African species which cannot be found anywhere else in East Africa yet are some of the continent’s most spectacular and sought-after birds such as; Long-tailed Hawk, Congo Serpent Eagle, Lyre-tailed Honeyguide, Black and White casqued Hornbill, the Nkulengu Rail, and other species; Blue Swallow, White-throated Swallow, Swamp Palm Bulbul, Spotted Greenbul, White-starred Robin, Lowland Akalat, Red-throated Alethe, Fire-crested Alethe, Snowy-headed Robin-Chat, Blue-shouldered Robin-Chat, Red-eyed Puff back, White-tailed Robin-Chat, Northern Bearded Scrub-Robin, Capped Wheatear, Common Stonechat, Abyssinian Ground-Thrush, Oberlaender’s Ground-Thrush, Grey Ground-Thrush, Little Grey Greenbul, Toro Olive Greenbul, Mountain Greenbul, (African Piculet, Great Snipe, Sassi’sGreenbull, and White-throated Blue Swallow) Yellow-throated Nicator, Western Nicator, just to mention but a few. There is a single, unconfirmed report of the globally threatened Lesser Kestrel." },
                    { day: 7, title: "Full Day Birding Kibale Forest National Park and Afternoon Birding Bigodi Swamp", description: "Wake up early in the morning and have breakfast and after you will meet your guide you will driving you at the briefing center. After you will led by ranger guides into the forest the forest for birding and primate tracking experience. Common bird species found include white colored olive back, red tailed bristle bill, yellow billed barbet, white bellied fly catcher, and joyful green bull, black billed Turaco, blue shouldered robin chat, green breasted pitta, white spotted fluff tail. Common primates like chimpanzees are seen here. In the afternoon we go for swamp walk in Bigodi wetland." },
                    { day: 8, title: "Transfer to Queen Elizabeth National Park", description: "Today we shall have early morning breakfast and check out of the lodge to transfer to Queen Elizabeth national park birding along the way and make different stopovers en-route for birding and taking photos of moments of the beautiful sceneries in this part of western Uganda reaching your booked hotel by lunch time and relax for the rest of the day at the lodge" },
                    { day: 9, title: "Morning Birding and Afternoon Boat Cruise on Kazinga Channel", description: "Today we shall wake up early in the morning with warm cup of coffee/tea and meet our safari bird guide to take us to the savannah part of this park for early morning birding and expect to see sopecies like swamp flycatcher, scaly francolin, red-necked spurfowl, martial eagles, banded snake eagles, fish eagles, African morning doves, red necked doves, black headed gonelek, African pied wagtail, yellow wagtail, common house sparrow, hammerkop among others and then return to the lodge for full breakfast and relax until lunch.\n\nIn the afternoon we shall embark on birding along the Kazinga channel with the boat cruise home to over 58 species of water birds like African pied kingfisher, African skimmer birds, open, yellow and saddle billed stork, hammerkop, spoon billed stork, spur winged plover, black winged stilt, cormorants, cattle egrets, little egrets, Egyptian geese among others and later return to the lodge for dinner and overnight" },
                    { day: 10, title: "Transfer to Buhoma through Ishasha", description: "Today you will have relaxed breakfast and check out of the lodge to transfer to Bwindi impenetrable forest and do En-route birding through Ishasha sector having chances to see species like honey guides, Apalises, starlings, raptors, tinker birds, barbets, pipits, chats among others and have an opportunity to see rare tree climbing lions reaching in Bwindi later afternoon and check in relax until dinner and overnight" },
                    { day: 11, title: "Full Day Birding in Buhoma", description: "Today  we have our early morning breakfast and meet our guide to transfer to the starting point of our birding trail lead by the ranger guides and the site guides that help us to locate different unique birds in the different trails as we look for species like thick-billed seedeater, African green broadbill, Oriole Finch, Mountain Buzzard, Brown capped weaver, Strange weaver, Montane Oriole, Narrow-tailed starling, western green tinker bird, Toro Olive- greenbul, white bellied robin chat, Olive thrush, red chested owlet , Red faced woodland , Grey cuckoo among others" },
                    { day: 12, title: "Optional Gorilla and Transfer to Lake Mburo", description: "Today we shall have to option chosen while booking your safari with us either do gorilla trekking or to check out of the lodge and transfer to Lake Mburo national park for more birding" },
                    { day: 13, title: "Morning Birding and Transfer to Entebbe", description: "An early morning game drive in Lake Mburo national park to see zebras, elands, topi, waterbuck, and many more. common conspicuous birds seen include; crested francolin, emerald spotted wood  dove , brown parrot, bare face go away bird,  African grey hornbill, spot flanked barbet, Nubian woodpecker, trilling cisticola. African finfoot and many others. The woodland in the immediate vicinity of Rwonyo also supports many of these widespread species and then afternoon transfer to Kampala." },
                    { day: 14, title: "Morning Mabamba Swamp and Evening Drive to the Airport for Departure Flight", description: "Your tour guide will transfer you to Mamba swamp in Entebbe and have the a mazing birding experience sighting the elusive shoebill stork and later return to Entebbe for lunch and wait for your departure flight\n\nEnd of your safari" }
                ],
                "15 Days": [
                    { day: 1, title: "Arrival Day", description: "Arrival at Entebbe International Airport or any of Uganda’s border points (Busia, Malaba, Elegu, Mutukula, Katuna, etc.). You will be welcomed by our representatives who will drive you to your booked accommodation for relaxation, dinner, and overnight on your first day with us." },
                    { day: 2, title: "Transfer to Bwindi Impenetrable National Park", description: "Early in the morning, wake up for breakfast and departure to Bwindi Impenetrable National Park. Pass via the Ankole-Masaka dry corridor of Lake Mburo National Park and have a stopover at Hotel Triangle in Mbarara for lunch. Continue to Bwindi via the Ntugamo-Rukungiri route, check in to your booked lodge for dinner and overnight." },
                    { day: 3, title: "Gorilla Experience in Bwindi", description: "This is one of the highlights of your safari: meeting the gentle giants of Bwindi Impenetrable National Park. Expect to walk long distances on steep and muddy trails, sometimes in the rain, before encountering the gorillas. It will be completely worthwhile as you observe them closely while they eat, play, and rest. Enjoy the unique sights and sounds of the forest. Dinner and overnight at the lodge." },
                    { day: 4, title: "Bwindi to Queen Elizabeth National Park", description: "After breakfast, meet your guide for transfer to Queen Elizabeth National Park. Enter through the Ishasha sector (approx. 2-hour drive). Check in and enjoy lunch before a game drive in search of the famous tree-climbing lions. Overnight at Ishasha Jungle Lodge." },
                    { day: 5, title: "Explore Queen Elizabeth National Park", description: "Morning game drive to find lions and their prey before heading towards the Mweya peninsula. Enjoy lunch overlooking the Kazinga Channel, which connects Lake Edward and Lake George.\n\nIn the afternoon, take a boat cruise along the channel (snacks and drinks included) to see abundant birdlife, elephants, buffaloes, and hundreds of hippos cooling off at the shores. Dinner and overnight at the lodge." },
                    { day: 6, title: "Queen Elizabeth to Kibale Forest National Park", description: "After breakfast, depart for Fort Portal, resting in the shadow of the Mountains of the Moon. Famous for tea plantations, we'll continue to Kibale National Park, passing through the crater lakes region. Explore some small lakes before heading to Primate Lodge Kibale for dinner and overnight." },
                    { day: 7, title: "Kibale Forest and Bigodi Swamp Walk", description: "The forest opens its doors for sensational chimpanzee tracking. Kibale is renowned for the highest concentration of primates in East Africa. Search for wild chimps, red-tailed monkeys, and colobus monkeys. After lunch, transfer to Bigodi Wetland Sanctuary for birding and primate watching. Home to the Great Blue Turaco, this community-led project is famous for its diverse species. Dinner and overnight at Primate Lodge Kibale." },
                    { day: 8, title: "Transfer to Murchison Falls National Park", description: "After breakfast, check out and depart for Murchison Falls National Park via Hoima and Masindi. Reach Paraa Safari Lodge for check-in and lunch. Relax after the long journey and enjoy the sunset. Dinner and overnight at the lodge." },
                    { day: 9, title: "Game Drive and Boat Ride in Murchison Falls", description: "Morning game drive on the northern bank of the Nile with chances to see giraffes, elephants, lions, and various birds like the shoebill stork. In the afternoon, take a boat cruise on the Nile for close-quarter game viewing. Dinner and overnight at the lodge." },
                    { day: 10, title: "Murchison to Kidepo Valley National Park", description: "Early morning departure for Kidepo Valley National Park, Uganda's second-biggest park. Stop in Gulu town for shopping and lunch. Check in to Apoka Safari Lodge and enjoy the sunset. Dinner and overnight." },
                    { day: 11, title: "Full Day Game Drive in Kidepo", description: "Full day of game drives in Kidepo. Spot wildlife like ostriches and many others. In the afternoon, drive to the Kanangorok Hot Springs." },
                    { day: 12, title: "Game Drive and Community Cultural Walk", description: "Early morning game drive to see a wide variety of flora and fauna. After lunch, set off for a cultural walk to meet the Karamojong people in Kapedo and Karenga. Visit their kraals and see traditional grinding stones and local crafts. Return for dinner and overnight." },
                    { day: 13, title: "Kidepo to Jinja (Source of the Nile)", description: "After a heavy breakfast, start the journey to Jinja. Pass through the Pian-Upe plains with great views of Mount Elgon and Sipi Falls. Stop in Mbale town for lunch at Mbale Resort Hotel. Proceed to Jinja for check-in and relaxation." },
                    { day: 14, title: "Boat Cruise at the Source of Nile and Journey to Mabira", description: "Morning boat cruise to the Source of the Nile. Spot various bird species like the pied kingfisher while visiting the start of the world's longest river. In the evening, drive to Mabira Forest for check-in at your lodge." },
                    { day: 15, title: "Mabira Forest Birding and Transfer to Entebbe", description: "Early morning birding and primate experience in Mabira Forest, one of Uganda's key birding areas. Look for hornbills, Great Blue Turacos, bee-eaters, and more. In the afternoon, transfer to Entebbe for relaxation and overnight." },
                    { day: 16, title: "Birding at Mabamba Swamp", description: "Travel to Mabamba Swamp on the shores of Lake Victoria. Board a canoe to search for the prehistoric shoebill stork among the marshland channels. Return for lunch in Kampala or Entebbe. Afternoon relaxation at the lodge until dinner and overnight." },
                    { day: 17, title: "Departure Day", description: "Relaxed breakfast and check-out. Transfer to Entebbe International Airport or your preferred border point for departure flight or onward journey. End of safari." }
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
            "15 Days": [
                "All meals and accommodations as per the itinerary",
                "All transportation (including airport pick-up and drop-off)",
                "Full-time professional English-speaking driver/guide",
                "All activities mentioned in the itinerary",
                "Park entrance fees",
                "Community and cultural visits"
            ],
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
        fullDescription: "Kibale Forest is the primate capital of the world, home to over 1,500 chimpanzees. Combined with gorilla trekking at Bwindi Impenetrable Forest, game drives at Queen Elizabeth NP, and island canoeing at Lake Bunyonyi, this journey is a complete East African safari experience.",
        duration: "6-21 Days",
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
                "6 Days": [
                    { day: 1, title: "Pick up from the airport and transfer to Kibale National Park", description: "Our guide will pick you from the airport and drive you to Kibale national park or pick you from the hotel in Entebbe or Kampala. The drive takes about 5-6 hours on tarmac. You will have a stopover in Mubende town for refreshments, then proceed to Fort Portal. Enjoy beautiful sceneries of tea plantations along the way. Stop for lunch in Fort Portal, visit the Toro kingdom palace and the crater lakes region, then check in at your booked lodge in Kibale for dinner and overnight." },
                    { day: 2, title: "Chimpanzee Tracking Experience and Bigodi Swamp Walk", description: "Begin with early morning breakfast, meet your driver guide, and transfer to Kanyanchu for a briefing. The tracking experience gives you a chance to see over 10 primate species, 300 bird species, and diverse butterflies. Upon meeting the chimps, you spend 1 hour interacting with our closest relatives. Return to the lodge for lunch.\n\nIn the afternoon, drive for the Bigodi swamp walk (KAFRED), home to the Great Blue Turaco and over 137 bird species. Return to the lodge for dinner and overnight." },
                    { day: 3, title: "Transfer to Queen Elizabeth NP and Afternoon Kazinga Channel Boat Cruise", description: "Check out and transfer to Queen Elizabeth National Park. The 2-3 hour journey offers en-route views of the Rwenzori mountain ranges and crater lakes. Check in and have lunch.\n\nAt 3:00pm, embark on an adventure boat cruise along the Kazinga channel. You'll view massive schools of hippos, crocodiles, buffaloes, and elephants cooling off on the banks, alongside over 58 recorded bird species like the African fish eagle and pied kingfisher. Return to the lodge for dinner and overnight." },
                    { day: 4, title: "Morning Game Drive En-route to Bwindi Impenetrable NP", description: "Have breakfast, check out, and transfer to Bwindi with an en-route game drive. Spot elephants, buffaloes, Uganda kobs, lions, leopards, and hyenas. You will pass through the remote Ishasha sector of Queen Elizabeth NP; if lucky, you'll spot the rare tree-climbing lions resting up in the fig trees.\n\nContinue to Bwindi Impenetrable National Park, check in to your booked lodge, and relax until dinner and overnight." },
                    { day: 5, title: "Gorilla Tracking Experience", description: "Following early breakfast, transfer to the briefing point where Uganda Wildlife Authority ranger guides will outline the guidelines for gorilla trekking. The activity takes 2-8 hours and requires physical fitness; carry a packed lunch and drinking water. Meeting these gentle apes is worthwhile, and you are allowed 1 hour with them.\n\nIn the evening, you may decide to rest or take a community walk to the interesting Batwa community." },
                    { day: 6, title: "Transfer back to Entebbe International Airport for Departure", description: "Today is the final day of your 6 Days wildlife trip. Begin with an early breakfast, check out, and embark on the scenic drive back to Kampala through rolling hills and beautiful cultivation terraces. \n\nA lunch stop will be made at the Uganda Equator line crossing—take photos and explore souvenir markets. Later, proceed to Entebbe International Airport for your departure flight or check in to your chosen hotel.\n\nEnd of 6 Days Uganda Wildlife Safari." }
                ],
                "7 Days": [
                    { day: 1, title: "Scenic Drive to the Forest of Kibale", description: "You will be warmly welcomed at the airport or your hotel by your private guide. After a short briefing, step into your private Land Cruiser and set off to begin your safari adventure.\n\nBegin your journey towards Kibale Forest, traveling through one of Uganda's most scenic regions. The area is well known for its rolling tea plantations, lush countryside, and beautiful crater lakes, offering a striking introduction to western Uganda as you make your way towards the forest.\n\nTransfer Time: 7 hours" },
                    { day: 2, title: "Chimpanzee Trekking at the Primate Capital of the World", description: "This morning, head into Kibale National Park for an unforgettable chimpanzee trekking experience. Kibale is home to the highest density of chimpanzees in the region — over 1,500 individuals — making it one of the best places in the world to see them in the wild.\n\nWith the guidance of expert trackers, you'll follow signs through the forest until you find one of the habituated chimp families. Once located, you'll spend one hour observing their natural behavior — grooming, feeding, calling loudly through the forest, or moving swiftly through the canopy.\n\nAfter the trek, continue your journey to Queen Elizabeth National Park.\n\nTransfer time: 1–2 hours" },
                    { day: 3, title: "Game Drive and Boat Safari at Kazinga Channel", description: "Start your morning with a game drive through Queen Elizabeth National Park, one of Uganda's premier wildlife destinations. The park is home to an incredible variety of animals, including lions, elephants, buffaloes, and elusive leopards often seen lounging in the shade.\n\nIn the afternoon, set off on a boat safari along the Kazinga Channel, home to one of the world's largest hippo populations. You'll glide past massive pods of hippos, crocodiles basking on the banks, and large herds of elephants and buffaloes coming to drink. Few places in Africa offer such consistent and close-up encounters with wildlife.\n\nIn the evening, rest in your lodge or continue with a sunset game drive." },
                    { day: 4, title: "Drive to Gorilla Land and Visit Batwa Community", description: "Today, we leave the open savannah landscapes behind and journey toward Uganda's ancient montane forests, a dramatic change in scenery and atmosphere. As we travel deeper into the highlands, the environment becomes cooler, greener, and more densely forested — the natural home of the endangered mountain gorillas.\n\nIf time allows, you may choose to take part in a guided walk through the Batwa community. This experience includes visits to basket weavers and a local school, storytelling about Batwa history and present-day life.\n\nTransfer time: 5 hours" },
                    { day: 5, title: "Gorilla Trekking at Bwindi Forest", description: "Today you'll trek in Bwindi Impenetrable Forest, a UNESCO World Heritage Site that is home to nearly half of the world's remaining mountain gorillas. After a short briefing, set off with your guide into the forest to track one of the habituated gorilla families. Once located, you'll spend one unforgettable hour observing them up close — playing, moving through the trees, and interacting with each other in their natural environment.\n\nAfter the trek, continue your adventure to Lake Bunyonyi, one of the most breathtaking and peaceful places in Uganda. Check in and rest at your lodge, surrounded by the lake's calm waters and dotted islands that create an unforgettable view.\n\nTransfer time: 1–2 hours" },
                    { day: 6, title: "Islands of Lake Bunyonyi", description: "Start your day at Lake Bunyonyi, one of the most beautiful and serene spots in Uganda. Surrounded by terraced hills and dotted with 29 small islands, this lake is Africa's second deepest — and completely free of crocodiles and hippos, making it ideal for a peaceful experience. Here you will embark on a boat adventure to explore some of these islands, taking in the stunning scenery and getting a glimpse of local life along the lakeshore.\n\nAfterward, begin your journey towards Lake Mburo National Park.\n\nTransfer time: 5 hours" },
                    { day: 7, title: "Walking Safari at Lake Mburo National Park", description: "Begin the day with a guided walking safari, led by an armed ranger — a unique way to get closer to the animals in Lake Mburo National Park. The park is one of the best places in Uganda to see large herds of zebras and the striking Rothschild's giraffes.\n\nAfter the walk, you'll begin the drive back to Entebbe. Along the way, you'll stop at the Equator for photos and a chance to pick up some local crafts.\n\nTransfer time: 5 hours" }
                ],
                "21 Days": [
                    { day: 1, title: "Arrival Day", description: "On your arrival at Entebbe international airport, our guide will pick you up and transfer you to your booked hotel for relaxation, dinner, and overnight. Depending on your arrival time, you can have a Kampala city tour exploring the Buganda kingdom palace, Kasubi tombs, Uganda Museum, Namugongo martyrs shrine, and the Bahai temple." },
                    { day: 2, title: "Transfer to Jinja City", description: "After early morning breakfast, meet your safari guide to transfer to Jinja with an en-route visit to Sezibwa falls. Proceed through the amazing views of Mabira forest and tea/sugarcane plantations. Reach by lunchtime, check in, and later go for an afternoon boat cruise on the River Nile to see the source of the longest river in the world. Return for dinner and overnight." },
                    { day: 3, title: "Transfer to Sipi Falls", description: "Transfer early morning to Sipi falls for a nature walk along the spectacular 3-tiered waterfalls originating from Mount Elgon. Expect to see coffee plantations, explore caves, and participate in a community visit. Dinner and overnight at a booked hotel in Sipi." },
                    { day: 4, title: "Transfer to Ziwa Rhino Sanctuary", description: "Check out after early morning breakfast and transfer to Ziwa Rhino Sanctuary. Pass through Kampala and arrive for a guided nature walk to track rhinos in the wild. Return to the lodge for relaxation until dinner and overnight." },
                    { day: 5, title: "Transfer to Murchison Falls National Park", description: "Early morning breakfast and check out to transfer to Murchison Falls National Park (approx. 2 hours drive). Upon reaching the park, visit the top of the falls to hear the thundering waters plunge through a 7-meter rocky gap. Check in to your booked lodge for lunch and relax until dinner." },
                    { day: 6, title: "Morning Game Drive and Afternoon Boat Cruise on the Albert Nile", description: "Wake up at 6:30 am for a warm cup of coffee/tea, then drive to the northern bank. Enjoy amazing views of solitary cape buffaloes, elephants, giraffes, lions, leopards, and hyenas. Return for full breakfast and lunch.\n\nIn the evening, embark on an adventure boat cruise to the bottom of the falls. View hippos, crocodiles, and water birds like the shoebill stork. Return for dinner and overnight." },
                    { day: 7, title: "Transfer to Kibale National Park", description: "After early morning breakfast, check out to transfer to Kibale National Park. Stop for lunch in Fort Portal town and then proceed to the beautiful region of crater lakes before checking in to your booked lodge." },
                    { day: 8, title: "Chimpanzee Tracking and Afternoon Visit to Bigodi Wetland", description: "Early morning breakfast, then head to the briefing station in Kanyanchu. The chimpanzee tracking begins, led by ranger guides walking through the tropical rain forest. Spend 1 hour with the chimps and return to the lodge.\n\nIn the afternoon, enjoy a community swamp walk in Bigodi wetland. Spot the great blue turaco and other primate species you might have missed. Return for dinner and overnight." },
                    { day: 9, title: "Transfer to Semuliki National Park", description: "Enjoy a relaxed breakfast and check out. Transfer to Semuliki National Park (about 2 hours). Check into the lodge, relax until lunch, and enjoy the evening sunset. Later, participate in a night game drive before returning around 11:00 pm for dinner and overnight." },
                    { day: 10, title: "Sempaya Hot Spring and Transfer to Fort Portal", description: "Go for a nature walk in the forest for primate and bird watching as you head towards the Sempaya hot springs (100°C), where visitors can boil eggs and plantains. Later, drive back to Fort Portal for dinner and overnight." },
                    { day: 11, title: "Transfer to Queen Elizabeth National Park", description: "After early morning breakfast, drive to Queen Elizabeth National Park, reaching by midday. Relax until lunch. In the evening, visit Lake Katwe to learn how the local people mine salt using traditional methods. Return for dinner and overnight." },
                    { day: 12, title: "Morning Game Drive to Kasenyi Plains and Afternoon Boat Cruise on Kazinga Channel", description: "Wake up early for a morning game drive in Kasenyi plains, the mating grounds for Uganda kobs and a perfect spot for lions, leopards, and buffaloes. Return for full breakfast and lunch.\n\nIn the afternoon, drive to the Kazinga channel for an adventure boat cruise, viewing hippos, crocodiles, elephants, and numerous bird species. Return for dinner and overnight." },
                    { day: 13, title: "Transfer to Bwindi Impenetrable NP & En-route Game Drive in Ishasha", description: "Check out and transfer to Bwindi Gorilla Park with an en-route game drive through the Ishasha sector, renowned for rare tree-climbing lions lounging in fig trees. Proceed to Bwindi Impenetrable Forest, check in, and rest for the day." },
                    { day: 14, title: "Gorilla Trekking Experience", description: "Prepare for a physically active day. Take a packed lunch and head to the briefing point. The gorilla trek takes 2-7 hours depending on the gorillas' location. Spend an unforgettable 1 hour with the gentle apes and return to the lodge.\n\nIn the evening, optionally rest or visit the Batwa community for cultural dances and storytelling." },
                    { day: 15, title: "Transfer to Lake Bunyonyi", description: "Have a relaxed breakfast and check out. Transfer to Lake Bunyonyi, home to over 29 islands, arriving by lunchtime. Spend the afternoon and evening participating in activities like zip-lining, canoeing, a boat cruise, or swimming. Dinner and overnight at a booked lodge on the lake." },
                    { day: 16, title: "Transfer to Lake Mburo National Park", description: "Check out and transfer to Lake Mburo National Park, passing through the rolling hills of Kabale—the Switzerland of Africa. Stop for lunch in Mbarara, then proceed to the park with en-route mini game viewing. Check in for dinner and overnight." },
                    { day: 17, title: "Morning Game Drive and Afternoon Boat Cruise on Lake Mburo", description: "Take a morning game drive to search for savanna wildlife like zebras, giraffes, elands, and impalas. Return for full breakfast and lunch.\n\nIn the afternoon, go for an adventure boat ride on the lake for high chances of meeting hippos, crocodiles, and buffaloes along the banks while enjoying the sunset. Return for dinner and overnight." },
                    { day: 18, title: "Transfer to Kampala", description: "Have a relaxed breakfast, check out, and transfer to Kampala with en-route game viewing. Stop at the Uganda Equator crossing for photos and souvenir shopping. Proceed to Kampala, reaching by evening to check into your booked lodge." },
                    { day: 19, title: "Morning Birding to Mabamba Swamp and Evening Visit to Entebbe Zoo", description: "Wake up early and transfer to Mabamba swamp to look for the rare and beautiful shoebill stork among other water birds. Return to Entebbe for lunch and spend your evening at the Entebbe Zoo (UWEC) visiting wildlife. Return to the lodge for dinner and overnight." },
                    { day: 20, title: "Kampala City Tour", description: "Take a relaxed breakfast and embark on a Kampala city tour. Visit plenty of historical attractions including the Buganda kingdom palace (Lubiri), Bulange Mengo, Kasubi tombs, Uganda Museum, Bahai temple, Namugongo martyrs shrine, and the Gadhafi mosque." },
                    { day: 21, title: "Departure Day", description: "Enjoy a relaxed breakfast and morning at the lodge. At the appropriate time, your safari guide will securely transfer you to Entebbe International Airport for your departure flight." }
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
        duration: "3-28 Days",
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
            "/images/culture25.jpeg",
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
            "10 Days": [
                { day: 1, title: "Visit Buganda kingdom palace, bulange mengo and kabaka's lake", description: "You will wake up with an early breakfast and meet your guide to visit the king's palace, the Kabaka's lake, and Mengo headquarters. Meals and accommodation at a booked hotel in Kampala." },
                { day: 2, title: "Visit Kasubi tombs, Wamala tombs and Naggalabi coronation site", description: "After breakfast, you will drive to explore the Kasubi tombs in Kampala, and in the afternoon, drive to Wakiso to visit Wamala tombs and the Naggalabi coronation site." },
                { day: 3, title: "Transfer to Kalangala and Ssese Island", description: "Wake up early with breakfast and transfer to Nakiwogo landing site to catch the morning ferry to Kalangala. Reach in the afternoon and have an evening visit to the John Speke monument. Meals and accommodation at a booked lodge." },
                { day: 4, title: "Visit Kalangala falls and Ssese Island", description: "You will have a morning nature walk to Kalangala falls, learn more about the history of Buganda, and continue to explore more about Ssese Island." },
                { day: 5, title: "Return to Kampala and evening visit to Ndere culture centre", description: "Wake up early, embark on a cruise to Kampala, and reach by lunch time. Enjoy an evening visit to Ndere Culture Centre to experience and explore more about Buganda's traditions." },
                { day: 6, title: "Visit Sezibwa falls in Lugazi", description: "Wake up early and hit the road to Sezibwa falls to explore more about Buganda and the cultural origin of the falls." },
                { day: 7, title: "Visit Mulungu landing site and Semagulu museum", description: "Drive to visit the Mulungu landing site which holds deep history about the Buganda kingdom. In the afternoon, visit the Semagulu museum to explore the Buganda kingdom's ancient artifacts and current status." },
                { day: 8, title: "Full day visit at Entanda culture centre", description: "After breakfast, drive to Mityana road to visit a community-based organization formed to celebrate Buganda culture. You will learn cultural dancing, how to prepare local meals, traditional dress code ceremonies, and more. Return to Kampala in the evening." },
                { day: 9, title: "Transfer to Katereke and Mpambire village", description: "After breakfast, hit the road to Katereke prison ditch, dug in the 19th century by Buganda Kabaka Kalema. The structure of the ditch is historic and fascinating. Continue to Mpambire village to learn how to make traditional Buganda crafts. Accommodation at a booked hotel in Kampala." },
                { day: 10, title: "Full day tour in Kampala city & Departure", description: "Wake up with a relaxed breakfast and drive for a final city visit. You will explore the Uganda Museum, Bahai Temple, Independence Monument, and Namugongo Martyrs Shrine. Your driver will then take you to the airport for your departure flight." }
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
            ],
            "15 Days": [
                { day: 1, title: "Pick up from place of accommodation and transfer to Kampala", description: "Wake up and have breakfast, then transfer to Kampala with en-route stopovers for food and snacks. Visit the Kingugu landing site, Muzinga square, Zamugula site, and the magnificent Bemba cave in Ziika ecotourism forest. You will also visit Kasubi tombs, Naggalabi coronation site, and Wamala tombs before returning to your hotel in Kampala." },
                { day: 2, title: "City Tour and visit Uganda Museums", description: "After breakfast, transfer to experience a city tour around Uganda’s cultural sites like the Uganda Museum. Spot ethnographic artifacts, visit the Bahai temple, Namugongo Martyr's shrine, Namirembe cathedral, and the Gaddafi mosque." },
                { day: 3, title: "Transfer to Hoima", description: "Wake up for a transfer to the 'land of peaceful'. Drive to Hoima via Kiboga. In the afternoon, visit the Karuzika palace of the Bunyoro kingdom to explore its historical cultural heritages. Proceed to Bujumbura cathedral for further cultural and religious exploration." },
                { day: 4, title: "Full day Bunyoro Kingdom", description: "Adventure further into the Bunyoro kingdom. Visit the royal burial grounds at Mparo tombs to learn about ancient kings and their ancestral descendants. Enjoy traditional entertainment from cultural dancers before returning to your lodge." },
                { day: 5, title: "Transfer to Fort Portal", description: "Drive from Hoima town to Fort Portal, enjoying splendorous en-route sightings of rewarding flora and tea plantations. Reach Fort Portal by lunchtime and proceed to Nyakasura to learn the history of the natives." },
                { day: 6, title: "Full day Toro Kingdom", description: "Dive into Toro culture with a visit to the kingdom palace to explore historical heritages, followed by the royal burial grounds at Karambi royal tombs. After lunch, embark on a superlative adventure to the magnificent crater lakes." },
                { day: 7, title: "Transfer to Queen Elizabeth National Park", description: "After morning coffee, get ready for a game drive in Queen Elizabeth National Park. Watch various wildlife like elephants, buffaloes, giant forest hogs, lions, and leopards, alongside diverse bird species." },
                { day: 8, title: "Chimpanzee Tracking in Kyambura Gorge", description: "Transfer to track chimpanzees in Kyambura gorge. After a briefing, track the primates for 3-5 hours with a skilled ranger. Take numerous photos of the chimps in their natural habitat before returning to the lodge." },
                { day: 9, title: "Game drive in Queen Elizabeth NP and Evening Community Visit", description: "Morning game drive watching animals like lions, buffaloes, and Uganda kobs. In the evening, embark on a guided community walk to learn about the lives of the local people near the park and Lake Katwe salt lake." },
                { day: 10, title: "Transfer to Kabale", description: "Drive to the 'Switzerland of Africa' via Kanungu. En-route, explore the Kanungu religious site. After lunch, enjoy a cultural sighting at the Kabale museum to see Bakiga cultural archaeologies, followed by a visit to Rushoroza and Rugarama cathedrals." },
                { day: 11, title: "Transfer to Lake Bunyonyi", description: "Drive to a dammed lake surrounded by countless splendorous hills. Interact with the Edirisa community development organization for an insight into the local people's way of life and a true experience of Bakiga culture." },
                { day: 12, title: "Transfer to Mbarara", description: "Explore Ankole culture in Mbarara. Visit the palace of the Ankole kingdom to see historical cultural ornaments. Expect to see the iconic long-horned cattle and learn about the Bahima cattle-keeping culture." },
                { day: 13, title: "Full day Mbarara (Ankole Kingdom)", description: "After breakfast, hike Biharwe hill to see the 1520 AD eclipse monument. Around lunchtime, visit the Ankole museum at the Igongo Cultural Centre." },
                { day: 14, title: "Transfer to Masaka with en-route game drive in Lake Mburo NP", description: "Drive toward Masaka in the Buganda kingdom. Enjoy authentic game viewing of zebras and Ankole long-horned cattle in Lake Mburo NP, plus an en-route visit to Sanga cultural village." },
                { day: 15, title: "Transfer to Kampala & Departure", description: "Drive back to Kampala with an en-route stop at Mpambire drum makers. Reach Kampala by lunchtime and visit the Ndere Centre for a breathtaking cultural experience and traditional dances. Later, transfer to the airport for your departure." }
            ],
            "28 Days": [
                { day: 1, title: "Arrival in Uganda at Entebbe International Airport", description: "On your arrival at Entebbe international airport, our safari guide will be waiting to pick you up and transfer you to a booked lodge in Entebbe/Kampala. Take the rest of the day to relax until dinner and overnight after a trip briefing." },
                { day: 2, title: "Transfer to Lake Mburo National Park", description: "Wake up early for breakfast, then start your journey to western Uganda with an en-route stop at the Uganda Equator line for photos and souvenir shopping. Proceed to Lake Mburo NP, arriving by lunchtime. In the afternoon, you may choose an evening game drive or a boat cruise on Lake Mburo." },
                { day: 3, title: "Morning Game Drive and Afternoon Community Village Visit", description: "Wake up with a warm cup of coffee and drive to explore wildlife like zebras, giraffes, elephants, and elands. Return to the lodge for full breakfast. In the evening, take a community walk to learn about the herdsmen culture and their long-horned cattle. Dinner and overnight at the lodge." },
                { day: 4, title: "Visit Igongo Cultural Centre and Ankole Kingdom Palace", description: "Check out and transfer to Igongo Cultural Museum to learn about the Banyakore people. Have lunch at Igongo Country Hotel. In the afternoon, visit the Ankole kingdom palace and royal tombs in Mbarara town. Check into a booked hotel in Mbarara for dinner and overnight." },
                { day: 5, title: "Transfer to Lake Bunyonyi", description: "Early morning breakfast and transfer to Lake Bunyonyi, passing through the beautiful rolling hills of Kigezi. Reach by lunchtime. In the afternoon, participate in activities like zip-lining, swimming, canoeing, or community visits. Dinner and overnight at the lodge." },
                { day: 6, title: "Transfer to Lake Mutanda and Afternoon Boat Trip", description: "Early breakfast and check out to transfer to Lake Mutanda in Kisoro, arriving in the morning. Spend the rest of the day enjoying activities on the lake, including a sundowner boat trip to explore the islands." },
                { day: 7, title: "Golden Monkey Tracking", description: "Have breakfast and transfer to Mgahinga National Park for a briefing. Track the endemic and beautiful golden monkeys in the Albertine region. It’s a highly rewarding encounter." },
                { day: 8, title: "Batwa Trail in Mgahinga National Park", description: "Spend time with the Batwa people learning their ancient culture. They will demonstrate fire-making, share stories, and entertain you with cultural dances, showing how they survived as hunter-gatherers in the forest." },
                { day: 9, title: "Gorilla Trekking Experience", description: "Early morning transfer to the briefing point, then trek into the impenetrable forest to meet the gentle mountain gorillas. Spend an unforgettable hour observing them feed, play, and rest before returning to your lodge." },
                { day: 10, title: "Transfer to Ishasha Sector and Evening Game Drive", description: "Check out and transfer to the Ishasha sector of Queen Elizabeth NP, arriving by lunch. In the evening, drive in search of the rare tree-climbing lions lounging in fig trees. Dinner and overnight at the lodge." },
                { day: 11, title: "Transfer to Northern Sector with Afternoon Boat Cruise", description: "Transfer to the northern sector of QENP with an en-route game drive to spot leopards, elephants, and hyenas. After lunch, enjoy an exciting boat cruise on the Kazinga Channel to view massive hippo pods, crocodiles, and water birds." },
                { day: 12, title: "Transfer to Kibale Forest National Park", description: "Relaxed breakfast and check out. Transfer to Kibale NP through the crater lakes region, stopping at the equator monument. Arrive by lunchtime, check in, and relax until dinner." },
                { day: 13, title: "Chimpanzee Tracking and Afternoon Swamp Walk", description: "Drive to Kanyanchu for chimpanzee tracking briefing. Search for chimps in the rainforest and spend 1 hour with them. In the afternoon, opt for a community swamp walk to spot more primates and birds, including the Great Blue Turaco." },
                { day: 14, title: "Transfer to Hoima", description: "Check out and drive north to Hoima on Lake Albert, passing banana and tea plantations. Visit the Toro kingdom palace and the Amabere Ga Nyina Mwiru caves, proceeding to Hoima for dinner and overnight." },
                { day: 15, title: "Transfer to Murchison Falls National Park", description: "Transfer to Murchison Falls NP. Have a mini game drive upon entering, check in, and have lunch. In the evening, visit the magnificent top of the falls before returning to your lodge." },
                { day: 16, title: "Explore Murchison Falls National Park", description: "Morning game drive to spot giraffes, buffaloes, elephants, lions, and leopards. In the afternoon, enjoy a boat cruise upstream to the bottom of the waterfalls to view hippos, crocodiles, and diverse birdlife." },
                { day: 17, title: "Relaxation and Evening Sunset Drive", description: "Enjoy a relaxed breakfast and spend the morning at the lodge. In the afternoon, take a drive to the Nyamasika plateau to enjoy a spectacular evening sunset." },
                { day: 18, title: "Full Day Game Drives", description: "Early morning game drive to catch predators returning to their dens. Expect to see hyenas, lions, leopards, and giraffes. Return to the lodge to relax before another thrilling evening game drive." },
                { day: 19, title: "Transfer to Kidepo Valley National Park", description: "Check out and transfer to Kidepo Valley NP in northeastern Uganda. Stop for lunch in Gulu and view the amazing Aruu falls en route. Check into your lodge by evening." },
                { day: 20, title: "Explore Kidepo Valley National Park", description: "Morning game drive throughout the park's circuits to view animals at close range. Return for breakfast and relax until lunch. Take another game drive in the evening offering superb views of the park's southern region." },
                { day: 21, title: "Another Day for Game Drive", description: "After breakfast, enjoy game viewing along the Kidepo River. Meet the sand river in the northern part of the park, lined by Borassus palms, resembling an oasis in the Sahara." },
                { day: 22, title: "Morning Relaxation and Afternoon Karamojong Community Visit", description: "Relax at the lodge in the morning. In the afternoon and evening, visit the pastoral Karamojong community. Experience their vibrant traditional dances and cultural demonstrations." },
                { day: 23, title: "Transfer to Moroto", description: "Transfer to Moroto with optional activities like hiking Mount Morungole or visiting the Ik people. Later, transfer to Soroti to see the shores of Lake Kyoga and its granite rocks. Dinner and overnight in Soroti." },
                { day: 24, title: "Transfer to Sipi Falls", description: "Transfer to the magnificent Sipi Falls on the foothills of Mount Elgon. Arrive by lunchtime and spend the rest of the day relaxing at your lodge." },
                { day: 25, title: "Explore Sipi Falls", description: "Explore the 3 tiered waterfalls flowing from different altitudes. After lunch, visit the local community to interact with the Sebei people and learn about Arabic coffee processing." },
                { day: 26, title: "Transfer to Jinja", description: "Drive through Mbale and Kapchorwa to Jinja. Visit the source of the Nile for a walk. In the afternoon, choose optional activities like quad biking, bungee jumping, white water rafting, or a boat cruise." },
                { day: 27, title: "Morning Relaxation and Transfer to Kampala", description: "Relaxed morning touring Jinja city. After lunch, transfer to Kampala through the Mabira forest, stopping at Sezibwa Falls. Check into your hotel in Kampala or Entebbe for dinner and overnight." },
                { day: 28, title: "Mabamba Swamp and Departure", description: "Early morning drive to Mabamba Swamp to search for the elusive Shoebill Stork in the wetland. Return to the hotel for lunch, then transfer to Entebbe International Airport for your departure flight." }
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
                { day: 1, title: "Jinja - Adventure Capital", description: "Transfer to Jinja. Evening briefing and preparation for white water rafting." },
                { day: 2, title: "White Water Rafting", description: "Full day white water rafting on the Nile River. Navigate through Grade 5 rapids. Return to Kampala." },
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
