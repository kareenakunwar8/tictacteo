let items= document.querySelectorAll(".item");
let resetbtn=document.querySelector(".resetbtn");
let  newGamebtn = document.querySelector(".new");
let msg =document.querySelector(".msg")
let turno=true;
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame =() => {
    turno =true;
    enableitem();
    msg.classList.add("hide");
}
items.forEach((item)  => {
    item.addEventListener("click",()=>{
        console.log("itemwas clicked");
    if(turno){
        item.innerText="O";
        
        turno=false;
    }else{
        item.innerText="X";
        turno=true;
    }
    item.disabled=true;

    checkwineer();
    });


   
    });
    
const disableditem =() =>{
    for(let item of items){
        item.disabled =true;
    }
}

const enableitem = () =>{
    for(let item of items){
        item.disabled=false;
        item.innerText ="";
    }
};

const showwinner = (winner) =>{
    alert(  `congatulation,Winner is ${winner}`);
    msg.classList.remove("hide");
    disableditem();

};

const checkwineer =() =>{
for( let pattern of winpatterns){
            let pos1val = items[pattern[0]].innerText;
        let pos2val = items[pattern[1]].innerText;
        let pos3val = items[pattern[2]].innerText;
if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        ("winner",pos1val);

        showwinner(pos1val);
    }
}}
};
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);