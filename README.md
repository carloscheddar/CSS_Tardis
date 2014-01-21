CSS Tardis
==========

A Tardis made purely* out of CSS

### Purpose
As a backend web developer I've always had a hard time when it comes to CSS so I figured that I would get a better understanding if I made an HTML object purely out of CSS. So after watching a marathon of Doctor Who episodes I decided to make a TARDIS.

### Description
The dream of every doctor who fan, a simple animated TARDIS that you can add to your website.
> DEMO: http://carloscheddar.github.io/CSS_Tardis/  
> DEMO(TARDIS Only): http://carloscheddar.github.io/CSS_Tardis/Tardis.html

###Usage
Simply copy this block and paste it to your html.  
- You can delete jQuery if it was loaded in another html.  
- To edit clone the repo or add inline CSS.

```html
<head>
  <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <link rel="stylesheet" type="text/css" href="http://carloscheddar.github.io/CSS_Tardis/stylesheets/tardis.css">
  <!-- Load tardis.js to be able to resize the triangles -->
  <script src="http://carloscheddar.github.io/CSS_Tardis/js/tardis.js"></script>
</head>

<div class="tardisContainer">
  <div class="tardis">

    <!-- Start of the top part of the tardis -->
    <div class="TriMini"></div>

    <div class="light">
      <div class="bulbEffect"></div>
      <div class="bulb"></div>
    </div>

    <div class="TopMini"></div>
    <div class="triangle"></div>
    <div class="TopRec"></div>
    <div class="CenterRec"></div>
    <div class="police">
      <div class="polBorder"></div>
    </div>
    <!-- End of the top part of the tardis -->

    <!-- Start of the doors for the Tardis -->
    <div class="doors">
      <div class="left">
        <div class="filled windows window0">
          <div class="vertical0"></div>
          <div class="horizontal"></div>
          <div class="vertical1"></div>
        </div>
        <div class="size filled notice"></div>
        <div class="size border square0"></div>
        <div class="size border square1"></div>
      </div>

      <div class="middle"></div>

      <div class="right">
        <div class="filled windows window1">
          <div class="vertical0"></div>
          <div class="horizontal"></div>
          <div class="vertical1"></div>
        </div>
        <div class="size border square2"></div>
        <div class="size border square3"></div>
        <div class="size border square4"></div>
      </div>
    </div>
    <!-- End of the doors for the Tardis -->

    <!-- Start Lower part of the tardis -->
    <div class="TriFoot"></div>
    <div class="foot"></div>
    <!-- End Lower part of the tardis --> </div>
  <!-- End of Tardis -->
</div>

<!-- Using ElementQuery -->
<script src="http://carloscheddar.github.io/CSS_Tardis/js/elementQuery.min.js"></script>
```
Change the **.tardisContainer** class inside **tardis.css** to position the TARDIS on your web page as well as change the size.
```css
.tardisContainer{
  position: absolute;
  overflow: hidden;
  height: 580px;
  width: 310px;
}
```

### Animations
I used two CSS animations one for the light bulb to make it **flash** and one for the TARDIS to make it **materialize or dematerialize**.  
They both use they same keyframes:  
```css
@keyframes flash {
  0% {opacity:0;}
  25% {opacity:1;}
  50% {opacity:1;}
  100% {opacity:0;}
}
```
To edit or remove the animations go to **.tardis or/and .bulbEffect** and edit these properties:
```css
  animation: flash 2s infinite;
  -webkit-animation: flash 2s infinite;
  -moz-animation: flash 2s infinite;
```


## Reponsive
####Element Queries
I wanted to avoid **javascript** to give it a pure **CSS** feel but when responsiveness came CSS was short on features.
The idea is to make the TARDIS modular and to respond to the container it's inside but media queries could only get the size of the page not the container. To achieve this I used ElementQuery https://github.com/tysonmatanich/elementQuery which lets me change css properties by element instead of the page.  
```css
.tardisContainer[max-width~="300px"] .border {
  border: 1px solid white;
}

.tardisContainer[max-width~="300px"] .polBorder {
  border: 1px solid white;
}
```

####Triangles
Triangles were another problem because css borders do not understand percent values. So triangles were calculated with jQuery when the document loads and each time it resizes.
```js
  //Function that creates a triangle relative to .light size
  var setTriMini = function() {
    var light= $(".light").width();
    $(".TriMini").css("border-left", light/2 + "px solid transparent");
    $(".TriMini").css("border-right", light/2 + "px solid transparent");
    $(".TriMini").css("border-bottom", light/4 + "px solid rgb(15,46,127)");
  };
```
