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
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"3g"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"4g"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Above"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Absent"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Abstract"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Abuse"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"accept"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"accessible"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"accident"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"accompany"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"action"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"active"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"actor"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"actress"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"add"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"address"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"adult"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"advantage"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"advertisement"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"advise"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"aeroplane"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"afraid"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"africa"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"after"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"afternoon"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"again"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"age"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"agra"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"agree"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ahmedabad"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"aim"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"airpollution"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alcohol,drunk"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alert"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alive"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"all"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"allow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"almond"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alone"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alphabet"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"alternative"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"aluminium"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"always"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ambulance"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"amritsar"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"andhrapardesh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"angry"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"annual"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"annualprogramme"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"app"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"appear"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"applause"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"applicant"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"application"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"apply"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"appointment"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"approximate"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"area"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"argue"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"army"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"arogant"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"around"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Arrest"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Art"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"arunachalpardesh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ashamed"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"asia"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Ask"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"assam"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"assess"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Association"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Assume"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"attitude"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Audiology"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"aunt"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"australia"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"authentic"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"autorickshaw"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"available"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Avalanche"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"average"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"award"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Away"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Axe"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"baby"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"back"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"background"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bad"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"badmintonsign"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bag"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bake"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"balance"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ball"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"balloon"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bangalore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bangladesh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bansign1"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bear"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bhabhi indore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bhubaneswar"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bihar"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bike"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"blackboard"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"book"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"boy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"boyfriend"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"brother"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"brother-in-law"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bua indore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"budhapurnima"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"bull"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"capital"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"car"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"chalk"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"chandigarh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"chennai"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"chhattisgarh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"china"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"christmas"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"circle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"coimbatore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"cone"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"cousins"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"crore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"crow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"cube"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Cycle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"cylinder"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"daughter"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"daughter-in-law"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"day"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"dehradun"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"delhi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"desk"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"dhaddaa1"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"difficult"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"divorce"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"diwali"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"dog"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Donkey"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"dubai"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"duster"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Eagle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"east"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"eighteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"eighty "
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"elder sister"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"elder,older"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"eleven"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"England"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"eraser"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Europe"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"family"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"fifteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"fifty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"file"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"forty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"fourteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"France"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"friend"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"funny"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"game"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gandhi jayanti"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Gangtok"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"garage"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"garbage"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"garden"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gender"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"general"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"genius"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gentle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"genuine"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"geography"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Germany"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"get"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"getup"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gift"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"girl"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"girlfriend"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"give"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"glass"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gloves2"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"glue"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"go"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Goa"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gold"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Good Afternoon"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Good Evening"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"good friday"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Good Morning"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"good night"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"good"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"government"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"grammar"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"grandfather"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"grandmother"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"greedy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"guess"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"guide"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"guilt"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Gujarat"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gun"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"gurudwara"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"habit"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hail"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hairclip"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"half"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"halfanhour"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hammer"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hands"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"happen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"happy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hard"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"harddisk"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"harddrive"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hardofhearing"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Haryana"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hate+"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"have"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"haze"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"headache"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"health"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hear"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hearing"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hearingaid"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"heart"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"heavy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"helicopter"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hello"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"help"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hero"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hindism"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hit"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hobby"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"holi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"holiday"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"holiday1"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"hundred"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"husband"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"i don't know"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"i don't understand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"i know"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"i understand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"idu'l fitr"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"id-ul-zuha(kolkata)"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"id-ul-zuha"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"independence day"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"insect"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Israel"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"jacket"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"jail"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Jammu and Kashmir"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"janmashtami"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"jaundice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"jealous"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Jharkhand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"job"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"join"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"joke"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Judaism"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"juice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"jump"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Kangaroo"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"karnataka"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"kohima"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"kolkata"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"label"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lack"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ladder"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lakh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lamp"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"land"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"language"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"laptop"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lassi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lastmonth"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lastweek"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lead"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"listen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lizard"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"lucknow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"madhya pradesh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"maharashtra"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahashivaratri(indore)"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahashivaratri(kolkata)"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahashivaratri"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahatma gandhi's birthday,gandhi jayanti2"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahatma gandhi's birthday"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mahavir jayanti"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"manipur"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"meghalaya"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mizoram"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mother"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"muharram"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mumbai"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"mysuru"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"nagaland"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"nagpur"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"neck"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"nepal"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"new delhi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"nineteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"north"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"notebook"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"number"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"odisha"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"one crore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"one lakh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"onebillion"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"onemillion"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"oneweek"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ooty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"oval"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ox"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"paper"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"parents"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"peacock"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"pen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"pencil"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"picture"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"place"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"puducherry"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"punjab"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Python"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"quality"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"quantity"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"queen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"query"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"quiet"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"raipur"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Rajasthan"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ranchi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rectangle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"return"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"reverse"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rich"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"right"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"road"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rock"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rude"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"run"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"rupee"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"safe"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"school uniform"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"schoolbag"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"selfish"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sentence structure"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"seventeen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Shapes"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sharpener"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Shawl"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"shillong"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"shimla"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Shoot photo"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"shoot(video)"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Shower"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"shy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sikkim"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"silk"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"Simultanusly"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"situation"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sixteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sixty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"size"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sleep"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"slow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"smile"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"snow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"socks"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"solve"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"some"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sorry"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"south"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sparrow"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"special"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"spectacles"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"spices"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"spicy"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"spider"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"square"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"srinagar"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"states"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"straight"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"strength"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"strict"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"stupid"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"style"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"subtitles"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"success"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sudden"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"suffer"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sunday"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"sweater"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"table"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"take"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tamilnadu"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tea"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"teach"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tease"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"telugu"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"temple"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"ten"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tenthousand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thankyou"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"theirs"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"there"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"they"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thief"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thin"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"things"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"think"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"third"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thirteen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thirty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thiruvananthpuram"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"this"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thousand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"three days after"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"three days before"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thrice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"thunder"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tie"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tied up"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tiffin"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tight1"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"timid"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tired"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"today"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"together"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tonight"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tooth"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"toothbrush"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"toothpaste"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"top"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"topic"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"torch"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"touch"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"touchscreen"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"towel"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tractor"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"train"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"triangle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"tripura"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"truck"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"true"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"try,practise"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"try"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"turn"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twelve"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twenty one"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twenty"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twin"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"two thousand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"twodaysbefore"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"under"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"understand"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"up"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"uttarpradesh"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"value"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"variation"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"victory"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"vijay dashmi"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"voice"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"vote"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"wakeup"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"waterbottle"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"west"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"westbengal"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"woodpecker"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"xerox"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"xylophone"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"young"
                            },{
                            sign_Name:"",
                            item_hindi:"",
                            item_english:"zip"
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
        a:1,
        b:1,
        c:1,
        d:1,
        e:1,
        f:1,
        g:1,
        h:1,
        i:1,
        j:1,
        k:1,
        l:1,
        m:1,
        n:1,
        o:1,
        p:1,
        q:1,
        r:1,
        s:1,
        t:1,
        u:1,
        v:1,
        w:1,
        x:1,
        y:1,
        z:1,
        april:4,
        babbaa:3
    };
var upperContent={
    English:[{
        titlename:"Child Ensign: An Assistive Pre-School Resource for Hearing Impaired Person",
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