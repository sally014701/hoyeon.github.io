//todo 입력 form 가져오기 
const todoForm = document.getElementById("todo"); 
const todoInput= todoForm.querySelector("input"); 
const todoList = document.getElementById("list"); 
const ToDoKeyName= "ToDoKey"; 
let ToDos= [] ; //todo 를 담을 array

const ToDosKey= "ToDos"; 

function DeleteToDo (event) {
   
    console.dir(event.target.parentNode.innerText); 

    const deleteli= event.target.parentNode; //우리가 삭제하고자 하는 li 

    console.log(deleteli.id); 
        
    function sexyFilter(item) { //item은 array의 각 값들 ToDos[0] -> ToDos[1] -> ToDos[2] --- 
        return item.id !== parseInt(deleteli.id); //but deleteli.id는 string이라서 int로 바꿔줘야--> parseInt()

    }
    ToDos=ToDos.filter(sexyFilter); //기존의 array를 업데이트해줘야 
    //업데이트된 todos를 다시 localStorage에 저장해야 
    SaveToDo();

    deleteli.remove();  //이건 Paint된 html의 결과만 삭제한거지 array에는 어떠한 영향도 끼치지 않는다,. 
    
  

}


function PaintToDo (todoValueType) {
    //html에 요소 새로 생성해서 보내줄거임 -- 
    // li 테그 
    const li = document.createElement("li"); 
    li.id=todoValueType.id; //변수도 아니라, li의 id에 값에 할당된 id를 아예 박아버림. 

    // span 테그 
    const span=document.createElement("span"); 

    //button 테그 
    const button= document.createElement("button"); 
    button.innerText="✖"; 

    //span테그의 innerText로 입력한 값 넣을거임. 
    span.innerText=todoValueType.text;

    //li테그의 자식요소로 span테그 놓을거임 / li테그의 자식요소로 button

    li.appendChild(span); 
    li.appendChild(button); 

    //button누르면 todo list지워지게 동작 

    button.addEventListener("click",DeleteToDo); 




    //만들어놓은 li (내부 child에는 이미 span 있음)를 html의 ul테그의 자식 요소로 넣기만 하면 됨.  

    todoList.appendChild(li); 

   

  
    
    


}

function SaveToDo() { //localStorage에 array저장하는 함수 
    localStorage.setItem(ToDosKey,JSON.stringify(ToDos)); 
}

function ToDoSave(event) {
    event.preventDefault(); 
    //submit하자마자 입력한 값 저장하기 
    const todoValueType=todoInput.value; //입력받은 값 

    //value자리를 비워놓고 싶음. 
    
    todoInput.value=''; 

    const todoObject ={
        text: todoValueType, 
        id: Date.now()

    }


   //html에 paint하기 전에 array(todos)에 입력받은 값 저장하기 (push함수) ---> database에 값 저장 
   ToDos.push(todoObject); 
    
    
 //입력한 다음에는 받은 todo를 html에 paint할래.--새롭게 더하는 li 테그 내부 span테그의 innerText에 
    PaintToDo (todoObject); //입력받은 값 변수를 함수의 인수로 보내주면서 함수 호출

   //save todos (array) -- dataStorage에 저장하기 

   SaveToDo(); 

   console.log(ToDos); 
  

}

todoForm.addEventListener("submit",ToDoSave); 


const SavedToDo= localStorage.getItem(ToDosKey); 

console.log(SavedToDo)



// todo에 아무것도 없다면, paint해줄 수가 없음! if/else로 나눠주자 


 
//만약 todo localStorage가 null이 아니라면, get the info of the localStorage (just a boring string) -> and change that into a JS array .. then we can paint this 
if (SavedToDo !== null) {
    const SavedToDoArray= JSON.parse(SavedToDo); 
    ToDos= SavedToDoArray ;
    console.log(SavedToDoArray); 
    SavedToDoArray.forEach(PaintToDo); //SaveToArray의 각각의 item들이 인수 ---> PaintToDo를 통해서 하나씩 화면에 PAint 
    
} else {

}