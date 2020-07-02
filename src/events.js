export default{
	// when click browse, display image
	displayImage(el,base64,ops)=>{

		let _this = this;

		if( typeof ops != 'object' ){
			console.log('origin:events.js,error: editor options not found');
		}

		if( typeof base64 != 'undefined' ){
			if ( typeof el.files == 'undefined' ) {
				console.log('origin: events.js,error: unable to work on empty data files')
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
		let canvas = document.createElement('canvas');
		canvas.style.display = 'none';

		document.querySelector('.image-editor.active .image-editor-preview').appendChild(canvas);
		// -- end append default canvas


    	let ctx = document.querySelector('.image-editor.active canvas').getContext('2d');
		let img = new Image;

		img.crossOrigin = 'anonymous';

		img.onload() {

			ctx.canvas.width = this.width;
		    ctx.canvas.height = this.height;
		    ctx.drawImage(img,0,0);

		    editor.setAttribute('data-imgw',img.width);
		    editor.setAttribute('data-imgh',img.height); 

			if( !base64){

			    let x = ( this.width - ops.cropboxsave_width ) / 2;
				let y = ( this.height - ops.cropboxsave_height ) / 2;

				// to be continue

				Caman(".image-editor.active canvas", function () {

					// width, height, x, y
					if( !autocrop ){
						this.crop(img.width, img.height,0,0);
					}else{
						this.crop(ops.cropboxsave_width, _this.getActiveEditorOptions().cropboxsave_height,x,y);
					}

				    this.render(function(){

				    	// get the data base url

			    		document.querySelector('.image-editor.active input.image_src').value = document.querySelector('.image-editor.active canvas').toDataURL();

			    		document.querySelector('.image-editor.active input.filename').value = el.files[0].name;

			    		document.querySelector('.image-editor.active input.filetype').value = document.querySelector('.image-editor.active input.filename').value.split('.')[1];

				    });

				    if( on_display ){
						on_display(document.querySelector('.image-editor.active'));
					}

				});
			}

			if( document.querySelector('#image-editor-modal') != null && image_editor ){

				document.querySelector('.image-editor.active .image-editor-edit').style.display = 'flex';

			}else{

				document.querySelector('.image-editor.active .image-editor-edit').style.display = 'none';

			}

			document.querySelector('.image-editor.active .image-editor-delete').style.display = 'flex';

			canvas.style.display = 'block';


		  }

		  	if( !base64){
				img.src = URL.createObjectURL(el.files[0]);
			}else{
				img.src = base64;
			}

	}

	// -- end display image on modal editor

	this.displayImageModal(el,t){		

		// always remove existing canvas

		if( document.querySelector('#image-editor-modal #image-editor-canvas canvas') != null ){

			document.querySelector('#image-editor-modal #image-editor-canvas canvas').remove();

		}

		// append a default canvas

		let canvas = document.createElement('canvas');

		canvas.setAttribute('id','modal-canvas');

		document.querySelector('#image-editor-modal #image-editor-canvas #canvas-holder').appendChild(canvas);

		// -- end append default canvas



		global.cloneImg(el,t);



		let ctx = document.querySelector('#image-editor-modal #image-editor-canvas canvas').getContext('2d');

		let img = new Image;

		img.crossOrigin = 'anonymous';



		if( t ){

			img.onload = global.drawImageScaled.bind(null, img, ctx);

			img.src = document.querySelector('.image-editor.active input.image_src').value;

		}else{

			if (el.files && el.files[0]) {



				img.onload = global.drawImageScaled.bind(null, img, ctx);

				img.src = URL.createObjectURL(el.files[0]);



		  	}

		}

	}



	this.cloneImg(el,t){

		if( document.querySelector('#clone-img') != null ){

			document.querySelector('#clone-img').remove();

		}

		if( t ){

			var el = document.createElement('div');

			el.setAttribute('id','clone-img');

			el.innerHTML = '<img src="'+el+'">';

			if( document.querySelector('#image-editor-modal').classList.contains('active')){

				document.querySelector('body').style.overflowY = 'hidden';

			}

			document.querySelector('body').appendChild(el);



		}else{

			var reader = new FileReader();


			reader.onload(e){

				var el = document.createElement('div');

				el.setAttribute('id','clone-img');

				el.innerHTML = '<img src="'+e.target.result+'">';

				if( document.querySelector('#image-editor-modal').classList.contains('active')){
					document.querySelector('body').style.overflowY = 'hidden';
				}

				document.querySelector('body').appendChild(el);

			}

			reader.readAsDataURL(el.files[0]);

		}

	}

	this.drawImageScaled(img, ctx) {



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
}