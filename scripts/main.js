$('.displayWindow').attr('style','flex-direction:column;overflow:hidden;');
var check=1,show,autoscroll,search_value='';
var histor=new Set([]);
var current_screen="category";$(".cancel").attr("style","display:none");
clearGloss = function(){document.getElementsByClassName("txtGloss")[0].value = "";}
var upper=upperDisplayElem.replace("%titlename%",upperContent.English[0].titlename).replace("%id%",upperContent.English[0].id).replace("%lang%",upperContent.English[0].select).replace("%cat%",upperContent.English[0].cat).replace("%dic%",upperContent.English[0].dic).replace("%about%",upperContent.English[0].about).replace("%langname%",upperContent.English[0].lang).replace("%search%",upperContent.English[0].Search);$("#upperContainer").append(upper);
$('.overlay').hide();
function loadCategories(lang) {
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    for (var i = 0; i < sidebar.elements.length; i++) {
        var formatedMain = mainSidebarElem.replace("%imagesrc%", sidebar.elements[i].imagesrc);
        if(lang=="english"){
            formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id).replace("%cdata%",sidebar.elements[i].listtext_english);
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_english).replace("%cdata%",sidebar.elements[i].listtext_english);
        }else if(lang=="hindi"){
            formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id).replace("%cdata%",sidebar.elements[i].listtext_hindi);
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_hindi).replace("%cdata%",sidebar.elements[i].listtext_hindi);
        }
        formatedSecond = formatedSecond.replace("%class%", sidebar.elements[i].class);
        let x = '<div class="animated">' + formatedMain + formatedSecond + '</div>';
        $('.displayWindow').append(x);
    }
}
loadCategories("english");

$(".displayWindow").mousewheel(function(event, delta) {

  this.scrollLeft -= (delta * 10);

  event.preventDefault();

});
var amount = '';

function scroll() {
    $('#display').animate({
        scrollLeft: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}
$('#next-btn').hover(function() {
    clearInterval(autoscroll);
    amount = '+=50';
    scroll();
}, function() {
    amount = '';
});
$('#prev-btn').hover(function() {
    clearInterval(autoscroll);
    amount = '-=50';
    scroll();
}, function() {
    amount = '';
});
function Search(){
document.getElementsByClassName('search__input')[0].onblur=function(){check=1;setTimeout(function(){$("#history").html("");$("#history").attr("style","border: none;"); }, 200);}
document.getElementsByClassName('search__input')[0].onfocus=function(){$("#history").html("");let historyElememt=Array.from(histor);
if(check==1){for(let c=0,i=historyElememt.length;i>=0&&c<6;i--,c++){if(historyElememt[i]!=undefined){console.log(historyElememt[i].item_english);$("#history").attr("style","border: solid 0.1vw #4285f4;");let list=historyElem.replace("%data%",historyElememt[i].item_english).replace("%class%","history-list").replace("%id%",historyElememt[i].item_english);
$("#history").append(list);}}}console.log(historyElememt);check=2;
$(".history-list").click(function(){$("#nameWindow").html("");$("#category").html("");check=1;
v = $(this.children[0]);v=v[0].id;
$(".search__input").val(v);
PerformDictionarySearch(v);
$("#history").html("");
})}
PerformDictionarySearch=function(k){
    clearInterval(show);
        let searchedArr=[];
        $("#history").html("");
        console.log(k);
        let val=k.trim();
        let l=val.length;
        if(l!=0){
        val=val.toLowerCase();
        for(let elem in displayElements) {
            for(let sample in displayElements[elem]) {
                if(typeof displayElements[elem][sample].item_english !="undefined"){
                let value=displayElements[elem][sample].item_english.substr(0,l).toLowerCase();    
                if(value == val) {
                searchedArr.push(displayElements[elem][sample]);
                }}
            }
        }
        if(searchedArr.length!=0){
               cleardisplaywindow();
               $('#nameWindow').html("");
               $('#nameImage').attr("style","opacity:0");
               $('.cancel,#reload-sigml').hide();
               for(let elem in searchedArr) {
                    if(language=="english"){var i =  dictionaryWindowElemEnglish.replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%data%", searchedArr[elem].item_english)}
                    else{var i = dictionaryWindowElemHindi.replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%data%", searchedArr[elem].item_hindi)}
                    let n = "'".concat(searchedArr[elem].item_english).concat("'");
                    i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
                    let x = '<div class="elements Search">' + i + '</div>';
                    $('.displayWindow').append(x);
                }
            }
        }
        console.log(current_screen);
}
document.getElementsByClassName('search__input')[0].addEventListener('keypress',function (e) { if(e.keyCode == 13) {$("#category").html("");search_value=document.getElementsByClassName('search__input')[0].value;PerformDictionarySearch(search_value);current_screen="search";$("#history").attr("style","border: none;");}});}
function cleardisplaywindow() {$('.displayWindow').html("");}
function setSiGMLURL(e) {
var i = window.location.href,
    n = i.substring(0, i.lastIndexOf("/"));
    console.log(e);
    return console.log("SiGML: " + e), console.log("Location Dir: " + n), e = n + "/SignFiles/" + e + ".sigml", console.log("URL " + e), e
}
Search();
function listClick(lan){
    $(".side-list").click(function() {
        console.log(lan);
        v=$(this.children[0]),v=v[0].item_english;a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(a);
        current_screen=a;
        console.log(current_screen);
        $("#category").html(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            if(lan=="english"){
            var i =  displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else{
            var i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);}

            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
    $(".side-list-names").click(function() {
        v=$(this.children[0]),v=$(v[0]).attr("name");
        a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        console.log(v);
        current_screen=a;
        $("#category").html(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            if(lan=="english"){
            var i =  displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else{
            var i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);}
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
}
listClick("english");

var toBeBackElement = null,
    categoryBackElement = null,
    sigmlReload = null;
function startPlayerDictionary(e, i) { 
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#imageWindow").removeClass("flipInY");
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    let clickedSrc = $(i).attr('src');
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                if(language=='hindi'){$("#nameWindow").html(displayElements[elem][sample].item_hindi)}else{$("#nameWindow").html(displayElements[elem][sample].item_english)}
                toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show();
                elementClicked = displayElements[elem][sample];
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].item_english]);
                break;
            }
        }
    }
    let r = window.location.href;
    return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function startPlayerEnglish(e, i) {
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    document.getElementsByClassName('search__input')[0].value = "";
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY");
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    $('#nameImage').attr("style","opacity:1");
    let clickedSrc = $(i).attr('src');
    console.log(clickedSrc);
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                $("#nameWindow").html(displayElements[elem][sample].item_english), toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show(), $('.cancel').show();
                $('#nameImage').attr("style","opacity:1");
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].item_english]);
                for (let a = 0; a < numImages[displayElements[elem][sample].item_english]; a++) {
                    let t = displayWindowElem.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].item_english + "/s" + (a + 1) + ".png");
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    let x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
    document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    show =setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.item_english]) {
            clearInterval(this);
         }else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },800);
    let r = window.location.href;
return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}

function startPlayerHindi(e, i) {
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    document.getElementsByClassName('search__input')[0].value = "";
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY"), cleardisplaywindow();
    let elementClicked;
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    $('#nameImage').attr("style","opacity:1");
    let clickedSrc = $(i).attr('src');
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                $("#nameWindow").html(displayElements[elem][sample].item_hindi), toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show(), $('.cancel').show();
                $('#nameImage').attr("style","opacity:1");;
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].item_english]);
                $('#elemName').val(displayElements[elem][sample].item_english);
                for (let a = 0; a < numImages[displayElements[elem][sample].item_english]; a++) {
                    let t = displayWindowElemHindi.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].item_english + "/s" + (a + 1) + ".png");
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    let x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
        document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    show = setInterval(function show() {
         if(loopCount-1 == numImages[elementClicked.item_english]) {
            clearInterval(this);
         }
         else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },600);
    let r = window.location.href;
    return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function assignCategory(lang) {
    $('.square_btn').unbind("click");
    $('#nameWindow').html("");
    $('.cancel,#reload-sigml').hide();
    $('.square_btn').click(function() {
        current_screen="category";
        clearInterval(show);
        $('.overlay').hide("");
        $("#category").html("");
        document.getElementById('display').scrollLeft = 0;
        cleardisplaywindow();
        $('#nameWindow').html("");
        $('#nameImage').attr("style","opacity:0");
        $('.cancel,#reload-sigml').hide();
        document.getElementsByClassName('search__input')[0].value = "";
        loadCategories(lang);
        listClick(lang);
    });
}
assignCategory("english");
$(".cancel").click(function() {
    clearInterval(show)
    document.getElementById('display').scrollLeft = 0;
    cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");
    let backElem = $(toBeBackElement).attr("src");
    document.getElementsByClassName('search__input')[0].value = "";
    for (let e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
        let n = displayWindowElemEnglish.replace("%imagesrc%", displayElements[e][i].imagesrc).replace("%imagesrc%", displayElements[e][i].imagesrc);
        n = n.replace("%data%", displayElements[e][i].item_english);
        let s, a = "'".concat(displayElements[e][i].item_english).concat("'");
        n = n.replace("%sigmlurl%", a).replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
            $("#imageWindow").addClass("flipInY")
        }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
    }
    console.log(backElem);
    let temp = $("img[src$='" + backElem + "']");
    temp.parent().parent().attr("style","background-color:white");
    temp.next().attr("style","color:black;");
    $(".cancel").attr("style","display:none");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});

  window.onload = function (){
    $(".loader").fadeOut()
    $(".bts-popup").delay(100).fadeIn();
  }
  $('.bts-popup-trigger').on('click', function(event){
    event.preventDefault();
    $('.bts-popup').addClass('is-visible');
  });
  $('.bts-popup').on('click', function(event){
    if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
      event.preventDefault();
      $(".bts-popup-container").attr("style","animation: popup-hide 1s;");
      $(this).fadeOut();
    }
  });
  $(document).keyup(function(event){
      if(event.which=='27'){
      $(".bts-popup-container").attr("style","animation: popup-hide 1s;");
      $('.bts-popup').fadeOut();
      }
    });
  allClick=function(){
  $('.link').click(function(){
    clearInterval(show);
    $(".langmenu").animate({width: "toggle"});
    setTimeout(function(){$(".langmenu").attr("style","display:none")},8000)
  })
  $('.ABOUT').click(function(){
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    $('.overlay').hide("");
    current_screen="category";
    document.getElementsByClassName('search__input')[0].value = "";
    clearInterval(show);
    $('#nameWindow').html("");
    $('#nameImage').attr("style","opacity:0");
    $('.cancel,#reload-sigml').hide();
    $("#category").html("");
    cleardisplaywindow();
    $('.displayWindow').append(aboutElem);

      $('#project').click(function(){
        $("#category").html("");
        cleardisplaywindow();
        $('.displayWindow').append(projectElem);
      })
      $('#team').click(function(){
        $("#category").html("");
        cleardisplaywindow();
        $('.displayWindow').append(TeamElem);
        let cube = document.querySelector(".cube"),
        imageButtons = document.querySelector(".image-buttons");
        let cubeImageClass = cube.classList[1];
        imageButtons.addEventListener("click", function (e) {
        let targetNode = e.target.nodeName,targetClass = e.target.className;
        if (targetNode === "INPUT" && targetClass !== cubeImageClass) {cube.classList.replace(cubeImageClass, targetClass);cubeImageClass = targetClass;}});
    })
  })
  $('.Dictionary').click(function(){
        current_screen="Dictionary";
        clearInterval(show);
        $("#category").html("");
        $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $('.cancel,#reload-sigml').hide();
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        $('.overlay').show();
        dictionary();
        document.getElementById('display').scrollLeft = 0;
        $('.DictionaryElem').click(function(){dictionary(this);CWASA.init(initCfg);document.getElementById('display').scrollLeft = 0;})
        })}
  function dictionary(m){
        document.getElementById('display').scrollLeft = 0;
        if(m!=undefined){a=m.children[0];a=a.id;}else(a='A')
            current_screen=a;
            $('.overlay').html("");
            $('.overlay').append(DictionaryElem);
            $(document.getElementById(a)).attr("style","color: #00f;border-radius: 2vw 2vw 1vw 1vw;background: #fffd;height: 2.8vw;")
            cleardisplaywindow();
            $('.displayWindow').attr("style","flex-direction:column;overflow:hidden;padding: 1.5vw 0 0 0;height: 37.6vw;");
            PerformDictionarySearch(a);
            $('.DictionaryElem').click(function(){dictionary(this);CWASA.init(initCfg);document.getElementById('display').scrollLeft = 0;})
        }
  allClick();