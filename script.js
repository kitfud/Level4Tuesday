 let size = document.getElementById('size-input')
 let type = document.getElementById('snowboard-type')
  //console.log( size.value +" "+type.value)

function printStickers(){
let stickers = document.getElementsByName('stickers')
for(var i = 0; i<stickers.length; i++){
if(stickers[i].checked){
  console.log(stickers[i].value)
}
}
}



function onSubmit(){
//REVISION ON STICKERS BEING PRINTED
//printStickers()
var zip = document.getElementById('zip').value

if(zip === "98102"){
  document.getElementById("zip").style.background = "green";
}
else{
   document.getElementById("zip").style.background = "red";
}

}












/*
for (var i =0; i<stickers.length;i++){
  if(stickers[i].checked){
    console.log(stickers[i].value)
  }
}
*/

/*Accessing the edges value for the RADIO button
let edges = document.getElementsByName('edges')
for (var i = 0;i <edges.length; i++){
  if(edges[i].checked){
    console.log(edges[i].value)
  }
}
*/

/*testing the checkbox value in console
let sharpen = document.getElementById("sharpen")
console.log(sharpen.checked)
*/


/*testing out the Zip Code
let zip = document.getElementById("zip")
console.log(zip.value)
*/



