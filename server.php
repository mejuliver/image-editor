<?php
	echo '<pre>';
	print_r($_POST);
	exit;
	function save_base64_image($base64_image_string, $output_file_without_extension, $path_with_end_slash="" ) {
	    $splited = explode(',', substr( $base64_image_string , 5 ) , 2);
	    $mime=$splited[0];
	    $data=$splited[1];

	    $mime_split_without_base64=explode(';', $mime,2);
	    $mime_split=explode('/', $mime_split_without_base64[0],2);
	    if(count($mime_split)==2)
	    {
	        $extension=$mime_split[1];
	        if($extension=='jpeg')$extension='jpg';
	        //if($extension=='javascript')$extension='js';
	        //if($extension=='text')$extension='txt';
	        $output_file_with_extension=$output_file_without_extension.'.'.$extension;
	    }
	    file_put_contents( $path_with_end_slash . $output_file_with_extension, base64_decode($data) );
	    return $output_file_with_extension;
	}
	$id = $_POST['filename'];
	save_base64_image($_POST['image'][0], $id, __DIR__."/img/" );

	echo '<a href="index.php">Go back to editor</a><br /><br />';

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
             echo '<img src="'.$image .'" alt="Random image" />'."<br /><br />";
            } else {
                continue;
            }
          }
       ?>