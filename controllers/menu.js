var args = arguments[0] || {};

var __size = args.size || args.width || args.height || 100;
var __radius = Math.ceil(__size/2);

var __x = 0;
var __y = 0;

// functions
var setTitle = function (title) {
	if (title)
		$.title.text = title;
}

var setSize = function (s) {
	__size = s;
	__radius = Math.ceil(__size/2);
		
    $.menu.width = $.menu.height = __size;
	$.menu.borderRadius = __radius;
}

var getSize = function () {
	return __size;
}

var setPosition = function (x, y) {
	__x = x;
	__y = y;
	
	$.menu.left = __x - __radius;
	$.menu.top = __y - __radius;
}

var getPosition = function () {
	Ti.API.info("X: " + __x);
	return {
		x: __x,
		y: __y
	}
}

var setBackgroundColor = function (color) {
	if (color)
		$.menu.backgroundColor = color;
}

var hide = function (args) {
	if (!args) {
		$.menu.opacity = 0;
	} else {
		args = args || {};
		
		var endX = args.endX ? (args.endX - __radius) : 0;
		var endY = args.endY ? (args.endY - __radius) : 0;
		var duration = args.duration || 0;
		
		$.menu.animate({
			left: endX,
			top: endY,
			duration: duration,
			opacity: 0
		});
	}
}

var show = function (args) {
	if (!args) {
		$.menu.opacity = 1.0;
	} else {
		args = args || {};
		
		var startX = args.startX ? (args.startX - __radius) : 0;
		var startY = args.startY ? (args.startY - __radius) : 0;
		var endX = args.endX ? (args.endX - __radius) : 0;
		var endY = args.endY ? (args.endY - __radius) : 0;
		var duration = args.duration || 0;
		var delay = args.delay || 0;
		
		$.menu.left = startX;
		$.menu.top = startY;
		
		$.menu.animate({
			left: endX,
			top: endY,
			duration: duration,
			delay: delay,
			opacity: 1.0
		});
	}
}

// initialize menu element
setTitle(args.title);
setSize(__size);
setBackgroundColor(args.backgroundColor);

// exports
exports.setTitle = setTitle;
exports.setSize = setSize;
exports.getSize = getSize;
exports.setPosition = setPosition;
exports.getPosition = getPosition;
exports.setBackgroundColor = setBackgroundColor;
exports.hide = hide;
exports.show = show;
