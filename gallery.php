<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Image Editor Gallery</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<style>
		.mb8{
			margin-bottom: 8px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<?php
			$files = glob("img/*.*");
		 	for ($i=0; $i<count($files); $i++)
		  	{
		    $image = $files[$i];
		    $supported_file = array(
		            'gif',
		            'jpg',
		            'jpeg',
		            'png'
		     );

		     $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
		     if (in_array($ext, $supported_file)) {
		     	echo '<div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb8">';
		        echo '<img src="'.$image .'" alt="Random image" />';
		        echo '</div>';
		        } else {
		            continue;
		        }
		    }
		?>
		</div>
	</div>
</body>
</html>