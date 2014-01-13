$(document).ready(function() {

  //Function that creates a triangle relative to .light size
  var setTriMini = function() {
    var light= $(".light").width();
    $(".TriMini").css("border-left", light/2 + "px solid transparent");
    $(".TriMini").css("border-right", light/2 + "px solid transparent");
    $(".TriMini").css("border-bottom", light/4 + "px solid rgb(15,46,127)");
  };

  //Function that creates a triangle relative to .TopRec and .TopMini size
  var setTriangle = function() {
    // Dynamically calculate the value of triangle
    var TopMini= $(".TopMini").width();
    var TopRec=  $(".TopRec").width();
    var half = (TopRec - TopMini)/ 2;
    $(".triangle").css("width", TopMini + "px");
    $(".triangle").css("border-left", half + "px solid transparent");
    $(".triangle").css("border-right", half + "px solid transparent");
    $(".triangle").css("border-bottom", half/5 + "px solid rgb(15,46,127)");
  };

  //Function that creates a triangle relative to .doors and .foot size
  var setTriFoot = function() {
    var doors= $(".doors").width();
    var foot=  $(".foot").width();
    var half = (foot - doors)/ 2;
    $(".TriFoot").css("width", doors + "px");
    $(".TriFoot").css("border-left", half + "px solid transparent");
    $(".TriFoot").css("border-right", half + "px solid transparent");
    $(".TriFoot").css("border-bottom", half/2 + "px solid rgb(15,46,127)");
  };

  //Set the triangle values when the document is ready
  setTriangle();
  setTriMini();
  setTriFoot();

  //Execute the functions every time the window resizes
  $(window).resize(function() {
    setTriMini();
    setTriangle();
    setTriFoot();
  });
});