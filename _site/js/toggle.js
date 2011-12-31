$(function () {

		var e = "expand";
		var c = "collapse";
		var expand_img = "/images/icons/png/black/16x16/arrow3_se.png";
		var expand_hover_img = "/images/icons/png/orange/16x16/arrow3_se.png";
		var collapse_img = "/images/icons/png/black/16x16/arrow3_n.png";
		var collapse_hover_img = "/images/icons/png/orange/16x16/arrow3_n.png";

		var starting_line_height = $(".post > h3").css("line-height");
		var normal_line_height = starting_line_height / 2;
		$(".post > p").hide();
		$(".post div.clickable img").attr("src", expand_img);
		$(".post div.clickable img").attr("alt", e);

		$(".post div.clickable").hover(function () { 
				$(this).children("h3").css("color", "orange");
				var alt_txt = $(this).children("img").attr("alt");
				if(alt_txt == e) {
						$(this).children("img").attr("src", expand_hover_img);
				}
				else if(alt_txt == c) { 
						$(this).children("img").attr("src", collapse_hover_img);
				}
				$(this).attr("hover", "t");
		}, function () {
				$(this).children("h3").css("color", "black");
				var alt_txt = $(this).children("img").attr("alt");
				if(alt_txt == e) {
						$(this).children("img").attr("src", expand_img);
				}
				else if(alt_txt == c) { 
						$(this).children("img").attr("src", collapse_img);
				}
				$(this).removeAttr("hover");
		});

		$(".post div.clickable").click(function () {
				$(this).parent('div').children('p').toggle('fast', function () {});
				var alt_txt = $(this).children('img').attr("alt");
				var new_img;
				if(alt_txt == e) {
						if($(this).attr("hover")) {
								new_img = collapse_hover_img;
						}
						else {
								new_img = collapse_img;
						}
						$(this).children('img').attr({ "src" : new_img, "alt" : c});
				}
				else if(alt_txt == c) { 
						if($(this).attr("hover")) {
								new_img = expand_hover_img;
						}
						else {
								new_img = expand_img;
						}
						$(this).children('img').attr({ "src" : new_img, "alt" : e});
				}
		});
						

});
		