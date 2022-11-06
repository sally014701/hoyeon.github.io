

const loginForm=document.querySelector("#myid")
const loginInput = document.querySelector("#myid input"); 
const h1=document.querySelector("#hello"); 

const hidden= "hidden"; 
const userKeyName= "username"; 

function showuser (user) {
    const savedUserName= localStorage.getItem(userKeyName); 
    h1.innerText=`Hello ${savedUserName}`; //innerText는 이미 Hello username이지만 .disappear 

    h1.classList.remove(hidden);

}
function LoginSubmit (event) {


    event.preventDefault(); 

    const userName= loginInput.value; 
    console.log(userName); 

    localStorage.setItem(userKeyName,userName);  //이름 입력 받으면 local storage에 저장해놓기로 함. 

    loginForm.classList.add(hidden); //loginForm은 사라지게 하고는 

    showuser(); // h1는 나타나게 하고 싶음 (이때 동작을 간단하게 하기 위해서 .dissappear를 공유해서 사용! add하면 사라지고, remove하면 나타남 )









}



//저장된 이름 변수 만들기 (이 변수는 local Storage에 저장됨. )



const savedUserName= localStorage.getItem(userKeyName); 

console.log(savedUserName); 

if (savedUserName===null) {
    loginForm.classList.remove(hidden);  
    loginForm.addEventListener("submit", LoginSubmit);  

    //show the form 
   
} else{
    //don't show the form (클릭 버튼이 포함된 그 form 자체가 뜨면 안됨. ) show the greetings 
    showuser();
  
   
}







