const decks = [
    {
        name: "Animated Movies",
        instructions: "The emoji/s on each card are a clue for an animated movie. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the movie name in easy mode, and a character/place in the movie in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Frozen",
                content: {
                    primary: "❄️", 
                    secondary: "🏔️🚪"
                },
                hint: "Has 2 female protagonists",
                matchValue: "Arendelle",
                seenHint: false
            },
            {
                name: "Snow White and the Seven Dwarfs",
                content: {
                    primary: "🍎", secondary: "👸😗"
                },
                hint: "Earliest animated feature film",
                matchValue: "Dopey",
                seenHint: false
            },
            {
                name: "Zootopia",
                content: {
                    primary: "🐰", 
                    secondary: "👮‍♀️🦊"
                },
                hint: "Shakira featured in a song",
                matchValue: "Hopps",
                seenHint: false
            },
            {
                name: "The Lion King",
                content: {
                    primary: "🦁", 
                    secondary: "🐗🐦"
                },
                hint: "Has a live action remake",
                matchValue: "Pride Rock",
                seenHint: false
            },
            {
                name: "Moana",
                content: {
                    primary: "🌊", 
                    secondary: "🏝⛵"
                },
                hint: "Based on Polynesian culture",
                matchValue: "Motunui",
                seenHint: false
            },
            {
                name: "Finding Nemo",
                content: {
                    primary: "🐠", 
                    secondary: "🐟🌊"
                },
                hint: "Protagonist has a slight deformity",
                matchValue: "Great Barrier Reef",
                seenHint: false
            },
            {
                name: "Toy Story",
                content: {
                    primary: "🤠", 
                    secondary: "🤖🧒"
                },
                hint: "Beginning of a franchise",
                matchValue: "Andy",
                seenHint: false
            },
            {
                name: "Aladdin",
                content: {
                    primary: "🧞", 
                    secondary: "👳‍♀️🐒"
                },
                hint: "Based on a middle eastern folk tale",
                matchValue: "Jafar",
                seenHint: false
            },
            {
                name: "The Little Mermaid",
                content: {
                    primary: "🧜‍♀️", 
                    secondary: "🦵🗣️"
                },
                hint: "Based on a Hans Christian Anderson tale",
                matchValue: "Triton",
                seenHint: false
            },
            {
                name: "Inside Out",
                content: {
                    primary: "😄", 
                    secondary: "😔😡"
                },
                hint: "The main characters are emotions",
                matchValue: "Riley",
                seenHint: false
            },
            {
                name: "101 Dalmations",
                content: {
                    primary: "🐕", 
                    secondary: "⬛⬜"
                },
                hint: "Has a live action remake",
                matchValue: "Cruella",
                seenHint: false
            },
            {
                name: "Up",
                content: {
                    primary: "🎈", 
                    secondary: "🏡🐕"
                },
                hint: "Protagonist is an elderly widower",
                matchValue: "Paradise Falls",
                seenHint: false
            },
            {
                name: "Pinocchio",
                content: {
                    primary: "🤥", 
                    secondary: "👃🧚‍♀️"
                },
                hint: "Protagonist transitions from puppet to boy",
                matchValue: "Woodworker",
                seenHint: false
            },
            {
                name: "The Incredibles",
                content: {
                    primary: "🦸‍♂️", 
                    secondary: "🦸‍♀️🎭"
                },
                hint: "Family of superheroes living as muggles 😉",
                matchValue: "Elastigirl",
                seenHint: false
            },
            {
                name: "Dumbo",
                content: {
                    primary: "🐘", 
                    secondary: "🎪👂"
                },
                hint: "Has a live action reimagining",
                matchValue: "Mrs. Jumbo",
                seenHint: false
            },
            {
                name: "Sleeping Beauty",
                content: {
                    primary: "😴", 
                    secondary: "👸🧚"
                },
                hint: "Has a sequel focussing on the villain",
                matchValue: "Maleficient",
                seenHint: false
            },
            {
                name: "Beauty and the Beast",
                content: {
                    primary: "🌹", 
                    secondary: "👸👹"
                },
                hint: "Female protagonist loved books",
                matchValue: "Mrs. Potts",
                seenHint: false
            },
            {
                name: "Coco",
                content: {
                    primary: "💀", 
                    secondary: "🎸🐕"
                },
                hint: "Inspired by a Mexican holiday",
                matchValue: "Land of the Dead",
                seenHint: false
            },
            {
                name: "Tangled",
                content: {
                    primary: "💇‍♀️", 
                    secondary: "👸🌺"
                },
                hint: "Based on Rapunzel",
                matchValue: "Eugene Fitzherbert",
                seenHint: false
            },
            {
                name: "Onward",
                content: {
                    primary: "🧝‍♂️", 
                    secondary: "🧙👨‍👦‍👦"
                },
                hint: "All elf characters have blue skin",
                matchValue: "Wilden Lightfoot",
                seenHint: false
            }
        ]
    },
    {
        name: "Coding Languages",
        instructions: "The emoji/s on each card are a clue for a programming language. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the coding language name in easy mode, and a couple lines of code in that language in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Java",
                content: {
                    primary: "☕"
                },
                hint: "Was earlier named Oak",
                matchValue: `String message = \"Hello World!\";
System.out.println(message)`,
                seenHint: false
            },
            {
                name: "JavaScript",
                content: {
                    secondary: "☕📜"
                },
                hint: "Based on ECMAScript",
                matchValue: `let message = \"Hello World!\"
console.log(message)`,
                seenHint: false
            },
            {
                name: "TypeScript",
                content: {
                    secondary: "⌨📜"
                },
                hint: "Compiles to JavaSccurl",
                matchValue: `let message : string = \"Hello World!\"
console.log(message)`,
                seenHint: false
            },
            {
                name: "Python",
                content: {
                    primary: "🐍"
                },
                hint: "Is whitespace sensitive",
                matchValue: `message = \"Hello World!\"
print(message)`,
                seenHint: false
            },
            {
                name: "C",
                content: {
                    primary: "🌊"
                },
                hint: "One of the oldest languages, but still popular",
                matchValue: `char message[11] = \"Hello World!\";
printf(\"%s\", message);`,
                seenHint: false
            },
            {
                name: "Ruby",
                content: {
                    primary: "💎"
                },
                hint: "Its server side framework is called \"Rails\"",
                matchValue: `message = \"Hello World!\"
puts message`,
                seenHint: false
            },
            {
                name: "C#",
                content: {
                    secondary: "👀👓"
                },
                hint: "Most popular language for game development",
                matchValue: `string message = \"Hello World!\";
Console.WriteLine(message);`,
                seenHint: false
            },
            {
                name: "Dart",
                content: {
                    primary: "🎯"
                },
                hint: "Used to write Flutter apps",
                matchValue: `String message = \"Hello World!\";
print(message);`,
                seenHint: false
            },
            {
                name: "Swift",
                content: {
                    primary: "🦅"
                },
                hint: "Used to write apps for iOS and MacOS",
                matchValue: `var message : string = \"Hello World!\"
print(message)`,
                seenHint: false
            },
            {
                name: "Perl",
                content: {
                    primary: "🧅"
                },
                hint: "Originally developed for text manipulation",
                matchValue: `my $message = \'Hello World!\';
print($message, \'\\n\');`,
                seenHint: false
            },
            {
                name: "PHP",
                content: {
                    primary: "🐘"
                },
                hint: "Widely used as a server side scripting language",
                matchValue: `$message = \"Hello World!\";
echo $message;`,
                seenHint: false
            }
        ]
    },
    {
        name: "Freedom Fighters",
        instructions: "The emoji/s on each card are a clue for a Freedom Fighter. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the nickname in easy mode, and a famous quote in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Mahatma Gandhi",
                content: {
                    secondary:" 👨🏾‍🦲👓"
                },
                hint: "Bapu",
                matchValue: `Be the change you wish to see in the world.`,
                seenHint: false
            },
            {
                name: "Bhagat Singh",
                content: {
                    secondary: "🤠🥆"
                },
                hint: "Sahid-e-Azam",
                matchValue: `Inquilaab zindabaad!`,
                seenHint: false
            },
            {
                name: "Sardar Vallabhai Patel",
                content: {
                    secondary: "👴🏾🗿"
                },
                hint: "Iron Man of India",
                matchValue: `My only desire is that India should be a god producer and no one should be hungry, shedding tears for food in the country.`,
                seenHint: false
            },
            {
                name: "Rabindranath Tagore",
                content: {
                    secondary: "🎅🏾✒️"
                },
                hint: "Gurudev",
                matchValue: `“Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.”`,
                seenHint: false
            },
            {
                name: "Rani of Jhansi",
                content: {
                    secondary: "👸⚔️"
                },
                hint: "Manu",
                matchValue: `If defeated and killed on the field of battle, we shall surely earn eternal glory and salvation`,
                seenHint: false
            },
            {
                name: "BR Ambedkar",
                content: {
                    primary: "🤵",
                    secondary: "🧑‍⚖️‍📝"
                },
                hint: "Baba Saheb",
                matchValue: `They cannot make history who forget history`,
                seenHint: false
            },
            {
                name: "Jawahar Lal Nehru",
                content: {
                    secondary: "🌾🔴🌹"
                },
                hint: "Chachaji",
                matchValue: `We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.`,
                seenHint: false
            },
            {
                name: "Abul Kalam Azad",
                content: {
                    secondary: "🎅☪️️"
                },
                hint: "Maulana",
                matchValue: `As a child of God, I am greater than anything that can happen to me.`,
                seenHint: false
            },
            {
                name: "Subhash Chandra Bose",
                content: {
                    primary: "🌕"
                },
                hint: "Netaji",
                matchValue: `It is our duty to pay for our liberty with our own blood.`,
                seenHint: false
            },
            {
                name: "Sarojini Naidu",
                content: {
                    primary: "👵"
                },
                hint: "Nightingale of India",
                matchValue: `We want deeper sincerity of motive, a greater courage in speech and earnestness in action.`,
                seenHint: false
            },
            {
                name: "Tipu Sultan",
                content: {
                    primary: "👑"
                },
                hint: "Tiger of Mysore",
                matchValue: `It is far better to live like a lion for a day then to live like a jackal for hundred years.`,
                seenHint: false
            }
        ]
    },
    {
        name: "States and UT",
        instructions: "The emoji/s on each card are clues for a state of UT. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the States and UTs name in easy mode, and a fact about the State / UTin the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Andaman and Nicobar",
                content: {
                    secondary: "🥚👨"
                },
                hint: "Dugong, the gentle sea cow, is the state animal of this UT",
                matchValue: `Pandunus or Nicobar Breadfruit is a rare fruit found and widely eaten`,
                seenHint: false
            },
            {
                name: "Odisha",
                content: {
                    primary: "⭕",
                    secondary: "🥘🅰"
                },
                hint: "Chilika Lake – A haven for migratory birds",
                matchValue: `Konark Temple is located here`,
                seenHint: false
            },
            {
                name: "Nagaland",
                content: {
                    secondary: "🐍🏝"
                },
                hint: "“Unity” is the motto of this UT",
                matchValue: `Mithun is the state animal`,
                seenHint: false
            },
            {
                name: "Karnataka",
                content: {
                    secondary: "🚗🎭"
                },
                hint: "First Private Radio Station is in this state",
                matchValue: `Largest Coffee Exporter`,
                seenHint: false
            },
            {
                name: "Punjab",
                content: {
                    secondary: "🖐🅱"
                },
                hint: "Named After Five Rivers",
                matchValue: `Sikhism Was Founded Here`,
                seenHint: false
            },
            {
                name: "New Delhi",
                content: {
                    primary: "🆕♥"
                },
                hint: "Capital of India",
                matchValue: `Tallest Minaret in the World is here`,
                seenHint: false
            },
            {
                name: "Sikkim",
                content: {
                    secondary: "😷👘"
                },
                hint: "Least populous state of India",
                matchValue: `India’s first fully organic state`,
                seenHint: false
            },
            {
                name: "Bihar",
                content: {
                    secondary: "🅱📿"
                },
                hint: "The Birthplace Of Jainism And Buddhism",
                matchValue: `Houses The Oldest University`,
                seenHint: false
            },
            {
                name: "Assam",
                content: {
                    secondary: "𓃘🥭"
                },
                hint: "World’s Largest River Island “Majuli”",
                matchValue: `World’s biggest weaving village “Sualkuchi”`,
                seenHint: false
            },
            {
                name: "Chhattisgarh",
                content: {
                    primary: "🏡",
                    secondary: "3️⃣6️⃣"
                },
                hint: "The Niagara Falls of India is here",
                matchValue: `Bastar is located here`,
                seenHint: false
            }
        ]
    }
]

export function getShuffledDeck (category) {
    const cardDeck = decks.find(deck => deck.name === category).cards
	for(let i = cardDeck.length - 1; i > 0; i--)
	{
		let j = Math.floor(Math.random() * (i + 1));
		[cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
    return cardDeck 
}

export function getInstructions (category) {
    return decks.find(deck => deck.name === category).instructions
}