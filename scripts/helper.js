var sidebarelem = '<li class="side-list"> <img src="%imagesrc%" class="icons" id="%id%"> <span class="list-text"> %listtitle% </span> </li>';

var displayWindowElem = '<div class="displayWindowContainer"> <img src="%imagesrc%" class="displayWindowImage" onclick="startPlayer(%sigmlurl% ,this)"> <span class="displayWindowElemText">%data%</span> </div>';

var displayWindowElemRound = '<div class="displayWindowContainer"> <img src="%imagesrc%" class="displayWindowImageRound" onclick="startPlayer(%sigmlurl% ,this)"> <span class="displayWindowElemText">%data%</span> </div>';

var teamRound = '<div class="teamContainer"> <img src="%imagesrc%" class="teamImageRound"> <span style="font-size:16px;color:white;" class="teamElemText">%data%</span> </div>';

var itemsHeading = '<h1 style="margin: 15px;font-size: 3em;">%heading%</h1>';

var itemsColMd = '<div id="image-content" class="col-md-12"></div>';

var carouselDiv = '<div class="carousel slide multi-item-carousel" id="theCarousel">';

var carouselInner = '<div class="carousel-inner"></div>';

var carouselActiveImage = '<div style="padding-left:60px;" class="item active"><div class="col-xs-4"><p><img src="%imagesrc%" class="img-responsive" onclick="startPlayer(%sigmlurl% , this.src)"><h3>%name%</h3></p></div></div>';

var carouselImage = '<div style="padding-left:60px;" class="item"><div class="col-xs-4"><p><img src="%imagesrc%" class="img-responsive" onclick="startPlayer(%sigmlurl% , this.src)"><h3>%name%</h3></p></div></div>';

var carouselInnerLeft = '<a class="left carousel-control" href="#theCarousel" data-slide="prev"><i style="color:red;" class="glyphicon glyphicon-chevron-left"></i></a>';

var carouselInnerRight = '<a class="right carousel-control" href="#theCarousel" data-slide="next"><i style="color:red;" class="glyphicon glyphicon-chevron-right"></i></a>';

var displayWindowBigImage = '<img class="displayWindow-big-image" src="%imagesrc%" onclick="changeBigImage(this.src)">';

var displayWindowInnerDiv = '<div class="displayWindow-inner-div" style="display: flex;flex-direction: column;"></div>';

var displayWindowSmallImage = '<img class="displayWindow-small-image" src="%imagesrc%" src="%imagesrc%" onclick="changeBigImage(this.src)">';

var mainSidebarElem = '<li class="side-list"> <img src="%imagesrc%" class="icons" id="%id%"></li>';

var secondSidebarElem = '<li class="side-list-names"> <span class="list-text %class%"> %listtitle% </span> </li>';

var collapsibleTeamElem = '<button type="button" class="btn btn-info collapseBtn" data-toggle="collapse" data-target="#demo">Team</button><div id="demo" class="collapse in collapse1"></div>';

var collapsibleSupporterElem = '<button type="button" class="btn btn-info collapseBtn" data-toggle="collapse" data-target="#demo1">Supporters</button><div id="demo1" class="collapse collapse2"></div>';