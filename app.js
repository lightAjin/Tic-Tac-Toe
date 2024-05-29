let boxes = document.querySelectorAll(".box")
let turnO = true; //PlayeX PlayerO
let count=0; //In case of a Draw
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let resetBtn=document.querySelector("#reset-btn");

//Creating Array of Winning Pattern
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//Traversing Array of boxes
boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if (turnO == "true") {
     
            box.innerText = "O"
            turnO = "false";
        } else {

            box.innerText = "X";
            turnO = "true";
        }
        box.disabled = "true"; //To stop re-writing on the button
        count++;

        let isWinner=checkWinner();
    
        if(count===9 && !isWinner){
            gameDraw();
        }
    })
})

const showWinner=(winner) =>{
    msg.innerText=`Winner is :${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const resetgaame=()=>{
    turnO=true;
    count=0;
    enabledBoxes();
    msgContainer.classList.add("hiide")
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const newgame=()=>{
    enabledBoxes();
    count=0;
     turnO=true;
    msgContainer.classList.add("hide");
}
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };
  
resetBtn.addEventListener("click",resetgaame);
newGameBtn.addEventListener("click",newgame);
