<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<title>Document</title>
</head>
<body>
	<div class="app">asd</div>
</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
	let url = window.location.href;
	console.log(url + 'auth/me');

	$.ajaxSetup({
	   headers: {
	     'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
	   }
	});

	$.ajax({
      type: "GET",
	  url: url + 'user/info',
	  data: {
	  	
	  },
	  success: function(result){
	    console.log(result);
	  }
	});
</script>
</html>