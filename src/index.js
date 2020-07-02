import editor_ui from './editor_ui.js';
import imgcache from './imgcache.js';

function urimage_editor{
	this.init = (ops)=>{ // callable, initialize an element as a editor
		// default values
		let defaults = {
			el : false, // element
			auto_browse : false, // upon creation of the editor, auto browse. value: true/false
			on_browse : false, // a function trigger after browse success. value: function
			on_display : false, // a function trigger after image displayed successfully. value: function
			on_edit : false, // a function trigger after the edit button is click. value: function
			on_delete : false, // a function trigger after the delete button is click. value: function
			on_save : false, // a function trigger after the editor reset button is click. value: function
			on_reset : false, // a function trigger after the editor reset button is click. value: function
			on_close : false, // a function trigger after the editor close button is click. value: function
			editor_width : 300, // editor width in numeric. value: numeric
			editor_height : 300, // editor height in numeric. value: numeric
			cropbox_width : 200, // editor crop box in numeric. value: numeric
			cropbox_height : 200, // editor in crop box in numeric. value: numeric
			
			cropbox_resize : false, // editor crop box is resizable?. value: true/false
			cropbox_resize_minwidth : 10, // editor crop box min width. value: numeric
			cropbox_resize_minheight : 10, // editor crop box min height. value: numeric
			cropbox_resize_maxwidth : false, // editor crop box max width. value: numeric
			cropbox_resize_maxheight : false, // editor crop box max height. value: numeric
			autocrop : false, // if on display auto crop base on cropbox width and cropbox height or if provided an object of auto crop values. value: true/false | object e.g. { width, height }
			imgcache : false, // if image must be cache so if enabled, image will be store to browser db and will be loaded all the time
		}

		if( typeof ops == 'undefined' ){
			console.log('You need to provide options first');
			return;
		}

		this.create( Object.assign(defaults,ops) );
	}
	this.rotation = 0;
	this.create = (ops){ // create the editor

		imgcache.create();

		if( document.querySelector('#image-editor-modal') == null && $image_editor ){
			editor_ui.init(ops);
		}
		// to be continue
	}

		
}