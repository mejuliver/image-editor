# image-editor
simple image editor that uses camanjs plugin for your web projects

to start, include assets/css/image-editor.min.css and then add camanjs

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
```

then add also the assets/js/image-editor.min.js then initialize the plugin

```
var image_editor = new cnimage_editor({ el : '< element id>' });
```

available options:

```
{
	el : '< element id >',
	image_editor : '< true/false to disable image editing capability >',
	auto_browse : '< true/false, default to false, open file browser after instance is created >
	browseFunct : '< a function to be called once selecting file completed, passing the value of the file browser >',
	displayImageFunct : '< function name, to be run after display image was called >',
	editFunct : '< function name, to be run after the edit button is clicked >',
	deleteFunct : '< function name, to be run after the delete button is clicked >',
	saveFunct : '< function name, to be run after the save button is clicked >',
	resetFunct : '< function name, to be run after the reset button is clicked >',
	closeFunct : '< function name, to be run after the close button is clicked >',
	height : '< initial height of the editor >',
	width : '< initial width of the editor >',
	autocrop : { // automatically crop image base on crop width and height, default to false
		width : <value>,
		height : <value>
	},
	cropbox_resize : { // set to false to disable
		minwidth : '< initial min width of the crop box >',
		minheight : '< initial min height of the crop box >',
		maxwidth : '< initial max width of the crop box >',
		maxheight : '< initial max height of the crop box >',
	},
	cropbox_width : '< initial width of the crop box >',
	cropbox_height : '< initial height of the crop box >',
	imgcache : '< true/false>' // cache img if image was edited, default to false
}
```
