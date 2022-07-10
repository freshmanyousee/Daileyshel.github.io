'use strict'
var myheading=document.querySelector('h1');
myheading.textContent='Hello Word';
var clickimage=document.querySelector('img')
clickimage.onclick=function (){
    var url=clickimage.getAttribute('src');
    if(url==='../image/1212.png'){
        clickimage.setAttribute('src','../image/sun.jpeg')}
    else{
        clickimage.setAttribute('src','../image/1212.png');
    }
}
var button=$('body>script');
button.before("<button>Switch USER</button>")
var myh1=$('h1');
function setusername(){
    var myname=prompt('Please input your name:');
    if(!myname){
        setusername()
    }
    else{
    localStorage.setItem('name',myname)
    myh1.html('You are so handsome '+myname);}
}
if(!localStorage.getItem('name')) {
    setusername()
}
else{
    var storename=localStorage.getItem('name')
    myh1.html('You are so handsome '+storename)
}
var sswitch=$('button')
sswitch.click(function (){
    setusername()
})