import { AlligatorGar, Amberjack, Arapaima, ArcticChar, Asp, BarracudaGreat, BarracudaPacific, Barramundi, BassAustralian, BassLargemouth, BassPeacock, BassRainbow, BassSmallmouth, BassSpotted, BassStriped, BassWhite, BlackDrum, BlackJewfish, BlackRockfish, Bluefish, BluenoseWarehou, BoharSnapper, Bonefish, Bonito, Bowfin, BreamBlack, BreamCommon, BreamFingermark } from "@/pictures/fishdex"
import { StaticImageData } from "next/image"

export type fishType = {
    image: string | StaticImageData,
    latinName: string,
    size: string,
    location: string,
    eat: string
}

export const fishMap = new Map<string, fishType>([
    ['Alligator Gar', {
        image: AlligatorGar,
        latinName: 'Atractosteus spatula',
        size: 'As one of the largest fish in North American freshwaters, Alligator Gar are commonly caught between 4 and 6ft and 100 and 160lbs. The largest specimen was bowfished and weighed in at 365lbs.',
        location: 'Alligator Gar are native to slow rivers, reservoirs, landlocked lakes, oxbows and brackish estuarine waters of the southeastern USA. They can be found in the lower Mississippi River basin between, and including, Florida, Texas, Arkansas and Oklahoma. The species was also introduced to Central America and Thailand and fishing for them is marketed as a world-wide sensation in the latter.',
        eat: 'Edible flesh, tasty according to some. Hard to fillet due to extremely tough skin and scales. The roe (eggs) should be avoided at all costs, as it\'s highly toxic to all organisms except other fish.'
    }],
    ['Amberjack', {
        image: Amberjack,
        latinName: 'Seriola dumerili',
        size: 'Amberjacks have an elongated body that can grow to about 6ft and 160lbs. The average catch will be between 20 and 40lbs though, but, depending on where and when you target them, larger fish can be a commodity. They live around 17 years and mature at 4-5.',
        location: 'This species can be found in tropical and warm temperate waters worldwide, including: the Indo-Pacific - around Madagascar, in the Persian Gulf, around south Japan (where the record fish was recently caught), China and the Philippines; around Hawaii; in the western Atlantic from Nova Scotia to Brazil, including the Gulf of Mexico, Bermuda and the Caribbean Sea; in the eastern Atlantic from the British isles to Morocco and in parts of the Mediterranean Sea, but also off southern and western Africa. They\'re replaced by Yellowtail Amberjacks off Australia and California.',
        eat: 'Lean, firm and white meat with mild taste. However, Amberjacks are highly ranked among tropical fish species known to cause ciguatera (fish poisoning). Bigger fish should be released as a precaution.'
    }],
    ['Arapaima', {
        image: Arapaima,
        latinName: 'Arapaima gigas',
        size: 'The Arapaima is possibly the largest freshwater fish in the world, reaching up to 440 pounds (200 kilograms) and 10 feet (3 meters) in length. However, sizes of 200 pounds (90.7 kilograms) and 7 to 8 feet (2.2 to 2.4 meters) in length are more common.',
        location: 'Arapaima are native to South America, in the floodplains of the Amazon River basin, and in parts of Bolivia, Brazil, Columbia, Guyana and Peru.',
        eat: 'Arapaima are good to eat and mild tasting. Anglers are asked to catch, keep, and eat Arapaima as a management tool to control this nonnative fish. '
    }],
    ['Arctic Char', {
        image: ArcticChar,
        latinName: 'Salvelinus alpinus',
        size: 'Fortunately, the differences in size aren\'t so drastic, with most fish staying in the sub-20 lb range. There are always exceptions to the rule, as the IGFA record for the species is an impressive 32 lb 9 oz.',
        location: 'Cold rivers and lakes are the main habitats of the Arctic Char. It\'s spread out across the globe, from Canada and Alaska to Lake Baikal, Iceland, and even the Alps. There\'s also a few in Britain and Ireland, found in deep glacial lakes.',
        eat: 'Many describe the taste of Arctic Char to be somewhere between Trout and Salmon, a bit closer to the former. While they do come in different colors, there\'s no difference in taste whatsoever.'
    }],
    ['Asp', {
        image: Asp,
        latinName: 'Aspius aspius',
        size: 'Normally, Asps are between 10 and 80 centimeters (3.9 and 31.5 inches) in length, with some reaching 120 centimeters (47 inches), and weighing up to 12 kilograms (26 pounds).',
        location: 'This strong fighting fish is native to the northern parts of the European continent and can be found all the way from Norway to the southern reaches of the Danube. They\'re most common in the lower parts of rivers, with anglers also reporting catches in lakes and their tributaries. Look out for them around bridge pilings and pools as they patrol the waters looking for prey. ',
        eat: 'While Asp taste good, they\'re rarely considered a food fish. Their boney flesh makes them much more suitable for catch-and-release than taking home to the dinner table. '
    }],
    ['Great Barracuda', {
        image: BarracudaGreat,
        latinName: 'Sphyraena barracuda',
        size: 'Great Barracuda grow to fascinating lengths of up to 6ft, potentially weighing more than 100lbs. The average catch will be from 5 to 15lbs. They live short lives (around 15 years) and mature quickly (in 2-4 years).',
        location: 'Great Barracuda saturate tropical and subtropical waters worldwide, except the eastern Pacific Ocean, where they\'re replaced by the smaller Pacific Barracuda. In the eastern Atlantic region, you can fish for them from Massachusetts to Brazil, anywhere in the Gulf of Mexico and throughout the Caribbean Sea.',
        eat: 'Smaller Great Barracuda meat is edible, but larger specimens are leaders in the list of tropical fish thought to cause ciguatera (fish poisoning).'
    }],
    ['Pacific Barracuda', {
        image: BarracudaPacific,
        latinName: 'Sphyraena argentea',
        size: 'Pacific Barracuda live up to 12 years, grow up to about 50\'\' and very rarely over 9lbs. Larger fish caught in the same waters will most likely be Mexican \'cudas (Sphyraena ensis).',
        location: 'The species is most abundant off Southern California, as north as Point Conception and south to the tip of the Baja Sur. If the waters are very warm, they can sometimes be found all the way up to Alaska.',
        eat: 'Only when very fresh, as they don\'t keep well frozen. Rare cases of ciguatera (fish poisoning) have been reported.'
    }],
    ['Barramundi', {
        image: Barramundi,
        latinName: 'Lates calcarifer',
        size: 'This species can grow up to 180cm (6ft) and 60kg (130lbs), though behemoths like these are extremely scarce. The average catch, depending on the area fished, might be between 2 and 7kg (5 and 15lbs) and 60 and 120cm (2 and 4ft) long.',
        location: 'Barramundis are common in fresh and brackish waters of the Indo-West Pacific, from the Persian Gulf through India, Southeast Asia, south China and the Philippines, down to Papua New Guinea and north Australia (north of Exmouth Gulf on the western side and Maroochy River on the eastern side). Well-known Barramundi spots in Australia include Darwin in Northern Territory and Cairns in Queensland.',
        eat: 'Regarded as gourmet meat in Australia - mild, white, flaky, oily, versatile and rich in nutrients.'
    }],
    ['Australian Bass', {
        image: BassAustralian,
        latinName: 'Percalates novemaculeata',
        size: 'Fish are usually caught around 0.5kg and between 20 and 30cm, with northern fisheries producing larger specimens than southern ones.',
        location: 'They can be found in coastal rivers, creeks and streams from the Bundaberg region in Queensland south to Wilsons Promontory in Victoria, but excluding the Murray-Darling system. They travel downstream to spawn in estuaries from May until September.',
        eat: 'These fish make for excellent table fare, but are under increasing angling pressure, so catch and release is advised in order to preserve the stocks.'
    }],
    ['Largemouth Bass', {
        image: BassLargemouth,
        latinName: 'Micropterus salmoides',
        size: 'Largemouth is the largest species in the Black Bass family, at a maximum reported size of 3.3ft and 25lbs. Average catches are about 18\'\' and up to 5lbs.',
        location: 'This species is a type of Black Bass and can be found in rivers, creeks, streams, lakes and ponds throughout the USA, Mexico, Central America and other countries throughout the world.',
        eat: 'Fish between 10 and 14\'\' are great tasting; larger ones should be released.'
    }],
    ['Peacock Bass', {
        image: BassPeacock,
        latinName: 'Cichla',
        size: 'The different species of Peacock Bass can grow to some serious sizes, with catches of this one averaging between 6 and 15lbs.',
        location: 'Fish from this species are the largest fish in the Peacock Bass family. They inhabit warm waters of the Amazon and Orinoco River basins. There is also a sustainable stock in SE Florida, where they have been introduced in the 80\'s.',
        eat: 'They are very good table fare, however mostly a catch and release species in Florida for conservation purposes.'
    }],
    ['Rainbow Bass', {
        image: BassRainbow,
        latinName: 'Parachromis Dovii',
        size: 'Most Rainbow Bass caught are between 5-10 lbs, but the IGFA world record guapote was actually caught in Costa Rica in 1991 (12 lbs 9 oz), only to be re-broke in 1999 by an angler in Southern Nicaragua (15 lb 0 oz).',
        location: 'Rainbow Bass is usually found in jungle lakes and rivers. Lake Arenal, the biggest lake in Costa Rica, is one of the most popular hotspots, although you can also find it in rivers across the region.',
        eat: 'Very. This is some of the best-tasting freshwater fish you can get in Costa Rica and the surrounding area. Although it\'s popular when made into fillets or baked, many anglers prefer to release their catch, due to its relative scarcity.'
    }],
    ['Smallmouth Bass', {
        image: BassSmallmouth,
        latinName: 'Micropterus dolomieu',
        size: 'Most Smallmouth Bass weigh in between one to two pounds, with prize fish coming in at four pounds. It is very rare to find a Smallmouth Bass weighing over ten pounds.',
        location: 'Smallmouth Bass are indigenous to the Great Lakes and south Quebec, down to the mid-south. A popular game fish that thrives on lower temperatures than its larger counterparts, they have been widely introduced to most states in the USA, with notable exceptions being Florida, Alaska, and Louisiana.',
        eat: 'These are some of the best panfish you can get. With a soft, white flesh, they are regularly caught to eat, although catch and release is getting increasingly common.'
    }],
    ['Spotted Bass', {
        image: BassSpotted,
        latinName: 'Micropterus punctulatus',
        size: 'Spotted Bass can reach an overall length of almost 64 cm (25 in), and can weigh up to 5.2 kg (11 lb).',
        location: 'Spotted Bass are distributed throughout the Ohio River basin as well as the central and lower Mississippi River basin. The species may be found in Gulf Coast states from Texas east to Florida. Spotted Bass are native to portions of East Texas, particularly in the Sabine, Neches and Cypress Rivers.',
        eat: 'Some say the Spotted Bass is a good meal. It is considered an invasive species in most places so eat up!'
    }],
    ['Striped Bass', {
        image: BassStriped,
        latinName: 'Morone saxatilis',
        size: 'It can grow to spectacular sizes - the largest recorded fish was an incredible 126lbs heavy, but the official record stands at 81lbs, 14oz. Average sizes move between 10 and 30lbs.',
        location: 'The Striped Bass has a native freshwater range stretching from the St Lawrence to St John\'s Rivers on the Atlantic coast and from the Suwannee River to Lake Pontchartrain on the Gulf coast. Additionally, it can be found in rivers and coastal waters from Canada to Mississippi and has been introduced to waters throughout the US, including the Pacific coast.',
        eat: 'This fish makes for great table fare.'
    }],
    ['White Bass', {
        image: BassWhite,
        latinName: 'Morone chrysops',
        size: 'The average White Bass you\'ll run into is in the 10-12” range. They usually weigh between 0.5-2 lb, but larger specimens regularly go up to 4 lb. The world record for White Bass was weighed in at 6 lb 13 oz and measured 24.4”.',
        location: 'White Bass are prevalent across North America, in large lakes and reservoirs. The Great Lakes, the Ohio Valley, and the Mississippi Valley are notable locales where you can land them. They prefer large bodies of water typically deeper than 10\', with at least 300 acres of area. Clear lakes, reservoirs, and pools of small to large rivers are where you can usually find them.',
        eat: 'It\'s a very tasty fish but with a particular taste: many anglers will tell you they adore White Bass for dinner and just as many will tell you they prefer something else. They have both white and red flesh, which puts some anglers off of this tasty fish. In general, if you\'re experienced with cooking your own catch you\'ll most likely love this one. If you\'re new to cooking White Bass, try separating the red flesh (that has a strong taste) from the white flesh. Don\'t freeze it if possible and keep it in crushed ice (not a livewell) after catching it.'
    }],
    ['Black Drum', {
        image: BlackDrum,
        latinName: 'Pogonias cromis',
        size: 'These fish grow to impressive sizes, seeing as they\'re mostly found inshore. The average catch will be between 5 and 30lbs, but giants in excess of 90lbs are not uncommon. Their estimated life expectancy is about 60 years.',
        location: 'Black Drum can be found in western Atlantic waters, from Nova Scotia to the north of Mexico, and from south Brazil to Argentina. They are especially abundant off Texas and the largest fish can be found between Florida and the Delaware Bay.',
        eat: 'Black Drum up to 15lb have a moderate taste similar to Redfish. Larger fish usually have tougher meat, their scales are hard to remove and they can be infested with parasites, so it\'s recommended only to keep smaller ones for food.'
    }],
    ['Black Jewfish', {
        image: BlackJewfish,
        latinName: 'Protonibea diacanthus',
        size: 'Black Jewfish can reach up to 150 cm in length, but typically grow to about 80 cm. They are known to weigh up to 45 kg.',
        location: 'This species used to be fairly widespread in the waters between Asia and Australia, but today it\'s mainly limited to the north coast of Australia. Anglers often catch Black Jewfish in cloudy coastal waters, in water up to 60 m deep. These fish make their way everywhere from tidal rivers and estuaries to offshore reefs. Black Jewfish living offshore tend to be larger, from 75-150 cm in length. In the Northern Territory, December and January are considered peak months for these fish.',
        eat: 'This fish is excellent for eating, with pale pink flesh and a distinct flavor. Catch yourself a keeper and you\'ll be able to experience the quality of this fish both in sport and in food value!'
    }],
    ['Black Rockfish', {
        image: BlackRockfish,
        latinName: 'Sebastes melanops',
        size: 'The largest varieties usually weigh in at around 11 pounds, and can grow up to 26 inches in length. The California record currently stands at just over 9 pounds, but Black Rockfish are more commonly hooked in the 5 lb range.',
        location: 'Black Rockfish can be found all throughout the Eastern Pacific\'s waters, from the ocean surface to around 1,200 feet beneath. They tend to prefer shallower rocky waters and are a main staple of reefs, as well as deep banks and dropoffs. They\'re popular and plentiful all along North America\'s West Coast, with California standing out as a real Black Rockfish magnet.',
        eat: 'Very! This species in general are a popular food fish all along the West Coast. Make sure you follow local regulations regarding bag and size limits, and your Black Rockfish battle will see you rewarded with some tasty dinner options.'
    }],
    ['Bluefish', {
        image: Bluefish,
        latinName: 'Pomatomus saltatrix',
        size: 'The largest specimens that can only be found in offshore waters, can reach a whopping 50\'\' and over 30lbs. Nearshore Atlantic fish average between 8 and 23\'\' and from 3 up to 15lbs, while Gulf water fish are normally smaller than that. Large fish are common occurrence off the coast of Africa.',
        location: 'Bluefish can be found worldwide in tropical and subtropical waters, but with sporadic presence. The western Atlantic sees them along the east coast of North America, from Nova Scotia to the Upper Keys, with a popular hotspot being New Jersey. They are present on the Atlantic coast of Florida waters from October through April, with the largest fish starting their migration northwards and eastwards to open waters around March for the summer and fall spawning. Off the Gulf coast, smaller fish can be found up to the Panhandle year-round, but they tend to migrate south come fall.',
        eat: 'Smaller fish are good table fare. However, their flesh mushes up quickly and does not freeze well at all, so they should only be consumed fresh. Do not consume the dark lateral line in the center of the fish.'
    }],
    ['Bluenose Warehou', {
        image: BluenoseWarehou,
        latinName: 'Hyperoglyphe antarctica',
        size: 'Bluenose Warehou can grow to 140 cm in length, but typically measure 60 cm and 3kg. This fish is known to grow as long as 1.4 m and can weigh up to 50 kg.',
        location: 'Bluenose Warehou inhabit the southern hemisphere, in the southwest and southeast Atlantic Ocean as well as the west Indian Ocean. Anglers catch this fish off the coasts of South Africa, New Zealand, and Australia. Bluenose Warehou live in waters anywhere form 40-1,500 meters deep and are usually caught in depths of 100-600 m. This deepwater fish likes hanging around the edges of canyons and steep drop offs. They venture closer to the ocean\'s surface at night to feed, which makes this species a popular target on overnight fishing charters in New Zealand.',
        eat: 'Bluenose Warehou make for very good table fare. This species is targeted by commercial fishermen and often sold as “Groper.” Catch one yourself, and the satisfaction of your own accomplishment will make it taste even better!'
    }],
    ['Bohar Snapper', {
        image: BoharSnapper,
        latinName: 'Lutjanus bohar',
        size: 'The typical Bohar Snapper will be between 2 and 5kg, but the species can grow over 15kg.',
        location: 'They are found throughout the Indo-Pacific Ocean, stretching to south Japan, east Africa, north Australia and the Marquesas Islands. They form spawning aggregations at the surface, on a monthly basis even in certain waters (for example, off the Solomon Islands and Papua New Guinea). At other times, they can be found up to 180m deep, but mostly not deeper than 70m.',
        eat: 'Fair food value, but is avoided due to frequently being linked with ciguatera (fish poisoning) in some places.'
    }],
    ['Bonefish', {
        image: Bonefish,
        latinName: 'Albula vulpes',
        size: 'This species doesn\'t grow too large, but that doesn\'t cloud the fact that it\'s one of the toughest saltwater fighters, pound for pound. In Florida and the Bahamas they will average at 4-6lbs, while down south in the West Indies they\'ll be about twice that size. In South African and Hawaiian waters they are said to grow up to 20lbs, even though the official world record stands at 16lbs. They live relatively long lives of about 19 years and mature quickly, at 3-4.',
        location: 'Bonefish can be found in tropical and subtropical waters worldwide. The highest concentrations are in the western Atlantic, from Nova Scotia to Brazil, including Bermuda, Turks and Caicos Islands and the Caribbean Sea, and excluding the Gulf of Mexico. Additionally, they are commonly found off South Africa, Hawaii and in the eastern Pacific from the SF Bay Area down to Peru, mainly in the San Diego Bay.',
        eat: 'As their name says, way too many tiny and large bones on the inside. Due to this and excellent fighting qualities for which the fish is revered, the practice of catch and release is not questioned.'
    }],
    ['Bonito', {
        image: Bonito,
        latinName: 'Sarda sarda / Sarda chiliensis',
        size: 'The Pacific Bonito outweigh their Atlantic relatives, but both species are usually caught up to a maximum of 30\'\' and 10-12lbs.',
        location: 'Atlantic Bonito can be caught throughout the eastern and western Atlantic ocean, as north as Nova Scotia/Scandinavia and as south as Argentina/South Africa, with the most important fisheries being the Mediterranean and Black Seas. There are few of these fish in the Gulf of Mexico and the Caribbean Sea (however, the eastern side of the archipelago sees good action). April through September will be the best time.',
        eat: 'A very oily fish, often canned and marketed as tuna (not in the US), however, is of lesser quality. Popular as food in the Mediterranean region.'
    }],
    ['Bowfin', {
        image: Bowfin,
        latinName: 'Amia calva',
        size: 'Adult Bowfin females may reach 30 inches (75 cm), obtain a weight of 8½ pounds (3.8 kg) and, live approximately 12 years. Adult males may grow to attain a length of 18-24 in (457 - 610 mm)',
        location: 'The species is native to the southeast of the USA, inhabiting the area from St Lawrence River to the north, south to the Gulf Coast, and between eastern Texas to the whole of Florida.',
        eat: 'Bowfin are rarely sought-after for food as their meat is fairly bland with a poor texture. They can be good if they are cleaned properly and smoked or fried into fishcakes. Their relatively poor flavor is redeemed by their quality as a sport fish.'
    }],
    ['Black Bream', {
        image: BreamBlack,
        latinName: 'Acanthopagrus butcheri',
        size: 'The average Black Bream you\'re likely to catch weighs around half that, but it still puts up a real fight for its size! Black Bream are slow-growing, taking around 3-5 years to reach maturity.',
        location: 'You can find Southern Black Bream in estuaries and inshore waters all along Australia\'s south coast. Juvenile fish live in rivers, moving out to bays and estuary mouths when they are fully-grown. Eastern Black Bream are found on Australia\'s east coast.',
        eat: 'Absolutely! Their meat is very moist and flavorful and they are caught commercially as well as recreationally.'
    }],
    ['Common Bream', {
        image: BreamCommon,
        latinName: 'Abramis Brama',
        size: 'Common Bream can grow to over 10 lbs, and fish in the 8 lb range are regularly caught in top Common Bream fishing spots.',
        location: 'Common Bream live all over Europe and Central Asia, from downtown Dublin to the wilds of Siberia. They prefer living in stillwaters — look for them in deep, slow-flowing rivers, lakes, and canals with rich, muddy bottoms.',
        eat: 'The word that comes up time and time again when describing Common Bream is “insipid.” This is a fancy way of saying “not very tasty.” Their flesh is bony and hard without much flavor, although they\'re dried and salted as a beer snack in Russia. Anglers catch Bream for the sheer fun of pulling in fish after fish, or in search of a record breaker.'
    }],
    ['Fingermark Bream', {
        image: BreamFingermark,
        latinName: 'Lutjanus Johnii',
        size: 'Fingermark Bream reach 90-100 cm in length and weigh around 8 kg (17 lbs). Even smaller specimens put up a good fight when hooked!',
        location: 'This species is distributed along the coast of northern Australia, south of Japan, and from East Africa to Fiji. Fingermark Breams prefer shallow inshore reefs, estuary systems, and waters slightly warmer than average. Fish which live farther from shore tend to grow larger',
        eat: 'Fingermark Bream make for excellent table fare. One bite of this fish and you\'ll see why they\'re popular among anglers! '
    }],
])