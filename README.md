# jquery.pixelate.js

*A simple jQuery plugin to pixelate images, because I miss my Nintendo and high-resolution graphics are for suckers.*

Check out the demo [here](https://rawgithub.com/jmduke/jquery.pixelate.js/master/test.html#).

# Getting started

1.  Include jQuery and jquery.pixelate.js
2.  Apply the `pixelate()` function, a la:

```
$(document).ready(function() {
	$('img').pixelate();
});
```

3.  Revel in your newfound retro cred.

# Options

Right now, `jquery.pixelate.js` exposes only one option, `focus`.  `focus` (whose default is 0.5) takes a value from 0 to 1 which roughly corresponds to pixel density (where 'pixels' become larger as `focus` approaches 0).

# Credit

The general method comes from Ken Fyrstenberg's answer [on StackOverflow](http://stackoverflow.com/questions/19129644/how-to-pixelate-an-image-with-canvas-and-javascript).

# License

MIT
