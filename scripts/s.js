$('.displayWindow').attr('style','flex-direction:column;overflow:auto;');
var check=1;
var histor=[];
clearGloss = function(){document.getElementsByClassName("txtGloss")[0].value = "";}
function loadCategories(lang) {
    for (var i = 0; i < sidebar.elements.length; i++) {
        var formatedMain = mainSidebarElem.replace("%imagesrc%", sidebar.elements[i].imagesrc);
        formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id);
        if(lang=="english") 
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_english);
        else if(lang=="hindi")
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_hindi);
        formatedSecond = formatedSecond.replace("%class%", sidebar.elements[i].class);
        var x = '<div class="animated">' + formatedMain + formatedSecond + '</div>';
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
    amount = '+=50';
    scroll();
}, function() {
    amount = '';
});
$('#prev-btn').hover(function() {
    amount = '-=50';
    scroll();
}, function() {
    amount = '';
});

document.getElementsByClassName('search__input')[0].onblur=function(){check=1;setTimeout(function(){$("#history").html("");$("#history").attr("style","border: none;"); }, 200);}
document.getElementsByClassName('search__input')[0].onfocus=function(){
if(check==1){for(var i=histor.length;i>=0;i--){
if(histor[i]!=undefined){var list=historyElem.replace("%data%",histor[i].item_english).replace("%class%","history-list").replace("%id%",histor[i].item_english);
$("#history").append(list);
}}}console.log(histor);check=2;
$("#history").attr("style","border: solid 0.1vw #4285f4;");
$(".history-list").click(function(){
check=1;
v = $(this.children[0]);
v=v[0].id;
$(".search__input").val(v);
PerformSearch($(".search__input")[0]);
$("#history").html("");
})}
PerformSearch=function(k){
    var searchedArr = [];
        $("#history").html("");
        console.log(k.value);
        cleardisplaywindow();
        var l=k.value.length;
        var val =k.value.toLowerCase();
        for(var elem in displayElements) {
            for(var sample in displayElements[elem]) {
                if(typeof displayElements[elem][sample].item_english !="undefined"){
                var value=displayElements[elem][sample].item_english.substr(0,l).toLowerCase();    
                if(value == val) {
                searchedArr.push(displayElements[elem][sample]);
                }}
            }
        }
        console.log(searchedArr);
        for(var elem in searchedArr) {
            if(language=="english"){var i = (i = displayWindowElemEnglish.replace("%imagesrc%", searchedArr[elem].imagesrc)).replace("%data%", searchedArr[elem].item_english)}
            else{var i = (i = displayWindowElemHindi.replace("%imagesrc%", searchedArr[elem].imagesrc)).replace("%data%", searchedArr[elem].item_hindi)}
            var n = "'".concat(searchedArr[elem].name).concat("'");
            i = i.replace("%sigmlurl%", n);
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
}
document.getElementsByClassName('search__input')[0].addEventListener('keypress',function (e) {$("#category").val(""); if(e.keyCode == 13) {PerformSearch(this);}});
function cleardisplaywindow() {$('.displayWindow').html("");}
function setSiGMLURL(e) {
var i = window.location.href,
    n = i.substring(0, i.lastIndexOf("/"));
    console.log(e);
    return console.log("SiGML: " + e), console.log("Location Dir: " + n), e = n + "/SignFiles/" + e + ".sigml", console.log("URL " + e), e
}

function listClick(lan){
    $(".side-list").click(function() {
        console.log(lan);
        a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        console.log(a);
        $("#category").val(a);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            if(lan=="english"){
            var i = (i = displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);
        }else{
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);}

            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:auto;")
    });
    $(".side-list-names").click(function() {
        a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");;
        console.log(a);
        $("#category").val(a);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (var e = 0; e < displayElements[a].length; e++) {
            if(lan=="english"){
            var i = (i = displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);
        }else{
            var i = (i = displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc)).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].name).concat("'");
            i = i.replace("%sigmlurl%", n);}
            var x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:auto;")
    });
}
listClick("english");

var toBeBackElement = null,
    categoryBackElement = null,
    sigmlReload = null;

function startPlayerEnglish(e, i) {
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY");
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    $('#nameImage').attr("style","opacity:1");
    var clickedSrc = $(i).attr('src');
    console.log(clickedSrc);
    for(var elem in displayElements) {
        for(var sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                $("#nameWindow").html(displayElements[elem][sample].item_english), toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").attr("style", "opacity:1"), $('.cancel').attr("style","opacity:1");
                $('#nameImage').attr("style","opacity:1");
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                histor.push(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].name]);
                for (var a = 0; a < numImages[displayElements[elem][sample].name]; a++) {
                    var t = displayWindowElem.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].name + "/s" + (a + 1) + ".jpg");
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    var x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
    document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.name]) {
            clearInterval(this);
         }else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },800);
    var r = window.location.href;
return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}

function startPlayerHindi(e, i) {
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY"), cleardisplaywindow();
    var elementClicked;
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    $('#nameImage').attr("style","opacity:1");
    var clickedSrc = $(i).attr('src');
    for(var elem in displayElements) {
        for(var sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                $("#nameWindow").html(displayElements[elem][sample].item_hindi), toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").attr("style", "opacity:1"), $('.cancel').attr("style","opacity:1");
                $('#nameImage').attr("style","opacity:1");;
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                histor.push(displayElements[elem][sample]);
                for (var a = 0; a < numImages[displayElements[elem][sample].name]; a++) {
                    var t = displayWindowElemHindi.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].name + "/s" + (a + 1) + ".jpg");
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    var x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
        document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.name]) {
            clearInterval(this);
         }
         else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },600);
    var r = window.location.href;
    return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function assignCategory(lang) {
    $('.square_btn').unbind("click");
    $('#nameWindow').html("");
    $('.cancel,#reload-sigml').attr("style","opacity:0");
    $('.square_btn').click(function() {
        $("#category").val("");
        cleardisplaywindow();
        $('#nameWindow').html("");
        $('#nameImage').attr("style","opacity:0");
        $('.cancel,#reload-sigml').attr("style","opacity:0");
        document.getElementsByClassName('search__input')[0].value = "";
        loadCategories(lang);
        listClick(lang);
    });
}
assignCategory("english");

$("#cancel-div").click(function() {
    screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").attr("style", "opacity:0"), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
    $('#nameImage').attr('src','');
    $('#nameImage').attr("style","opacity:0");;
    for (var e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
        var n = displayWindowElem.replace("%imagesrc%", displayElements[e][i].imagesrc);
        n = n.replace("%data%", displayElements[e][i].item);
        var s, a = "'".concat(displayElements[e][i].name).concat("'");
        n = n.replace("%sigmlurl%", a), $(".displayWindow").append(n), -1 != toBeBackElement.src.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
            $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "opacity:0")
        }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
    }
}), $(".cancel").click(function() {
    document.getElementById('display').scrollLeft = 0;
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
        n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != toBeBackElement.src.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
            $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "opacity:0")
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
  $('.link').click(function(){
     $(".langmenu").animate({width: "toggle"});
  })
  $('.ABOUT').click(function(){
    $("#category").val("");
    cleardisplaywindow();
    $('.displayWindow').append(aboutElem);

  $('#project').click(function(){
    $("#category").val("");
    cleardisplaywindow();
    $('.displayWindow').append(projectElem);
  })

  $('#team').click(function(){
    $("#category").val("");
    cleardisplaywindow();
    $('.displayWindow').append(teamElem);
  })
  })
  $('.Dictionary').click(function(){
        $("#category").val("");
        $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').attr("style","opacity:0");
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
            $('.displayWindow').append(DictionaryElem);
        $(".displayWindow").attr("style", "flex-direction:column;overflow:auto;")
        $('.DictionaryElem').click(function(){
            a=this.children[0];
            a=a.id;
            cleardisplaywindow();
            $(".search__input").val(a);
            PerformSearch($(".search__input")[0]);
        })
  })
 /* Particleground */
 !function(a,b){"use strict";function c(a){a=a||{};for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)c.hasOwnProperty(d)&&("object"==typeof c[d]?deepExtend(a[d],c[d]):a[d]=c[d])}return a}function d(d,g){function h(){if(y){r=b.createElement("canvas"),r.className="pg-canvas",r.style.display="block",d.insertBefore(r,d.firstChild),s=r.getContext("2d"),i();for(var c=Math.round(r.width*r.height/g.density),e=0;c>e;e++){var f=new n;f.setStackPos(e),z.push(f)}a.addEventListener("resize",function(){k()},!1),b.addEventListener("mousemove",function(a){A=a.pageX,B=a.pageY},!1),D&&!C&&a.addEventListener("deviceorientation",function(){F=Math.min(Math.max(-event.beta,-30),30),E=Math.min(Math.max(-event.gamma,-30),30)},!0),j(),q("onInit")}}function i(){r.width=d.offsetWidth,r.height=d.offsetHeight,s.fillStyle=g.dotColor,s.strokeStyle=g.lineColor,s.lineWidth=g.lineWidth}function j(){if(y){u=a.innerWidth,v=a.innerHeight,s.clearRect(0,0,r.width,r.height);for(var b=0;b<z.length;b++)z[b].updatePosition();for(var b=0;b<z.length;b++)z[b].draw();G||(t=requestAnimationFrame(j))}}function k(){i();for(var a=d.offsetWidth,b=d.offsetHeight,c=z.length-1;c>=0;c--)(z[c].position.x>a||z[c].position.y>b)&&z.splice(c,1);var e=Math.round(r.width*r.height/g.density);if(e>z.length)for(;e>z.length;){var f=new n;z.push(f)}else e<z.length&&z.splice(e);for(c=z.length-1;c>=0;c--)z[c].setStackPos(c)}function l(){G=!0}function m(){G=!1,j()}function n(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*r.width),y:Math.ceil(Math.random()*r.height)},this.speed={},g.directionX){case"left":this.speed.x=+(-g.maxSpeedX+Math.random()*g.maxSpeedX-g.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*g.maxSpeedX+g.minSpeedX).toFixed(2);break;default:this.speed.x=+(-g.maxSpeedX/2+Math.random()*g.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?g.minSpeedX:-g.minSpeedX}switch(g.directionY){case"up":this.speed.y=+(-g.maxSpeedY+Math.random()*g.maxSpeedY-g.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*g.maxSpeedY+g.minSpeedY).toFixed(2);break;default:this.speed.y=+(-g.maxSpeedY/2+Math.random()*g.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?g.minSpeedY:-g.minSpeedY}}function o(a,b){return b?void(g[a]=b):g[a]}function p(){console.log("destroy"),r.parentNode.removeChild(r),q("onDestroy"),f&&f(d).removeData("plugin_"+e)}function q(a){void 0!==g[a]&&g[a].call(d)}var r,s,t,u,v,w,x,y=!!b.createElement("canvas").getContext,z=[],A=0,B=0,C=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),D=!!a.DeviceOrientationEvent,E=0,F=0,G=!1;return g=c({},a[e].defaults,g),n.prototype.draw=function(){s.beginPath(),s.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,g.particleRadius/2,0,2*Math.PI,!0),s.closePath(),s.fill(),s.beginPath();for(var a=z.length-1;a>this.stackPos;a--){var b=z[a],c=this.position.x-b.position.x,d=this.position.y-b.position.y,e=Math.sqrt(c*c+d*d).toFixed(2);e<g.proximity&&(s.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),g.curvedLines?s.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):s.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}s.stroke(),s.closePath()},n.prototype.updatePosition=function(){if(g.parallax){if(D&&!C){var a=(u-0)/60;w=(E- -30)*a+0;var b=(v-0)/60;x=(F- -30)*b+0}else w=A,x=B;this.parallaxTargX=(w-u/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(x-v/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var c=d.offsetWidth,e=d.offsetHeight;switch(g.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=c-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>c&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>c||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(g.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=e-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>e&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>e||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},n.prototype.setStackPos=function(a){this.stackPos=a},h(),{option:o,destroy:p,start:m,pause:l}}var e="particleground",f=a.jQuery;a[e]=function(a,b){return new d(a,b)},a[e].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},f&&(f.fn[e]=function(a){if("string"==typeof arguments[0]){var b,c=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){f.data(this,"plugin_"+e)&&"function"==typeof f.data(this,"plugin_"+e)[c]&&(b=f.data(this,"plugin_"+e)[c].apply(this,g))}),void 0!==b?b:this}return"object"!=typeof a&&a?void 0:this.each(function(){f.data(this,"plugin_"+e)||f.data(this,"plugin_"+e,new d(this,a))})})}(window,document),function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();particleground(document.getElementById('particles-foreground'),{dotColor:'rgba(255, 255, 255, 1)',lineColor:'rgba(255, 255, 255, 0.05)',minSpeedX:0.3,maxSpeedX:0.6,minSpeedY:0.3,maxSpeedY:0.6,density:50000,curvedLines:false,proximity:250,parallaxMultiplier:10,particleRadius:4,});particleground(document.getElementById('particles-background'),{dotColor:'rgba(255, 255, 255, 0.5)',lineColor:'rgba(255, 255, 255, 0.05)',minSpeedX:0.075,maxSpeedX:0.15,minSpeedY:0.075,maxSpeedY:0.15,density:30000,curvedLines:false,proximity:20,parallaxMultiplier:20,particleRadius:2,});