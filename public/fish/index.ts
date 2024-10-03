import { StaticImageData } from 'next/image';
import AlligatorGar from './alligator-gar.png' 
import Amberjack from './amberjack.png';
import Arapaima from './arapaima.png';
import ArcticChar from './arctic-char.png';
import Asp from './asp.png';

export type fishType = {
    image: string | StaticImageData,
    latinName: string,
    size: string,
    location: string,
    eat: string
}

const fishMap = new Map([
    ['Alligator Gar', 
        {
            image: AlligatorGar,
            latinName: 'Atractosteus spatula',
            size: 'As one of the largest fish in North American freshwaters, Alligator Gar are commonly caught between 4 and 6ft and 100 and 160lbs. The largest specimen was bowfished and weighed in at 365lbs.',
            location: 'Alligator Gar are native to slow rivers, reservoirs, landlocked lakes, oxbows and brackish estuarine waters of the southeastern USA. They can be found in the lower Mississippi River basin between, and including, Florida, Texas, Arkansas and Oklahoma. The species was also introduced to Central America and Thailand and fishing for them is marketed as a world-wide sensation in the latter.',
            eat: 'Edible flesh, tasty according to some. Hard to fillet due to extremely tough skin and scales. The roe (eggs) should be avoided at all costs, as it\'s highly toxic to all organisms except other fish.'
        }
    ],
    ['Amberjack', 
        {
            image: Amberjack,
            latinName: 'Seriola dumerili',
            size: 'Amberjacks have an elongated body that can grow to about 6ft and 160lbs. The average catch will be between 20 and 40lbs though, but, depending on where and when you target them, larger fish can be a commodity. They live around 17 years and mature at 4-5.',
            location: 'This species can be found in tropical and warm temperate waters worldwide, including: the Indo-Pacific - around Madagascar, in the Persian Gulf, around south Japan (where the record fish was recently caught), China and the Philippines; around Hawaii; in the western Atlantic from Nova Scotia to Brazil, including the Gulf of Mexico, Bermuda and the Caribbean Sea; in the eastern Atlantic from the British isles to Morocco and in parts of the Mediterranean Sea, but also off southern and western Africa. They\'re replaced by Yellowtail Amberjacks off Australia and California.',
            eat: 'Lean, firm and white meat with mild taste. However, Amberjacks are highly ranked among tropical fish species known to cause ciguatera (fish poisoning). Bigger fish should be released as a precaution.'
        }
    ],
    ['Arapaima', 
        {
            image: Arapaima,
            latinName: 'Arapaima gigas',
            size: 'The Arapaima is possibly the largest freshwater fish in the world, reaching up to 440 pounds (200 kilograms) and 10 feet (3 meters) in length. However, sizes of 200 pounds (90.7 kilograms) and 7 to 8 feet (2.2 to 2.4 meters) in length are more common.',
            location: 'Arapaima are native to South America, in the floodplains of the Amazon River basin, and in parts of Bolivia, Brazil, Columbia, Guyana and Peru.',
            eat: 'Arapaima are good to eat and mild tasting. Anglers are asked to catch, keep, and eat Arapaima as a management tool to control this nonnative fish. '
        }
    ],
    ['Arctic Char', 
        {
            image: ArcticChar,
            latinName: 'Salvelinus alpinus',
            size: 'Fortunately, the differences in size aren\'t so drastic, with most fish staying in the sub-20 lb range. There are always exceptions to the rule, as the IGFA record for the species is an impressive 32 lb 9 oz.',
            location: 'Cold rivers and lakes are the main habitats of the Arctic Char. It\'s spread out across the globe, from Canada and Alaska to Lake Baikal, Iceland, and even the Alps. There\'s also a few in Britain and Ireland, found in deep glacial lakes.',
            eat: 'Many describe the taste of Arctic Char to be somewhere between Trout and Salmon, a bit closer to the former. While they do come in different colors, there\'s no difference in taste whatsoever.'
        }
    ],
    ['Asp', 
        {
            image: Asp,
            latinName: 'Aspius aspius',
            size: 'Normally, Asps are between 10 and 80 centimeters (3.9 and 31.5 inches) in length, with some reaching 120 centimeters (47 inches), and weighing up to 12 kilograms (26 pounds).',
            location: 'This strong fighting fish is native to the northern parts of the European continent and can be found all the way from Norway to the southern reaches of the Danube. They\'re most common in the lower parts of rivers, with anglers also reporting catches in lakes and their tributaries. Look out for them around bridge pilings and pools as they patrol the waters looking for prey. ',
            eat: 'While Asp taste good, they\'re rarely considered a food fish. Their boney flesh makes them much more suitable for catch-and-release than taking home to the dinner table. '
        }
    ],
])

export { fishMap }