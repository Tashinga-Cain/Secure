slideIndex=1; 
showSlide(slideIndex); 
function plusSlide(n){     
showSlide(slideIndex +=n);
 }  
function currentSlide(n){     
showSlide(slideIndex=n); } 
function showSlide(n){    
var slides=document.getElementsByClassName("slides");
var dot=document.getElementsByClassName("dots");
 if(n>slides.length){slideIndex=1} 
 if(n<1){slides.length=slideIndex} 
 for(var i=0;i<slides.length;i++){
 slides[i].style.display="none"; 
 }
 for(var i=0; i<dot.length;i++){ 
dot[i].className=dot[i].className.replace(" active",""); } 
slides[slideIndex-1].style.display="block"; 
dot[slideIndex-1].className  += " active"; 
} 



const testcontainer=document.querySelector(".testimonial-container"); 
const testcontainerDescription=document.querySelector(".testimonial"); 
const userImage=document.querySelector(".user-image"); 
const userName=document.querySelector(".user-name"); 
const userRole=document.querySelector(".role"); 

const testmonials=[    
 {         
name:" Miles",         
position:"Marketing",         
photo:"images/pic2.jpg",         
text:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas aliquam adipisci cumque cum reprehenderit, rerum nemo iure quibusdam deleniti, esse ullam, error omnis. Quaerat aliquam cumque exercitationem hic consequuntur!  "      
}, 
 {         
    name:"Joseph",         
    position:"software developer",         
    photo:"images/pic3.jpg",         
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas aliquam adipisci cumque cum reprehenderit, rerum nemo iure quibusdam deleniti, esse ullam, error omnis. Quaerat aliquam cumque exercitationem hic consequuntur! "     
 }, 
    {         
    name:"Jessica",         
    position:"software engineering",         
    photo:"images/pic4.jpg",         
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas aliquam adipisci cumque cum reprehenderit, rerum nemo iure quibusdam deleniti, esse ullam, error omnis. Quaerat aliquam cumque exercitationem hic consequuntur!"     
 }, 
   {         
 name:"Anna",         
position:"Tecnician",         
    photo:"images/pic5.jpg",        
     text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas aliquam adipisci cumque cum reprehenderit, rerum nemo iure quibusdam deleniti, esse ullam, error omnis. Quaerat aliquam cumque exercitationem hic consequuntur!"    
} 
]
let index=1; 
function updateTestemonial(){     
const {name, position,photo,text}=testmonials[index] 
testcontainerDescription.innerHTML=text;    
 userName.innerHTML=name;    
  userImage.src=photo;     
  userRole.innerHTML=position;    
 ++index;     
if(index>testmonials.length-1){  
     index=0;    
     }
      } setInterval(updateTestemonial,10000); 
//home
const show=document.querySelector(".show");
const hide=document.querySelector(".hide");
const sidebar=document.querySelector(".side-bar");

show.addEventListener("click", function(){
 sidebar.style.display="flex";
})

hide.addEventListener("click", function(){
 sidebar.style.display="none";
})



