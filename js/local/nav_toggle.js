$(function () {

		var img = "/images/icons/png/black/16x16/arrow2_e.png";	
		var hover_img ="/images/icons/png/orange/16x16/arrow2_e.png";

		$(".sidebar > li").hover(function () {
				$(this).children("img").attr("src", hover_img);
				$(this).children("a").css("color", "orange");
		}, function () {
				$(this).children("img").attr("src", img);
				$(this).children("a").css("color", "black");
		});
});