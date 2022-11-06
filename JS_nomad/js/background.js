const images = ["02.jpg", "03.jpg","04.jpg"];

const ranImage = images[Math.floor(Math.random()*images.length)]; 

console.log(ranImage); 

const MyImage = document.createElement("img"); 

console.log(MyImage); 

MyImage.src=`img/${ranImage}`; 
console.log(MyImage); 

document.body.appendChild(MyImage); 