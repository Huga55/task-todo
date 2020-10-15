<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<link href="{{asset('css/app2.css')}}" rel="stylesheet" type="text/css">
	<title>Document</title>
</head>
<body>
	<div id="root"></div>
	<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>