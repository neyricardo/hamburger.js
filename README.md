This repo was copied from http://johnm.com.au/hamburgler/ which seems not to be at github.

#How?

1.
Download the files and put them in your root directory

2.
Paste all this in the <head> section of your html

``
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"> </script>
<script src="hamburgler.js"> </script> 
<link rel="stylesheet" href="hamburgler.css">
``

3.
Paste this before everything inside your <body> tag

```
<!-- THIS IS THE MENU -->
<div class="mobilenav">
  <li><a href="#">Never</a></li>
  <li><a href="#">Gonna</a></li>
  <li><a href="#">Give</a></li>
  <li><a href="#">You</a></li>
  <li><a href="#">Up</a></li>
</div> 
```

``
<!-- THIS IS THE ICON -->
<a href="javascript:void(0)" class="icon">
  <div class="hamburger">
    <div class="menui top-menu"></div>
    <div class="menui mid-menu"></div>
    <div class="menui bottom-menu"></div>
  </div>
</a>
``

4.
Booyah