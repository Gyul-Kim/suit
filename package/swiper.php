<link rel="stylesheet" type="text/css" href="package/css/swiper.css" />
<script type="text/javascript" src=package/js/common.js></script>
<script type="text/javascript" src="package/js/swiper.js"></script>	

<script type="text/javascript">
$(function(){
	var popup = new Swiper('#package .swiper', {
		pagination: '#package .swiper-pagination', 
		nextButton: '#package .swiper-button-next',
		prevButton: '#package .swiper-button-prev', 
		slidesPerView: 1, 
		paginationClickable: true, 
		spaceBetween: 10,	
		loop: true,
		// autoplay: 3000,
		autoplayDisableOnInteraction: true,
	});

	$("#package .close").on("click", function(){ $("#package").remove(); return false; });
	
	 $(".plays").click(function(){
		 if($(this).find("img").is(".on") == true){
			$(".plays img").removeClass("on");
			$(".plays img").attr("src","package/images/wait.png");
			popup.startAutoplay();	
		 }else{
			$(this).find("img").addClass("on");
			$(".plays img").attr("src","package/images/play.png");
			popup.stopAutoplay();	
		 }
		return false;	
	});
	
});
</script>

<style type="text/css">
#package { top:5px;}
</style>

<div id="package" class="package">
	<div class="swiper-container swiper">
		<div class="swiper-wrapper">
		    <div class="swiper-slide">
		    	<a href="#" onclick="return false;" class="pop_img"><img src="package/1.jpg" alt="" width="1200" height="auto" /></a>
            </div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-buttons">
			<div class="swiper-button-next s-btn"></div>
			<div class="swiper-button-prev s-btn"></div>
		</div>
	</div>
	<!-- <a href="#" class="plays"><img src="package/images/wait.png" alt="" width="54" height="50" /></a> -->
	<!-- <a href="#" class="close"><img src="package/images/close.png" alt="닫기" width="54" height="50"></a> -->
</div>