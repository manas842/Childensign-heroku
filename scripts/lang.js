var language ="english";
function playSigml(e) {
    CWASA.playSiGMLURL(e)
}
$(".cancel").attr("style","display:none");
Hindi=function(){
    allClick();clearInterval(show);
    $('.speedtxt').html(upperContent.Hindi[0].speed);$('.bttnSpeedReset').html(upperContent.Hindi[0].reset);
    var upper=upperDisplayElem.replace("%titlename%",upperContent.Hindi[0].titlename).replace("%search%",upperContent.Hindi[0].Search).replace("%id%",upperContent.Hindi[0].id).replace("%lang%",upperContent.Hindi[0].select).replace("%cat%",upperContent.Hindi[0].cat).replace("%dic%",upperContent.Hindi[0].dic).replace("%about%",upperContent.Hindi[0].about).replace("%langname%",upperContent.Hindi[0].lang);$("#upperContainer").append(upper);
    $('#title-name').attr("style","margin:0 0 0 23vw;");$('.title img').attr("style","margin-left:14vw;");Search();$('.overlay').hide();
    document.getElementsByClassName('search__input')[0].value = "";
    document.getElementById('display').scrollLeft = 0;
    $("#elemName").val("");
    language="hindi";
    assignCategory("hindi");
    $('.overlay').hide();
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,.cancel").hide(), $("#title-name span").html("चाइल्ड एनसाइन: दिव्यंगजन के लिए एक प्रेस्चोलर सहायक तकनीक"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");
    if(current_screen!="category"&&current_screen!=undefined&&current_screen.length!=1){
    $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(current_screen);
        $("#category").val(current_screen);
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[current_screen].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%imagesrc%", displayElements[current_screen][e].imagesrc)).replace("%data%", displayElements[current_screen][e].item_hindi),
                n = "'".concat(displayElements[current_screen][e].name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    }else if(current_screen.length==1){
    PerformDictionarySearch(current_screen);
    $('.overlay').show();
    $(document.getElementById(current_screen)).attr("style","color:#0bf;border-radius:2vw 2vw 1vw 1vw;background:#fff;")
    $('.DictionaryElem').click(function(){dictionary(this);})
    }else{loadCategories("hindi");
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    $(".side-list").click(function() {
        v=$(this.children[0]),v=v[0].name, a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(a);
        $("#category").val(v);
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
    $(".side-list-names").click(function() {
        v=$(this.children[0]),v=v[0].firstChild.data, a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(v);
        $("#category").val(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });}
    $(".cancel").click(function() {
         clearInterval(show)
        document.getElementById('display').scrollLeft = 0;
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        var backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            var n = displayWindowElemHindi.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_hindi);
            var s, a = "'".concat(displayElements[e][i].name).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        var temp = $("img[src$='" + backElem + "']");
        temp.parent().parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
}
English=function(){
    document.getElementsByClassName('search__input')[0].value = "";
    allClick();clearInterval(show);
    $('.speedtxt').html(upperContent.English[0].speed);$('.bttnSpeedReset').html(upperContent.English[0].reset);
    var upper=upperDisplayElem.replace("%titlename%",upperContent.English[0].titlename).replace("%search%",upperContent.English[0].Search).replace("%id%",upperContent.English[0].id).replace("%lang%",upperContent.English[0].select).replace("%cat%",upperContent.English[0].cat).replace("%dic%",upperContent.English[0].dic).replace("%about%",upperContent.English[0].about).replace("%langname%",upperContent.English[0].lang);$("#upperContainer").append(upper);
    Search();$('.overlay').hide()
    document.getElementById('display').scrollLeft = 0;
    $("#category").val("");$("#elemName").val("");
    language="english";
    assignCategory("english");
    $('.overlay').hide();
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,#reload-div,#cancel-div,.cancel").hide(), $("#title-name span").html("Child Ensign: A Preschooler assistive tool for Divyagjan"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");
    if(current_screen!="category"&&current_screen!=undefined&&current_screen.length!=1){
    document.getElementsByClassName('search__input')[0].value = "";
    $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(current_screen);
        $("#category").val(current_screen);
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[current_screen].length; e++) {
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%imagesrc%", displayElements[current_screen][e].imagesrc)).replace("%data%", displayElements[current_screen][e].item_english),
                n = "'".concat(displayElements[current_screen][e].name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
     }else if(current_screen.length==1){
    PerformDictionarySearch(current_screen);
    $('.overlay').show();
    $(document.getElementById(current_screen)).attr("style","color:#0bf;border-radius:2vw 2vw 1vw 1vw;background:#fff;")
    $('.DictionaryElem').click(function(){dictionary(this);})
    }else{loadCategories("english");}
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    listClick("english");
    $(".cancel").click(function() {
         clearInterval(show)
        document.getElementById('display').scrollLeft = 0;
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        var backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            var n = displayWindowElemEnglish.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_english);
            var s, a = "'".concat(displayElements[e][i].name).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        var temp = $("img[src$='" + backElem + "']");
        temp.parent().parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
}
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
