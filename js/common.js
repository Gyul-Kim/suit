document.write('<script type="text/javascript" src="js/reserve.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/modify.js" defer></script>');		// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/swipe.js"></script>');		// 함수 리스트 호출
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(window).load(function() {
	$('#index3 section, header').css('opacity', '1');
	// intro
	setTimeout(function() {
		$('#index3 .intro').fadeOut(1000);
	}, 200);
});

$(function(){
/*---------------------------------------------------------------*/	
//common
var video = document.getElementById("MyVideo");
var dht = $(window).height();
var dwh = $(window).width();
var num = location.href.substr(location.href.lastIndexOf('_') + 1);		//해당페이지
var val = num.slice(0, 2); val = val - 1;
var m = location.href.substr(location.href.lastIndexOf('=') + 1);			//해당페이지 영역
var v = m.slice(0, 2); v = (v - 1) + 1;	
var k = val;
let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path


/*---------------------------------------------------------------*/	
//header
$("#lnb .InBox ul li, #IdxMenu .lnb .InBox ul li, header > nav > div").hover(function(){
	var i = $(this).index();
	$("#lnb .InBox ul li").removeClass("on");
	$("#lnb .InBox ul li").eq(i).addClass("on");
	$("#IdxMenu .lnb .InBox ul li").removeClass("on");
	$("#IdxMenu .lnb .InBox ul li").eq(i).addClass("on");

	$("header > nav").css({"height":"380px"});
	$("header > nav > div").css({"opacity":"0","z-index":"1"});
	$("header > nav > div").eq(i).css({"opacity":"1","z-index":"2"});
});	

$("#lnb, #IdxMenu, header > nav").mouseleave(function(){
	$("#lnb .InBox ul li").removeClass("on");
	$("#IdxMenu .lnb .InBox ul li").removeClass("on");
	$("header > nav > div").css({"opacity":"0","z-index":"1"});
	$("header > nav").css({"height":"0"});
});

function Swipers4(value, view, center, Between, boolean){
	var popup = new Swiper(' .swiper4', {
		pagination: '#index .restaurant .swiper-pagination', 
		nextButton: '#index .restaurant .swiper-button-next',
		// prevButton: '#popup .swiper4 .swiper-button-next', 
		slidesPerView: 1, 
		paginationClickable: true, 
		spaceBetween: 10,	
		loop: true,
		// autoplay: 3000,
		autoplayDisableOnInteraction: true,
	});
}



/*---------------------------------------------------------------*/
switch(path){
	//index Page
	case '' :
	case 'index' :
	
	//offers
	var special = new Swiper('.swiper',{
		slidesPerView:3, spaceBetween: 30,
		nextButton:'.swiper-button-next',
		prevButton:'.swiper-button-prev',
		//loop:true,
	});

	for(var i = 0; i < img[0]; i++){
		$(".visual .Swipers .swiper-image").append(
			'<div class="swiper-slide">' + 
				'<div style="background-image:url(' + url +'/main/'+  (i + 1) + '.jpg)"></div>' + 
			'</div>'
		);
	} Swipers(".visual", 1, true, 0, false);

	for(var i = 0; i < img[0]; i++){
		$(".restaurant .swiper4 .swiper-image").append(
			'<div class="swiper-slide">' + 
				'<div style="background-image:url(' + url +'/main/'+  (i + 1) + '.jpg)"></div>' + 
			'</div>'
		);
	} Swipers4(".restaurant", 1, true, 50, false);

	

	$(".plays").click(function(){
		if($(this).find("img").is(".on") == true){
		   $(".plays img").removeClass("on");
		   $(".plays img").attr("src","/pop/images/wait.png");
		   popup.startAutoplay();	
		}else{
		   $(this).find("img").addClass("on");
		   $(".plays img").attr("src","/pop/images/play.png");
		   popup.stopAutoplay();	
		}
	   return false;	
   });

   $(".restaurant .swiper4 .swiper-image .swiper-slide").eq(1).append(
	   '<div class="title"><span>고객님을 위한 이벤트가 가득한 <br>스위티안 레스토랑에서 다양한 혜택을 즐기세요.</span><a href="#">이벤트 보기</a></div>'
   );

   

	$('.list ul li > div').hover(
		function () {
			var a = $(this).parent('li').index();
			$('.list .img div').css({ opacity: '0', 'z-index': '0' });
			$('.list .img div').css({ opacity: '0', 'z-index': '0' });
			$('.list .img div').eq(a).css({ opacity: '1', transition: '1s', 'z-index': '1' });
			$('.list ul li div div').eq(a).css({ opacity: '1' });
		},
		function () {
			$('.list .img div').css({ opacity: '0', transition: '1s', 'z-index': '0' });
			$('.list ul li div div').css({ opacity: '0.5' });
		}
	);

	$("#index .list .img").css("height",$("#index .list .img").width() / 16 * 9);
	
	$(window).on("resize", function() {
		$("#index .list .img").css("height",$("#index .list .img").width() / 16 * 9);	
	});

	var iwh = (1400 / 16) * 9;
	if (dwh < 1001) $(".video #iframe").css({ width: "950px", height: "534px" });
	else $(".video #iframe").css({ width: "1400px", height: iwh });
			
 	break;

	case 'location' :
		$("#banner").prepend('<h2><img src="images/location_ttl_01.png" alt="" width="450" height="150" /></h2>');

		
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',
		function(data){
			$(".location .txt > p").eq(0).append("<span>" + data.result.NEW_USER_ADDR +  "</span>"); //'<br />' + data.result.USER_ADDR +
			$(".location .txt > p").eq(1).append("<span>"+ data.result.USER_TEL1 +"</span>");
			
		});
	
	break;

	case 'media' :

	break;

	case 'qna' :

	break;

	
	//rooms Page
	case 'rooms' :
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/8',
	function(data){
	
		$("body").addClass("room_" + m);
		var z = v - 1;

		var arr1 = new Array();
		$.each(data.result,function(key,val){
			var sorts = val["SORT_NO"] - 1;
			arr1.push(data.result[sorts]["TYPE_NAME"]);
		});

		// 중복값체크 
		var arr2 = arr1.reduce(function(a,b){
			if(a.indexOf(b) < 0) a.push(b);
			return a;
		},[]);
		
		// 일치하는 인덱스값 반환
		var arr3 = new Array();
		for(var n = 0; n < arr1.length; n++){
			for(var c = 0; c < arr2.length; c++){
				if(arr1[n] == arr2[c]) arr3.push(arr1.indexOf(arr2[c]));
			}
		}

		// 증복값 체크
		var arr4 = arr3.reduce(function(a,b){
			if(a.indexOf(b) < 0) a.push(b);
			return a;
		},[]);
		
		// 출력
		var arr5 = new Array();
		for(var a = 0; a < arr4.length; a++){
			var h = arr4[a]; arr5.push(h);
		}
    // console.log(arr5, h, data.result[nmb[z]]);

		$("#banner").prepend('<h2><img src="images/room_ttl_'+ numbering(z) +'.png" alt="" width="800" height="200" /></h2>');
		$("#contents .txt").append('<span>SUMMARY</span><p>'+ data.result[arr5[z]]["TYPE_CONTENT"] +'</p>');	

		for(var a = 0; a < img[2][z].length; a++){
			
			$("section .InnerBox").append(
				'<div class="slides" id="room_'+ numbering(a) +'">' +
					'<div class="slide slide_02"><ul class="slide_show"></ul></div>' +
					'<div class="info">' +
						'<h3><strong>'+ ttl[z][a] +'</strong><span>('+ data.result[nmb[z][a]]["TYPE_DESC"] +')</span></h3>' +
						'<div>' +
							'<b>기본정보</b>' +
							'<ul>' +
								'<li>' +
									'<strong>STRUCTURE</strong>' +
									'<span>'+ data.result[nmb[z][a]]["ROOM_TYPE"] +'</span>' +
								'</li>' +
								'<li>' +
									'<strong>ROOMS</strong>' +
									'<span>침대 객실 : '+ data.result[nmb[z][a]]["FLHT_ROOM_CNT"] +'개</span>' +
								'</li>' +
							'</ul>' +
							'<ul>' +	
								'<li>' +
									'<strong>SIZE</strong>' +
									'<span>'+ data.result[nmb[z][a]]["ROOM_EXTN"] +'㎡</span>' +
								'</li>' +
								'<li>' +
									'<strong>GUEST LIMIT</strong>' +
									'<span>기준 '+ data.result[nmb[z][a]]["ADLT_BASE_PERS"] +'명 ~ 최대 '+ data.result[nmb[z][a]]["ADLT_MAX_PERS"] +'명</span>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
			
			for(var e = 0; e < img[2][z][a]; e++){
				$('#room_'+ numbering(a)).find(".slide_show").append(
					'<li id="i' + numbering(e) + '">' + 
					'<div style="background:url('+ url +'/room/'+ (z + 1) +'/'+ (a + 1) +'/'+ (e + 1) +'.jpg)'+ 
					' no-repeat 50% 50%;background-size:cover;"></div>' + 
					'</li>' 
				);
			}
			
			slide_02("room_" + numbering(a),"slide_show > li");
		}
	
		$("section .InnerBox").append(
			'<div class="eq">' +
				'<div class="img"><img src="'+ url +'/room/amenity.jpg" alt="" width="100%" height="auto" /></div>' +
				'<div class="txt">' +
					'<strong>공통 어메니티</strong>' +
					'<div class="t01">' +
						'<ul>' +
							'<li>- Aromatherapy Essentials from UK 어메니티 제공</li>' +
							'<li>- 5성급 호텔 침구 전문 제조업체 「바이바우」 침구</li>' +
						'</ul>' +
					'</div>' +
					'<div class="t02"><ul></ul></div>'	 +
				'</div>' +
			'</div>'
		);
		
		var intr = data.result[nmb[z][0]]["INTERIOR"].split(',');
		for(var a=0; a < intr.length; a++) $(".InnerBox .eq").find(".t02 ul").append("<li>" + intr[a] + "</li>");	

		if(m == "06") $(".t02").append('<p>※ 로열 스위트, 스위티안 스위트 객실에만 욕조가 구비되어있습니다.</p>');

	});

break;
/*---------------------------------------------------------------*/
case 'fpv' :

	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/12',
	function(data){
		
		//Order Number Sort
		var facilityList = new Array();
		for (var i = 0; i < data.result.length; i++) {
			for (var j = 0; j < data.result.length; j++) {
				if (Number(data.result[j]["ORDER_NUM"]) - 1 === i){
					facilityList.push(data.result[j]);
				}
			}
		}

		$("#banner").prepend('<h2><img src="images/fpv_ttl.png" alt="" width="605" height="150" /></h2>');
		for(var i = 0; i < facilityList.length; i++){
			if(i%2 == 0){
				$(".special").append(
					'<div class="s'+ numbering(i) +'">' +
						'<div class="txt">' +
							'<div class="InBox">' +
								'<h3>'+ facilityList[i]["TITLE_EN"] +'</h3>' +
								'<p>'+ facilityList[i]["CONTENT"] +'</p>' +
								'<a href="facility.html?num='+ numbering(i) +'" class="btn">' +
									'<div class="back"></div>' +
									'<div class="mask"><div><span>VIEW DETAIL</span><span>VIEW DETAIL</span></div></div>' +
								'</a>' +
							'</div>' +
						'</div>' +
						'<div class="img"><img src="http://gonylab4.speedgabia.com/suiteians/facility/'+ (i + 1) +'/1.jpg" alt="" width="100%" height="auto" /></div>' +
					'</div>'
				);
			}else{
				$(".special").append(
					'<div class="s'+ numbering(i) +'">' +
						'<div class="img"><img src="http://gonylab4.speedgabia.com/suiteians/facility/'+ (i + 1) +'/1.jpg" alt="" width="100%" height="auto" /></div>' +
						'<div class="txt">' +
							'<div class="InBox">' +
								'<h3>'+ facilityList[i]["TITLE_EN"] +'</h3>' +
								'<p>'+ facilityList[i]["CONTENT"] +'</p>' +
								'<a href="facility.html?num='+ numbering(i) +'" class="btn">' +
									'<div class="back"></div>' +
									'<div class="mask"><div><span>VIEW DETAIL</span><span>VIEW DETAIL</span></div></div>' +
								'</a>' +
							'</div>' +
						'</div>' +
					'</div>'
				);
			}	
		}
		
		$(window).on("scroll",function(e){
			var d = $(window).scrollTop();
			var f = $(".special > div").eq(0).offset().top - $(".special > div").height();
			var g = $(".special > div").eq(1).offset().top - $(".special > div").height();
			var h = $(".special > div").eq(2).offset().top - $(".special > div").height();
		

			if(d > f){
				$(".special > div").eq(0).find(".txt").css({"left":"0%","opacity":"1"});
				$(".special > div").eq(0).find(".img").css({"right":"0%","opacity":"1"});
			}else{
				$(".special > div").eq(0).find(".txt").css({"left":"-5%","opacity":"0"});
				$(".special > div").eq(0).find(".img").css({"right":"-5%","opacity":"0"});
			}
			
			if(d > g){
				$(".special > div").eq(1).find(".txt").css({"right":"0%","opacity":"1"});
				$(".special > div").eq(1).find(".img").css({"left":"0%","opacity":"1"});
			}else{
				$(".special > div").eq(1).find(".txt").css({"right":"-5%","opacity":"0"});
				$(".special > div").eq(1).find(".img").css({"left":"-5%","opacity":"0"});
			}
			
			if(d > h){
				$(".special > div").eq(2).find(".txt").css({"left":"0%","opacity":"1"});
				$(".special > div").eq(2).find(".img").css({"right":"0%","opacity":"1"});
			}else{
				$(".special > div").eq(2).find(".txt").css({"left":"-5%","opacity":"0"});
				$(".special > div").eq(2).find(".img").css({"right":"-5%","opacity":"0"});
			}

			return false;
		});

		$(".special > div").each(function(e){
			
			if(e%2 == 1) {
				$(this).find(".txt").css("text-align","right");
				$(this).find(".txt a.btn").css("float","right");
				
				$(this).find(" > .txt").css("right","-5%");
				$(this).find(" > .img").css("left","-5%");
				
			}else{
				$(this).find(" > .txt").css("left","-5%");
				$(this).find(" > .img").css("right","-5%");
			}

		});
	
	});
	
break;
/*---------------------------------------------------------------*/
	//special Page
	case 'facility' :
	
	$("body").addClass("facil_" + m);
	var z = v - 1;
	
	if(z == 0){
		$("section").prepend(
			'<div class="section video">' +
				'<div class="MyFrame">' +
					'<video id="MyVideo" src="http://gonylabvid03.speedgabia.com/suiteian/pool.mp4" autoplay loop muted height="100%"></video>' +
				'</div>' +
				'<div id="scroll"></div>' +
			'</div>'
		);
	}else{
		$("section").prepend(
			'<div class="section" id="banner">' +
				'<div id="scroll"></div>' +
			'</div>'
		)
	}
	
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/12',
	function(data){
		
		//Order Number Sort
		var facilityList = new Array();
		for (var i = 0; i < data.result.length; i++) {
			for (var j = 0; j < data.result.length; j++) {
				if (Number(data.result[j]["ORDER_NUM"]) - 1 === i){
					facilityList.push(data.result[j]);
				}
			}
		}

		$(".section").eq(0).prepend('<h2><img src="images/facil_ttl_'+ numbering(z) +'.png" alt="" width="800" height="200" /></h2>');
		$("#contents .txt").append('<span>SUMMARY</span><p>'+ facilityList[z]["CONTENT1"] +'</p>');	
		$("section .InnerBox").append(
			'<div class="slides" id="slides">' +
				'<div class="slide slide_02">' +
					'<ul class="slide_show"></ul>' +
				'</div>' +
				'<div class="info">' +
					'<strong>INFORMATION</strong>' +
					'<p>'+ facilityList[z]["CONTENT2"] +'</p>' +
				'</div>' +
			'</div>'
		);
		
		if(z == 0){
			$("#slides").append(
				'<div class="img">' +
					'<div class="txt">' + 
						'<h4><img src="images/pool_s_ttl.png" alt="" width="750" height="200" /></h4>' +
						'<p>'+ facilityList[z]["CONTENT3"] +'</p>' +
					'</div>' +
				'</div>'
			);
			$(".img > .txt").css("margin-top",$(".img > .txt").height() / -2);
		}
		
		for(var a = 0; a < img[3][z]; a++){
			$(".slide_02 .slide_show").append(
				'<li id="i' + numbering(a) + '">' + 
				'<div style="background:url('+ url +'/facility/'+ (z + 1) +'/'+ (a + 1) +'.jpg)'+ 
				' no-repeat 50% 50%;background-size:cover;"></div>' + 
				'</li>' 
			);
		} slide_02("slides","slide_show > li");
	});
	break;

/*---------------------------------------------------------------*/
	//restauratn Page
	case 'food' :
	
	//$("body").addClass("_" + m);
	//var z = v - 1;
	
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/13',
	function(data){
		//Order Number Sort
		var serviceList = new Array();
		for (var i = 0; i < data.result.length; i++) {
			for (var j = 0; j < data.result.length; j++) {
				if (Number(data.result[j]["ORDER_NUM"]) - 1 === i){
					serviceList.push(data.result[j]);
				}
			}
		}

		$(".section").eq(0).prepend('<h2><img src="images/food_ttl_01.png" alt="" width="800" height="200" /></h2>');
		$("section .InnerBox").append(
			'<div class="slides" id="slides">' +
						
				'<div class="slide slide_02">' +
					'<ul class="slide_show"></ul>' +
				'</div>' +
				'<div class="info">' +
						'<h3><strong>스위티안 레스토랑</strong></h3>' +
						'<div>' +
							'<b>인사말</b>' +
							'<ul  style="display:block;">' +
								'<strong>SUMMARY</strong>' +
								'<li>' + serviceList[0]["CONTENT"]  +'</li>' +
							'</ul>' +
						'</div>' +
						'<div>' +
							'<b>영업시간</b>' +
							'<ul>' +
								'<li>' +
									'<strong>Reservation</strong>' +
									'<p>' + serviceList[0]["CONTENT1"] + '</p>' +
								'</li>' +
								'<li>' +
									'<strong>Press (SNS Channel)</strong>' +
									'<p>' + serviceList[0]["CONTENT2"] + '</p>' +
								'</li>' +
							'</ul>' +
						'</div>' +
						'<div>' +
							'<b>메뉴소개</b>' +
							'<ul>' +
								'<li>' +
									'<a href="menu.pdf" target="_blank" class="btn">' +
									'<div class="back"></div>' +
									'<div class="mask">' +
										'<div>' +
											'<span>전체 메뉴보기(PDF)</span>' +
											'<span>전체 메뉴보기(PDF)</span>' +
										'</div>' +
										'</div>' +
									'</a>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
			'</div>'
		);

		$(".img > .txt").css("margin-top",$(".img > .txt").height() / -2);
		
		for(var a = 0; a < img[4]; a++){
			$(".slide_02 .slide_show").append(
				'<li id="i' + numbering(a) + '">' + 
				'<div style="background:url('+ url +'/food/'+ (a + 1) +'.jpg)'+ 
				' no-repeat 50% 50%;background-size:cover;"></div>' + 
				'</li>' 
			);
		}
		
		slide_02("slides","slide_show > li");
	
	});
	break;
/*---------------------------------------------------------------*/
	//reservation Page
	case 'reserve' :
	
	$("#banner").prepend('<h2><img src="images/rev_ttl_01.png" alt="" width="450" height="150" /></h2>');
	
	$("#reserve .snb li a").on("click",function(){ 
		var nb = $(this).parent("li").index();
		$("#reserve .snb > li").removeClass("active");
		$("#reserve .snb > li").eq(nb).addClass("active");
		
		if(nb == 0){
			$(".thumb").hide(); $(".tab_01").show();
		}else if(nb == 1){
			$(".thumb").hide(); $(".tab_02").show();
		}return false;
	});
	reserInfo(rv_ttl);
break;
/*---------------------------------------------------------------*/
	//offers Page
	case 'offers' :

	$("#banner").prepend('<h2><img src="images/off_ttl_01.png" alt="" width="450" height="150" /></h2>');

	$(".section .stb li a").on("click", function () {
		var c = $(this).parent("li").index();
		$(".section .stb > li").removeClass("active");
		$(".section .stb > li").eq(c).addClass("active");
		if (c == 0) {		
			$(".thumb iframe").attr("src", "/board/bbs/board.php?bo_table=offers");
		} else if (c == 1) {	
			$(".thumb iframe").attr("src", "/board/bbs/board.php?bo_table=end");
		}
		return false;
	});

break;

/*---------------------------------------------------------------*/
	//community Page
	case 'community' :
	
	$("#banner").prepend('<h2><img src="images/com_ttl_01.png" alt="" width="450" height="150" /></h2>');
	
	$(".section .snb li a").on("click",function(){ 
		var c = $(this).parent("li").index();
		$(".section .snb > li").removeClass("active");
		$(".section .snb > li").eq(c).addClass("active");
		if(c == 0){
						
			$(".thumb h3 strong").text("공지사항");
			$(".thumb h3 span").text("공지사항과 다양한 소식을 확인해보세요.");
			$(".thumb iframe").attr("src","/board/bbs/board.php?bo_table=notice");
		}else if(c == 1){
						
			$(".thumb h3 strong").text("숙박후기");
			$(".thumb h3 span").text("스위티안 호텔의 소중한 추억을 남겨주세요.");
			$(".thumb iframe").attr("src","/board/bbs/board.php?bo_table=review");	
		}
		return false;
	});
	break;

	//None Page
	default : location.href = "index.html";
	break;
}

/*---------------------------------------------------------------*/	
//video
$(".video").css("height",dht); if(dht < 483){$(".video").css("height",483); } 
$(window).resize(function(){ var dht = $(window).height(); $(".video").css("height",dht); if(dht < 483){$(".video").css("height",483); } });

/*---------------------------------------------------------------*/	
//scroll
$("#scroll").append('<div class="InBox"><div class="line"></div><a href="#"><img src="images/scroll.png" alt="" width="100" height="40" /></a></div>');
$("#scroll a").on("click",function(){ $("html,body").stop(true,false).animate({"scrollTop":$("#contents").offset().top},800,"swing");	return false;});

/*---------------------------------------------------------------*/
//footer
$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',	//사업자 정보
	function(data){
		$("footer .ft_info1").append(
			'<h3>INFORMATION</h3>' +
			'<ul>' +
				'<li><em>전화예약 TEL : </em><span>031-581-5300</span></li>' +
				'<li><span>' + data.result.NEW_USER_ADDR +'</span></li>' +
				'<li><em>E-MAIL : </em><span>'+ data.result.USER_EMAIL +'</span></li>' +
			'</ul>'
		);

		$("footer .ft_info2").append(
			'<h3></h3>' +
			'<ul>' +
				'<li><em>대표 : </em><span>심원보</span></li>' +
				'<li><em>사업자등록번호 : </em><span></span></li>' +
				'<li><em>통신판매번호 : </em><span>' + data.result.COMM_SALE_NO + '</span></li>' +
			'</ul>'
		);
		
		//사업자 정보	
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/11', //사업자 정보
		function(data){
			var arr1 = new Array(); var arr2 = new Array();
			$.each(data.result,function(key,val){
				arr1.push(val["BUSI_PRE_NM"]); arr2.push(val["BUSI_NO"]);
				$(".BUSI_PRE_NM").text(arr1); $(".BUSI_NO").text(arr2);
			});
		});
				
		$(".sns_01").attr("href",INTRAGRAM);
		$(".sns_04").attr("href",KAKAO); 
		//$(".sns_02").attr("href",FACEBOOK); 
		$(".sns_05").on('click',function(){
			alert('전화문의 : 031-581-5300');
			return false;
		});
		
		
		if(INTRAGRAM == "#"){$(".sns_01").on('click',function(){alert('준비중입니다.');return false;});}
		if(FACEBOOK == "#"){$(".sns_02").on('click',function(){alert('준비중입니다.');return false;});}
		if(KAKAO == "#"){$(".sns_04").on('click',function(){alert('준비중입니다.');return false;});}
	});
});	


/*------------------------------------------------------------------------------------------------*/
//function 
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}

function Swipers(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}



