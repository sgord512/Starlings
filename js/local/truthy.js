// start
//   = expr

// expr
//   = left:exprPrefix right:exprSuffix? { if(right) {
//  return left.concat(right) }
// else { return left } }

// exprSuffix
//   = "*" right:expr { if(right.length == 1) { return ["times", right[0]]; } else { return ["times", right]; } }
//    / "+" right:expr { if(right.length ==1) { return ["plus", right[0]]; } else { return ["plus", right]; } }

// exprPrefix
//   = "(" e:expr ")" { return [e] }
//    / l:letter { return [l] }

// letter "letter"
//   = [a-z]





$(document).ready(function() {
		var width = $(".span13").width();
		var paper = Raphael(document.getElementById("canvas"), width, width);
		var test_expr = ["p", "and", ["q", "or", "r"]];
		var needed_vars = ["p", "q", "r"];
		var gap = 10;
		function var_columns(vars) {
				var texts = [];
				var x = 0;
				var y = 10;
				for (i in vars) {
						var c_heading = paper.text(x, y, vars[i]).attr({ 'fill': 'red', 'text-anchor': 'start', 'font-size': '30px', 'font-style': 'italic' });
						texts.push(c_heading);
						var box = c_heading.getBBox();
						var divider = paper.rect(box.x + box.width, box.y, gap, box.height).attr({ 'fill': 'black' });
						x += box.width + gap;
				}
		}
		var_columns(needed_vars);

});
