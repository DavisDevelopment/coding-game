
var ugly = require('uglify-js');
var fs = require('fs');

var args = process.argv;

function grab( filename ) {
	return (fs.readFileSync(filename + ''));
}

/**
 * Minify a Single File
 */
function minify( filename ) {
	var preamble = grab('generic-header.js');
	var _code = grab(filename);
	var code = (preamble + _code);

	//- Parse out the AST
	var toplevel = ugly.parse(code);
	toplevel.figure_out_scope();
	
	//- Compress that AST
	var comp_options = {};
	var compressor = ugly.Compressor( comp_options );
	var compressed = toplevel.transform( compressor );

	//- Mangle that AST
	compressed.figure_out_scope();
	compressed.compute_char_frequency();
	compressed.mangle_names();

	//- Convert the AST to a JavaScript string
	var out_options = {};
	var stream = ugly.OutputStream( out_options );
	compressed.print( stream );

	return stream.toString();
}

/**
 * Parses out the Command-Line Arguments given to this script
 */
function parse_args(args, obj) {
	var others = [];
	var opt = false;
	var opt_name = null;

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		
		//- Option
		if (arg.indexOf('-') == 0) {
			var name = arg.substring(1);
			
			opt = true;
			opt_name = name;
		}

		else {
			if (opt) {
				obj[opt_name] = arg;

				opt = false;
				opt_name = null;
			}

			else {
				others.push( arg );
			}
		}
	}

	return others;
}

/**
 * Creates a filename which indicates that the file is minified
 */
function get_min_filename( fn ) {
	var bits = fn.split('.');
	var ext = (bits.slice(bits.length-1));
	var rest = (bits.slice(0, bits.length-1));
	rest.push( 'min' );
	rest.push( ext );

	return rest.join( '.' );
}

/**
 * Primary Entry Point for this program
 */
function main( args ) {
	console.dir(ugly);
	var options = {};
	args = parse_args(args, options);

	var filename = options.input;
	var code = minify( filename );

	var writeTo = options.output;
	
	console.log( options );
	console.log( args );

	if (writeTo !== null && typeof writeTo !== 'undefined') {
		console.log( writeTo );
		fs.writeFileSync(writeTo, code);
	} else {
		writeTo = get_min_filename(filename);
		console.log( writeTo );
		fs.writeFileSync(writeTo, code);
	}
}

main( process.argv );
