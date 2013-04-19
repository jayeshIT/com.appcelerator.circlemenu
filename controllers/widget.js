
var __menu = null;
var __children = [];
var __open = false;
var __changing = false;
var __minAngle = 0;
var __maxAngle = 360;
var __distance = 0;

var init = function (args) {
	args = args || {};
	
	if (args.distance != undefined)
		__distance = args.distance;
	
	__menu = Widget.createController('menu', args);
	
	var x = args.x || Math.round($.container.size.width / 2);
	var y = args.y || Math.round($.container.size.height / 2);
	
	__menu.setPosition(x, y);
	
	var view = __menu.getView();
	
	view.addEventListener('click', function() {
		toggle();
	});
	
	$.container.add(view);
	
	if (args.minAngle != undefined)
		__minAngle = args.minAngle;
	
	if (args.maxAngle != undefined)
		__maxAngle = args.maxAngle;
}

var add = function (args) {
	args = args || {};
	var menu = Widget.createController('menu', args);
	var view = menu.getView();
	view.opacity = 0;
	
	if (args.click) {
		view.addEventListener('click', args.click);
	}
	
	__children.push(menu);
	
	$.container.add(menu.getView());
}

var open = function (duration) {
	if (__changing) {
		setTimeout(function() {
			open(duration);
		}, 100);
	}
	
	__changing = true;
	duration = duration || 200;
	
	var N = __children.length;
	var pos = __menu.getPosition();
	var W = pos.x;
	var H = pos.y;
	
	if (N == 0)
		return;
	
	var nn = N;
	if (N > 1 && __maxAngle < 360)
		nn = N-1;
		
	var angle = ((__maxAngle - __minAngle) / nn) * Math.PI / 180;
	var distance = Math.ceil(__menu.getSize() / 2) + __distance;
	
	var aa = (__minAngle+90) * Math.PI / 180;
	
	for (var i=0; i<N; i++) {
		var dd = distance + Math.ceil(__children[i].getSize() / 2)
		var x = W + Math.round(dd * Math.sin(aa));
		var y = H + Math.round(dd * Math.cos(aa));
		
		Ti.API.info("angle: " + aa * 180 / Math.PI);
		
		__children[i].show({
			startX: W,
			startY: H,
			endX: x,
			endY: y,
			duration: duration,
			delay: duration * i
		});
		
		aa -= angle;
		
		Ti.API.info("Set " + i + " position: " + x + ", " + y);
	}
	
	setTimeout(function() {
		__open = true;
		__changing = false;
	}, duration * (N+1));
}

var close = function(duration) {
	__open = false;
	duration = duration || 200;
	
	var N = __children.length;
	var pos = __menu.getPosition();
	var W = pos.x;
	var H = pos.y;
	
	for (var i=N-1; i>=0; i--) {
		__children[i].hide({
			endX: W,
			endY: H,
			duration: duration
		});
	}
}

var toggle = function() {
	if (__open)
		close();
	else
		open();
}


exports.init = init;
exports.add = add;
exports.open = open;
exports.close = close;
exports.toggle = toggle;
