
all: minify
	cd ../../dist/ && xclip -sel clip < power-of-thor.min.js

haxe:
	haxe build.hxml

minify: haxe
	cd ../../dist && node minify.js -input power-of-thor.js
