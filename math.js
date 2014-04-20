var addition = function(x, y) { return x+y; }
var subtract = function(x, y) { return x-y; }
var multiply = function(x, y) { return x*y; }
var divide = function(x, y) { return y != 0 ? x/y : NaN; }

$(document).ready(function() {
	var n = [];
	var operator;
	var r = 0;
	
	$("div#number").each(function() {
		$(this).click(function() {
			r = r === 0 ? $(this).text() : r + $(this).text();
			$("div#result").text(r);
		});
	});

	$("div#operator").each(function() {
		$(this).click(function() {
			n.push(parseInt(r));
			r = 0;
			operator = $(this).text();
		});
	});

	$("div#clear").click(function() {
		n = [];
		operator = "";
		$("div#result").text("0");
	});

	$("div#equals").click(function() {
		n.push(parseInt(r));

		switch(operator) {
			case "+":
				r = addition(n[0], n[1]);
			break;
			case "-":
				r = subtract(n[0], n[1]);
			break;
			case "/":
				r = divide(n[0], n[1]);
			break;
			case "*":
				r = multiply(n[0], n[1]);
			break;
		}

		$("div#result").text(r);
		n = [];
		operator = "";
		r = 0;
	});
});