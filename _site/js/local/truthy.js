start
  = expr

expr
  = left:exprPrefix right:exprSuffix? { if(right) {
 return left.concat(right) }
else { return left } }

exprSuffix
  = "*" right:expr { if(right.length == 1) { return ["times", right[0]]; } else { return ["times", right]; } }
   / "+" right:expr { if(right.length ==1) { return ["plus", right[0]]; } else { return ["plus", right]; } }

exprPrefix
  = "(" e:expr ")" { return [e] }
   / l:letter { return [l] }

letter "letter"
  = [a-z]