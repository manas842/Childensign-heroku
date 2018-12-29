function playSigml(e) {
    CWASA.playSiGMLURL(e)
}
$("#button-hindi").click(function() {
    $('.submenu').slideToggle();
    assignCategory("hindi");
    $("#category-text").html("");
    $('#button-about').html("हमारे बारे में");
    $('.square_btn').html("श्रेणियाँ");
    document.getElementsByClassName("search__input")[0].placeholder = "खोज";
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,#reload-div,#cancel-div,.cancel").attr("style", "opacity:0"), $("#title-name span").html("चाइल्ड एनसाइन: दिव्यंगजन के लिए एक पूर्व शिक्षक सहायक तकनीक"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");
    loadCategories("hindi");
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    $(".side-list").click(function() {
        a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        var v = $(this.children[0]);v[0].item_hindi;
        console.log(a);
        amount = '';
        scroll();
        console.log("Hindi");
        var cat;
        for(var elem in sidebar.elements) {
            // console.log(sidebar.elements[elem].listtext_hindi);
            if(sidebar.elements[elem].listtext_english.replace(/ /g,'').toLowerCase() == a) {
                cat = sidebar.elements[elem];
                break;
            }
        }
        $('#category-text').html(cat.listtext_hindi);
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);
            // $(".displayWindow").append(i);
            var x = '<div style="display:flex;flex-direction:row;padding:2.5vw 0 1vw 4.7vw;">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        $(".displayWindow").attr("style", "flex-direction:column;overflow:auto;")
    });
    $(".side-list-names").click(function() {
        a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0;");
        console.log(a);
        amount = '';
        var cat;
        for(var elem in sidebar.elements) {
            // console.log(sidebar.elements[elem].listtext_hindi);
            if(sidebar.elements[elem].listtext_english.replace(/ /g,'').toLowerCase() == a.toLowerCase()) {
                cat = sidebar.elements[elem];
                break;
            }
        }
        $('#category-text').html(cat.listtext_hindi);
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);
            var x = '<div style="display:flex;flex-direction:row;padding:2.5vw 0 1vw 4.7vw;">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        $(".displayWindow").attr("style", "flex-direction:column;overflow:auto;")
    });
    $(".cancel").click(function() {
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").attr("style", "opacity:0"), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        var backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            var n = displayWindowElemHindi.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_hindi);
            var s, a = "'".concat(displayElements[e][i].name).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div style="display:flex;flex-direction:row;padding:2.5vw 0 1vw 4.7vw;">' + n + '</div>', $(".displayWindow").append(x), -1 != toBeBackElement.src.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().attr("style", "background-color:grey"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        var temp = $("img[src$='" + backElem + "']");
        temp.parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
});
$("#button-english").click(function() {
    $('.submenu').slideToggle();
    assignCategory("english");
    $("#category-text").html("");
    $('#button-about').html("About Us");
    $('.square_btn').html("Categories");
    document.getElementsByClassName("search__input")[0].placeholder = "Search";
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,#reload-div,#cancel-div,.cancel").hide(), $("#title-name span").html("Child Ensign: A Preschooler assistive tool for Divyagjan"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");;
    loadCategories("english");
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    listClick("english");
    amount = '';
    scroll();
    for(var elem in sidebar.elements) {
        // console.log(sidebar.elements[elem].listtext_hindi);
        if(sidebar.elements[elem].listtext_english == a.toLowerCase()) {
            $('#category-text').html(sidebar.elements[elem].listtext_english);
        }
    }
    $(".cancel").click(function() {
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").attr("style", "opacity:0"), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        var backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            var n = displayWindowElemEnglish.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_english);
            var s, a = "'".concat(displayElements[e][i].name).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div style="display:flex;flex-direction:row;padding:2.5vw 0 1vw 4.7vw;">' + n + '</div>', $(".displayWindow").append(x), -1 != toBeBackElement.src.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().attr("style", "background-color:grey"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        var temp = $("img[src$='" + backElem + "']");
        temp.parent().attr("style","background-color:grey");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
});
