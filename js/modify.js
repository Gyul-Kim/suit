//오른쪽 클릭 방지
$(document).bind("contextmenu",function(e){return false;});
$(document).bind("ondragstart",function(e){return false;});
$(document).bind("onselectstart",function(e){return false;}); 

const isMobile = () => { 
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
  };

/* ------------------------------------------------------------------------------- */
/* 실시간예약 - 계정정보 */
var rv_ttl = "suiteian";

/* 실시간예약 - 타입여부 */
var type = "Y";

/* 이미지,영상 - 경로 */
var vid = "http://gonylabvid03.speedgabia.com/suiteian";
const url =  isMobile() && window.innerWidth <=768 ? 'http://gonylab4.speedgabia.com/suiteians/m' : 'http://gonylab4.speedgabia.com/suiteians';


/* 영상 */
var mov = [
	["main.mp4"],
	
];

/* 객실명 */
var ttl = [
	['자쿠지 스위트 101','자쿠지 스위트 102','자쿠지 스위트 103','자쿠지 스위트 104'],
	['트윈 107','트윈 108','트윈 109','더블'],
	['핑크','다크'],
	['트윈 203','트윈 204','트윈 206','더블'],
	['핑크','다크'],
	['로열 스위트','스위티안 스위트','프리미엄 스위트'],
	['펜트하우스']
];

var nmb = [
	[0,1,2,3],
	[4,5,6,7,8,9,10,11],
	[12,13,14,15],
	[16,17,18,19,20,21,22,23,24],
	[25,26,27,28,29,30,31],
	[32,33,34],
	[35],
];


/* 이미지 */
var img = [
	//main
	[15],
	//exteior
	[7],
	
	//rooms
	[
		//GARDEN TERRACE JACUZZI
		[7,7,8,7],
		//GARDEN TERRACE
		[5,5,5, 5],
		//GARDEN TERRACE DELUXE
		[6,6],
		//STANDARD
		[5,5,5, 4],
		//DELUXE
		[6,6],
		//DUPLEX SUITE
		[9,9,9],
		//PENTHOUSE
		[12],
	],
	
	//special
	[10, 4, 4],
	
	
	//food
	[10],
	
];

let spc_txt = [
	['INFINITY POOL',
	
	'스위티안은 당신이 기대하는 모든 것,\n' +
	'그 이상의 가치를 제공합니다.\n' +
	'어느 곳에서도 경험하지 못할\n' +
	'최상의 퍼스널 서비스와 함께 럭셔리 스타일을 선보입니다.'],

	['SEMINAR',
		
	'스위티안은 당신이 기대하는 모든 것,\n' +
	'그 이상의 가치를 제공합니다.\n' +
	'어느 곳에서도 경험하지 못할\n' +
	'최상의 퍼스널 서비스와 함께 럭셔리 스타일을 선보입니다.'],

	['LOUNGE',
		
	'스위티안은 당신이 기대하는 모든 것,\n' +
	'그 이상의 가치를 제공합니다.\n' +
	'어느 곳에서도 경험하지 못할\n' +
	'최상의 퍼스널 서비스와 함께 럭셔리 스타일을 선보입니다.'],

	['JACUZZI',
		
	'스위티안은 당신이 기대하는 모든 것,\n' +
	'그 이상의 가치를 제공합니다.\n' +
	'어느 곳에서도 경험하지 못할\n' +
	'최상의 퍼스널 서비스와 함께 럭셔리 스타일을 선보입니다.'],

];


/* ------------------------------------------------------------------------------- */
/* SNS */
var	INTRAGRAM = "https://www.instagram.com/hotel_suiteian/";				
var	FACEBOOK = "#";
var	KAKAO = "https://pf.kakao.com/_HVCaK";
var	NV_BLOG = "#";
var	NV_CAFE = "#";