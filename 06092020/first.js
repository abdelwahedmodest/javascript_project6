const { lightblue } = require("color-name");

$(document).ready(function(){
    //var  rgbvalue  = Math.floor(Math.random()*255) ;
    //console.log(rgbvalue);
    $("h1").css("color","green");
   // $("h1").html('<div style="background-color:yellow;width:65;height:45;"><h1>the page has been successfuly  downloaded</h1></div>');
   var et = document.getElementById("cible") ;
   et.style.width = "50px" ;
   et.style.height = "50px" ;
   et.style.backgroundColor = "blue" ;
   //et.style.backgroundColor = "Rgb('rgbvalue','rgbvalue','rgbvalue')" ;
   et.style.boxShadow =  "15px" ;
   et.style.border = "5px solid red" ;
   et.style.borderRadius = "28px" ;
   document.body.appendChild(et);
   et.addEventListener('mouseover', function(){
    //et.style.backgroundColor = "white";   
    et.style.visibility = "hidden" ; 
   });
 et.addEventListener('mouseout', function(){
    //et.style.backgroundColor = "white";   
    et.style.visibility = "visible" ; 
   });

})