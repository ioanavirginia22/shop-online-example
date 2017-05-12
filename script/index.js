$(document).ready(function(){
console.log("working");

$(".navbar-nav li a").click(function(){

  var getId = $(this).attr("href");
  console.log(getId);
  $(getId).show().siblings().hide();
})





})
