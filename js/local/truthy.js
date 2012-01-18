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


// var paper = Raphael(document.getElementById("canvas"), width, width);
// 		var gap = 10;
// 		function var_columns(vars) {
// 				var texts = [];
// 				var x = 0;
// 				var y = 10;
// 				for (i in vars) {
// 						var c_heading = paper.text(x, y, vars[i]).attr({ 'fill': 'red', 'text-anchor': 'start', 'font-size': '30px', 'font-style': 'italic' });
// 						texts.push(c_heading);
// 						var box = c_heading.getBBox();
// 						var divider = paper.rect(box.x + box.width + gap - 4, box.y, 2, box.height).attr({ 'fill': 'black', 'stroke': '0' });
// 						x += box.width + gap;
// 				}
// 		}
// 		var_columns(needed_vars);


$(document).ready(function() {
		var width = $(".span13").width();
		var test_expr = ["p", "and", ["q", "or", "r"]];
		var needed_vars = ["p", "q", "r"];
		$("#logic_table").append("<thead><tr></tr></thead>");
		var top_row = $("#logic_table thead tr");
		for (i in needed_vars) {
				top_row.append("<th> $$" + needed_vars[i] + "$$ </th>");
		}
		top_row.append("<th> $$" + to_latex(test_expr) + "$$ </th");
});

function to_latex(expr) {
		var s = "";
		var curr, curr_latex;
		if($.isArray(expr)) {
				for (i in expr) {
						curr = expr[i];
						console.log(curr);
						if (typeof curr == "string") { // maybe find a more efficient way of doing this
								s += s_to_latex(curr) + " ";
						}
						else if($.isArray(curr))
								s += "(" + to_latex(curr) + ")";
				}
				return s;
		}
		else return s_to_latex(expr);
}

function s_to_latex(s) {
		switch(s) { 
		case "and":
				return "\\bullet";
		case "or": 
				return "\\vee";
		default: 
				return s;
		}
}