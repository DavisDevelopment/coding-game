package ;

/**
  * Base-Class for all CodinGame Solutions
  */
class Answer {
	/**
	  * Constructor Function
	  */
	public function new():Void {
		null;
	}

/* === Instance Fields === */

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
	private var print(get, never):Dynamic;
	private inline function get_print():Dynamic {
		return (cast (untyped __js__('print')));
	}

	public static function main():Void {
		
		var me = new Answer();
	}
}
