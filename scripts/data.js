var sidebar = {
        elements: [{
                            imagesrc: "./res/icons/sidebar/alphabets.png",
                            listtext_english: "Alphabets",
                            listtext_hindi: "Alphabets",
                            id: "alphabets",
                            class: "alphabets_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/animals.png",
                            listtext_english: "Animals",
                            listtext_hindi: "पशु",
                            id: "animals",
                            class: "animals_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/bodyparts.png",
                            listtext_english: "Body Parts",
                            listtext_hindi: "शरीर के अंग",
                            id: "Bodyparts",
                            class: "Bodyparts_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/colors.png",
                            listtext: "ਰੰਗ",
                            listtext_english: "Colors",
                            listtext_hindi: "रंग",
                            id: "colors",
                            class: "colors_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/calendar.png",
                            listtext: "ਹਫ਼ਤੇ ਦੇ ਦਿਨ",
                            listtext_english: "Days Of Week",
                            listtext_hindi: "सप्ताह के दिन",
                            id: "daysofweek",
                            class: "daysofweek_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/fruit.png",
                            listtext: "ਫਲ਼",
                            listtext_english: "Fruits",
                            listtext_hindi: "फल",
                            id: "fruits",
                            class: "fruits_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/months.png",
                            listtext: "ਮਹੀਨੇ",
                            listtext_english: "Months",
                            listtext_hindi: "महीने",
                            id: "months",
                            class: "months_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/numbers.png",
                            listtext_english: "Numbers",
                            listtext_hindi: "नंबर",
                            id: "Numbers",
                            class: "Numbers_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/punjabialphabets.png",
                            listtext: "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ",
                            listtext_english: "Punjabi Alphabets",
                            listtext_hindi: "पंजाबी वर्णमाला",
                            id: "punjabiAlphabets",
                            class: "punjabiAlphabets_sidebar"
                            },{
                            imagesrc: "./res/icons/sidebar/vegetables.png",
                            listtext: "ਸਬਜ਼ੀਆਂ",
                            listtext_english: "Vegetables",
                            listtext_hindi: "सब्जियां",
                            id: "vegetables",
                            class: "vegetables_sidebar"
                            }]
                    },
    displayElements = {
                            months:[{
                            imagesrc:"./res/icons/months/months.png",
                            item_english:"months"
                            },{
                            imagesrc:"./res/icons/months/jan.png",
                            item_english:"January"
                            },{
                            imagesrc:"./res/icons/months/feb.png",
                            item_english:"February"
                            },{
                            imagesrc:"./res/icons/months/march.png",
                            item_english:"march"
                            },{
                            imagesrc:"./res/icons/months/april.png",
                            item_english:"April"
                            },{
                            imagesrc:"./res/icons/months/may.png",
                            item_english:"may"
                            },{
                            imagesrc:"./res/icons/months/june.png",
                            item_english:"june"
                            },{
                            imagesrc:"./res/icons/months/july.png",
                            item_english:"July"
                            },{
                            imagesrc:"./res/icons/months/aug.png",
                            item_english:"August"
                            },{
                            imagesrc:"./res/icons/months/sep.png",
                            item_english:"september"
                            },{
                            imagesrc:"./res/icons/months/oct.png",
                            item_english:"october"
                            },{
                            imagesrc:"./res/icons/months/nov.png",
                            item_english:"November"
                            },{
                            imagesrc:"./res/icons/months/dec.png",
                            item_english:"December"
                            }],
                            daysofweek: [{
                            imagesrc: "./res/icons/daysofweek/monday.jpg",
                            item: "ਸੋਮਵਾਰ",
                            item_english: "Monday",
                            item_hindi: "सोमवार",
                            name: "monday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/tuesday.jpg",
                            item: "ਮੰਗਲਵਾਰ",
                            item_english: "Tuesday",
                            item_hindi: "मंगलवार",
                            name: "tuesday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/wednesday.jpg",
                            item: "ਬੁੱਧਵਾਰ",
                            item_english: "Wednesday",
                            item_hindi: "बुधवार",
                            name: "wednesday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/thursday.jpg",
                            item: "ਵੀਰਵਾਰ",
                            item_english: "Thursday",
                            item_hindi: "गुरूवार",
                            name: "thursday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/friday.jpg",
                            item: "ਸ਼ੁੱਕਰਵਾਰ",
                            item_english: "Friday",
                            item_hindi: "शुक्रवार",
                            name: "friday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/saturday.jpg",
                            item: "ਸ਼ਨੀਵਾਰ",
                            item_english: "Saturday",
                            item_hindi: "शनिवार",
                            name: "saturday"
                            }, {
                            imagesrc: "./res/icons/daysofweek/sunday.jpg",
                            item: "ਐਤਵਾਰ",
                            item_english: "Sunday",
                            item_hindi: "रविवार",
                            name: "sunday"
                            }],
                            punjabiAlphabets: [{
                            imagesrc: "./res/icons/pubalpha/Oorhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "oorhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/Airhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "airhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/Eerhee.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "eerhee"
                            }, {
                            imagesrc: "./res/icons/pubalpha/sassaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "sassaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/haahaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "haahaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/Kakkaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "kakkaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/khakhkhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "khakhkhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/gaggaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "gaggaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/ghagghaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "ghagghaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/Nganngaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "nganngaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/chachchaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "chachchaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/chhachhchhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "chhachhchhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/jajjaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "jajjaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/jhajjhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "jhajjhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/Njannjaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "njannjaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/tainkaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "tainkaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/thaththaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "thaththaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/ddaddaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "ddaddaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/dhaddaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "dhaddaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/nhaanhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "nhaanhaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/tattaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "tattaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/thaththaa1.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "thaththaa1"
                            }, {
                            imagesrc: "./res/icons/pubalpha/daddaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "daddaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/dhaddaa1.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "dhaddaa1"
                            }, {
                            imagesrc: "./res/icons/pubalpha/nannaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "nannaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/pappaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "pappaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/phaphphaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "phaphphaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/babbaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "babbaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/bhabbaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "bhabbaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/mammaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "mammaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/yayyaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "yayyaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/raraa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "raraa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/lallaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "lallaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/vavvaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "vavvaa"
                            }, {
                            imagesrc: "./res/icons/pubalpha/rharrhaa.png",
                            item: "",
                            item_english: "",
                            item_hindi: "",
                            name: "rharrhaa"
                            }],
        fruits: [{
                            imagesrc:"./res/icons/fruits/apple.png",
                            item_english:"Apple"
                            },{
                            imagesrc:"./res/icons/fruits/banana1.png",
                            item_english:"Banana"
                            },{
                            imagesrc:"./res/icons/fruits/cherry.png",
                            item_english:"Cherry"
                            },{
                            imagesrc:"./res/icons/fruits/chickoo.png",
                            item_english:"Chickoo"
                            },{
                            imagesrc:"./res/icons/fruits/cocunut.png",
                            item_english:"Coconut"
                            },{
                            imagesrc:"./res/icons/fruits/fruits.png",
                            item_english:"Fruit"
                            },{
                            imagesrc:"./res/icons/fruits/grape.png",
                            item_english:"Grapes"
                            },{
                            imagesrc:"./res/icons/fruits/lychee.png",
                            item_english:"lychee"
                            },{
                            imagesrc:"./res/icons/fruits/mango.png",
                            item_english:"Mango"
                            }
                            // ,{
                            // imagesrc:"./res/icons/fruits/.png",
                            // item_english:"Mosambi"
                            // }
                            ,{
                            imagesrc:"./res/icons/fruits/orange.png",
                            item_english:"Orange"
                            },{
                            imagesrc:"./res/icons/fruits/papaya.png",
                            item_english:"Papaya"
                            },{
                            imagesrc:"./res/icons/fruits/pear.png",
                            item_english:"Pear"
                            },{
                            imagesrc:"./res/icons/fruits/pineapple.png",
                            item_english:"Pineapple"
                            },{
                            imagesrc:"./res/icons/fruits/pomegranate.png",
                            item_english:"Pomegranate"
                            },{
                            imagesrc:"./res/icons/fruits/pumpkin.png",
                            item_english:"Pumpkin"
                            },{
                            imagesrc:"./res/icons/fruits/watermelon.png",
                            item_english:"Watermelon"
                            }],
        Numbers:[{
                            imagesrc:"./res/icons/numbers/0.png",
                            item_english:"zero"
                            },{
                            imagesrc:"./res/icons/numbers/1.png",
                            item_english:"one"
                            },{
                            imagesrc:"./res/icons/numbers/2.png",
                            item_english:"two"
                            },{
                            imagesrc:"./res/icons/numbers/3.png",
                            item_english:"three"
                            },{
                            imagesrc:"./res/icons/numbers/4.png",
                            item_english:"four"
                            },{
                            imagesrc:"./res/icons/numbers/5.png",
                            item_english:"five"
                            },{
                            imagesrc:"./res/icons/numbers/6.png",
                            item_english:"six"
                            },{
                            imagesrc:"./res/icons/numbers/7.png",
                            item_english:"seven"
                            },{
                            imagesrc:"./res/icons/numbers/8.png",
                            item_english:"eight"
                            },{
                            imagesrc:"./res/icons/numbers/9.png",
                            item_english:"nine"
                            }],
                            colors:[{
                            imagesrc:"./res/icons/colors/color(1).png",
                            item_english: "color",
                            item_hindi:"रंग"
                            },{
                            imagesrc:"./res/icons/colors/red.png",
                            item_english: "red",
                            item_hindi:"लाल"
                            },{
                            imagesrc:"./res/icons/colors/yellow.png",
                            item_english: "yellow",
                            item_hindi:"पीला"
                            },{
                            imagesrc:"./res/icons/colors/green.png",
                            item_english: "green",
                            item_hindi:"हरा"
                            },{
                            imagesrc:"./res/icons/colors/blue.png",
                            item_english: "blue",
                            item_hindi:"नीला"
                            },{
                            imagesrc:"./res/icons/colors/black.png",
                            item_english: "black",
                            item_hindi:"काला"
                            },{
                            imagesrc:"./res/icons/colors/white.png",
                            item_english: "white",
                            item_hindi:"सफेद"
                            },{
                            imagesrc:"./res/icons/colors/brown.png",
                            item_english: "brown",
                            item_hindi:"भूरा"
                            },{
                            imagesrc:"./res/icons/colors/grey.png",
                            item_english: "grey",
                            item_hindi:"धुंधला"
                            },{
                            imagesrc:"./res/icons/colors/orange.png",
                            item_english: "orange color",
                            item_hindi:"नारंगी"
                            },{
                            imagesrc:"./res/icons/colors/pink(1).png",
                            item_english: "pink(1)",
                            item_hindi:"गुलाबी(1)"
                            },{
                            imagesrc:"./res/icons/colors/purple.png",
                            item_english: "purple",
                            item_hindi:"बैंगनी"
                            }],
       animals:[{  imagesrc:"./res/icons/animals/ant.png",
                            item_english:"ant",
                            item_hindi:"चींटी"
                            },{
                            imagesrc:"./res/icons/animals/bird(1).png",
                            item_english:"bird",
                            item_hindi:"पक्षी"
                            },{
                            imagesrc:"./res/icons/animals/bufallo.png",
                            item_english:"bufallo",
                            item_hindi:"भैंस"
                            },{
                            imagesrc:"./res/icons/animals/cat.png",
                            item_english:"cat",
                            item_hindi:"बिल्ली"
                            },{
                            imagesrc:"./res/icons/animals/cow(1).png",
                            item_english:"cow",
                            item_hindi:"गाय"
                            },{
                            imagesrc:"./res/icons/animals/crocodile.png",
                            item_english:"crocodile",
                            item_hindi:"मगरमच्छ"
                            },{
                            imagesrc:"./res/icons/animals/elephant.png",
                            item_english:"elephant",
                            item_hindi:"हाथी"
                            },{
                            imagesrc:"./res/icons/animals/fish(1).png",
                            item_english:"fish",
                            item_hindi:"मछली"
                            },{
                            imagesrc:"./res/icons/animals/monkey.png",
                            item_english:"monkey",
                            item_hindi:"बंदर"
                            },{
                            imagesrc:"./res/icons/animals/parrot.png",
                            item_english:"parrot",
                            item_hindi:"तोता"
                            },{
                            imagesrc:"./res/icons/animals/peacock(4).png",
                            item_english:"peacock",
                            item_hindi:"मोर"
                            },{
                            imagesrc:"./res/icons/animals/rabbit.png",
                            item_english:"rabbit",
                            item_hindi:"खरगोश"
                            },{
                            imagesrc:"./res/icons/animals/rat.png",
                            item_english:"rat(mouse)",
                            item_hindi:"चूहा"
                            },{
                            imagesrc:"./res/icons/animals/snake.png",
                            item_english:"snake",
                            item_hindi:"साँप"
                            },{
                            imagesrc:"./res/icons/animals/zebra.png",
                            item_english:"zebra",
                            item_hindi:"ज़ेबरा"
                            }],
       Bodyparts:[{
                            imagesrc:"./res/icons/bodyparts/arm.png",
                            item_english:"arm",
                            item_hindi:"बांह"
                            },{
                            imagesrc:"./res/icons/bodyparts/chest.png",
                            item_english:"chest",
                            item_hindi:"छाती"
                            },{
                            imagesrc:"./res/icons/bodyparts/ear.png",
                            item_english:"ear",
                            item_hindi:"कान"
                            },{
                            imagesrc:"./res/icons/bodyparts/eye.png",
                            item_english:"eye",
                            item_hindi:"आंख"
                            },{
                            imagesrc:"./res/icons/bodyparts/eyebrow.png",
                            item_english:"eyebrow",
                            item_hindi:"भौं"
                            },{
                            imagesrc:"./res/icons/bodyparts/face.png",
                            item_english:"face",
                            item_hindi:"चेहरा"
                            },{
                            imagesrc:"./res/icons/bodyparts/finger.png",
                            item_english:"finger",
                            item_hindi:"उंगली"
                            },{
                            imagesrc:"./res/icons/bodyparts/fingernail.png",
                            item_english:"fingernail",
                            item_hindi:"नाखून"
                            },{
                            imagesrc:"./res/icons/bodyparts/foot.png",
                            item_english:"foot",
                            item_hindi:"पांव"
                            },{
                            imagesrc:"./res/icons/bodyparts/heel.png",
                            item_english:"heel",
                            item_hindi:"एड़ी"
                            },{
                            imagesrc:"./res/icons/bodyparts/hip.png",
                            item_english:"hip",
                            item_hindi:"कमर"
                            }],
    Basicphrases:[{
                            imagesrc:"./res/icons/basic/afternoon.png",
                            item_english:"Good Afternoon",
                            item_hindi:"नमस्कार"
                            },{
                            imagesrc:"./res/icons/basic/evening.png",
                            item_english:"Good Evening",
                            item_hindi:"सुसंध्या"
                            },{
                            imagesrc:"./res/icons/basic/morning.png",
                            item_english:"Good Morning",
                            item_hindi:"सुप्रभात"
                            },{
                            imagesrc:"./res/icons/basic/night.png",
                            item_english:"good night",
                            item_hindi:"शुभ रात्रि"
                            },{
                            imagesrc:"./res/icons/basic/idontknow.png",
                            item_english:"i don't know",
                            item_hindi:"मुझे नहीं पता"
                            },{
                            imagesrc:"./res/icons/basic/idontunderstand.png",
                            item_english:"i don't understand",
                            item_hindi:"मुझे समझ नहीं आया"
                            },{
                            imagesrc:"./res/icons/basic/iknow.png",
                            item_english:"i know",
                            item_hindi:"मुझे पता है"},{
                            imagesrc:"./res/icons/basic/iunderstand.png",
                            item_english:"i understand",
                            item_hindi:"मै समझता हुँ",                           
                             }],              
    alphabets:  [{
                            imagesrc:"./res/icons/alpha/A.png",
                            item_english:"a"
                            },{
                            imagesrc:"./res/icons/alpha/B.png",
                            item_english:"b"
                            },{
                            imagesrc:"./res/icons/alpha/C.png",
                            item_english:"c"
                            },{
                            imagesrc:"./res/icons/alpha/D.png",
                            item_english:"d"
                            },{
                            imagesrc:"./res/icons/alpha/E.png",
                            item_english:"e"
                            },{
                            imagesrc:"./res/icons/alpha/F.png",
                            item_english:"f"
                            },{
                            imagesrc:"./res/icons/alpha/G.png",
                            item_english:"g"
                            },{
                            imagesrc:"./res/icons/alpha/H.png",
                            item_english:"h"
                            },{
                            imagesrc:"./res/icons/alpha/I.png",
                            item_english:"i"
                            },{
                            imagesrc:"./res/icons/alpha/J.png",
                            item_english:"j"
                            },{
                            imagesrc:"./res/icons/alpha/K.png",
                            item_english:"k"
                            },{
                            imagesrc:"./res/icons/alpha/L.png",
                            item_english:"l"
                            },{
                            imagesrc:"./res/icons/alpha/M.png",
                            item_english:"m"
                            },{
                            imagesrc:"./res/icons/alpha/N.png",
                            item_english:"n"
                            },{
                            imagesrc:"./res/icons/alpha/O.png",
                            item_english:"o"
                            },{
                            imagesrc:"./res/icons/alpha/P.png",
                            item_english:"p"
                            },{
                            imagesrc:"./res/icons/alpha/Q.png",
                            item_english:"q"
                            },{
                            imagesrc:"./res/icons/alpha/R.png",
                            item_english:"r"
                            },{
                            imagesrc:"./res/icons/alpha/S.png",
                            item_english:"s"
                            },{
                            imagesrc:"./res/icons/alpha/T.png",
                            item_english:"t"
                            },{
                            imagesrc:"./res/icons/alpha/U.png",
                            item_english:"u"
                            },{
                            imagesrc:"./res/icons/alpha/V.png",
                            item_english:"v"
                            },{
                            imagesrc:"./res/icons/alpha/W.png",
                            item_english:"w"
                            },{
                            imagesrc:"./res/icons/alpha/X.png",
                            item_english:"x"
                            },{
                            imagesrc:"./res/icons/alpha/Y.png",
                            item_english:"y"
                            },{
                            imagesrc:"./res/icons/alpha/Z.png",
                            item_english:"z"
                            }],
            vegetables:[{
                            imagesrc:"./res/icons/vegetables/brinjal.png",
                            item_english:"brinjal"
                            },{
                            imagesrc:"./res/icons/vegetables/cabbage.png",
                            item_english:"cabbage"
                            },{
                            imagesrc:"./res/icons/vegetables/capsicum.png",
                            item_english:"capsicum"
                            },{
                            imagesrc:"./res/icons/vegetables/carrot.png",
                            item_english:"carrot"
                            },{
                            imagesrc:"./res/icons/vegetables/cauliflower.png",
                            item_english:"cauliflower"
                            },{
                            imagesrc:"./res/icons/vegetables/chilli.png",
                            item_english:"chilli"
                            },{
                            imagesrc:"./res/icons/vegetables/coriander.png",
                            item_english:"coriander"
                            },{
                            imagesrc:"./res/icons/vegetables/cucumber.png",
                            item_english:"cucumber"
                            },{
                            imagesrc:"./res/icons/vegetables/garlic.png",
                            item_english:"garlic"
                            },{
                            imagesrc:"./res/icons/vegetables/ginger.png",
                            item_english:"ginger"
                            },{
                            imagesrc:"./res/icons/vegetables/ladyfinger.png",
                            item_english:"ladyfinger"
                            },{
                            imagesrc:"./res/icons/vegetables/lemon.png",
                            item_english:"lemon"
                            },{
                            imagesrc:"./res/icons/vegetables/mushroom.png",
                            item_english:"mushroom"
                            },{
                            imagesrc:"./res/icons/vegetables/onion.png",
                            item_english:"onion"
                            },{
                            imagesrc:"./res/icons/vegetables/potato.png",
                            item_english:"potato"
                            },{
                            imagesrc:"./res/icons/vegetables/radish.png",
                            item_english:"radish"
                            },{
                            imagesrc:"./res/icons/vegetables/tomato.png",
                            item_english:"tomato"
                            }],
       Dictionary: [{ 
                            item_english: "3g",
                            item_hindi:"3जी"
                            },{
                            item_english: "4g",
                            item_hindi:"4जी"
                            },{
                            item_english: "a",
                            item_hindi:"ए"
                            },{
                            item_english: "above",
                            item_hindi:"ऊपर"
                            },{
                            item_english: "absent",
                            item_hindi:"अनुपस्थित"
                            },{
                            item_english: "abstract",
                            item_hindi:"सार"
                            },{
                            item_english: "abuse(1)",
                            item_hindi:"दुरुपयोग (1)"
                            },{
                            item_english: "abuse(2)",
                            item_hindi:"दुरुपयोग (2)"
                            },{
                            item_english: "accept",
                            item_hindi:"लेना"
                            },{
                            item_english: "accessible",
                            item_hindi:"सुलभ"
                            },{
                            item_english: "accident",
                            item_hindi:"दुर्घटना"
                            },{
                            item_english: "accompany(1)",
                            item_hindi:"साथ (1)"
                            },{
                            item_english: "accompany(2)",
                            item_hindi:"साथ (2)"
                            },{
                            item_english: "action",
                            item_hindi:"कार्य"
                            },{
                            item_english: "active",
                            item_hindi:"सक्रिय"
                            },{
                            item_english: "actor",
                            item_hindi:"अभिनेता"
                            },{
                            item_english: "actress",
                            item_hindi:"अभिनेत्री"
                            },{
                            item_english: "add(1)",
                            item_hindi:"जोड़ना (1)"
                            },{
                            item_english: "add(2)",
                            item_hindi:"जोड़ना (2)"
                            },{
                            item_english: "address",
                            item_hindi:"पता"
                            },{
                            item_english: "adult",
                            item_hindi:"बालिग"
                            },{
                            item_english: "advantage",
                            item_hindi:"फायदा"
                            },{
                            item_english: "advertisement",
                            item_hindi:"विज्ञापन"
                            },{
                            item_english: "advise(1)",
                            item_hindi:"सलाह (1)"
                            },{
                            item_english: "advise(2)",
                            item_hindi:"सलाह (2)"
                            },{
                            item_english: "aeroplane",
                            item_hindi:"विमान"
                            },{
                            item_english: "afraid",
                            item_hindi:"भयभीत"
                            },{
                            item_english: "after",
                            item_hindi:"बाद"
                            },{
                            item_english: "afternoon",
                            item_hindi:"दोपहर"
                            },{
                            item_english: "again",
                            item_hindi:"फिर"
                            },{
                            item_english: "age",
                            item_hindi:"आयु"
                            },{
                            item_english: "agree",
                            item_hindi:"सहमत होना"
                            },{
                            item_english: "aim",
                            item_hindi:"लक्ष्य"
                            },{
                            item_english: "airpollution(2)",
                            item_hindi:"वायु प्रदूषण (2)"
                            },{
                            item_english: "alcohol (1)",
                            item_hindi:"शराब (1)"
                            },{
                            item_english: "alcohol(2)",
                            item_hindi:"शराब (2)"
                            },{
                            item_english: "alert(1)",
                            item_hindi:"चेतावनी (1)"
                            },{
                            item_english: "alert(2)",
                            item_hindi:"चेतावनी (2)"
                            },{
                            item_english: "alive",
                            item_hindi:"ज़िंदा"
                            },{
                            item_english: "all(1)",
                            item_hindi:"सब (1)"
                            },{
                            item_english: "all(2)",
                            item_hindi:"सब (2)"
                            },{
                            item_english: "allow",
                            item_hindi:"अनुमति देना"
                            },{
                            item_english: "almond(1)",
                            item_hindi:"बादाम (1)"
                            },{
                            item_english: "almond(2)",
                            item_hindi:"बादाम (2)"
                            },{
                            item_english: "alone(2)",
                            item_hindi:"अकेले (2)"
                            },{
                            item_english: "alone(1)",
                            item_hindi:"अकेले (1)"
                            },{
                            item_english: "alphabet",
                            item_hindi:"वर्णमाला"
                            },{
                            item_english: "alternative",
                            item_hindi:"विकल्प"
                            },{
                            item_english: "aluminium",
                            item_hindi:"अल्युमीनियम"
                            },{
                            item_english: "always",
                            item_hindi:"हमेशा"
                            },{
                            item_english: "ambulance",
                            item_hindi:"रोगी-वाहन"
                            },{
                            item_english: "angry",
                            item_hindi:"गुस्सा"
                            },{
                            item_english: "annual",
                            item_hindi:"वार्षिक"
                            },{
                            item_english: "annualprogramme",
                            item_hindi:"वार्षिक कार्यक्रम"
                            },{
                            item_english: "ant",
                            item_hindi:"चींटी"
                            },{
                            item_english: "app",
                            item_hindi:"एप्लिकेशन"
                            },{
                            item_english: "appear",
                            item_hindi:"दिखाई"
                            },{
                            item_english: "applause",
                            item_hindi:"ताली"
                            },{
                            item_english: "applicant",
                            item_hindi:"आवेदक"
                            },{
                            item_english: "application",
                            item_hindi:"आवेदन"
                            },{
                            item_english: "apply",
                            item_hindi:"लगाना"
                            },{
                            item_english: "appointment(1)",
                            item_hindi:"नियुक्ति (1)"
                            },{
                            item_english: "appointment(2)",
                            item_hindi:"नियुक्ति (2)"
                            },{
                            item_english: "approximate(1)",
                            item_hindi:"अनुमानित (1)"
                            },{
                            item_english: "approximate(2)",
                            item_hindi:"अनुमानित (2)"
                            },{
                            item_english: "area(1)",
                            item_hindi:"क्षेत्र (1)"
                            },{
                            item_english: "area(2)",
                            item_hindi:"क्षेत्र (2)"
                            },{
                            item_english: "argue",
                            item_hindi:"वाद करना"
                            },{
                            item_english: "army",
                            item_hindi:"सेना"
                            },{
                            item_english: "arrogant",
                            item_hindi:"अभिमानी"
                            },{
                            item_english: "around(1)",
                            item_hindi:"चारों ओर (1)"
                            },{
                            item_english: "around(2)",
                            item_hindi:"चारों ओर (2)"
                            },{
                            item_english: "arrest",
                            item_hindi:"गिरफ्तारी"
                            },{
                            item_english: "art",
                            item_hindi:"कला"
                            },{
                            item_english: "ashamed",
                            item_hindi:"शर्मिंदा"
                            },{
                            item_english: "ask",
                            item_hindi:"पूछना"
                            },{
                            item_english: "assess",
                            item_hindi:"आकलन"
                            },{
                            item_english: "association",
                            item_hindi:"संघ"
                            },{
                            item_english: "assume",
                            item_hindi:"मान लेना"
                            },{
                            item_english: "attitude(1)",
                            item_hindi:"रवैया (1)"
                            },{
                            item_english: "attitude(2)",
                            item_hindi:"रवैया (2)"
                            },{
                            item_english: "audiology",
                            item_hindi:"ऑडियोलॉजी"
                            },{
                            item_english: "authentic",
                            item_hindi:"प्रामाणिक"
                            },{
                            item_english: "autorickshaw",
                            item_hindi:"ऑटो रिक्शा"
                            },{
                            item_english: "available",
                            item_hindi:"उपलब्ध"
                            },{
                            item_english: "avalanche",
                            item_hindi:"हिमस्खलन"
                            },{
                            item_english: "average",
                            item_hindi:"औसत"
                            },{
                            item_english: "award",
                            item_hindi:"पुरस्कार"
                            },{
                            item_english: "away",
                            item_hindi:"दूर"
                            },{
                            item_english: "axe",
                            item_hindi:"कुल्हाड़ी"
                            },{
                            item_english: "baby",
                            item_hindi:"बच्चा"
                            },{
                            item_english: "background",
                            item_hindi:"पृष्ठभूमि"
                            },{
                            item_english: "back(1)",
                            item_hindi:"वापस (1)"
                            },{
                            item_english: "back(2)",
                            item_hindi:"वापस (2)"
                            },{
                            item_english: "back(3))",
                            item_hindi:"वापस (3)"
                            },{
                            item_english: "badminton(1)",
                            item_hindi:"बैडमिंटन (1)"
                            },{
                            item_english: "badminton(2)",
                            item_hindi:"बैडमिंटन (2)"
                            },{
                            item_english: "bad(1)",
                            item_hindi:"बुरा (1)"
                            },{
                            item_english: "bad(2)",
                            item_hindi:"बुरा (1)"
                            },{
                            item_english: "bag",
                            item_hindi:"बैग"
                            },{
                            item_english: "bake",
                            item_hindi:"पकाना"
                            },{
                            item_english: "balance",
                            item_hindi:"संतुलन"
                            },{
                            item_english: "ball",
                            item_hindi:"गेंद"
                            },{
                            item_english: "balloon",
                            item_hindi:"गुब्बारा"
                            },{
                            item_english: "ban",
                            item_hindi:"प्रतिबंध"
                            },{
                            item_english: "difficult",
                            item_hindi:"कठिन"
                            },{
                            item_english: "funny",
                            item_hindi:"मजेदार"
                            },{
                            item_english: "game",
                            item_hindi:"खेल"
                            },{
                            item_english: "garage",
                            item_hindi:"गेराज"
                            },{
                            item_english: "garbage",
                            item_hindi:"कूड़ा"
                            },{
                            item_english: "garden(1)",
                            item_hindi:"उद्यान (1)"
                            },{
                            item_english: "garden(2)",
                            item_hindi:"उद्यान (2)"
                            },{
                            item_english: "garlic",
                            item_hindi:"लहसुन"
                            },{
                            item_english: "gender",
                            item_hindi:"लिंग"
                            },{
                            item_english: "general",
                            item_hindi:"सामान्य"
                            },{
                            item_english: "genius",
                            item_hindi:"प्रतिभा"
                            },{
                            item_english: "gentle",
                            item_hindi:"सज्जन"
                            },{
                            item_english: "genuine",
                            item_hindi:"वास्तविक"
                            },{
                            item_english: "geography",
                            item_hindi:"भूगोल"
                            },{
                            item_english: "get",
                            item_hindi:"प्राप्त"
                            },{
                            item_english: "getup",
                            item_hindi:"बनावट"
                            },{
                            item_english: "gift",
                            item_hindi:"उपहार"
                            },{
                            item_english: "give",
                            item_hindi:"देना"
                            },{
                            item_english: "glass",
                            item_hindi:"कांच"
                            },{
                            item_english: "gloves",
                            item_hindi:"दस्ताने"
                            },{
                            item_english: "glue",
                            item_hindi:"गोंद"
                            },{
                            item_english: "go",
                            item_hindi:"जाना"
                            },{
                            item_english: "gold",
                            item_hindi:"सोना"
                            },{
                            item_english: "good",
                            item_hindi:"अच्छा"
                            },{
                            item_english: "government",
                            item_hindi:"सरकार"
                            },{
                            item_english: "grammar",
                            item_hindi:"व्याकरण"
                            },{
                            item_english: "greedy(1)",
                            item_hindi:"लालची (1)"
                            },{
                            item_english: "greeedy(2)",
                            item_hindi:"लालची (2)"
                            },{
                            item_english: "guess",
                            item_hindi:"अनुमान"
                            },{
                            item_english: "guide",
                            item_hindi:"मार्गदर्शक"
                            },{
                            item_english: "guilt",
                            item_hindi:"अपराध"
                            },{
                            item_english: "gun",
                            item_hindi:"बंदूक"
                            },{
                            item_english: "gurudwara(1)",
                            item_hindi:"गुरुद्वारा (1)"
                            },{
                            item_english: "gurudwara(2)",
                            item_hindi:"गुरुद्वारा (2)"
                            },{
                            item_english: "habit",
                            item_hindi:"आदत"
                            },{
                            item_english: "hail",
                            item_hindi:"ओला"
                            },{
                            item_english: "hairclip",
                            item_hindi:"हेयर क्लिप"
                            },{
                            item_english: "half",
                            item_hindi:"आधा"
                            },{
                            item_english: "halfanhour",
                            item_hindi:"आधा घंटा"
                            },{
                            item_english: "hammer",
                            item_hindi:"हथौड़ा"
                            },{
                            item_english: "hands",
                            item_hindi:"हाथ"
                            },{
                            item_english: "happen",
                            item_hindi:"होना"
                            },{
                            item_english: "happy",
                            item_hindi:"खुश"
                            },{
                            item_english: "hard(2)",
                            item_hindi:"कठिन (2)"
                            },{
                            item_english: "hard(1)",
                            item_hindi:"कठिन (1)"
                            },{
                            item_english: "harddisk",
                            item_hindi:"हार्ड डिस्क"
                            },{
                            item_english: "harddrive",
                            item_hindi:"हार्ड ड्राइव"
                            },{
                            item_english: "hardofhearing",
                            item_hindi:"सुनने में दिक्कत"
                            },{
                            item_english: "hate",
                            item_hindi:"नफ़रत"
                            },{
                            item_english: "have",
                            item_hindi:"है"
                            },{
                            item_english: "haze",
                            item_hindi:"धुन्ध"
                            },{
                            
                            item_hindi:"सरदर्द",
                            item_english: "headache"
                            },{
                            
                            item_hindi:"स्वास्थ्य",
                            item_english: "health"
                            },{
                            
                            item_hindi:"सुन (1)",
                            item_english: "hear(1)"
                            },{
                            
                            item_hindi:"सुन (2)",
                            item_english: "hear(2)"
                            },{
                            
                            item_hindi:"सुन (3)",
                            item_english: "hear(3)"
                            },{
                            
                            item_hindi:"सुनवाई",
                            item_english: "hearing"
                            },{
                            
                            item_hindi:"श्रवण - संबंधी उपकरण",
                            item_english: "hearingaid"
                            },{
                            
                            item_hindi:"दिल (1)",
                            item_english: "heart(1)"
                            },{
                            
                            item_hindi:"दिल (2)",
                            item_english: "heart(2)"
                            },{
                            
                            item_hindi:"भारी",
                            item_english: "heavy"
                            },{
                            
                            item_hindi:"हेलीकॉप्टर",
                            item_english: "helicopter"
                            },{
                            
                            item_hindi:"हेलो",
                            item_english: "hello"
                            },{
                            
                            item_hindi:"मदद",
                            item_english: "help"
                            },{
                            
                            item_hindi:"नायक",
                            item_english: "hero"
                            },{
                            
                            item_hindi:"हिन्दू धर्म",
                            item_english: "hinduism"
                            },{
                            
                            item_hindi:"सफल",
                            item_english: "hit"
                            },{
                            
                            item_hindi:"रुचि",    
                            item_english: "hobby"
                            },{
                            
                            item_hindi:"छुट्टी (1)",
                            item_english: "holiday(1)"
                            },{
                            
                            item_hindi:"छुट्टी (2)",
                            item_english: "holiday(2)"
                            },{
                            
                            item_hindi:"जैकेट",
                            item_english: "jacket"
                            },{
                            
                            item_hindi:"जेल",
                            item_english: "jail"
                            },{
                            
                            item_hindi:"पीलिया",
                            item_english: "jaundice"
                            },{
                            
                            item_hindi:"ईर्ष्या",
                            item_english: "jealous"
                            },{
                            
                            item_hindi:"काम",
                            item_english: "job"
                            },{
                            
                            item_hindi:"शामिल हों (1)",
                            item_english: "join(1)"
                            },{
                            
                            item_hindi:"शामिल हों (2)",
                            item_english: "join(2)"
                            },{
                            
                            item_hindi:"मज़ाक",
                            item_english: "joke"
                            },{
                            
                            item_hindi:"यहूदी धर्म",
                            item_english: "Judaism"
                            },{
                            
                            item_hindi:"रस",
                            item_english: "juice"
                            },{
                            
                            item_hindi:"छलांग",
                            item_english: "jump"
                            },{
                            
                            item_hindi:"लेबल (1)",
                            item_english: "label"
                            },{
                            
                            item_hindi:"लेबल (2)",
                            item_english: "labelsign(1)"
                            },{
                            
                            item_hindi:"लेबल (3)",
                            item_english: "labelsign(2)"
                            },{
                            
                            item_hindi:"कमी",
                            item_english: "lack"
                            },{
                            
                            item_hindi:"सीढ़ी",
                            item_english: "ladder"
                            },{
                            
                            item_hindi:"लाख",
                            item_english: "lakh"
                            },{
                            
                            item_hindi:"दीपक",
                            item_english: "lamp"
                            },{
                            
                            item_hindi:"भूमि",
                            item_english: "land"
                            },{
                            
                            item_hindi:"भाषा",
                            item_english: "language"
                            },{
                            
                            item_hindi:"लैपटॉप",
                            item_english: "laptop"
                            },{
                            
                            item_hindi:"लस्सी (1)",
                            item_english: "lassisign(1)"
                            },{
                            
                            item_hindi:"लस्सी (2)",
                            item_english: "lassisign(2)"
                            },{
                            
                            item_hindi:"पिछले महीने",
                            item_english: "lastmonth"
                            },{
                            
                            item_hindi:"पिछले सप्ताह",
                            item_english: "lastweek"
                            },{
                            
                            item_hindi:"नेतृत्व",
                            item_english: "lead"
                            },{
                            
                            item_hindi:"सुनना (1)",
                            item_english: "listen(1)"
                            },{
                            
                            item_hindi:"सुनना (2)",
                            item_english: "listen(2)"
                            },{
                            
                            item_hindi:"ऊटी",
                            item_english: "ooty"
                            },{
                            
                            item_hindi:"गुणवत्ता",
                            item_english: "quality"
                            },{
                            
                            item_hindi:"मात्रा",
                            item_english: "quantity"
                            },{
                            
                            item_hindi:"रानी",
                            item_english: "queen"
                            },{
                            
                            item_hindi:"सवाल",
                            item_english: "query"
                            },{
                            
                            item_hindi:"शांत",
                            item_english: "quiet"
                            },{
                            
                            item_hindi:"वापसी",
                            item_english: "return"
                            },{
                            
                            item_hindi:"उलटा",
                            item_english: "reverse"
                            },{
                            
                            item_hindi:"चावल",
                            item_english: "rice"
                            },{
                            
                            item_hindi:"धनी",
                            item_english: "rich"
                            },{
                            
                            item_hindi:"सही",
                            item_english: "right"
                            },{
                            
                            item_hindi:"सड़क",
                            item_english: "road"
                            },{
                            
                            item_hindi:"चट्टान",
                            item_english: "rock"
                            },{
                            
                            item_hindi:"रूखा",
                            item_english: "rude"
                            },{
                            
                            item_hindi:"दौड़ना",
                            item_english: "run"
                            },{
                            
                            item_hindi:"रुपया",
                            item_english: "rupee"
                            },{
                            
                            item_hindi:"सुरक्षित",
                            item_english: "safe(2)"
                            },{
                            
                            item_hindi:"स्कूल की पोशाक",
                            item_english: "school uniform"
                            },{
                            
                            item_hindi:"स्वार्थी",
                            item_english: "selfish"
                            },{
                            
                            item_hindi:"वाक्य की बनावट",
                            item_english: "sentence structure"
                            },{
                            
                            item_hindi:"शाल",
                            item_english: "shawl"
                            },{
                            
                            item_hindi:"फोटो शूट",
                            item_english: "shoot photo"
                            },{
                            
                            item_hindi:"वीडियो शूट",
                            item_english: "shoot(video)"
                            },{
                            
                            item_hindi:"शावर",
                            item_english: "Shower"
                            },{
                            
                            item_hindi:"शर्मीला",
                            item_english: "shy(1)"
                            },{
                            
                            item_hindi:"रेशम",
                            item_english: "silk"
                            },{
                            
                            item_hindi:"एक साथ",
                            item_english: "Simultanusly"
                            },{
                            
                            item_hindi:"परिस्थिति",
                            item_english: "situation"
                            },{
                            
                            item_hindi:"माप",
                            item_english: "size(3)"
                            },{
                            
                            item_hindi:"नींद",
                            item_english: "sleep"
                            },{
                            
                            item_hindi:"धीमा",
                            item_english: "slow"
                            },{
                            
                            item_hindi:"मुस्कान",
                            item_english: "smile"
                            },{
                            
                            item_hindi:"साँप",
                            item_english: "snake"
                            },{
                            
                            item_hindi:"बर्फ",
                            item_english: "snow(2)"
                            },{
                            
                            item_hindi:"मोज़े",
                            item_english: "socks"
                            },{
                            
                            item_hindi:"समाधान",
                            item_english: "solve"
                            },{
                            
                            item_hindi:"कुछ",
                            item_english: "some"
                            },{
                            
                            item_hindi:"क्षमा (1)",
                            item_english: "sorry(1)"
                            },{
                            
                            item_hindi:"क्षमा (2)",
                            item_english: "sorry(2)"
                            },{
                            
                            item_hindi:"विशेष (1)",
                            item_english: "special(1)"
                            },{
                            
                            item_hindi:"विशेष (2)",
                            item_english: "special(2)"
                            },{
                            
                            item_hindi:"चश्मा",
                            item_english: "spectacles"
                            },{
                            
                            item_hindi:"मसाले",
                            item_english: "spices"
                            },{
                            
                            item_hindi:"मसालेदार",
                            item_english: "spicy"
                            },{
                            
                            item_hindi:"श्रीनगर",
                            item_english: "srinagar"
                            },{
                            
                            item_hindi:"सीधे",
                            item_english: "straight"
                            },{
                            
                            item_hindi:"शक्ति",
                            item_english: "strength"
                            },{
                            
                            item_hindi:"कठोर",
                            item_english: "strict"
                            },{
                            
                            item_hindi:"बेवकूफ",
                            item_english: "stupid"
                            },{
                            
                            item_hindi:"अंदाज (3)",
                            item_english: "style(3)"
                            },{
                            
                            item_hindi:"अंदाज (2)",
                            item_english: "style(2)"
                            },{
                            
                            item_hindi:"उपशीर्षक",
                            item_english: "subtitles"
                            },{
                            
                            item_hindi:"सफलता",
                            item_english: "success"
                            },{
                            
                            item_hindi:"अचानक",
                            item_english: "sudden"
                            },{
                            
                            item_hindi:"भुगतना",
                            item_english: "suffer"
                            },{
                            
                            item_hindi:"स्वेटर",
                            item_english: "sweater"
                            },{
                            
                            item_hindi:"मेज़",
                            item_english: "table"
                            },{
                            
                            item_hindi:"लेना",
                            item_english: "take"
                            },{
                            
                            item_hindi:"चाय (1)",
                            item_english: "tea(1)"
                            },{
                            
                            item_hindi:"चाय (2)",
                            item_english: "tea(2)"
                            },{
                            
                            item_hindi:"चाय (3)",
                            item_english: "tea(3)"
                            },{
                            
                            item_hindi:"सिखाना",
                            item_english: "teach"
                            },{
                            
                            item_hindi:"चिढ़ाना",
                            item_english: "tease"
                            },{
                            
                            item_hindi:"मंदिर",
                            item_english: "temple"
                            },{
                            
                            item_hindi:"धन्यवाद",
                            item_english: "thankyou(1)"
                            },{
                            
                            item_hindi:"उनके",
                            item_english: "theirs"
                            },{
                            
                            item_hindi:"वहाँ",
                            item_english: "there"
                            },{
                            
                            item_hindi:"वे",
                            item_english: "they"
                            },{
                            
                            item_hindi:"चोर",
                            item_english: "thief(2)"
                            },{
                            
                            item_hindi:"पतला",
                            item_english: "thin"
                            },{
                            
                            item_hindi:"चीज़ें",
                            item_english: "things"
                            },{
                            
                            item_hindi:"सोच",
                            item_english: "think"
                            },{
                            
                            item_hindi:"इस",
                            item_english: "this"
                            },{
                            
                            item_hindi:"तीन दिन बाद",
                            item_english: "three days after"
                            },{
                            
                            item_hindi:"तीन दिन पहले",
                            item_english: "three days before"
                            },{
                            
                            item_hindi:"बिजली",
                            item_english: "thunder"
                            },{
                            
                            item_hindi:"टाई",
                            item_english: "tie"
                            },{
                            
                            item_hindi:"बंधा हुआ",
                            item_english: "tied up"
                            },{
                            
                            item_hindi:"तंग",
                            item_english: "tight(1)"
                            },{
                            
                            item_hindi:"कायर",
                            item_english: "timid"
                            },{
                            
                            item_hindi:"थका",
                            item_english: "tired"
                            },{
                            
                            item_hindi:"आज",
                            item_english: "today"
                            },{
                            
                            item_hindi:"साथ",
                            item_english: "together"
                            },{
                            
                            item_hindi:"आज रात",
                            item_english: "tonight"
                            },{
                            
                            item_hindi:"दांत",
                            item_english: "tooth"
                            },{
                            
                            item_hindi:"टूथब्रश",
                            item_english: "toothbrush"
                            },{
                            
                            item_hindi:"टूथपेस्ट",
                            item_english: "toothpaste"
                            },{
                            
                            item_hindi:"टॉप",
                            item_english: "top"
                            },{
                            
                            item_hindi:"विषय",
                            item_english: "topic"
                            },{
                            
                            item_hindi:"प्रकाश",
                            item_english: "torch"
                            },{
                            
                            item_hindi:"स्पर्श",
                            item_english: "touch"
                            },{
                            
                            item_hindi:"टच स्क्रीन",
                            item_english: "touchscreen"
                            },{
                            
                            item_hindi:"तौलिया",
                            item_english: "towel"
                            },{
                            
                            item_hindi:"ट्रक",
                            item_english: "truck(2)"
                            },{
                            
                            item_hindi:"सच",
                            item_english: "true"
                            },{
                            
                            item_hindi:"कोशिश, अभ्यास",
                            item_english: "try,practise"
                            },{
                            
                            item_hindi:"प्रयत्न",
                            item_english: "try"
                            },{
                            
                            item_hindi:"मोड़",
                            item_english: "turn"
                            },{
                            
                            item_hindi:"दो दिन पहले",
                            item_english: "twodaysbefore"
                            },{
                            
                            item_hindi:"नीचे",
                            item_english: "under"
                            },{
                            
                            item_hindi:"समझना",
                            item_english: "understand"
                            },{
                            
                            item_hindi:"ऊपर",
                            item_english: "up"
                            },{
                            
                            item_hindi:"मूल्य",
                            item_english: "value"
                            },{
                            
                            item_hindi:"परिवर्तन",
                            item_english: "variation"
                            },{
                            
                            item_hindi:"विजय",
                            item_english: "victory(2)"
                            },{
                            
                            item_hindi:"आवाज़",
                            item_english: "voice"
                            },{
                            
                            item_hindi:"वोट",
                            item_english: "vote"
                            },{
                            
                            item_hindi:"उठो",
                            item_english: "wakeup"
                            },{
                            
                            item_hindi:"ज़ीरक्सा",
                            item_english: "xerox"
                            },{
                            
                            item_hindi:"सिलाफ़न",
                            item_english: "xylophone"
                            },{
                            
                            item_hindi:"युवा",
                            item_english: "young"
                            },{
                            
                            item_hindi:"ज़िप (1)",
                            item_english: "zip(1)"
                            },{
                            
                            item_hindi:"ज़िप (2)",
                            item_english: "zip(2)"
                            },{
                            item_english: "my"
                            },{
                            item_english: "name"
                            }],
        collectivenouns: [{}],
        
        Principal_Investigators: [{
            name:"Principal Investigators",
            imagesrc: "./res/backgrounds/virender.jpg",
            item: '<b style="font-size:2vw;">Dr.Virender Kadyan</b><br>Chitkara University<br> Punjab , India'
        }],
        Avatar_Contribution: [{
            name:"Avatar Contribution",
            imagesrc: "./res/backgrounds/hamburg.png",
            item: '<b style="font-size:2vw;">University of Hamburg</b>'
        }],
        Sign_Language_Contributor: [{
            name:"Sign Language Contributor",
            imagesrc: "./res/backgrounds/RP.png",
            item: '<b style="font-size:2vw;">Retd. Col. RP Singh</b><br>Chairman AIPCS<br>Punjab, India'
        }, {
            imagesrc: "./res/backgrounds/karminder.jpg",
            item: '<b style="font-size:2vw;">Retd. Col. Karminder Singh</b><br>Founder <br>Patiala School for DEAFBLIND<br>Punjab, India'
        }],
        Technical_Team: [{
            name:"Technical Team",
            imagesrc: "./res/backgrounds/puneet.jpg",
            item: '<b style="font-size:2vw;">Puneet Bawa</b><br>Team Lead , M.E.(1<sup>st</sup> Year)<br>Chitkara University <br>Punjab , India'
        }, {
            imagesrc: "./res/backgrounds/vaibhav.jpg",
            item: '<b style="font-size:2vw;">Vaibhav</b><br>Developer , B.E.(3<sup>rd</sup> Year)<br>Chitkara University <br>Punjab , India'
        }, {
            imagesrc: "./res/backgrounds/deepanshu.jpg",
            item: '<b style="font-size:2vw;">Deepanshu</b><br>Tester , B.E.(2<sup>nd</sup> Year) <br>Chitkara University<br> Punjab , India'
        }, {
            imagesrc: "./res/backgrounds/gourav.jpg",
            item: '<b style="font-size:2vw;">Gourav</b><br>Sign Generator , B.E.(2<sup>nd</sup> Year) <br>Chitkara University<br> Punjab , India'
        }, {
            imagesrc: "./res/backgrounds/brahmjit.jpg",
            item: '<b style="font-size:2vw;">Brahmjit Singh</b><br>Sign Generator , B.E.(2<sup>nd</sup> Year) <br>Chitkara University<br> Punjab , India'
        }],
        supporters: [{
            name:"Supporters",
            imagesrc: "./res/backgrounds/manawala.png",
            item: '<b style="font-size:2vw;">Bhagat Puran Singh School for The Deaf</b><br>Manawala <br> Punjab , India<br>'
        }, {
            imagesrc: "./res/backgrounds/patialaSchool.png",
            item: '<b style="font-size:2vw;">Patiala School for DEAFBLIND</b><br>Patiala<br> Punjab , India<br>'
        }]
    },
    numImages = {
    };
var upperContent={
    English:[{
        titlename:"Child Ensign: An Assistive Pre-School Resource for Physically Impaired Person",
        about:"About Us",
        dic:"Dictionary",
        select:"Change Language",
        Search:"search",
        cat:"categories",
        lang:"हिंदी",
        speed:"speed:",
        reset:"Reset speed",
        id:"button-hindi"
    }],
    Hindi:[{
        titlename:"चाइल्ड एनसाइन: एक सहायक प्री-स्कूल रिसोर्स फॉर फिजिकली इम्पेयर",
        about:"हमारे बारे में",
        dic:"शब्दकोश",
        select:"भाषा बदले",
        Search:"खोजें",
        cat:"श्रेणी",
        lang:"English",
        speed:"गति:",
        reset:"सामान्य  गति",
        id:"button-english"
    }]
};