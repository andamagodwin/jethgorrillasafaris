export interface DestinationPark {
    name: string;
    description: string;
    image: string;
}

export interface Destination {
    id: string;
    name: string;
    tagline: string;
    cardImage: string;
    heroImage: string;
    summary: string;
    intro: string;
    highlights: string[];
    parks: DestinationPark[];
    quickFacts: { label: string; value: string }[];
    bestTime: string;
    gettingThere: string;
}

/*
 * NOTE ON IMAGERY
 * The Uganda and Rwanda card images were supplied directly. Everything else
 * comes from the existing Uganda library on Cloudinary, which the Uganda entry
 * uses accurately. The Rwanda, Kenya and Tanzania park and hero shots are still
 * Uganda photos standing in as placeholders, so swap in real photos from those
 * countries before treating those pages as final.
 */

const IMG = 'https://res.cloudinary.com/ddfpgrpdj/image/upload/f_auto,q_auto/';

export const destinations: Destination[] = [
    {
        id: 'uganda',
        name: 'Uganda',
        tagline: 'The Pearl of Africa',
        cardImage: `${IMG}v1787422220/WhatsApp_Image_2026-08-22_at_20.59.59_faxt8j.jpg`,
        heroImage: `${IMG}v1779293922/eyre_gorilla/images/gorilla11.jpg`,
        summary: 'Mountain gorillas, chimpanzees and the Big Five within a single country, and short enough drives to see them on one trip.',
        intro: 'Uganda is our home country and the one we know best. Roughly half the world\'s mountain gorillas live in Bwindi Impenetrable Forest, Kibale holds one of the densest chimpanzee populations in Africa, and the savannah parks carry lions, elephants, buffalo and leopard. Because the parks sit relatively close together, you can combine forest trekking and classic game drives without long transfers or extra flights.',
        highlights: [
            'Gorilla trekking in Bwindi Impenetrable Forest',
            'Chimpanzee tracking in Kibale Forest',
            'Tree climbing lions in the Ishasha sector',
            'Boat cruise to the base of Murchison Falls',
            'Source of the Nile and white water rafting at Jinja',
            'Over 1,000 recorded bird species, including the shoebill',
        ],
        parks: [
            {
                name: 'Bwindi Impenetrable National Park',
                description: 'Dense montane forest in the southwest and the main home of Uganda\'s mountain gorillas. Habituated families are tracked daily from four sectors.',
                image: `${IMG}v1779293921/eyre_gorilla/images/gorilla10.jpg`,
            },
            {
                name: 'Kibale Forest National Park',
                description: 'The best place in East Africa to track chimpanzees, with 13 primate species in the forest and swamp walks in neighbouring Bigodi.',
                image: `${IMG}v1779293850/eyre_gorilla/images/chimp.jpg`,
            },
            {
                name: 'Queen Elizabeth National Park',
                description: 'Savannah, crater lakes and the Kazinga Channel. The Ishasha sector in the south is known for lions that rest in fig trees.',
                image: `${IMG}v1779293929/eyre_gorilla/images/image7.jpg`,
            },
            {
                name: 'Murchison Falls National Park',
                description: 'Uganda\'s largest park, split by the Nile as it forces through a 7 metre gap. Game drives on the north bank, boat cruises to the falls.',
                image: `${IMG}v1779293835/eyre_gorilla/images/activity.jpg`,
            },
            {
                name: 'Kidepo Valley National Park',
                description: 'Remote semi arid savannah in the far northeast. Low visitor numbers, big herds of buffalo, and species you will not see elsewhere in Uganda.',
                image: `${IMG}v1779293937/eyre_gorilla/images/safari14.jpg`,
            },
        ],
        quickFacts: [
            { label: 'Gateway', value: 'Entebbe International Airport (EBB)' },
            { label: 'Capital', value: 'Kampala' },
            { label: 'Language', value: 'English and Swahili official' },
            { label: 'Currency', value: 'Ugandan Shilling (UGX)' },
            { label: 'Gorilla permit', value: 'From USD 800 per person' },
            { label: 'Visa', value: 'e-Visa online, or East Africa Tourist Visa' },
        ],
        bestTime: 'June to September and December to February are the drier months and the easiest for trekking. Gorilla trekking runs all year.',
        gettingThere: 'Most visitors fly into Entebbe, about 40 km from Kampala. We meet you at arrivals and drive from there, or arrange a domestic flight to the western and northern airstrips.',
    },
    {
        id: 'rwanda',
        name: 'Rwanda',
        tagline: 'Land of a Thousand Hills',
        cardImage: `${IMG}v1787422223/WhatsApp_Image_2026-08-22_at_21.01.14_h20p5y.jpg`,
        heroImage: `${IMG}v1779293917/eyre_gorilla/images/gorilla/gorilla3.jpg`,
        summary: 'The short trip option. Kigali to the gorillas in about three hours, with good roads the whole way.',
        intro: 'Rwanda suits travellers who are short on time. The country is small, the roads are in good condition, and Volcanoes National Park is roughly a three hour drive from the airport in Kigali, so a gorilla trek is realistic on a three or four day trip. Permits cost more than in Uganda, but the trekking is generally shorter and the logistics are simpler. Rwanda also pairs well with Uganda if you want both countries on one itinerary.',
        highlights: [
            'Gorilla trekking in Volcanoes National Park',
            'Golden monkey tracking on the Virunga slopes',
            'Canopy walkway and chimpanzees in Nyungwe Forest',
            'Big Five game drives in Akagera after rhino and lion reintroduction',
            'Kigali Genocide Memorial',
            'Lake Kivu for a few slower days at the end of a trip',
        ],
        parks: [
            {
                name: 'Volcanoes National Park',
                description: 'The Rwandan side of the Virunga range, where Dian Fossey worked. Habituated gorilla families plus golden monkeys and the hike to her research camp.',
                image: `${IMG}v1779293917/eyre_gorilla/images/gorilla/gorilla3.jpg`,
            },
            {
                name: 'Nyungwe Forest National Park',
                description: 'One of the oldest rainforests in Africa. Chimpanzee tracking, thirteen primate species and a suspended canopy walkway.',
                image: `${IMG}v1779293852/eyre_gorilla/images/chimp1.jpg`,
            },
            {
                name: 'Akagera National Park',
                description: 'Savannah and wetland on the Tanzanian border. Lion and rhino have both been reintroduced, making it Rwanda\'s Big Five park.',
                image: `${IMG}v1779293935/eyre_gorilla/images/safari12.jpg`,
            },
            {
                name: 'Lake Kivu',
                description: 'A large freshwater lake along the western border. Quiet lakeside towns at Gisenyi and Kibuye, usually added after a trek.',
                image: `${IMG}v1779293835/eyre_gorilla/images/activity.jpg`,
            },
        ],
        quickFacts: [
            { label: 'Gateway', value: 'Kigali International Airport (KGL)' },
            { label: 'Capital', value: 'Kigali' },
            { label: 'Language', value: 'Kinyarwanda, English, French, Swahili' },
            { label: 'Currency', value: 'Rwandan Franc (RWF)' },
            { label: 'Gorilla permit', value: 'USD 1,500 per person' },
            { label: 'Visa', value: 'On arrival, or East Africa Tourist Visa' },
        ],
        bestTime: 'June to September and December to February. The forest trails dry out and the volcanoes are clearer, though trekking continues year round.',
        gettingThere: 'Fly into Kigali. The drive to Volcanoes National Park takes about three hours on tarmac, which is why Rwanda works for shorter trips.',
    },
    {
        id: 'kenya',
        name: 'Kenya',
        tagline: 'The Classic Safari',
        cardImage: `${IMG}v1779293932/eyre_gorilla/images/safari1.jpg`,
        heroImage: `${IMG}v1779293911/eyre_gorilla/images/elephant.jpg`,
        summary: 'Open plains, big predator sightings and the Mara River crossings between July and October.',
        intro: 'Kenya is where the safari as most people picture it took shape. The Masai Mara delivers reliable big cat sightings across open grassland, and from July to October the wildebeest herds cross the Mara River from the Serengeti. Beyond the Mara, Amboseli sits under Kilimanjaro, the northern reserves hold species you will not find further south, and the coast is close enough to finish a trip on the Indian Ocean.',
        highlights: [
            'Great Migration river crossings in the Masai Mara',
            'Large elephant herds at Amboseli with Kilimanjaro behind them',
            'Reticulated giraffe, Grevy\'s zebra and gerenuk in Samburu',
            'Flamingos and rhino at Lake Nakuru',
            'Sheldrick elephant orphanage and Nairobi National Park',
            'Diani and Watamu beaches for a coastal add on',
        ],
        parks: [
            {
                name: 'Masai Mara National Reserve',
                description: 'Open grassland with the highest predator density in Kenya. The Mara River crossings run from roughly July to October.',
                image: `${IMG}v1779293948/eyre_gorilla/images/safari8.jpg`,
            },
            {
                name: 'Amboseli National Park',
                description: 'Swamps that hold water year round, which draws big elephant herds into the open with Kilimanjaro on the horizon.',
                image: `${IMG}v1779293914/eyre_gorilla/images/elephant12.jpg`,
            },
            {
                name: 'Samburu National Reserve',
                description: 'Dry country north of Mount Kenya along the Ewaso Ng\'iro river, home to northern species found nowhere else in the country.',
                image: `${IMG}v1779293943/eyre_gorilla/images/safari3.jpg`,
            },
            {
                name: 'Lake Nakuru National Park',
                description: 'A soda lake in the Rift Valley, fenced and used as a rhino sanctuary. Good for both black and white rhino alongside the birdlife.',
                image: `${IMG}v1779293845/eyre_gorilla/images/bird1.jpg`,
            },
        ],
        quickFacts: [
            { label: 'Gateway', value: 'Jomo Kenyatta International Airport (NBO)' },
            { label: 'Capital', value: 'Nairobi' },
            { label: 'Language', value: 'English and Swahili' },
            { label: 'Currency', value: 'Kenyan Shilling (KES)' },
            { label: 'Migration', value: 'River crossings July to October' },
            { label: 'Visa', value: 'Electronic travel authorisation before arrival' },
        ],
        bestTime: 'July to October for the migration and the river crossings. January to March is drier, quieter and still very good for game viewing.',
        gettingThere: 'Fly into Nairobi. Most Mara itineraries use a short scheduled flight to an airstrip inside the reserve rather than the long road transfer.',
    },
    {
        id: 'tanzania',
        name: 'Tanzania',
        tagline: 'Serengeti and Beyond',
        cardImage: `${IMG}v1779293933/eyre_gorilla/images/safari10.jpg`,
        heroImage: `${IMG}v1779293941/eyre_gorilla/images/safari2.jpg`,
        summary: 'The Serengeti, the Ngorongoro Crater, Kilimanjaro and Zanzibar, usually combined on one longer trip.',
        intro: 'Tanzania holds the largest protected areas in the region. The wildebeest herds move through the Serengeti all year, so the question is where they are rather than whether you will see them, and the calving season on the southern plains between January and March is the best time for predator activity. The northern circuit links the Serengeti, Ngorongoro and Tarangire on one road route, and most trips end either on Kilimanjaro or on Zanzibar.',
        highlights: [
            'The Great Migration across the Serengeti throughout the year',
            'Calving season on the southern plains from January to March',
            'Ngorongoro Crater, a collapsed caldera with resident big game',
            'Baobabs and large elephant herds in Tarangire',
            'Kilimanjaro, the highest mountain in Africa at 5,895 metres',
            'Stone Town and the beaches of Zanzibar',
        ],
        parks: [
            {
                name: 'Serengeti National Park',
                description: 'Close to 15,000 square kilometres of plains and the centre of the migration. Where you stay depends on where the herds are that month.',
                image: `${IMG}v1779293948/eyre_gorilla/images/safari8.jpg`,
            },
            {
                name: 'Ngorongoro Conservation Area',
                description: 'A collapsed volcanic caldera roughly 20 km across, with resident lion, elephant, buffalo and one of the last black rhino populations.',
                image: `${IMG}v1779293849/eyre_gorilla/images/buffalo.jpg`,
            },
            {
                name: 'Tarangire National Park',
                description: 'Baobab country along the Tarangire river. In the dry season the herds concentrate on the river and elephant numbers are high.',
                image: `${IMG}v1779293912/eyre_gorilla/images/elephant10.jpg`,
            },
            {
                name: 'Nyerere National Park',
                description: 'Formerly part of the Selous in the south. Boat safaris on the Rufiji, far fewer vehicles, and a stronghold for African wild dog.',
                image: `${IMG}v1779293945/eyre_gorilla/images/safari6.jpg`,
            },
        ],
        quickFacts: [
            { label: 'Gateway', value: 'Kilimanjaro (JRO) and Julius Nyerere (DAR)' },
            { label: 'Capital', value: 'Dodoma, with Dar es Salaam the largest city' },
            { label: 'Language', value: 'Swahili and English' },
            { label: 'Currency', value: 'Tanzanian Shilling (TZS)' },
            { label: 'Migration', value: 'Moves through the Serengeti year round' },
            { label: 'Visa', value: 'e-Visa online or on arrival' },
        ],
        bestTime: 'June to October is dry and best for general game viewing. January to March covers the calving season in the south of the Serengeti.',
        gettingThere: 'Fly into Kilimanjaro for the northern circuit, or Dar es Salaam for the south and Zanzibar. Light aircraft link the parks if you would rather not drive.',
    },
];

export const getDestinationById = (id: string): Destination | undefined => {
    return destinations.find(destination => destination.id === id);
};
