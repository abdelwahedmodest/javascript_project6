
let scolor = "black" ;
const  colorel = document.querySelector("#mycolor") ;
const   bessmilahel = document.querySelector("#bessmilah")
colorel.addEventListener('change', (e)=>{

    scolor  = e.target.value ; 
    console.log(scolor);
    bessmilahel.style.color = scolor ; 
})

const canvas = document.getElementById("canvas") ;
const ctx = canvas.getContext("2d");
  x = undefined ;
  y = undefined ;

function drawcircle(x, y){

       ctx.beginPath();
       ctx.arc(x,y,10,0,2*Math.PI) ;
       ctx.fillStyle = scolor ;
       ctx.fill();

 }
 canvas.addEventListener("mousedown", (e)=>{
    const x = e.offsetX ;
    const  y = e.offsetY ;
    drawcircle(x,y) ;
 });
 
 const  btn = document.getElementById("xy");
 btn.addEventListener('click', ()=>{
   ctx.clearRect(0,0,canvas.width,canvas.height);

 });