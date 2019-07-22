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
					<form action="server.php" id="form" method="post">
						<div id="image-editor"></div><br>
						<div id="image-editor2"></div><br>
						<br>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
	<script src="assets/js/image-editor.js"></script>
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script>
		new cnimage_editor({
			el : '#image-editor',
			cropbox_resize : false,
			cropbox_width : 300,
			cropbox_height : 300,
			autocrop : false,
			imgcache : false,
			width : 400,
			height: 400,
			cropboxsave_width : 10,
			cropboxsave_height : 10
		});

		new cnimage_editor( {
			el : '#image-editor2',
			autocrop : false,
			imgcache : true,
			cropbox_width : 200,
			cropbox_width : 200,
			cropbox_resize : {
				minwidth : 200,
				minheight : 200,
				maxwidth : 300,
				maxheight : 300
			}
			
		});

		$('#form').submit(function(e){

			e.preventDefault();

			var formdata = new FormData();

			formdata.append('test','test contents');
			formdata.append('file',base64tofile($(this).find('input.image_src').val()));

			$.ajax({
		       url: 'server.php',
		       type: 'POST',
		       data: formdata,
		       async: false,
		       cache: false,
		       contentType: false,
		       enctype: 'multipart/form-data',
		       processData: false,
		       success: function (res) {
		        	alert(res.msg);
		       }
		   });

		});

		function base64tofile(base64){

			var mime = base64.split(';base64,')[0].split('data:')[1];
			var base64 = base64.split(';base64,')[1];

	        mime = mime || '';
	        var sliceSize = 1024;
	        var byteChars = window.atob(base64);
	        var byteArrays = [];

	        for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
	            var slice = byteChars.slice(offset, offset + sliceSize);

	            var byteNumbers = new Array(slice.length);
	            for (var i = 0; i < slice.length; i++) {
	                byteNumbers[i] = slice.charCodeAt(i);
	            }

	            var byteArray = new Uint8Array(byteNumbers);

	            byteArrays.push(byteArray);
	        }

	        return new Blob(byteArrays, {type: mime});
		}

	</script>
</body>
</html>