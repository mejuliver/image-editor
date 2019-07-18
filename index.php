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
					<div id="image-editor"></div><br>
					<div id="image-editor2"></div><br>
				</div>
			</div>
		</div>
	</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
	<script src="assets/js/image-editor.js"></script>

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

	</script>
</body>
</html>