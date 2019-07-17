<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Image Editor</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	<link rel="stylesheet" href="assets/css/image-editor.css">
</head>
<body>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="image-editor"></div>
					<form action="server.php" method="post">
						<div id="image-editor-group">
							<div class="image-editor-wrapper" id="image-editor" data-default="image.jpg" style="position:relative; overflow:hidden;"></div>
						</div>
						
						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
	<script src="assets/js/image-editor.js"></script>

	<script>
		function refreshImageStorage(e){
			document.querySelectorAll('.image-editor').forEach(function(el,i){
				var file_arr = [];

				if( el.querySelector('input.image_src') != '' ){
					var $filename = el.querySelector('input.filename').value;
					var $filetype = el.querySelector('input.filename').value.split('.')[1];
					var $filecontents = imgtoBase64(el.querySelector('canvas'), $filetype);

					file_arr.push({ filename : $filename, filetype : $filetype, filecontents : $filecontents });

					saveToLocalStorage(file_arr);
				}
			});
		}

		window.localStorage;

		if( document.querySelector('#image-editor-group') == null ){
			localStorage.removeItem('image_editor');
		}

		if( localStorage.getItem('image_editor') != null && ( document.querySelector('#image-editor-group').children.length == JSON.parse( localStorage.getItem('image_editor') ).length ) ){
			document.querySelector('#image-editor-group').innerHTML = '';
		}else{
			localStorage.removeItem('image_editor');
		}
		
		var imgsCache = localStorage.getItem('image_editor');

		if( imgsCache != null){
			

			// JSON.parse(imgsCache).forEach(function(els,i){
			// 	var $id = 'imageeditor-'+i;
			// 	var el = document.createElement('div');
			// 		el.classList.add('image-editor-wrapper','image-editor');
			// 		el.setAttribute('id', $id);
			// 		el.style.position = 'relative';
			// 		el.style.overfow = 'hidden';
			// 		el.innerHTML = '<input type="hidden" name="image['+i+'][filetype]" value="'+els.filetype+'" class="filetype"><input type="hidden" name="image['+i+'][filename]" value="'+els.filename+'" class="filename"><input type="hidden" name="image['+i+'][contents]" class="image_src" value="'+( 'data:image/'+els.filetype+';base64,'+els.filecontents )+'"><input class="file-browse" type="file" accept="image/x-png,image/jpeg" style="display:none;"><div class="image-editor-tools"><a href="javascript:void(0);" class="image-editor-browse flex-center radius-5"><i class="fas fa-plus"></i></a><a href="javascript:void(0);" class="image-editor-edit flex-center radius-5"><i class="fas fa-magic"></i></a><a href="javascript:void(0);" class="image-editor-delete flex-center radius-5"><i class="far fa-trash-alt"></i></a></div><div class="image-editor-preview"></div>';
			// 	document.querySelector('#image-editor-group').append(el);

			// 	const $image_editor = new cnimage_editor({
			// 		el : '#'+$id,
			// 		saveFunct : "refreshImageStorage",
			// 		displayImageFunct : "refreshImageStorage"
			// 		// deleteFunct : deleteImageStorage
			// 	});

			// });

		}else{
			// localStorage.removeItem('image_editor');
			// const $image_editor = new cnimage_editor({
			// 	el : '#image-editor',
			// 	saveFunct : "refreshImageStorage",
			// 	displayImageFunct : "refreshImageStorage",
			// 	autocrop : true
			// });
		}

		function imgtoBase64(img,ext) {
		    var canvas = document.createElement("canvas");
		    canvas.width = img.width;
		    canvas.height = img.height;

		    var ctx = canvas.getContext("2d");
		    ctx.drawImage(img, 0, 0);

		    var dataURL = canvas.toDataURL("image/"+ext);

		    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		}

		function saveToLocalStorage(arr){

			localStorage.setItem( 'image_editor', JSON.stringify(arr) );

			return JSON.parse(localStorage.getItem('image_editor'));
		}


	</script>
	<script>
		new cnimage_editor({
			el : '#image-editor',
			autocrop : false,
			imgcache : true,
			cropbox_resize : false
		});
		// const $image_editor = new cnimage_editor({
		// 	el : '#image-editor'
		// });
		// const $image_editor2 = new cnimage_editor({
		// 	el : '#image-editor2',
		// 	image_editor :true
		// });
	</script>
</body>
</html>