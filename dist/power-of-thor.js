(function ($hx_exports) { "use strict";
$hx_exports.tannus = $hx_exports.tannus || {};
$hx_exports.tannus.geom = $hx_exports.tannus.geom || {};
;$hx_exports.tannus.core = $hx_exports.tannus.core || {};
var console = (1,eval)('this').console || {log:function(){}};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Answer = function() {
	this.init();
};
Answer.__name__ = true;
Answer.main = function() {
	var me = new Answer();
};
Answer.prototype = {
	init: function() {
		var inputs = readline().split(" ");
		var i = (function(f) {
			return function(x) {
				return f(x);
			};
		})(Std.parseInt);
		var x1 = i(inputs[0]);
		var y = i(inputs[1]);
		this.light = [x1,y,0];
		var x2 = i(inputs[2]);
		var y1 = i(inputs[3]);
		this.start = [x2,y1,0];
		this.player = new game.Player(this);
		while(true) {
			var energy = i(readline());
			this.player.update.dispatch(energy);
		}
	}
	,get_readline: function() {
		return readline;
	}
	,get_print: function() {
		return print;
	}
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.array = function(it) {
	var a = [];
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var game = {};
game.Move = { __ename__ : true, __constructs__ : ["North","South","East","West","NorthEast","SouthEast","NorthWest","SouthWest"] };
game.Move.North = ["North",0];
game.Move.North.__enum__ = game.Move;
game.Move.South = ["South",1];
game.Move.South.__enum__ = game.Move;
game.Move.East = ["East",2];
game.Move.East.__enum__ = game.Move;
game.Move.West = ["West",3];
game.Move.West.__enum__ = game.Move;
game.Move.NorthEast = ["NorthEast",4];
game.Move.NorthEast.__enum__ = game.Move;
game.Move.SouthEast = ["SouthEast",5];
game.Move.SouthEast.__enum__ = game.Move;
game.Move.NorthWest = ["NorthWest",6];
game.Move.NorthWest.__enum__ = game.Move;
game.Move.SouthWest = ["SouthWest",7];
game.Move.SouthWest.__enum__ = game.Move;
game.Player = function(gam) {
	this.game = gam;
	this.pos = this.game.start;
	this.update = new tannus.io.Signal();
	this.init();
};
game.Player.__name__ = true;
game.Player.prototype = {
	init: function() {
		this.update.on((function(f) {
			return function(a1) {
				f(a1);
			};
		})($bind(this,this.makemove)));
	}
	,makemove: function(energy) {
		var lx = this.game.light[0] | 0;
		var ly = this.game.light[1] | 0;
		this.move(game.Move.North);
	}
	,action: function(data) {
		print(data);
	}
	,move: function(where) {
		print((function($this) {
			var $r;
			switch(where[1]) {
			case 0:
				$r = "N";
				break;
			case 1:
				$r = "S";
				break;
			case 2:
				$r = "E";
				break;
			case 3:
				$r = "W";
				break;
			case 4:
				$r = "NE";
				break;
			case 6:
				$r = "NW";
				break;
			case 5:
				$r = "SE";
				break;
			case 7:
				$r = "SW";
				break;
			}
			return $r;
		}(this)));
	}
	,get_x: function() {
		return this.pos[0] | 0;
	}
	,set_x: function(nx) {
		return Std["int"](this.pos[0] = nx);
	}
	,get_y: function() {
		return this.pos[1] | 0;
	}
	,set_y: function(ny) {
		return Std["int"](this.pos[1] = ny);
	}
};
var haxe = {};
haxe.IMap = function() { };
haxe.IMap.__name__ = true;
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [haxe.IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js.Boot.__string_rec(o[i1],s); else str2 += js.Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var tannus = {};
tannus.core = {};
tannus.core.Destructible = function() { };
tannus.core.Destructible.__name__ = true;
tannus.core.EventDispatcher = $hx_exports.tannus.core.EventDispatcher = function() {
	this.handlers = new haxe.ds.StringMap();
};
tannus.core.EventDispatcher.__name__ = true;
tannus.core.EventDispatcher.prototype = {
	makeHandler: function(channel,func,once) {
		return new tannus.core.Handler(channel,func,once,this);
	}
	,allHandlers: function(channel) {
		var _g = this;
		return function() {
			if(_g.handlers.exists(channel)) return Lambda.array(_g.handlers.get(channel)); else return [];
		};
	}
	,callHandler: function(handler,data) {
		handler.call(data);
	}
	,hasHandler: function(channel,handler) {
		var channelExists = this.handlers.exists(channel);
		if(channelExists) {
			var handlerSet;
			var this1 = this.allHandlers(channel);
			handlerSet = this1();
			if(handlerSet.length == 0) return false;
			var _g = 0;
			while(_g < handlerSet.length) {
				var handl = handlerSet[_g];
				++_g;
				if(handl.equals(handler)) return true;
			}
			return false;
		} else return false;
	}
	,addHandler: function(channel,handler) {
		var handlerMap = this.handlers.get(channel);
		if(handlerMap == null) {
			handlerMap = new haxe.ds.StringMap();
			this.handlers.set(channel,handlerMap);
		}
		handlerMap.set(handler.id,handler);
	}
	,lissen: function(channel,handler,once) {
		if(once == null) once = false;
		var handlerObj = new tannus.core.Handler(channel,handler,once,this);
		this.addHandler(channel,handlerObj);
	}
	,on: function(channel,handler,once) {
		if(once == null) once = false;
		this.lissen(channel,handler,once);
	}
	,broadcast: function(channel,data,mappr) {
		var recipients;
		var this1 = this.allHandlers(channel);
		recipients = this1();
		var _g = 0;
		while(_g < recipients.length) {
			var handl = recipients[_g];
			++_g;
			var f1 = (function(f) {
				return function(a1) {
					f(a1);
				};
			})($bind(handl,handl.call));
			if(mappr != null) f1 = mappr(handl);
			f1(data);
		}
	}
	,emit: function(channel,data) {
		this.broadcast(channel,data);
	}
	,unbind: function(channel) {
		this.ignore(channel);
	}
	,ignore: function(channel,handler) {
	}
	,forward: function(target,events) {
		var _g = 0;
		while(_g < events.length) {
			var eventName = [events[_g]];
			++_g;
			this.on(eventName[0],(function(eventName) {
				return function(data) {
					target.emit(eventName[0],data);
				};
			})(eventName));
		}
		return;
	}
	,forwardFrom: function(target,events) {
		var _g1 = this;
		var _g = 0;
		while(_g < events.length) {
			var eventName = [events[_g]];
			++_g;
			target.on(eventName[0],(function(eventName) {
				return function(data) {
					_g1.emit(eventName[0],data);
				};
			})(eventName));
		}
	}
};
tannus.core.Handler = function(channel,func,once,owner) {
	var _g = this;
	this.id = tannus.io.Memory.uniqueIdString("handler");
	this.dispatcher = owner;
	this.channel = channel;
	this.func = func;
	this.once = once;
	var _func = this.func;
	this.equals = function(other) {
		return other == _g.func || other == _func;
	};
};
tannus.core.Handler.__name__ = true;
tannus.core.Handler.__interfaces__ = [tannus.core.Destructible];
tannus.core.Handler.prototype = {
	wrap: function(wrapper) {
		var _func = this.func;
		this.func = Reflect.makeVarArgs(function(args) {
			wrapper(_func,args);
		});
	}
	,destroy: function() {
		this.func = null;
		var this1 = this.dispatcher.handlers.get(this.channel);
		this1.remove(this.id);
	}
	,call: function(data) {
		if(Reflect.isFunction(this.func)) {
			this.func(data);
			if(this.once) this.destroy();
		}
	}
};
tannus.geom = {};
tannus.geom._Angle = {};
tannus.geom._Angle.Angle_Impl_ = {};
tannus.geom._Angle.Angle_Impl_.__name__ = true;
tannus.geom._Angle.Angle_Impl_._new = function(angl) {
	return angl;
};
tannus.geom._Angle.Angle_Impl_.plus = function(this1,num) {
	return this1 + num;
};
tannus.geom._Angle.Angle_Impl_.get_degrees = function(this1) {
	return this1;
};
tannus.geom._Angle.Angle_Impl_.get_radians = function(this1) {
	return this1 * 0.0174532925199432955;
};
tannus.geom._Angle.Angle_Impl_.fromDegrees = function(fl) {
	return fl;
};
tannus.geom._Angle.Angle_Impl_.fromRadians = function(fl) {
	return fl * 0.0174532925199432955;
};
tannus.geom.Line = $hx_exports.tannus.geom.Line = function(start,end) {
	this.start = start;
	this.end = end;
};
tannus.geom.Line.__name__ = true;
tannus.geom.Line.prototype = {
	rect: function() {
		var x = Math.min(this.start[0],this.end[0]);
		var y = Math.min(this.start[1],this.end[1]);
		var width = Math.max(this.start[0],this.end[0]) - x;
		var height = Math.max(this.start[1],this.end[1]) - y;
		return new tannus.geom.Rectangle(x,y,width,height);
	}
};
tannus.geom._Point = {};
tannus.geom._Point.Point_Impl_ = {};
tannus.geom._Point.Point_Impl_.__name__ = true;
tannus.geom._Point.Point_Impl_._new = function(x,y,z) {
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	return [x,y,z];
};
tannus.geom._Point.Point_Impl_.clone = function(this1) {
	return [this1[0],this1[1],this1[2]];
};
tannus.geom._Point.Point_Impl_.apply = function(this1,other,f) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i = _g1++;
		_g.push(f(this1[i],other[i]));
	}
	return _g;
};
tannus.geom._Point.Point_Impl_.checkAll = function(this1,other,f) {
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var one = this1[i];
		var two = other[i];
		if(!f(one,two)) return false;
	}
	return true;
};
tannus.geom._Point.Point_Impl_.sum = function(this1,other) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i = _g1++;
		_g.push(this1[i] + other[i]);
	}
	return _g;
};
tannus.geom._Point.Point_Impl_.dif = function(this1,other) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i = _g1++;
		_g.push(this1[i] - other[i]);
	}
	return _g;
};
tannus.geom._Point.Point_Impl_.product = function(this1,other) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i = _g1++;
		_g.push(this1[i] * other[i]);
	}
	return _g;
};
tannus.geom._Point.Point_Impl_.quotient = function(this1,other) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i = _g1++;
		_g.push(this1[i] / other[i]);
	}
	return _g;
};
tannus.geom._Point.Point_Impl_.angleTo = function(this1,other) {
	var angl = tannus.math.TMath.toDegrees(Math.atan2(other[0] - this1[0],other[1] - this1[1]));
	return angl;
};
tannus.geom._Point.Point_Impl_.equals = function(this1,other) {
	return tannus.geom._Point.Point_Impl_.checkAll(this1,other,function(a,b) {
		return a == b;
	});
};
tannus.geom._Point.Point_Impl_.nequals = function(this1,other) {
	return tannus.geom._Point.Point_Impl_.checkAll(this1,other,function(a,b) {
		return a != b;
	});
};
tannus.geom._Point.Point_Impl_.greaterThan = function(this1,other) {
	return (function($this) {
		var $r;
		var this2 = this1;
		$r = Math.sqrt(this2[0] * this2[0] + this2[1] * this2[1]);
		return $r;
	}(this)) > Math.sqrt(other[0] * other[0] + other[1] * other[1]);
};
tannus.geom._Point.Point_Impl_.lessThan = function(this1,other) {
	return (function($this) {
		var $r;
		var this2 = this1;
		$r = Math.sqrt(this2[0] * this2[0] + this2[1] * this2[1]);
		return $r;
	}(this)) < Math.sqrt(other[0] * other[0] + other[1] * other[1]);
};
tannus.geom._Point.Point_Impl_.get_self = function(this1) {
	return this1;
};
tannus.geom._Point.Point_Impl_.get_nums = function(this1) {
	return this1;
};
tannus.geom._Point.Point_Impl_.set_nums = function(this1,nms) {
	this1[0] = nms[0];
	this1[1] = nms[1];
	this1[2] = nms[2];
	return this1;
};
tannus.geom._Point.Point_Impl_.get_magnitude = function(this1) {
	return Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1]);
};
tannus.geom._Point.Point_Impl_.get_x = function(this1) {
	return this1[0];
};
tannus.geom._Point.Point_Impl_.set_x = function(this1,nx) {
	return this1[0] = nx;
};
tannus.geom._Point.Point_Impl_.get_y = function(this1) {
	return this1[1];
};
tannus.geom._Point.Point_Impl_.set_y = function(this1,ny) {
	return this1[1] = ny;
};
tannus.geom._Point.Point_Impl_.get_z = function(this1) {
	return this1[2];
};
tannus.geom._Point.Point_Impl_.set_z = function(this1,nz) {
	return this1[2] = nz;
};
tannus.geom._Point.Point_Impl_.get_ix = function(this1) {
	return this1[0] | 0;
};
tannus.geom._Point.Point_Impl_.set_ix = function(this1,nix) {
	return Std["int"](this1[0] = nix);
};
tannus.geom._Point.Point_Impl_.get_iy = function(this1) {
	return this1[1] | 0;
};
tannus.geom._Point.Point_Impl_.set_iy = function(this1,niy) {
	return Std["int"](this1[1] = niy);
};
tannus.geom._Point.Point_Impl_.toString = function(this1) {
	return "Point(" + this1[0] + ", " + this1[1] + ", " + this1[2] + ")";
};
tannus.geom.Rectangle = $hx_exports.tannus.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
tannus.geom.Rectangle.__name__ = true;
tannus.geom.Rectangle.fromRelationship = function(vect,rect) {
	return new tannus.geom.Rectangle(rect.width * vect.x,rect.height * vect.y,rect.width * vect.width,rect.height * vect.height);
};
tannus.geom.Rectangle.prototype = {
	clone: function() {
		return new tannus.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,area: function() {
		return this.width * this.height;
	}
	,equals: function(other) {
		return this.x == other.x && this.y == other.y && this.width == other.width && this.height == other.height;
	}
	,corners: function() {
		var points = [];
		points.push([this.x,this.y,0]);
		points.push([this.x + this.width,this.y,0]);
		points.push([this.x + this.width,this.y + this.height,0]);
		points.push([this.x,this.y + this.height,0]);
		return points;
	}
	,topLeft: function() {
		return [this.x,this.y,0];
	}
	,topRight: function() {
		return [this.x + this.width,this.y,0];
	}
	,bottomLeft: function() {
		return [this.x,this.y + this.height,0];
	}
	,bottomRight: function() {
		return [this.x + this.width,this.y + this.height,0];
	}
	,contains: function(cx,cy) {
		return cx > this.x && cx < this.x + this.width && (cy > this.y && cy < this.y + this.height);
	}
	,containsPoint: function(point) {
		return this.contains(point[0],point[1]);
	}
	,containsRect: function(rect) {
		var pts = this.corners();
		var _g = 0;
		while(_g < pts.length) {
			var pt = pts[_g];
			++_g;
			if(!this.containsPoint(pt)) return false;
		}
		return true;
	}
	,intersects: function(other) {
		var pts = other.corners();
		var _g = 0;
		while(_g < pts.length) {
			var pt = pts[_g];
			++_g;
			if(this.containsPoint(pt)) return true;
		}
		return false;
	}
	,relationshipTo: function(other) {
		return new tannus.geom.Rectangle(this.x / other.width,this.y / other.height,this.width / other.width,this.height / other.height);
	}
	,relateTo: function(pt) {
		var rx = pt[0];
		var ry = pt[1];
		rx = rx / this.width;
		ry = ry / this.height;
		return [rx,ry,0];
	}
	,isEmpty: function() {
		return this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0;
	}
	,orientation: function() {
		if(this.width > this.height) return tannus.utils.Orientation.OLandscape; else if(this.width < this.height) return tannus.utils.Orientation.OPortrait; else if(this.width == this.height) return tannus.utils.Orientation.OSquare; else throw "WhatTheFuck: " + Std.string(this);
	}
	,toString: function() {
		return "Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")";
	}
};
tannus.io = {};
tannus.io.Memory = function() { };
tannus.io.Memory.__name__ = true;
tannus.io.Memory.uniqueIdString = function(prefix) {
	if(prefix == null) prefix = "";
	var id = prefix + tannus.io.Memory.state;
	tannus.io.Memory.state++;
	return id;
};
tannus.io.Memory.uniqueIdInt = function() {
	var id = tannus.io.Memory.state;
	tannus.io.Memory.state++;
	return id;
};
tannus.io._Ptr = {};
tannus.io._Ptr.Ptr_Impl_ = {};
tannus.io._Ptr.Ptr_Impl_.__name__ = true;
tannus.io._Ptr.Ptr_Impl_._new = function(gtr,str) {
	return { a : gtr, b : str};
};
tannus.io._Ptr.Ptr_Impl_.get_value = function(this1) {
	return this1.a();
};
tannus.io._Ptr.Ptr_Impl_.set_value = function(this1,newvalue) {
	this1.b(newvalue);
	return this1.a();
};
tannus.io._Ptr.Ptr_Impl_.get = function(this1) {
	return this1.a();
};
tannus.io._Ptr.Ptr_Impl_.set = function(this1,v) {
	this1.b(v);
	return;
};
tannus.io._Ptr.Ptr_Impl_.and = function(main,child) {
	var wrapper = function(set,val) {
		set(val);
		child.b(val);
	};
	var _ref = main.b;
	main.b = function(v) {
		wrapper(_ref,v);
	};
	main.b;
	main;
	return main;
};
tannus.io._Ptr.Ptr_Impl_.intercept = function(intercepted,mutator) {
	var wrapper = function(set,v) {
		set(mutator(false,true,v));
	};
	var _ref = intercepted.b;
	intercepted.b = function(v1) {
		wrapper(_ref,v1);
	};
	intercepted.b;
	intercepted;
	var wrapper1 = function(val) {
		return mutator(true,false,val);
	};
	var _ref1 = intercepted.a;
	intercepted.a = function() {
		return wrapper1(_ref1());
	};
	intercepted.a;
	intercepted;
	return intercepted;
};
tannus.io._Ptr.Ptr_Impl_.wrapSet = function(this1,wrapper) {
	var _ref = this1.b;
	this1.b = function(v) {
		wrapper(_ref,v);
	};
	this1.b;
	return this1;
};
tannus.io._Ptr.Ptr_Impl_.wrapGet = function(this1,wrapper) {
	var _ref = this1.a;
	this1.a = function() {
		return wrapper(_ref());
	};
	this1.a;
	return this1;
};
tannus.io._Ptr.Ptr_Impl_.get_v = function(this1) {
	return this1.a();
};
tannus.io._Ptr.Ptr_Impl_.set_v = function(this1,val) {
	this1.b(val);
	return val;
};
tannus.io._Ptr.Ptr_Impl_.setValue = function(this1,val) {
	this1.b(val);
};
tannus.io._Ptr.Ptr_Impl_.setPointer = function(this1,val) {
	var value = val();
	this1.b(value);
};
tannus.io._Ptr.Ptr_Impl_.setPtr = function(this1,val) {
	var value = val.a();
	this1.b(value);
};
tannus.io._Ptr.Ptr_Impl_.too = function(this1) {
	return this1.a();
};
tannus.io._Ptr.Ptr_Impl_.toString = function(this1) {
	return Std.string(this1.a());
};
tannus.io._Ptr.Ptr_Impl_.toGetterSetterFunction = function(this1) {
	return function(newvalue) {
		if(newvalue != null) this1.b(newvalue);
		return this1.a();
	};
};
tannus.io.Signal = function() {
	this.listeners = new List();
};
tannus.io.Signal.__name__ = true;
tannus.io.Signal.prototype = {
	listen: function(action,once) {
		if(once == null) once = false;
		var handler = new tannus.io.Handler(action,once);
		this.listeners.add(handler);
	}
	,listenOnce: function(action) {
		this.listen(action,true);
	}
	,once: function(action) {
		this.listen(action,true);
	}
	,on: function(action) {
		this.listen(action);
	}
	,dispatch: function(context) {
		var _g_head = this.listeners.h;
		var _g_val = null;
		while(_g_head != null) {
			var listener;
			_g_val = _g_head[0];
			_g_head = _g_head[1];
			listener = _g_val;
			listener.fire(context);
		}
		this.gc();
	}
	,reset: function() {
		this.listeners = new List();
	}
	,wrap: function(action) {
		return function(ctx) {
			action();
		};
	}
	,gc: function() {
		this.listeners = this.listeners.filter(function(listener) {
			return !listener.remove;
		});
	}
};
tannus.io.Handler = function(f,once) {
	if(once == null) once = false;
	this.action = f;
	this.once = once;
	this.remove = false;
	this.id = tannus.io.Memory.uniqueIdString("handler-");
};
tannus.io.Handler.__name__ = true;
tannus.io.Handler.prototype = {
	fire: function(data) {
		this.action(data);
		if(this.once) this.remove = true;
	}
};
tannus.math = {};
tannus.math.TMath = function() { };
tannus.math.TMath.__name__ = true;
tannus.math.TMath.toRadians = function(degrees) {
	return degrees * 3.141592653589793 / 180;
};
tannus.math.TMath.toDegrees = function(radians) {
	return radians * 180 / 3.141592653589793;
};
tannus.math.TMath.angleBetween = function(x1,y1,x2,y2) {
	return tannus.math.TMath.toDegrees(Math.atan2(x2 - x1,y2 - y1));
};
tannus.math.TMath.max = function(a,b) {
	if(a > b) return a; else return b;
};
tannus.math.TMath.min = function(a,b) {
	if(a < b) return a; else return b;
};
tannus.math.TMath.average = function(values) {
	var sum = 0;
	var _g = 0;
	while(_g < values.length) {
		var n = values[_g];
		++_g;
		sum += n;
	}
	return sum / values.length;
};
tannus.math.TMath.largest = function(items,predicate) {
	var highest = 0;
	var $it0 = $iterator(items)();
	while( $it0.hasNext() ) {
		var item = $it0.next();
		highest = tannus.math.TMath.max(highest,predicate(item));
	}
	return highest;
};
tannus.math.TMath.smallest = function(items,predicate) {
	var lowest = 0;
	var $it0 = $iterator(items)();
	while( $it0.hasNext() ) {
		var item = $it0.next();
		lowest = tannus.math.TMath.min(lowest,predicate(item));
	}
	return lowest;
};
tannus.math.TMath.clamp = function(value,min,max) {
	if(value < min) return min; else if(value > max) return max; else return value;
};
tannus.math.TMath.sign = function(value) {
	if(value < 0) return -1; else if(value > 0) return 1; else return 0;
};
tannus.utils = {};
tannus.utils.Orientation = { __ename__ : true, __constructs__ : ["OLandscape","OPortrait","OSquare"] };
tannus.utils.Orientation.OLandscape = ["OLandscape",0];
tannus.utils.Orientation.OLandscape.__enum__ = tannus.utils.Orientation;
tannus.utils.Orientation.OPortrait = ["OPortrait",1];
tannus.utils.Orientation.OPortrait.__enum__ = tannus.utils.Orientation;
tannus.utils.Orientation.OSquare = ["OSquare",2];
tannus.utils.Orientation.OSquare.__enum__ = tannus.utils.Orientation;
tannus.utils._Pointer = {};
tannus.utils._Pointer.Pointer_Impl_ = {};
tannus.utils._Pointer.Pointer_Impl_.__name__ = true;
tannus.utils._Pointer.Pointer_Impl_._new = function(f) {
	return f;
};
tannus.utils._Pointer.Pointer_Impl_.get = function(this1) {
	return this1();
};
tannus.utils._Pointer.Pointer_Impl_.reassignToPointer = function(this1,other) {
	this1 = other;
};
tannus.utils._Pointer.Pointer_Impl_.toString = function(self) {
	return self();
};
tannus.utils._Setter = {};
tannus.utils._Setter.Setter_Impl_ = {};
tannus.utils._Setter.Setter_Impl_.__name__ = true;
tannus.utils._Setter.Setter_Impl_._new = function(f) {
	return f;
};
tannus.utils._Setter.Setter_Impl_.set = function(this1,value) {
	this1(value);
};
tannus.utils._Value = {};
tannus.utils._Value.Value_Impl_ = {};
tannus.utils._Value.Value_Impl_.__name__ = true;
tannus.utils._Value.Value_Impl_._new = function(g,s) {
	return new tannus.utils.CValue(g,s);
};
tannus.utils._Value.Value_Impl_.get = function(this1) {
	return this1.get();
};
tannus.utils._Value.Value_Impl_.set = function(this1,nv) {
	return this1.set(nv);
};
tannus.utils._Value.Value_Impl_.get_self = function(this1) {
	return this1;
};
tannus.utils._Value.Value_Impl_.get_v = function(this1) {
	return this1.get();
};
tannus.utils._Value.Value_Impl_.set_v = function(this1,nv) {
	this1.set(nv);
	return nv;
};
tannus.utils._Value.Value_Impl_.bind = function(this1,other) {
	other.on("change",function() {
		this1.set(other.get());
	});
};
tannus.utils._Value.Value_Impl_.dereference = function(this1) {
	return this1.get();
};
tannus.utils._Value.Value_Impl_.literalSet = function(this1,other) {
	return this1.set(other);
};
tannus.utils._Value.Value_Impl_.pointerSet = function(this1,other) {
	return this1.set(other());
};
tannus.utils._Value.Value_Impl_.valueSet = function(this1,other) {
	return this1.set(other.get());
};
tannus.utils._Value.Value_Impl_.toType = function(this1) {
	return this1.get();
};
tannus.utils._Value.Value_Impl_.toString = function(self) {
	return self.get();
};
tannus.utils._Value.Value_Impl_.all = function(vals) {
	var this1 = new tannus.utils.CValue(function() {
		return vals[0];
	},function(s) {
		var _g = 0;
		while(_g < vals.length) {
			var x = vals[_g];
			++_g;
			x.set(s);
		}
	});
	return this1.get();
};
tannus.utils.CValue = function(g,s) {
	tannus.core.EventDispatcher.call(this);
	this.gtr = g;
	this.str = s;
	this.__destructor = null;
};
tannus.utils.CValue.__name__ = true;
tannus.utils.CValue.__super__ = tannus.core.EventDispatcher;
tannus.utils.CValue.prototype = $extend(tannus.core.EventDispatcher.prototype,{
	get: function() {
		return this.gtr();
	}
	,set: function(nv) {
		this.str(nv);
		this.emit("change",this);
		return this.get();
	}
	,destroy: function() {
		var f = this.__destructor;
		if(Reflect.isFunction(f)) f();
	}
	,set_ondestroy: function(listener) {
		this.__destructor = listener;
		return listener;
	}
});
tannus.utils.tuples = {};
tannus.utils.tuples._TwoTuple = {};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_ = {};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.__name__ = true;
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_._new = function(a,b) {
	return { a : a, b : b};
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.get_self = function(this1) {
	return this1;
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.toArray = function(this1) {
	return [this1.a,this1.b];
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.get = function(this1,index) {
	switch(index) {
	case 0:
		return this1.a;
	case 1:
		return this1.b;
	default:
		throw "Cannot access index " + index + " of TwoTuple";
	}
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.set = function(this1,index,v) {
	switch(index) {
	case 0:
		var this2 = this1;
		this2.a = v;
		this2.a;
		break;
	case 1:
		var this3 = this1;
		this3.b = v;
		this3.b;
		break;
	default:
		throw "Cannot access index " + index + " of TwoTuple";
	}
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.get_one = function(this1) {
	return this1.a;
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.set_one = function(this1,na) {
	this1.a = na;
	return this1.a;
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.get_two = function(this1) {
	return this1.b;
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.set_two = function(this1,nb) {
	this1.b = nb;
	return this1.b;
};
tannus.utils.tuples._TwoTuple.TwoTuple_Impl_.toString = function(this1) {
	return "(" + Std.string(this1.a) + ", " + Std.string(this1.b) + ")";
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
tannus.io.Memory.state = 0;
tannus.math.TMath.E = 2.718281828459045;
tannus.math.TMath.LN2 = 0.6931471805599453;
tannus.math.TMath.LN10 = 2.302585092994046;
tannus.math.TMath.LOG2E = 1.4426950408889634;
tannus.math.TMath.LOG10E = 0.43429448190325176;
tannus.math.TMath.PI = 3.141592653589793;
tannus.math.TMath.SQRT1_2 = 0.7071067811865476;
tannus.math.TMath.SQRT2 = 1.4142135623730951;
tannus.math.TMath.INT_MIN = -2147483648;
tannus.math.TMath.INT_MAX = 2147483647;
tannus.math.TMath.FLOAT_MIN = -1.79769313486231e+308;
tannus.math.TMath.FLOAT_MAX = 1.79769313486231e+308;
Answer.main();
})(typeof window != "undefined" ? window : exports);
