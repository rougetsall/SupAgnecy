
console.log(window.innerWidth+"px "+window.innerHeight+"px");
var contante=document.querySelector('.contante');
setInterval(function(){
	document.body.backgroundSize=window.innerWidth+"px "+window.innerHeight+"px";
	
	
	     },100)//2s
var menu =document.querySelector('.menu');
menu.addEventListener('click', function() {

var page="";
var logogo=document.querySelector('.logogo');
var contact=document.querySelector('.contact');

contact.style.marginLeft="60%";



})


var croix =document.querySelector('.croix');
croix.addEventListener('click', function() {
var contact =document.querySelector('.contact');
contact.style.marginLeft="-150%";


})

var paris =document.querySelector('.paris');
console.log(window.innerWidth+"px "+window.innerHeight+"px");
var contante=document.querySelector('.contantez');
setInterval(function(){
	document.body.backgroundSize=window.innerWidth+"px "+window.innerHeight+"px";
	contante.style.width=((window.innerWidth*80)/100)+"px";
	
    contante.style.height=((window.innerHeight*80)/100)+"px";
	
	     },100)//2s
var menu =document.querySelector('.menuz');
menu.addEventListener('click', function() {

contante.style.marginLeft="-200%"

var contact=document.querySelector('.contactz');

contact.style.marginLeft="60%";


})

var croix =document.querySelector('.croixz');
croix.addEventListener('click', function() {

contante.style.marginLeft="8%"
var contact=document.querySelector('.contactz');

contact.style.marginLeft="-150%";


})

var paris =document.querySelector('#parisz');
var lille =document.querySelector('#lillez');
var lyonz =document.querySelector('#lionz');

var datelnz =document.querySelector('.datelnz');
var datelz =document.querySelector('.datelz');
var datepz =document.querySelector('.datepz');



datepz.style.display="none";
 datelnz.style.display="none";
 datelz.style.display="none";

lille.addEventListener('click', function() {
 datepz.style.display="none";
 datelnz.style.display="none";
 datelz.style.display="inline-block";

        lille.style.textAlign=" center";
        lille.style.border="solid 6px #fff";
		lille.style.width="60%";
		lille.style.height="15%";
		lille.style.marginLeft="10%"; 
		lille.style.fontSize="25px";
	   lille.style.color="#000";
	   lille.style.backgroundColor="#fff";

	   paris.style.border="solid 4px #fff";
	   paris.style.width="60%";
	   paris.style.height="15%";
	   paris.style.textAlign=" center";
	   paris.style.marginLeft="10%"; 
       paris.style.color="#fff";
       paris.style.backgroundColor="transparent";

       lyonz.style.textAlign=" center";
       lyonz.style.border="solid 4px #fff";
	   lyonz.style.width="60%";
	   lyonz.style.height="15%";
	   lyonz.style.backgroundColor="transparent";
       lyonz.style.color="#fff";
       page="lille";
       var voirz =document.querySelector('.voirz');
      voirz.addEventListener('click', function() {
            if (page=="lille") {
            	document.location.href="lille.html";
            	page="";
            }


	
      })


})



paris.addEventListener('click', function() {
 datepz.style.display="inline-block";
 datelnz.style.display="none";
 datelz.style.display="none";
 
       paris.style.textAlign=" center";
        paris.style.border="solid 6px #fff";
		paris.style.width="60%";
		paris.style.height="15%";
		paris.style.marginLeft="10%"; 
		paris.style.fontSize="25px";
	   paris.style.color="#000";
	   paris.style.backgroundColor="#fff";


	   lyonz.style.border="solid 4px #fff";
	   lyonz.style.width="60%";
	   lyonz.style.height="15%";
	   lyonz.style.textAlign=" center";
	   lyonz.style.marginLeft="10%"; 
       lyonz.style.color="#fff";
       lyonz.style.backgroundColor="transparent";

       lille.style.textAlign=" center";
       lille.style.border="solid 4px #fff";
	   lille.style.width="60%";
	   lille.style.height="15%";
	   lille.style.backgroundColor="transparent";
       lille.style.color="#fff";

       page="paris";
       var voirz =document.querySelector('.voirz');
      voirz.addEventListener('click', function() {
            if (page=="paris") {
            	document.location.href="paris.html";
            	page="";
            }


	
      })
       

})




lyonz.addEventListener('click', function() {
 datepz.style.display="none";
 datelnz.style.display="inline-block";
 datelz.style.display="none";

        lyonz.style.textAlign=" center";
        lyonz.style.border="solid 6px #fff";
		lyonz.style.width="60%";
		lyonz.style.height="15%";
		lyonz.style.marginLeft="10%"; 
		lyonz.style.fontSize="25px";
	   lyonz.style.color="#000";
	   lyonz.style.backgroundColor="#fff";


	   paris.style.border="solid 4px #fff";
	   paris.style.width="60%";
	   paris.style.height="15%";
	   paris.style.textAlign=" center";
	   paris.style.marginLeft="10%"; 
       paris.style.color="#fff";
       paris.style.backgroundColor="transparent";

       lille.style.textAlign=" center";
       lille.style.border="solid 4px #fff";
	   lille.style.width="60%";
	   lille.style.height="15%";
	   lille.style.backgroundColor="transparent";
       lille.style.color="#fff";

       page="lyon";
       var voirz =document.querySelector('.voirz');
      voirz.addEventListener('click', function() {
            if (page=="lyon") {
            	document.location.href="lyon.html";
            	page="";
            }


	
      })



})


 var voirz =document.querySelector('.voirz');







 