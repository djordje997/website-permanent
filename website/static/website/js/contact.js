$(document).ready(function(){
console.log("kontakt")
$(".contact-logo-img").hide();
document.getElementById("map-iframe").onload = function() {loadLogo()};
console.log(document.getElementById("map"))
    });
function loadLogo(){
  console.log("ucitnna")
  console.log($(".contact-logo-img"))
  $(".contact-logo-img").css("visibility", "visible")
  $(".contact-logo-img").fadeIn(3000);
}