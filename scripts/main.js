////////////////////////////////////////////////////////////////////////////////////////////////
var sidebar = {
    elements: [
        {
            imagesrc: '/res/icons/sidebar/numbers.png',
            listtext: 'ਨੰਬਰ',
            id: 'numbers',
        },
        {
            imagesrc: '/res/icons/sidebar/colors.png',
            listtext: 'ਰੰਗ',
            id: 'colors',
        },
        {            
            imagesrc: '/res/icons/sidebar/fruits.png',
            listtext: 'ਫਲ਼',
            id: 'fruits',
        },
        // {            
        //     imagesrc: '/res/icons/sidebar/directions.png',
        //     listtext: 'ਦਿਸ਼ਾਵਾਂ',
        //     id: 'directions',
        // },
        {            
            imagesrc: '/res/icons/sidebar/calendar.png',
            listtext: 'ਹਫ਼ਤੇ ਦੇ ਦਿਨ',
            id: 'daysofweek',
        },
        {
            imagesrc: '/res/icons/sidebar/animals.png',
            listtext: 'ਜਾਨਵਰ',
            id: 'animals',
        },
        {            
            imagesrc: '/res/icons/sidebar/alphabets.png',
            listtext: 'ਵਰਣਮਾਲਾ',
            id: 'alphabets',
        },
        {
            imagesrc: '/res/icons/sidebar/alphabets.png',
            listtext: 'ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ',
            id: 'punjabiAlphabets',
        },
        // {
        //     imagesrc: '/res/icons/sidebar/countries.png',
        //     listtext: 'ਦੇਸ਼',
        //     id: 'country',
        // },
        // {
        //     imagesrc: '/res/icons/sidebar/team.png',
        //     listtext: 'ਸਮੂਹਿਕ ਨਾਵਾਂ',
        //     id: 'collectivenouns',
        // },
        {
            imagesrc: '/res/icons/sidebar/transparent.png',
            listtext: ' ',
            id: ' ',
        },
    ]    
}

var displayElements = {
    numbers: [
        {
            imagesrc: '/res/icons/numbers/000.png',
            item: 'ਜ਼ੀਰੋ',
            name: '0',
        },
        {
            imagesrc: '/res/icons/numbers/001.png',
            item: 'ਇੱਕ',
            name: '1',
        },
        {
            imagesrc: '/res/icons/numbers/002.png',
            item: 'ਦੋ',
            name: '2',
        },
        {
            imagesrc: '/res/icons/numbers/003.png',
            item: 'ਤਿੰਨ',
            name: '3',
        },
        {
            imagesrc: '/res/icons/numbers/004.png',
            item: 'ਚਾਰ',
            name: '4',
        },
        {
            imagesrc: '/res/icons/numbers/005.png',
            item: 'ਪੰਜ',
            name: '5',
        },
        {
            imagesrc: '/res/icons/numbers/006.png',
            item: 'ਛੇ',
            name: '6',
        },
        {
            imagesrc: '/res/icons/numbers/007.png',
            item: 'ਸੱਤ',
            name: '7',
        },
        {
            imagesrc: '/res/icons/numbers/008.png',
            item: 'ਅੱਠ',
            name: '8',
        },
        {
            imagesrc: '/res/icons/numbers/009.png',
            item: 'ਨੌਂ',
            name: '9',
        },
    ],
    colors: [
        {
            imagesrc: '/res/icons/colors/black.png',
            item: 'ਕਾਲਾ',
            name: 'black',
        },
        {
            imagesrc: '/res/icons/colors/blue.png',
            item: 'ਨੀਲਾ',
            name: 'blue',
        },
        // {
        //     imagesrc: '/res/icons/colors/brown.png',
        //     item: 'ਭੂਰਾ',
        //     name: 'brown',
        // },
        // {
        //     imagesrc: '/res/icons/colors/gold.png',
        //     item: 'ਸੋਨਾ',
        //     name: 'gold',
        // },
        {
            imagesrc: '/res/icons/colors/green.png',
            item: 'ਗ੍ਰੀਨ',
            name: 'green',
        },
        // {
        //     imagesrc: '/res/icons/colors/grey.png',
        //     item: 'ਗ੍ਰੇ',
        //     name: 'grey',
        // },
        // {
        //     imagesrc: '/res/icons/colors/indigo.png',
        //     item: 'ਨਦੀ',
        //     name: 'indigo',
        // },
        {
            imagesrc: '/res/icons/colors/orange.png',
            item: 'ਸੰਤਰਾ',
            name: 'orange',
        },
        // {
        //     imagesrc: '/res/icons/colors/pink.png',
        //     item: 'ਗੁਲਾਬੀ',
        //     name: 'pink',
        // },
        {
            imagesrc: '/res/icons/colors/purple.png',
            item: 'ਜਾਮਨੀ',
            name: 'purple',
        },
        {
            imagesrc: '/res/icons/colors/red.png',
            item: 'ਲਾਲ',
            name: 'red',
        },
        {
            imagesrc: '/res/icons/colors/white.png',
            item: 'ਸਫੈਦ',
            name: 'white',
        },
        {
            imagesrc: '/res/icons/colors/yellow.png',
            item: 'ਪੀਲਾ',
            name: 'yellow',
        },
    ],
    country: [
        {
            imagesrc: '/res/icons/country/255-brazil.png',
            item: 'ਬਰਾਜ਼ੀਲ',
            name: 'brazil',
        },
        {
            imagesrc: '/res/icons/country/252-mexico.png',
            item: 'ਮੈਕਸੀਕੋ',
            name: 'mexico',
        },
        {
            imagesrc: '/res/icons/country/248-russia.png',
            item: 'ਰੂਸ',
            name: 'russia',
        },
        {
            imagesrc: '/res/icons/country/246-india.png',
            item: 'ਭਾਰਤ',
            name: 'india',
        },
        {
            imagesrc: '/res/icons/country/243-canada.png',
            item: 'ਕਨੇਡਾ',
            name: 'canada',
        },
        {
            imagesrc: '/res/icons/country/238-thailand.png',
            item: 'ਥਾਈਲੈਂਡ',
            name: 'thailand',
        },
        {
            imagesrc: '/res/icons/country/234-australia.png',
            item: 'ਆਸਟ੍ਰੇਲੀਆ',
            name: 'australia',
        },
        {
            imagesrc: '/res/icons/country/230-singapore.png',
            item: 'ਸਿੰਗਾਪੁਰ',
            name: 'singapore',
        },
        {
            imagesrc: '/res/icons/country/224-portugal.png',
            item: 'ਪੋਰਟੂਗਲ',
            name: 'portugal',
        },
        {
            imagesrc: '/res/icons/country/216-england.png',
            item: 'ਇੰਗਲੈਂਡ',
            name: 'england',
        },
        {
            imagesrc: '/res/icons/country/195-france.png',
            item: 'ਫ੍ਰੈਂਚ',
            name: 'france',
        },
        {
            imagesrc: '/res/icons/country/158-egypt.png',
            item: 'ਮਿਸਰ',
            name: 'egypt',
        },
        {
            imagesrc: '/res/icons/country/147-bangladesh.png',
            item: 'ਬੰਗਲਾਦੇਸ਼',
            name: 'bangladesh',
        },
        {
            imagesrc: '/res/icons/country/127-sri-lanka.png',
            item: 'ਸ਼ਿਰੀਲੰਕਾ',
            name: 'srilanka',
        },
        {
            imagesrc: '/res/icons/country/124-vatican-city.png',
            item: 'ਵੈਟੀਕਨ ਸ਼ਹਿਰ',
            name: 'vaticancity',
        },
        {
            imagesrc: '/res/icons/country/100-pakistan.png',
            item: 'ਪਾਕਿਸਤਾਨ',
            name: 'pakistan',
        },
        {
            imagesrc: '/res/icons/country/063-japan.png',
            item: 'ਜਪਾਨ',
            name: 'japan',
        },
        {
            imagesrc: '/res/icons/country/053-ghana.png',
            item: 'ਘਾਨਾ',
            name: 'ghana',
        },
        {
            imagesrc: '/res/icons/country/040-bhutan.png',
            item: 'ਭੂਟਾਨ',
            name: 'bhutan',
        },
        {
            imagesrc: '/res/icons/country/034-china.png',
            item: 'ਚੀਨ',
            name: 'china',
        },
        {
            imagesrc: '/res/icons/country/022-syria.png',
            item: 'ਸੀਰੀਆ',
            name: 'syria',
        },
        {
            imagesrc: '/res/icons/country/003-austria.png',
            item: 'ਆਸਟਰੀਆ',
            name: 'austria',
        },
        {
            imagesrc: '/res/icons/country/260-united-kingdom.png',
            item: 'ਯੁਨਾਇਟੇਡ ਕਿਂਗਡਮ',
            name: 'unitedKingdom',
        },
    ],
    fruits: [
        {
            imagesrc: '/res/icons/fruits/apple.png',
            item: 'ਸੇਬ',
            name: 'apple',
        },
        {
            imagesrc: '/res/icons/fruits/coconut.png',
            item: 'ਨਾਰੀਅਲ',
            name: 'coconut',
        },
        {
            imagesrc: '/res/icons/fruits/guava.png',
            item: 'ਪੇਰੂ',
            name: 'guava',
        },
        {
            imagesrc: '/res/icons/fruits/mango.png',
            item: 'ਆਮ',
            name: 'mango',
        },
        // {
        //     imagesrc: '/res/icons/fruits/banana.png',
        //     item: 'ਕੇਲਾ',
        //     name: 'banana',
        // },
        // {
        //     imagesrc: '/res/icons/fruits/cherry.png',
        //     item: 'ਚੈਰੀ',
        //     name: 'cherry',
        // },
        {
            imagesrc: '/res/icons/fruits/grape.png',
            item: 'ਅੰਗੂਰ',
            name: 'grapes',
        },
        // {
        //     imagesrc: '/res/icons/fruits/lemon.png',
        //     item: 'ਨਿੰਬੂ',
        //     name: 'lemon',
        // },
        {
            imagesrc: '/res/icons/fruits/orange.png',
            item: 'ਸੰਤਰਾ',
            name: 'orange',
        },
        // {
        //     imagesrc: '/res/icons/fruits/pear.png',
        //     item: 'ਨਾਸ਼ਪਤੀ',
        //     name: 'pear',
        // },
        // {
        //     imagesrc: '/res/icons/fruits/pineapple.png',
        //     item: 'ਅਨਾਨਾਸ',
        //     name: 'pineapple',
        // },
        // {
        //     imagesrc: '/res/icons/fruits/strawberry.png',
        //     item: 'ਸਟ੍ਰਾਬੈਰੀ',
        //     name: 'strawberry',
        // },
        // {
        //     imagesrc: '/res/icons/fruits/watermelon.png',
        //     item: 'ਤਰਬੂਜ',
        //     name: 'watermelon',
        // },
    ],
    directions: [
        {
            imagesrc: '/res/icons/directions/up.png',
            item: 'ਅਪ',
            name: 'up',
        },
        {
            imagesrc: '/res/icons/directions/right.png',
            item: 'ਸੱਜੇ',
            name: 'right',
        },
        {
            imagesrc: '/res/icons/directions/left.png',
            item: 'ਖੱਬੇ',
            name: 'left',
        },
        {
            imagesrc: '/res/icons/directions/down.png',
            item: 'ਥੱਲੇ',
            name: 'down',
        },
    ],
    daysofweek: [
        {
            imagesrc: '/res/icons/daysofweek/monday.png',
            item: 'ਸੋਮਵਾਰ',
            name: 'monday',
        },
        {
            imagesrc: '/res/icons/daysofweek/tuesday.png',
            item: 'ਮੰਗਲਵਾਰ',
            name: 'tuesday',
        },
        {
            imagesrc: '/res/icons/daysofweek/wednesday.png',
            item: 'ਬੁੱਧਵਾਰ',
            name: 'wednesday',
        },
        {
            imagesrc: '/res/icons/daysofweek/thursday.png',
            item: 'ਵੀਰਵਾਰ',
            name: 'thursday',
        },
        {
            imagesrc: '/res/icons/daysofweek/friday.png',
            item: 'ਸ਼ੁੱਕਰਵਾਰ',
            name: 'friday',
        },
        {
            imagesrc: '/res/icons/daysofweek/saturday.png',
            item: 'ਸ਼ਨੀਵਾਰ',
            name: 'saturday',
        },
        {
            imagesrc: '/res/icons/daysofweek/sunday.png',
            item: 'ਐਤਵਾਰ',
            name: 'sunday',
        },
    ],
    alphabets: [  
        {
            imagesrc: '/res/icons/alphabets/036-letter-a.png',
            item: '',
            name: 'a',
        },
        {
            imagesrc: '/res/icons/alphabets/035-letter-b.png',
            item: '',
            name: 'b',
        },
        {
            imagesrc: '/res/icons/alphabets/034-letter-c.png',
            item: '',
            name: 'c',
        },
        {
            imagesrc: '/res/icons/alphabets/033-letter-d.png',
            item: '',
            name: 'd',
        },
        {
            imagesrc: '/res/icons/alphabets/032-letter-e.png',
            item: '',
            name: 'e',
        },
        {
            imagesrc: '/res/icons/alphabets/031-letter-f.png',
            item: '',
            name: 'f',
        },
        {
            imagesrc: '/res/icons/alphabets/030-letter-g.png',
            item: '',
            name: 'g',
        },
        {
            imagesrc: '/res/icons/alphabets/029-letter-h.png',
            item: '',
            name: 'h',
        },
        {
            imagesrc: '/res/icons/alphabets/028-letter-i.png',
            item: '',
            name: 'i',
        },
        {
            imagesrc: '/res/icons/alphabets/027-letter-j.png',
            item: '',
            name: 'j',
        },
        {
            imagesrc: '/res/icons/alphabets/026-letter-k.png',
            item: '',
            name: 'k',
        },
        {
            imagesrc: '/res/icons/alphabets/025-letter-l.png',
            item: '',
            name: 'l',
        },
        {
            imagesrc: '/res/icons/alphabets/024-letter-m.png',
            item: '',
            name: 'm',
        },
        {
            imagesrc: '/res/icons/alphabets/023-letter-n.png',
            item: '',
            name: 'n',
        },
        {
            imagesrc: '/res/icons/alphabets/022-letter-o.png',
            item: '',
            name: 'o',
        },
        {
            imagesrc: '/res/icons/alphabets/021-letter-p.png',
            item: '',
            name: 'p',
        },
        {
            imagesrc: '/res/icons/alphabets/020-letter-q.png',
            item: '',
            name: 'q',
        },
        {
            imagesrc: '/res/icons/alphabets/019-letter-r.png',
            item: '',
            name: 'r',
        },
        {
            imagesrc: '/res/icons/alphabets/018-letter-s.png',
            item: '',
            name: 's',
        },
        {
            imagesrc: '/res/icons/alphabets/017-letter-t.png',
            item: '',
            name: 't',
        },
        {
            imagesrc: '/res/icons/alphabets/016-letter-u.png',
            item: '',
            name: 'u',
        },
        {
            imagesrc: '/res/icons/alphabets/015-letter-v.png',
            item: '',
            name: 'v',
        },
        {
            imagesrc: '/res/icons/alphabets/014-letter-w.png',
            item: '',
            name: 'w',
        },
        {
            imagesrc: '/res/icons/alphabets/013-letter-x.png',
            item: '',
            name: 'x',
        },
        {
            imagesrc: '/res/icons/alphabets/012-letter-y.png',
            item: '',
            name: 'y',
        },
        {
            imagesrc: '/res/icons/alphabets/011-letter-z.png',
            item: '',
            name: 'z',
        },
    ],
    animals: [
        // {
        //     imagesrc: '/res/icons/animals/bull.png',
        //     item: 'ਬਲਦ',
        //     name: 'bull',
        // },
        // {
        //     imagesrc: '/res/icons/animals/chick.png',
        //     item: 'ਚਿਕ',
        //     name: 'chick',
        // },
        {
            imagesrc: '/res/icons/animals/crab.png',
            item: 'ਕੇਕੜਾ',
            name: 'crab',
        },
        // {
        //     imagesrc: '/res/icons/animals/fox.png',
        //     item: 'ਲੂੰਬੜੀ',
        //     name: 'fox',
        // },
        // {
        //     imagesrc: '/res/icons/animals/hedgehog.png',
        //     item: 'ਹੈੱਜਸ',
        //     name: 'hedgehog',
        // },
        // {
        //     imagesrc: '/res/icons/animals/hippopotamus.png',
        //     item: 'ਨਛਲੀ ਪਾਲਣ',
        //     name: 'hippopotamus',
        // },
        // {
        //     imagesrc: '/res/icons/animals/koala.png',
        //     item: 'ਕੋਆਲਾ',
        //     name: 'koala',
        // },
        // {
        //     imagesrc: '/res/icons/animals/lemur.png',
        //     item: '',
        //     name: 'lemur',
        // },
        // {
        //     imagesrc: '/res/icons/animals/pig.png',
        //     item: 'ਸੂਰ',
        //     name: 'pig',
        // },
        {
            imagesrc: '/res/icons/animals/tiger.png',
            item: 'ਬਾਘ',
            name: 'tiger',
        },
        {
            imagesrc: '/res/icons/animals/whale.png',
            item: 'ਵ੍ਹੇਲ ਮੱਛੀ',
            name: 'whale',
        },
        {
            imagesrc: '/res/icons/animals/cow.png',
            item: 'ਗਊ',
            name: 'cow',
        },
    ],
    punjabiAlphabets: [
        {
            imagesrc: '/res/icons/punjabiAlphabets/Oorhaa.png',
            item: 'ਓੂੜਾ',
            name: 'Oorhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Airhaa.png',
            item: '	ਐੜਾ',
            name: 'Airhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Eerhee.png',
            item: 'ਈੜੀ',
            name: 'Eerhee',
        },  
        {
            imagesrc: '/res/icons/punjabiAlphabets/sassaa.png',
            item: 'ਸੱਸਾ',
            name: 'sassaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/haahaa.png',
            item: 'ਹਾਹਾ',
            name: 'haahaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Kakkaa.png',
            item: 'ਕੱਕਾ',
            name: 'Kakkaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/khakhkhaa.png',
            item: 'ਖੱਖਾ',
            name: 'khakhkhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/gaggaa.png',
            item: 'ਗੱਗਾ',
            name: 'gaggaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/ghagghaa.png',
            item: 'ਘੱਘਾ',
            name: 'ghagghaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Nganngaa.png',
            item: 'ਙੰਙਾ',
            name: 'Nganngaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/chachchaa.png',
            item: 'ਚੱਚਾ',
            name: 'chachchaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/chhachhchhaa.png',
            item: 'ਛੱਛਾ',
            name: 'chhachhchhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/jajjaa.png',
            item: 'ਜੱਜਾ',
            name: 'jajjaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/jhajjhaa.png',
            item: 'ਝੱਝਾ',
            name: 'jhajjhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Njannjaa.png',
            item: 'ਞੰਞਾ',
            name: 'Njannjaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/tainkaa.png',
            item: 'ਟੈਂਕਾ',
            name: 'tainkaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/thaththaa.png',
            item: 'ਠੱਠਾ',
            name: 'thaththaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/ddaddaa.png',
            item: 'ਡੱਡਾ',
            name: 'ddaddaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/dhaddaa.png',
            item: 'ਢੱਢਾ',
            name: 'dhaddaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/nhaanhaa.png',
            item: 'ਣਾਣਾ',
            name: 'nhaanhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/tattaa.png',
            item: 'ਤੱਤਾ',
            name: 'tattaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/thaththaa1.png',
            item: 'ਥੱਥਾ',
            name: 'thaththaa1',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/daddaa.png',
            item: 'ਦੱਦਾ',
            name: 'daddaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/dhaddaa1.png',
            item: 'ਧੱਧਾ',
            name: 'dhaddaa1',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/nannaa.png',
            item: 'ਨੱਨਾ',
            name: 'nannaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/pappaa.png',
            item: 'ਪੱਪਾ',
            name: 'pappaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/phaphphaa.png',
            item: 'ਫੱਫਾ	',
            name: 'phaphphaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/babbaa.png',
            item: 'ਬੱਬਾ',
            name: 'babbaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/bhabbaa.png',
            item: 'ਭੱਭਾ',
            name: 'bhabbaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/mammaa.png',
            item: 'ਮੱਮਾ',
            name: 'mammaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/yayyaa.png',
            item: 'ਯੱਯਾ',
            name: 'yayyaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/raraa.png',
            item: 'ਰਾਰਾ',
            name: 'raraa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/lallaa.png',
            item: 'ਲੱਲਾ',
            name: 'lallaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/vavvaa.png',
            item: 'ਵੱਵਾ',
            name: 'vavvaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/rharrhaa.png',
            item: 'ੜਾੜਾ',
            name: 'rharrhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/shashshaa.png',
            item: 'ਸ਼ੱਸ਼ਾ',
            name: 'shashshaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/khakhaa.png',
            item: 'ਖ਼ੱਖ਼ਾ',
            name: 'khakhaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/gaggaa1.png',
            item: 'ਗ਼ੱਗ਼ਾ',
            name: 'gaggaa1',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/Zazzaa.png',
            item: 'ਜ਼ੱਜ਼ਾ',
            name: 'Zazzaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/faffaa.png',
            item: 'ਫ਼ੱਫ਼ਾ',
            name: 'faffaa',
        },
        {
            imagesrc: '/res/icons/punjabiAlphabets/lallaa1.png',
            item: 'ਲ਼ੱਲ਼ਾ',
            name: 'lallaa1',
        },
    ],
    collectivenouns: [
        {

        },
    ],
    team: [
        {
            imagesrc: '/res/backgrounds/virender.jpeg',
            item: '<b>Dr Virender Kadyan</b><br>Assistant Professor Research<br>Chitkara University Punjab',
        },
        {
            imagesrc: '/res/backgrounds/amitoj.jpg',
            item: '<b>Dr Amitoj Singh</b><br>Assistant Professor<br>MRS PTU Bathinda',
        },
        {
            imagesrc: '/res/backgrounds/rp.jpg',
            item: '<b>R P Singh</b><br>Group Capt. (Retd.)<br>All India Pingalwara Charitable Society',
        },
        {
            imagesrc: '/res/backgrounds/ravi.png',
            item: '<b>Ravi Jain</b><br>Developer<br>Chitkara University Punjab',
        },
        {
            imagesrc: '/res/backgrounds/vaibhav.jpg',
            item: '<b>Vaibhav</b><br>Developer<br>Chitkara University Punjab',
        },
    ],
}
///////////////////////////////////////////////////////////////////////////////////////////////

// function to called to clear the display WIndow next to avtar window
cleardisplaywindow = function () {
    $('.displayWindow').html("");
}

// fill sidebar with diff categories //
sidebarLength = sidebar.elements.length;
for (var i=0; i<sidebarLength; i++) {
    var formatedsidebarelem = sidebarelem.replace("%imagesrc%", sidebar.elements[i].imagesrc);
    var formatedsidebarelem = formatedsidebarelem.replace("%listtitle%", sidebar.elements[i].listtext);
    var formatedsidebarelem = formatedsidebarelem.replace("%id%", sidebar.elements[i].id);
    $('.main-menu ul:last').append(formatedsidebarelem);
};

// function to fill the display window with selected category elements from sidebar
$('.side-list').click(function () {
    a = $(this.children[0]);
    console.log(a[0].id);
    a = a[0].id;
    console.log(displayElements[a][5]);
    cleardisplaywindow();
    if (a == "colors") {
        for (var i = 0; i < displayElements[a].length; i++) {
            var formatedDisplayWindowElem = displayWindowElemRound.replace('%imagesrc%', displayElements[a][i].imagesrc);
            var formatedDisplayWindowElem = formatedDisplayWindowElem.replace('%data%', displayElements[a][i].item);
            var te = "\'".concat(displayElements[a][i].name).concat("\'");
            console.log(te);
            var formatedDisplayWindowElem = formatedDisplayWindowElem.replace('%sigmlurl%', te);
            $('.displayWindow').append(formatedDisplayWindowElem);
        }
    }
     else {
        for (var i = 0; i < displayElements[a].length; i++) {
            var formatedDisplayWindowElem = displayWindowElem.replace('%imagesrc%', displayElements[a][i].imagesrc);
            var formatedDisplayWindowElem = formatedDisplayWindowElem.replace('%data%', displayElements[a][i].item);
            var te = "\'".concat(displayElements[a][i].name).concat("\'");
            console.log(te);
            var formatedDisplayWindowElem = formatedDisplayWindowElem.replace('%sigmlurl%', te);
            $('.displayWindow').append(formatedDisplayWindowElem);
        }
    }
});

$('#button-team').click(function () {
    cleardisplaywindow();
    for (var i = 0; i < displayElements['team'].length; i++) {
        var formattedTeamElem = teamRound.replace('%imagesrc%', displayElements['team'][i].imagesrc);
        var formattedTeamElem = formattedTeamElem.replace('%data%', displayElements['team'][i].item);
        $('.displayWindow').append(formattedTeamElem);
    }
});

$('#button-about').click(function () {
    cleardisplaywindow();
    $('.displayWindow').append("<p>Sign Language is the most common way of communication used by the deaf communities all over the world. It is a gestural language which provides information using hands and other body parts. Sign Language contains symbolic encoded messages for communication among deaf people without any speech channel. It is the first language of many hearing impaired people. These people learn the local language of the region in which they are born as a second language. Sign languages are unique in many ways from other languages. They cannot be written like other spoken language, a special mechanism is required for transcribing the signs. Most of the deaf people prefer to communicate by using sign language only as they don’t have much knowledge about other spoken languages.  It is a matter of grieve concern that there are very few sources (schools, e-books, websites, mobile applications, online tutors etc) available for the education and communication of deaf people.  This lack of sources has resulted into poor communication, language and literacy skills among the deaf. There is a need to build automated systems that can overcome the problem of poor communication among the deaf.<br><br> The proposed project 'Child Ensign: An Assistive Pre-School Resource for Divyagjan' aims on building such an automated system that could be used for automatic generation of sign language. The system being build can be used by the deaf people along with their friends and family members for the sake of easy and better communication among them. Project mainly focuses at building of an application that converts images into its respective sign. The sign language application developed here aims in easing the life of deaf children (and their parents or society) upto age of 5 years.<br><b style='color: red;'><br><br>Note* </b> This website is only for research and development purpose. The project is contributed by Chitkara University Punjab In collobaration with MRS PTU Bathinda and All India Pingalwara Charitable Society. Any feedback are most welcome at (virender.kadyan@chitkara.edu.in). The avatar is contributed by University of Hamburg.</p>");
});


$('.displayWindow').on("swiperight", function (event) {
    
});

// function to play the avtar just call startPlayer() and see it in action 
function setSiGMLURL(sigmlURL) {
    var loc = window.location.href;
    var locDir = loc.substring(0, loc.lastIndexOf('/'));
    console.log("SiGML: "+sigmlURL);
    console.log("Location Dir: "+ locDir);
    sigmlURL = locDir + "/SignFiles/" + sigmlURL + ".sigml";
    console.log("URL "+sigmlURL);
    // document.getElementById("URLText").value = sigmlURL;
    return sigmlURL;
}

function startPlayer(sigmlURL) {
    sigmlURL = setSiGMLURL(sigmlURL);
    // Equivalent to click on Sign button
    return CWASA.playSiGMLURL(sigmlURL);
}


///////////////////////////////////////////////////////////////////////////////////////



// USELESS FUNCTIONS BY USELESS PEOPLE :|

// $('#button-about').click(function () {
//     $('.container').attr('style','z-index:-1;');
//     $('#container-about').attr('style','display:flex;z-index:1001;');
//     $('.container').attr('style','none;z-index:1;');
//     $('#container-team').attr('style','display:none;z-index:-1;');
//     $('html,body').animate({
//         scrollTop: $('#inner').offset().top},'slow');
// });

// $('#close-about').click(function () {
//     $('.container').attr('style','z-index:1;');
//     $('#container-about').attr('style','display:none;z-index:-1;');
// });

// $('#button-team').click(function () {
//     $('.container').attr('style','z-index:-1;');
//     $('#container-team').attr('style','display:flex;z-index:1001;');
//     $('.container').attr('style','z-index:1;');
//     $('#container-about').attr('style','display:none;z-index:-1;');
//     $('html,body').animate({
//         scrollTop: $('#inner-team').offset().top},'slow');
// });

// $('#close-team').click(function () {
//     $('.container').attr('style','none;z-index:1;');
//     $('#container-team').attr('style','display:none;z-index:-1;');
// });