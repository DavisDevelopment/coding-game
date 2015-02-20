package ;

import game.Player;

import tannus.geom.Point;

/**
  * Base-Class for all CodinGame Solutions
  */
class Answer {
	/**
	  * Constructor Function
	  */
	public function new():Void {
		init();
	}

/* === Instance Methods === */

	/**
	  * Gets the Starting Data for the Game
	  */
	public inline function init():Void {
		var inputs:Array<String> = readline().split(' ');
		var i:String->Int = Std.parseInt.bind(_);

		light = new Point(i(inputs[0]), i(inputs[1]));
		start = new Point(i(inputs[2]), i(inputs[3]));

		player = new Player( this );
		
		//- Initiate infinite loop
		while (true) {
			//- get current energy level
			var energy:Int = i(readline());
			
			//- Tell the Player to move
			player.update.dispatch( energy );
		}
	}

/* === Instance Fields === */

	/**
	  * The Player Instance
	  */
	public var player : Player;

	/**
	  * The Starting Position of the Player
	  */
	public var start : Point;

	/**
	  * The Position of the Light of Power
	  */
	public var light : Point;

	/**
	  * Function which gets input from the CodinGame platform
	  */
	private var readline(get, never):Void->Null<String>;
	private inline function get_readline():Void->Null<String> {
		return (cast (untyped __js__('readline')));
	}

	/**
	  * Function which outputs data to the CodinGame platform
	  */
	public var print(get, never):Dynamic;
	private inline function get_print():Dynamic {
		return (cast (untyped __js__('print')));
	}

	/**
	  * Main Entry Point of the Program
	  */
	public static function main():Void {
		var me = new Answer();
	}
}
