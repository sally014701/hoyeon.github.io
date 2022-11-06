const clock=document.querySelector("#clock"); 

clock.innerText="Clock"; 

function SetClock () {
    const Time =new Date(); 
    const Hour =String(Time.getHours()).padStart(2,"0"); 
    const Minute= String(Time.getMinutes()).padStart(2,"0"); 
    const Second= String(Time.getSeconds()).padStart(2,"0"); 

    clock.innerText=`${Hour}:${Minute}:${Second}`


    
}
SetClock(); 
setInterval(SetClock,1000); 