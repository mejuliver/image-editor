<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Image Editor</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/j-components.min.css">
	<link rel="stylesheet" href="assets/css/image-editor.css">
</head>
<body>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<form action="server.php" method="post">
						<div class="image-editor-wrapper" id="image-editor" data-default="image.jpg"></div>
						<div class="image-editor-wrapper" id="image-editor2"></div>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>
	<script src="assets/js/image-editor.min.js"></script>
	<script>
		const $image_editor = new cnimage_editor({
			el : '#image-editor'
		});
		const $image_editor2 = new cnimage_editor({
			el : '#image-editor2',
			image_editor :true
		});
	</script>
</body>
</html>