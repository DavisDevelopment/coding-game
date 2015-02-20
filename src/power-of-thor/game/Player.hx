package game;

//- Import the Signal class from the Tannus Library
import tannus.io.Signal;

//- Import the Point class from the Tannus Library
import tannus.geom.Point;

//- Import the Enum of Possible Moves
import game.Move;

/**
  * Class Model of the Player's Avatar, in this case, Thor
  */
class Player {
	/**
	  * Constructor Function
	  */
	public function new(gam:Answer):Void {
		game = gam;
		pos = game.start;
		update = new Signal();

		init();
	}

/* === Instance Methods === */

	/**
	  * Initializer Method
	  */
	public inline function init():Void {
		update.on(makemove.bind(_));
	}

	/**
	  * Method which moves [this] Player
	  */
	public inline function makemove(energy : Float):Void {
		var lx:Int = game.light.ix;
		var ly:Int = game.light.iy;
	
		move(Move.North);
	}

	/**
	  * Perform an action
	  */
	private inline function action(data : String):Void {
		game.print( data );
	}

	/**
	  * Move [this] Player
	  */
	private function move(where : Move):Void {
		action(switch (where) {
			case North: 'N';
			case South: 'S';
			case East:  'E';
			case West:  'W';
			case NorthEast: 'NE';
			case NorthWest: 'NW';
			case SouthEast: 'SE';
			case SouthWest: 'SW';
		});
	}

/* === Instance Fields === */

	//- Reference to the Answer instance
	public var game:Answer;

	//- The current position of the Player
	public var pos:Point;

	//- The 'update' Event of [this] Player
	public var update : Signal<Float>;

	//- The 'x' Field of [this] Player
	public var x(get, set):Int;
	private inline function get_x():Int {
		return pos.ix;
	}
	private inline function set_x(nx : Int):Int {
		return (pos.ix = nx);
	}

	//- The 'y' Field of [this] Player
	public var y(get, set):Int;
	private inline function get_y():Int {
		return pos.iy;
	}
	private inline function set_y(ny : Int):Int {
		return (pos.iy = ny);
	}
}
