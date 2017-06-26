WobbleString
============
A simple Javascript Object to wobble a string of characters in an HTML element.

How To
------
On the page that you want to add the wobble:

- Within the \<BODY\>...\</BODY\> tag:

  - Give the HTML element you want to wobble an ID.  
    It can be anything you like (we used *wobble1*).
  ```
    <div id="wobble1">WobbleString</div>
  ```

- Within the \<HEAD\>...\</HEAD\> tag:

  - Include the WobbleString.js file in your web page.  
    Make sure your **path/to** is correct.
  ```
    <script type="text/javascript" src="path/to/WobbleString.js"></script>
  ```
  
  - Add the Javascript to call the WobbleString Object.  
    Make sure the ID (*wobble1*) matches the one you used in the HTML element.
  ```
    var wobbly1 = new WobbleString("wobble1");
  ```

  - Use the build() and wobble() methods to build and wobble the string(!)
  ```
    wobbly1.build().wobble();
  ```

  - A full example of the javascript would be something like:
  ```
  <script type="text/javascript" src="js/WobbleString.js"></script>
  <script type="text/javascript">
  <!--
  (function () {
      window.onload = function() {
          var wobbly1 = new WobbleString("wobble1");

          wobbly1.build().wobble();
      };
  }());
  // -->
  </script>
  ```
  Paste this into your page and hopefully you should see your string
  [wobble](http://htmlpreview.github.com/?https://github.com/WorkingTitleSoftware/WobbleString/blob/master/index.html).
