import './style.scss';
window.cnimage_editor = function($options){


	let $storage = window.localStorage;

	let $editor = ( typeof $options == 'object' && $options.hasOwnProperty('el') ) ? document.querySelector($options.el) : false;

	let $ob = ( typeof $options == 'object' && $options.hasOwnProperty('auto_browse')  ) ? $options.auto_browse : false;

	let $image_editor = ( typeof $options == 'object' && $options.hasOwnProperty('image_editor') ) ? $options.image_editor : true;

	let $browseFunct = ( typeof $options == 'object' && $options.hasOwnProperty('browseFunct') && typeof $options.browseFunct == 'function' ) ? $options.browseFunct : false;

	let $displayImageFunct = ( typeof $options == 'object' && $options.hasOwnProperty('displayImageFunct') && typeof $options.displayImageFunct == 'function' ) ? $options.displayImageFunct : false;

	let $editFunct = ( typeof $options == 'object' && $options.hasOwnProperty('editFunct') && typeof $options.editFunct == 'function' ) ? $options.editFunct : false;

	let $deleteFunct = ( typeof $options == 'object' && $options.hasOwnProperty('deleteFunct') && typeof $options.deleteFunct == 'function' ) ? $options.deleteFunct : false;

	let $saveFunct = ( typeof $options == 'object' && $options.hasOwnProperty('saveFunct') && typeof $options.saveFunct == 'function' ) ? $options.saveFunct : false;

	let $resetFunct = ( typeof $options == 'object' && $options.hasOwnProperty('resetFunct') && typeof $options.resetFunct == 'function' ) ? $options.resetFunct : false;

	let $closeFunct = ( typeof $options == 'object' && $options.hasOwnProperty('closeFunct') && typeof $options.closeFunct == 'function' ) ? $options.closeFunct : false;

	let $global = this;

	let $editor_width = ( typeof $options == 'object' && $options.hasOwnProperty('width') ) ? $options.width : 300;

	let $editor_height = ( typeof $options == 'object' && $options.hasOwnProperty('height') ) ? $options.height : 300;

	let $cropbox_width = ( typeof $options == 'object' && $options.hasOwnProperty('cropbox_width') ) ? $options.cropbox_width : 150;
	let $cropbox_height = ( typeof $options == 'object' && $options.hasOwnProperty('cropbox_height') ) ? $options.cropbox_height : 150;
	let $cropbox_resize = ( typeof $options == 'object' && $options.hasOwnProperty('cropbox_resize') ) ? $options.cropbox_resize : true;
	
	let $cropbox_resize_minwidth = ( typeof $options == 'object' && $cropbox_resize && $options.cropbox_resize.hasOwnProperty('minwidth') ) ? $options.cropbox_resize.minwidth : 50;
	let $cropbox_resize_minheight = ( typeof $options == 'object' && $cropbox_resize && $options.cropbox_resize.hasOwnProperty('minheight') ) ? $options.cropbox_resize.minheight : 50;
	let $cropbox_resize_maxwidth = ( typeof $options == 'object' && $cropbox_resize && $options.cropbox_resize.hasOwnProperty('maxwidth') ) ? $options.cropbox_resize.maxwidth : 800;
	let $cropbox_resize_maxheight = ( typeof $options == 'object' && $cropbox_resize && $options.cropbox_resize.hasOwnProperty('maxheight') ) ? $options.cropbox_resize.maxheight : 800;

	let $autocrop = ( typeof $options == 'object' && typeof $options.autocrop == 'object' ) ? $options.autocrop : false;

	let $cropboxsave_width = ( $autocrop && typeof $options.autocrop == 'object' && $options.autocrop.hasOwnProperty('width') ) ? $options.autocrop.width : 50;
	let $cropboxsave_height = ( $autocrop && typeof $options.autocrop == 'object' && $options.autocrop.hasOwnProperty('height') ) ? $options.autocrop.height : 50;

	let $imgcache = ( typeof $options == 'object' && $options.hasOwnProperty('imgcache') ) ? $options.imgcache : false;

	if( $imgcache && $storage == 'undefined' ){
		console.log('Web Storage is not supported! image caching mechanism disabled');
		$imgcache = false;
	}

	if( !$imgcache && $storage ){
		$storage.setItem('imgeditorcachedb',[]);
	}

    let rotation = 0;

    if( !$editor ){
    	console.log('Bind an element e.g. new cnimage_editor( {  el : <element> } )');
    	return;
    }

    let _editordata = document.querySelector('body').getAttribute('data-imgeditor'),_editor = {};

	if( _editordata ){
		_editor = JSON.parse(_editordata);
		_editor.push({
			$el : $options.el,
			$editor : $editor,
			$image_editor : $image_editor,
			$auto_browse : $ob,
			$browseFunct : $browseFunct,
			$displayImageFunct : $displayImageFunct,
			$editFunct : $editFunct,
			$deleteFunct : $deleteFunct,
			$saveFunct : $saveFunct,
			$resetFunct : $resetFunct,
			$closeFunct : $closeFunct,
			$editor_width : $editor_width,
			$editor_height : $editor_height,
			$cropbox_width : $cropbox_width,
			$cropbox_height : $cropbox_height,
			$cropboxsave_width : $cropboxsave_width,
			$cropboxsave_height : $cropboxsave_height,
			$cropbox_resize : $cropbox_resize,
			$cropbox_resize_minwidth : $cropbox_resize_minwidth,
			$cropbox_resize_minheight : $cropbox_resize_minheight,
			$cropbox_resize_maxwidth : $cropbox_resize_maxwidth,
			$cropbox_resize_maxheight : $cropbox_resize_maxheight,
			$autocrop : $autocrop,
			$cropboxsave_width : $cropboxsave_width,
			$cropboxsave_height : $cropboxsave_height,
			$imgcache : $imgcache,
			rawoptions : $options
		});
	}else{
		_editor = [{
			$el : $options.el,
			$editor : $editor,
			$image_editor : $image_editor,
			$auto_browse : $ob,
			$browseFunct : $browseFunct,
			$displayImageFunct : $displayImageFunct,
			$editFunct : $editFunct,
			$deleteFunct : $deleteFunct,
			$saveFunct : $saveFunct,
			$resetFunct : $resetFunct,
			$closeFunct : $closeFunct,
			$editor_width : $editor_width,
			$editor_height : $editor_height,
			$cropbox_width : $cropbox_width,
			$cropbox_height : $cropbox_height,
			$cropboxsave_width : $cropboxsave_width,
			$cropboxsave_height : $cropboxsave_height,
			$cropbox_resize : $cropbox_resize,
			$cropbox_resize_minwidth : $cropbox_resize_minwidth,
			$cropbox_resize_minheight : $cropbox_resize_minheight,
			$cropbox_resize_maxwidth : $cropbox_resize_maxwidth,
			$cropbox_resize_maxheight : $cropbox_resize_maxheight,
			$autocrop : $autocrop,
			$cropboxsave_width : $cropboxsave_width,
			$cropboxsave_height : $cropboxsave_height,
			$imgcache : $imgcache,
			rawoptions : $options
		}];
	}

	document.querySelector('body').setAttribute('data-imgeditor',JSON.stringify(_editor) );


	this.init = function(){		

		if( document.querySelector('#image-editor-modal') == null && $image_editor ){
			this.initModalEditor();
		}

		// add height and width to editor		
		$editor.style.width = $editor_width+'px';
		$editor.style.height = $editor_height+'px';

		// -- end height and width editor

		$editor.classList.add('image-editor'); // classes for the editor


		let $default_canvas = '';

		var $id =  document.querySelectorAll('.image-editor').length -1;

		$editor.setAttribute('data-index',$id);

		if( $editor.querySelector('input.filetype') == null && $editor.querySelector('input.filename') == null && $editor.querySelector('input.image_src') == null ){			
			// build editor structure
			$editor.innerHTML = '<input type="hidden" name="image['+$id+'][filetype]" class="filetype"><input type="hidden" name="image['+$id+'][filename]" class="filename"><input type="hidden" name="image['+$id+'][contents]" class="image_src"><input class="file-browse" type="file" accept="image/x-png,image/jpeg,image/png" style="display:none;"><div class="image-editor-tools"><a class="image-editor-browse flex-center radius-5"><i class="fas fa-plus"></i></a><a class="image-editor-edit flex-center radius-5"><i class="fas fa-magic"></i></a><a class="image-editor-delete flex-center radius-5"><i class="far fa-trash-alt"></i></a></div><div class="image-editor-preview"></div>';
			// -- end editor structure
		}

		$editor.querySelector('.image-editor-browse').style.display = 'flex'; // show the browse button

		if( $editor.querySelector('input.filetype') != '' && $editor.querySelector('input.filename').value != '' && $editor.querySelector('input.image_src').value != '' ){

			$editor.querySelector('.image-editor-edit').style.display = 'flex';
			$editor.querySelector('.image-editor-delete').style.display = 'flex';

			document.querySelectorAll('.image-editor').forEach(function(el){
				el.classList.remove('active');
			});
			$editor.classList.add('active');

			this.displayImage(false, $editor.querySelector('input.image_src').value );

		}else{
			$editor.querySelector('.image-editor-edit').style.display = 'none';
			$editor.querySelector('.image-editor-delete').style.display = 'none';
		}

		// browse button click event

		$editor.querySelector('.image-editor-browse').addEventListener('click',function(e){

			e.preventDefault();


			let $active_editor = document.querySelector('.image-editor.active');

			if( $active_editor != null ){
				$active_editor.classList.remove('active');
			}



			this.closest('.image-editor').classList.add('active');

			$editor.querySelector('input.file-browse').click();


			// run a custom delete function if theres one
			if( $browseFunct ){
				$browseFunct(document.querySelector('.image-editor.active'));
			}


		});

		// -- end browse button click event



		// editor edit button click event

		$editor.querySelector('.image-editor-edit').addEventListener('click',function(e){

			e.preventDefault();


			if( document.querySelector('#image-editor-modal') != null && $image_editor ){

				let $active_editor = document.querySelector('.image-editor.active');

				if( $active_editor != null ){

					$active_editor.classList.remove('active');

				}


				this.closest('.image-editor').classList.add('active');

				document.querySelector('#image-editor-modal').style.display = 'block'; // show modal
				document.querySelector('#image-editor-modal').classList.add('active');

				if( $image_editor ){

					$global.displayImageModal(document.querySelector('.image-editor.active input.image_src').value,true);

				}else{

					alert('Editor not found!');

				}

			}else {

				alert('Editor not found!');

			}



			// run a custom delete function if theres one

			if( $editFunct ){

				$editFunct(document.querySelector('.image-editor.active'));

			}



		});

		// -- end edit button click event

		// when click image editor delete

		$editor.querySelector('.image-editor-delete').addEventListener('click',function(e){

			e.preventDefault();


			let $active_editor = document.querySelector('.image-editor.active');


			if( $active_editor != null ){
				$active_editor.classList.remove('active');

			}


			this.closest('.image-editor').classList.add('active');



			if( this.closest('.image-editor').querySelector('canvas') != null ){

				this.closest('.image-editor').querySelector('canvas').remove();

			}

			if( this.closest('.image-editor').querySelector('img') != null ){

				this.closest('.image-editor').querySelector('img').remove();

			}



			this.style.display = 'none';

			this.closest('.image-editor').querySelector('.image-editor-edit').style.display = 'none';

			this.closest('.image-editor').querySelector('input.file-browse').value = '';

			this.closest('.image-editor').querySelector('input.image_src').value = '';

			this.closest('.image-editor').querySelector('input.filename').value = '';

			this.closest('.image-editor').querySelector('input.filetype').value = '';



			if( $imgcache ){ // delete from web storage if option enabled

				var _storage = $storage.getItem('imgeditorcachedb');

				if( _storage ){
					_storage = JSON.parse(_storage);

					var _img = _storage.findIndex(function(i){
						return i.index == $editor.getAttribute('data-index')
					});

					if( _img != -1 ){
						_storage.splice(_img,1);
					}

					$storage.setItem('imgeditorcachedb',JSON.stringify(_storage));
				}
			}

			// run a custom delete function if theres one

			if( $deleteFunct ){

				$deleteFunct(document.querySelector('.image-editor.active'));

			}
		});

		// -- end image editor delete



		// editor file input change event
		$editor.querySelector('input.file-browse').addEventListener('change',function(){


			var idxDot = this.value.lastIndexOf(".") + 1;

	        var extFile = this.value.substr(idxDot, this.value.length).toLowerCase();

	        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){

	        	if( $global.ValidateSize(this) ){

	        		$global.displayImage(this);

	        	}


	        }else{

	            alert("Only jpg/jpeg and png files are allowed!");

	        }   
		});
		// -- end editor input on change event

		// check if theres an img cache
		if( $imgcache && $storage.getItem('imgeditorcachedb') ){

			var _storage = JSON.parse( $storage.getItem('imgeditorcachedb') );

			// find the item
			var _img = _storage.findIndex(function(i){
				return i.index == $editor.getAttribute('data-index');
			});

			document.querySelectorAll('.image-editor').forEach(function(el){
				el.classList.remove('active');
			});

			$editor.classList.add('active');

			if( _img != -1 ){
				$global.displayImage(false,_storage[_img].dataurl);
				$editor.querySelector('input.filetype').value = _storage[_img].filetype;
				$editor.querySelector('input.filename').value = _storage[_img].filename;
				$editor.querySelector('input.image_src').value = _storage[_img].dataurl;
			}
		}

		if( $ob ){
			$editor.querySelector('.image-editor-browse').click();
		}

	}

	this.cropCanvas = function(){
		if( document.querySelector('#image-editor-modal #crop-box') != null ){


			Caman('#modal-canvas',function () {

			    // width, height, x, y

			    let el_width = document.querySelector('#image-editor-modal #crop-box').offsetWidth;

			    let el_height = document.querySelector('#image-editor-modal #crop-box').offsetHeight;

			    let el_top = document.querySelector('#image-editor-modal #crop-box').offsetTop;

			    let el_left = document.querySelector('#image-editor-modal #crop-box').offsetLeft;

			    this.crop(el_width,el_height,el_left,el_top);

			    this.render(function(){

			    	document.querySelector('#image-editor-modal canvas').setAttribute('id','modal-canvas');

				    document.querySelector('#image-editor-modal #crop-box').remove();

			    });



			    

			});

		}

	}

	this.initModalEditor = function(){

		let $el = document.createElement('div');

		let $filters = '<div class="text-center"></div>';

		$el.setAttribute('id','image-editor-modal');

		$el.innerHTML = '<div id="image-editor-body"><div id="image-editor-toolbox"> <ul class="p00 m00 list-style-none"> <li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-save" class="display-block toolbox m5"> <i class="fas fa-check mr5"></i>Save </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-close" class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-times mr5"></i>Cancel </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-modal-reset" class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-sync mr5"></i>Reset </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Adjust </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00"> <li class="filter-slider"> <label class="full-width display-block">Brightness <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="brightness"> </li><li class="filter-slider"> <label class="full-width display-block">Contrast <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="contrast"> </li><li class="filter-slider"> <label class="full-width display-block">Saturation <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="saturation"> </li><li class="filter-slider"> <label class="full-width display-block">Vibrance <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="vibrance"> </li><li class="filter-slider"> <label class="full-width display-block">Exposure <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="exposure"> </li><li class="filter-slider"> <label class="full-width display-block">Clip <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="clip"> </li><li class="filter-slider"> <label class="full-width display-block">Hue <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="hue"> </li><li class="filter-slider"> <label class="full-width display-block">Sepia <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sepia"> </li><li class="filter-slider"> <label class="full-width display-block">Noise <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="noise"> </li><li class="filter-slider"> <label class="full-width display-block">Sharpen <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="sharpen"> </li><li class="filter-slider"> <label class="full-width display-block">StackBlur <span class="filter-range">0</span></label> <input type="range" min="-100" max="100" value="0" class="slider filter-range-input mb5" data-filter="stackBlur"> </li></ul> </div></li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5 toolbox-dp-trigger"> <i class="fas fa-magic mr5"></i>Presets </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00" id="image-editor-presets"> <li> <a data-preset="vintage">Vintage</a></li><li> <a data-preset="lomo">Lomo</a></li><li> <a data-preset="clarity">Clarity</a></li><li> <a data-preset="sinCity">Sin City</a></li><li> <a data-preset="sunrise">Sunrise</a></li><li> <a data-preset="crossProcess">Cross Process</a></li><li> <a data-preset="orangePeel">Orange Peel</a></li><li> <a data-preset="love">Love</a></li><li> <a data-preset="grungy">Grungy</a></li><li> <a data-preset="jarques">Jarques</a></li><li> <a data-preset="pinhole">Pinhole</a></li><li> <a data-preset="oldBoot">Old Boot</a></li><li> <a data-preset="glowingSun">Glowing Sun</a></li><li> <a data-preset="hazyDays">Hazy Days</a></li><li> <a data-preset="herMajesty">Her Majesty</a></li><li> <a data-preset="nostalgia">Nostalgia</a></li><li> <a data-preset="hemingway">Hemingway</a></li><li> <a data-preset="concentrate">concentrate</a></li></ul> </div></li><li class="list-style-none align-left display-table toolbox-li"> <a class="display-block toolbox m5"> <i class="fas fa-expand-arrows-alt mr5"></i>Resize </a> <div class="toolbox-sub bg-white box-shadow"><div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Width:</label><input type="number" class="mb00" id="resize-width" name="resize_width"></div><div class="col-xs-6 mb5 pl3 pr3"><label class="full-width display-block">Height:</label><input type="number" class="mb00" id="resize-height" name="resize_height"></div><div class="col-xs-12 col-sm-12 mt8 pl3 pr3"><a class="btn btn-block btn-sm btn-filled mb8" id="resize-save">Resize</a></div></div></li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-crop" class="display-block toolbox m5"> <i class="fas fa-crop-alt mr5"></i>Crop </a> </li><li class="list-style-none align-left display-table toolbox-li" style="display:none"> <a id="image-editor-crop-now" class="bg-success display-block toolbox m5"> <i class="fas fa-check mr5"></i>Crop </a> </li><li class="list-style-none align-left display-table toolbox-li"> <a id="image-editor-rotate" class="display-block toolbox m5"> <i class="fas fa-undo mr5"></i>Rotate </a> <div class="toolbox-sub bg-white box-shadow"> <ul class="p00 m00" id="image-editor-rotate"> <li> <a data-rotate="cw">Clock wise</a></li><li> <a data-rotate="ccw">Counter clock wise</a></li></ul></div></li></ul></div><div id="image-editor-canvas"><div id="canvas-holder" width=""></div></div></div>';



		document.querySelector('body').appendChild($el);



		// bind a close modal editor event

		document.querySelector('#image-editor-modal #image-editor-modal-close').addEventListener('click',function(e){

			

			e.preventDefault();

			document.querySelector('#image-editor-modal').style.display = 'none';
			document.querySelector('#image-editor-modal').classList.remove('active');

			document.querySelector('#image-editor-modal canvas').style.display = 'none';

			document.querySelector('body').style.overflowY = 'auto';

			$global.reset();

			if( $closeFunct ){

				$closeFunct(document.querySelector('.image-editor.active'));

			}

		});

		// -- end close modal editor

		// when click save button


		document.querySelector('#image-editor-modal #image-editor-modal-save').addEventListener('click',function(e){

			e.preventDefault();



			let $ref = document.querySelector('#image-editor-modal #canvas-holder canvas');



			let $x = ( $ref.width- $global.getActiveEditorOptions().$cropboxsave_width ) / 2;

			let $y = ( $ref.height - $global.getActiveEditorOptions().$cropboxsave_height ) / 2;



			Caman('#modal-canvas',function () {

			    // width, height, x, y

			    this.render(function(){

			    	

			    	var c_w = document.querySelector('#image-editor-modal canvas').offsetWidth;

			    	var c_h = document.querySelector('#image-editor-modal canvas').offsetHeight;



			    	document.querySelector('#image-editor-modal').style.display = 'none';
			    	document.querySelector('#image-editor-modal').classList.remove('active');

			    	if( document.querySelector('.image-editor.active canvas') != null ){

			    		document.querySelector('.image-editor.active canvas').remove();

			    	}

			    	if( document.querySelector('.image-editor.active img') != null ){

			    		document.querySelector('.image-editor.active img').remove();

			    	}

			    	var el = document.createElement('canvas');

			    	document.querySelector('.image-editor.active .image-editor-preview').appendChild(el);

			    	if( document.querySelector('.image-editor.active img') != null ){

			    		document.querySelector('.image-editor.active .image-editor-preview').appendChild(el);

			    	}

			    	var destinationCanvas = document.querySelector('.image-editor.active canvas');

			    	var destCtx = destinationCanvas.getContext('2d');

			    	destCtx.canvas.width = c_w;

			    	destCtx.canvas.height = c_h;

			    	destCtx.drawImage(document.querySelector('#image-editor-modal canvas'), 0, 0);

			    	// get the data base url

			    	document.querySelector('.image-editor.active input.image_src').value = document.querySelector('.image-editor.active canvas').toDataURL();

			    	if( $imgcache ){ // delete from web storage if option enabled

						var _storage = $storage.getItem('imgeditorcachedb');

						if( _storage ){
							_storage = JSON.parse(_storage);

							var _img = _storage.findIndex(function(i){
								return i.index == $editor.getAttribute('data-index')
							});

							if( _img != -1 ){
								_storage[_img].dataurl = document.querySelector('.image-editor.active input.image_src').value;
							}else{
								_storage.push({
									index : document.querySelector('.image-editor.active').getAttribute('data-index'),
									dataurl : document.querySelector('.image-editor.active input.image_src').value,
									filetype : document.querySelector('.image-editor.active input.filetype').value,
									filename : document.querySelector('.image-editor.active input.filename').value
								});
							}

							$storage.setItem('imgeditorcachedb',JSON.stringify(_storage));
						}else{

							var _storage = [];

							_storage.push({
								index : document.querySelector('.image-editor.active').getAttribute('data-index'),
								dataurl : document.querySelector('.image-editor.active input.image_src').value,
								filetype : document.querySelector('.image-editor.active input.filetype').value,
								filename : document.querySelector('.image-editor.active input.filename').value

							});

							$storage.setItem('imgeditorcachedb',JSON.stringify(_storage));
						}
					}

			    });

			});
			
			// set body to overflow auto
			document.querySelector('body').style.overflowY = 'auto';

			if( $saveFunct ){

				$saveFunct(document.querySelector('.image-editor.active'));

			}



		});

		// -- end click save button

		// on crop

		document.querySelector('#image-editor-modal #image-editor-crop').addEventListener('click',function(e){


			let $el = document.createElement('div');

			$el.setAttribute('id','crop-box');



			$el.style.width = $cropbox_width+'px';

			$el.style.height = $cropbox_height+'px';



			$el.innerHTML = '<div class="resizer" style="position:absolute;top:-2px;left:-2px;border-top: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;top:-2px;right:-2px;border-top: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;left:-2px;border-bottom: 3px solid #FFF;border-left: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div><div class="resizer" style="position:absolute;bottom:-2px;right:-2px;border-bottom: 3px solid #FFF;border-right: 3px solid #FFF;display: block;width: 15px;height: 15px;"></div>';

			document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder').appendChild($el);



			$global.dragCropBox();

			$global.resizeCropBox();



			this.closest('li').style.display = 'none';

			document.querySelector('#image-editor-modal #image-editor-crop-now').closest('li').style.display = 'block';

			

		});

		// -- end on crop



		document.querySelector('#image-editor-modal #image-editor-crop-now').addEventListener('click',function(e){

			$global.cropCanvas();



			this.closest('li').style.display = 'none';

			document.querySelector('#image-editor-modal #image-editor-crop').closest('li').style.display = 'block';

		});

		// Update the current slider value (each time you drag the slider handle)

		document.querySelectorAll('.filter-slider').forEach(function($el){

			$el.querySelector('.filter-range').textContent = $el.querySelector('.filter-range-input').value;



			$el.querySelector('.filter-range-input').addEventListener('input',function(){

				this.closest('.filter-slider').querySelector('.filter-range').textContent = this.value;

				$global.applyFilter(this.getAttribute('data-filter'),this.value);

			});

		});

		// -- end update slider values



		// apply preset

		document.querySelectorAll('#image-editor-modal #image-editor-presets li a').forEach(function($el){

			$el.addEventListener('click',function(e){

				e.preventDefault();

				$global.applyPreset( $el.getAttribute('data-preset'));

			});

			document.querySelectorAll('.toolbox-sub').forEach(function(el){
				el.style.display = 'none';
			});

		});

		// -- end apply preset



		// when rotate

		document.querySelectorAll('#image-editor-modal #image-editor-rotate li a').forEach(function($el){

			$el.addEventListener('click',function(e){

				e.preventDefault();

				$global.applyRotate( $el.getAttribute('data-rotate'));

			});

			document.querySelectorAll('.toolbox-sub').forEach(function(el){
				el.style.display = 'none';
			});

			

		});

		// -- end rotate

		// reset

		document.querySelector('#image-editor-modal #image-editor-modal-reset').addEventListener('click',function(e){

			e.preventDefault();



			$global.reset();

			if( $resetFunct ){

				$resetFunct(document.querySelector('.image-editor.active'));

			}

		});

		// -- end reset



		// resize

		document.querySelector('#image-editor-modal #resize-save').addEventListener('click',function(e){

			e.preventDefault();



			let $w = this.closest('.toolbox-sub').querySelector('#resize-width').value;

			let $h = this.closest('.toolbox-sub').querySelector('#resize-height').value;

			

			$global.applyResize($w,$h);

		});

		// -- end resize

	}

	this.dragCropBox = function(){

	    let dragItem = document.querySelector("#image-editor-modal #crop-box");

	    let container = document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder');



	    let active = false;

	    let currentX;

	    let currentY;

	    let initialX;

	    let initialY;

	    let xOffset = 0;

	    let yOffset = 0;



	    container.addEventListener("touchstart", dragStart, false);

	    container.addEventListener("touchend", dragEnd, false);

	    container.addEventListener("touchmove", drag, false);



	    container.addEventListener("mousedown", dragStart, false);

	    container.addEventListener("mouseup", dragEnd, false);

	    container.addEventListener("mousemove", drag, false);





	    function dragStart(e) {

	      if (e.type === "touchstart") {

	        initialX = e.touches[0].clientX - xOffset;

	        initialY = e.touches[0].clientY - yOffset;

	      } else {

	        initialX = e.clientX - xOffset;

	        initialY = e.clientY - yOffset;

	      }



	      if (e.target === dragItem) {

	        active = true;

	      }



	    }



	    function dragEnd(e) {

	      initialX = currentX;

	      initialY = currentY;



	      active = false;

	    }



	    function drag(e) {

	      if (active) {

	      

	        e.preventDefault();

	      

	        if (e.type === "touchmove") {

	          currentX = e.touches[0].clientX - initialX;

	          currentY = e.touches[0].clientY - initialY;

	        } else {

	          currentX = e.clientX - initialX;

	          currentY = e.clientY - initialY;

	        }



	        xOffset = currentX;

	        yOffset = currentY;



	        setTranslate(currentX, currentY, dragItem);

	      }

	    }



	    function setTranslate(xPos, yPos, el) {

	      // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

	      el.style.top = yPos+'px';

	      el.style.left = xPos+'px';

	    }

	}

	// check if mobile, return false otherwise

	this.checkIfMobile = function(){

		// device detection

		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 

		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 

		    return true;

		}else{

				return false;

		}

	}

	// -- end check if mobile



	// validate filesize

	this.ValidateSize = function(file) {

        var FileSize = file.files[0].size / 1024 / 1024; // in MB

        if (FileSize > 2) {

            alert('File size exceeds 2 MB');

        } else {

        	return true;

        }

    }

	// -- end validate filesize

	// resize crop box event
	this.getActiveEditorOptions = function(){

		let _data = JSON.parse(document.querySelector('body').getAttribute('data-imgeditor') );

		return _data[_data.findIndex(function(i){
			return i.$el == '#'+document.querySelector('.image-editor.active').getAttribute('id');
		})];
	};

	this.resizeCropBox = function() {

		
	 	let resizeHandle = document.querySelectorAll('#image-editor-modal #image-editor-canvas #crop-box .resizer');

		let p = document.querySelector('#image-editor-modal #image-editor-canvas #crop-box');

		resizeHandle.forEach(function(el){

			if( $global.checkIfMobile() ){

				el.addEventListener("touchstart", initDrag, false);

			}else{

				el.addEventListener('mousedown', initDrag, false);

			}

		});



		var startX, startY, startWidth, startHeight;



		function initDrag(e) {
			
			if( !$global.getActiveEditorOptions().$cropbox_resize ){

				return;

			}

		   	if( $global.checkIfMobile() ){

		   		startX = e.touches[0].clientX;

		   		startY = e.touches[0].clientY;

		   	}else{

		   		startX = e.clientX;

		   		startY = e.clientY;

		   	}

		   startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);

		   startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);



		   if( $global.checkIfMobile() ){

		   	document.documentElement.addEventListener("touchmove",doDrag, false);

	   	   document.documentElement.addEventListener("touchend", stopDrag, false);

		   }else{

		   	document.documentElement.addEventListener('mousemove', doDrag, false);

		   document.documentElement.addEventListener('mouseup', stopDrag, false);

		   }

		   

		   document.documentElement.addEventListener("touchmove",doDrag, false);

	   	   document.documentElement.addEventListener("touchend", stopDrag, false);

		}



		function doDrag(e) {

			if( $global.checkIfMobile() ){


				if( ( (startWidth + e.touches[0].clientX - startX) < $global.getActiveEditorOptions().$cropbox_resize_maxwidth ) && ( (startWidth + e.touches[0].clientX - startX) > $global.getActiveEditorOptions().$cropbox_resize_minwidth) ){

					p.style.width = (startWidth + e.touches[0].clientX - startX) + 'px';

			   	}

			   	if( ( (startHeight + e.touches[0].clientY - startY) < $global.getActiveEditorOptions().$cropbox_resize_maxheight ) && ( (startHeight + e.touches[0].clientY - startY) > $global.getActiveEditorOptions().$cropbox_resize_minheight) ){

				   	p.style.height = (startHeight + e.touches[0].clientY - startY) + 'px';

				}

			}else{				

				if( ( (startWidth + e.clientX - startX) < $global.getActiveEditorOptions().$cropbox_resize_maxwidth ) && ( (startWidth + e.clientX - startX) > $global.getActiveEditorOptions().$cropbox_resize_minwidth) ){

					p.style.width = (startWidth + e.clientX - startX) + 'px';

			   	}

			   	if( ( (startHeight + e.clientY - startY) < $global.getActiveEditorOptions().$cropbox_resize_maxheight ) && ( (startHeight + e.clientY - startY) > $global.getActiveEditorOptions().$cropbox_resize_minheight) ){

				   	p.style.height = (startHeight + e.clientY - startY) + 'px';

				}

			}

		}



		function stopDrag(e) {

			if( $global.checkIfMobile() ){

				document.documentElement.removeEventListener("touchmove", doDrag, false);

		   	   	document.documentElement.removeEventListener("touchend", stopDrag, false);

			}else{

				document.documentElement.removeEventListener('mousemove', doDrag, false);

			   	document.documentElement.removeEventListener('mouseup', stopDrag, false);

			}

		}

	}


	// when click browse, display image

	this.displayImage = function($el,$base64){

		var $base64 = ( $base64 != 'undefined' ) ? $base64 : false;
		if( !$base64){
			if ( $el.files == 'undefined' && !$el.files[0] == 'undefined' ) {
				return false;
			}
		}



		// always remove existing canvas

		if( document.querySelector('.image-editor.active canvas') != null ){

			document.querySelector('.image-editor.active canvas').remove();

		}

		if( document.querySelector('.image-editor.active img') != null ){

			document.querySelector('.image-editor.active img').remove();

		}



		// append a default canvas

		let $canvas = document.createElement('canvas');

		$canvas.style.display = 'none';

		document.querySelector('.image-editor.active .image-editor-preview').appendChild($canvas);

		// -- end append default canvas



    	let $ctx = document.querySelector('.image-editor.active canvas').getContext('2d');

		let $img = new Image;

		$img.crossOrigin = 'anonymous';




		$img.onload = function() {


			$ctx.canvas.width = this.width;

		    $ctx.canvas.height = this.height;

		    $ctx.drawImage($img,0,0);

		    $editor.setAttribute('data-imgw',$img.width);
		    $editor.setAttribute('data-imgh',$img.height); 

			if( !$base64){

			    let $x = ( this.width- $global.getActiveEditorOptions().$cropboxsave_width ) / 2;
				let $y = ( this.height - $global.getActiveEditorOptions().$cropboxsave_height ) / 2;

				Caman(".image-editor.active canvas", function () {

					// width, height, x, y
					if( !$autocrop ){
						this.crop($img.width, $img.height,0,0);
					}else{
						this.crop($global.getActiveEditorOptions().$cropboxsave_width, $global.getActiveEditorOptions().$cropboxsave_height,$x,$y);
					}

				    this.render(function(){

				    	// get the data base url

			    		document.querySelector('.image-editor.active input.image_src').value = document.querySelector('.image-editor.active canvas').toDataURL();

			    		document.querySelector('.image-editor.active input.filename').value = $el.files[0].name;

			    		document.querySelector('.image-editor.active input.filetype').value = document.querySelector('.image-editor.active input.filename').value.split('.')[1];

				    });

				    if( $displayImageFunct ){
						$displayImageFunct(document.querySelector('.image-editor.active'));
					}

				});
			}

			if( document.querySelector('#image-editor-modal') != null && $image_editor ){

				document.querySelector('.image-editor.active .image-editor-edit').style.display = 'flex';

			}else{

				document.querySelector('.image-editor.active .image-editor-edit').style.display = 'none';

			}

			document.querySelector('.image-editor.active .image-editor-delete').style.display = 'flex';

			$canvas.style.display = 'block';


		  }

		  	if( !$base64){
				$img.src = URL.createObjectURL($el.files[0]);
			}else{
				$img.src = $base64;
			}

	}

	// -- end display image on modal editor

	this.displayImageModal = function($el,$t){		

		// always remove existing canvas

		if( document.querySelector('#image-editor-modal #image-editor-canvas canvas') != null ){

			document.querySelector('#image-editor-modal #image-editor-canvas canvas').remove();

		}

		// append a default canvas

		let $canvas = document.createElement('canvas');

		$canvas.setAttribute('id','modal-canvas');

		document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder').appendChild($canvas);

		// -- end append default canvas



		$global.cloneImg($el,$t);



		let $ctx = document.querySelector('#image-editor-modal #image-editor-canvas canvas').getContext('2d');

		let $img = new Image;

		$img.crossOrigin = 'anonymous';



		if( $t ){

			$img.onload = $global.drawImageScaled.bind(null, $img, $ctx);

			$img.src = document.querySelector('.image-editor.active input.image_src').value;

		}else{

			if ($el.files && $el.files[0]) {



				$img.onload = $global.drawImageScaled.bind(null, $img, $ctx);

				$img.src = URL.createObjectURL($el.files[0]);



		  	}

		}



	

	}



	this.cloneImg = function($el,$t){

		if( document.querySelector('#clone-img') != null ){

			document.querySelector('#clone-img').remove();

		}

		if( $t ){

			var el = document.createElement('div');

			el.setAttribute('id','clone-img');

			el.innerHTML = '<img src="'+$el+'">';

			if( document.querySelector('#image-editor-modal').classList.contains('active')){

				document.querySelector('body').style.overflowY = 'hidden';

			}

			document.querySelector('body').appendChild(el);



		}else{

			var $reader = new FileReader();


			$reader.onload = function(e){

				var el = document.createElement('div');

				el.setAttribute('id','clone-img');

				el.innerHTML = '<img src="'+e.target.result+'">';

				if( document.querySelector('#image-editor-modal').classList.contains('active')){
					document.querySelector('body').style.overflowY = 'hidden';
				}

				document.querySelector('body').appendChild(el);

			}

			$reader.readAsDataURL($el.files[0]);

		}

	}



	this.drawImageScaled = function(img, ctx) {



		   ctx.canvas.width = document.querySelector('#clone-img img').offsetWidth;

		   ctx.canvas.height = document.querySelector('#clone-img img').offsetHeight;

		   var canvas = ctx.canvas ;

		   var hRatio = canvas.width  / img.width;

		   var vRatio =  canvas.height / img.height;

		   var ratio  = Math.min ( hRatio, vRatio );

		   var centerShift_x = ( canvas.width - img.width*ratio ) / 2;

		   var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  

		   ctx.clearRect(0,0,canvas.width, canvas.height);

		   ctx.drawImage(img, 0,0, img.width, img.height,centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);



		   document.querySelector('#image-editor-modal canvas').style.display = 'block';

	}



	// reset editor

	this.reset = function(){



		if( document.querySelector('#clone-img') != null ){

			document.querySelector('#clone-img').remove();

		}



		if( document.querySelector('#image-editor-modal #crop-box') != null ){

			document.querySelector('#image-editor-modal #crop-box').remove();

		}



		document.querySelectorAll('.filter-range-input').forEach(function($el){

			$el.value = 0;

		});



		document.querySelector('#image-editor-modal #image-editor-crop-now').closest('li').style.display = 'none';

		document.querySelector('#image-editor-modal #image-editor-crop').closest('li').style.display = 'block';

		$global.displayImageModal(document.querySelector('.image-editor.active input.file-browse'),false);


	}

	// -- end reset editor



	// resize

	this.applyResize = function($w,$h){

		Caman("#image-editor-modal canvas", function () {

		  this.resize({

		    width: $w,

		    height: $h

		  });



		  this.render();

		});

	}

	// -- end resize



	// filters

	this.applyFilter = function($t,$v) {

		let $type = $t.replace('filter-','');

		Caman("#image-editor-modal canvas", function () {

			this.revert(false);

			switch($type){

				case 'brightness':

					this.brightness($v).render();

				break;

				case 'contrast':

					this.contrast($v).render();

				break;

				case 'contrast':

					this.saturation($v).render();

				break;

				case 'vibrance':

					this.contrast($v).render();

				break;

				case 'exposure':

					this.exposure($v).render();

				break;

				case 'clip':

					this.clip($v).render();

				break;

				case 'clip':

					this.clip($v).render();

				break;

				case 'hue':

					this.hue($v).render();

				break;

				case 'sepia':

					this.sepia($v).render();

				break;

				case 'noise':

					this.noise($v).render();

				break;

				case 'sharpen':

					this.vintage($v).render();

				break;

				case 'stackBlur':

					this.stackBlur($v).render();

				break;

			}

		});

    }

    // -- end filters

    // presets

    this.applyPreset = function($t) {	

		Caman("#image-editor-modal canvas", function () {

			this.revert(false);

			switch($t){

				case 'vintage':

					this.vintage().render();

				break;

				case 'lomo':

					this.lomo().render();

				break;

				case 'clarity':

					this.clarity().render();

				break;

				case 'sinCity':

					this.sinCity().render();

				break;

				case 'sunrise':

					this.sunrise().render();

				break;

				case 'crossProcess':

					this.crossProcess().render();

				break;

				case 'orangePeel':

					this.orangePeel().render();

				break;

				case 'love':

					this.love().render();

				break;

				case 'grungy':

					this.grungy().render();

				break;

				case 'jarques':

					this.jarques().render();

				break;

				case 'pinhole':

					this.pinhole().render();

				break;

				case 'oldBoot':

					this.oldBoot().render();

				break;

				case 'glowingSun':

					this.glowingSun().render();

				break;

				case 'hazyDays':

					this.hazyDays().render();

				break;

				case 'herMajesty':

					this.herMajesty().render();

				break;

				case 'nostalgia':

					this.nostalgia().render();

				break;

				case 'hemingway':

					this.hemingway().render();

				break;

				case 'hemingway':

					this.hemingway().render();

				break;
			}

			document.querySelectorAll('.toolbox-sub').forEach(function(el){
				el.style.display = 'none';
			});

		});

    }



    // rotate func

    this.applyRotate = function($t) {

    	Caman("#image-editor-modal canvas", function () {

	    	switch($t){

	    		case 'cw':

	    			this.rotate(90).render();

	    		break;

	    		case 'ccw':

	    			this.rotate(-90).render();

	    		break;

	    	}

	    	document.querySelectorAll('.toolbox-sub').forEach(function(el){
				el.style.display = 'none';
			});

	    	$global.redisplayImageModal(this.toBase64());

	    });


    }

    // -- end rotate func

    // re render modal image
    this.redisplayImageModal = function(t){
    	if( document.querySelector('#image-editor-modal #image-editor-canvas canvas') != null ){
			document.querySelector('#image-editor-modal #image-editor-canvas canvas').remove();
		}
		// append a default canvas

		let $canvas = document.createElement('canvas');

		$canvas.setAttribute('id','modal-canvas');

		document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder').appendChild($canvas);

		// -- end append default canvas

		$global.cloneImg(t,true);


		let $ctx = document.querySelector('#image-editor-modal #image-editor-canvas canvas').getContext('2d');

		let $img = new Image;

		$img.crossOrigin = 'anonymous';

		$img.onload = $global.drawImageScaled.bind(null, $img, $ctx);
		$img.src = t;
    }


	// -- check if element is hidden, return true otherwise

	this.isHidden = function(el) {


	    let style = window.getComputedStyle(el);

	    return ((style.display === 'none') || (style.visibility === 'hidden'));

	}



	return this.init($options);
}

