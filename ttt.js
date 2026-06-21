let boxes=document.querySelectorAll('.box');
let resetBtn=document.getElementById('reset');
let turno=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let gameend=false;
let show=document.getElementById('show');
let player1=0;
let player2=0;

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(gameend){
            return;
        }
        if(turno){
            box.innerText="X";
            turno=false;
        }else{
            box.innerText="O";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
        
    })
})
let boxdisabled=() =>{
    boxes.forEach((box) =>{
        box.disabled=true;
    })
}
let greenbox = (pattern) =>{
    boxes[pattern[0]].style.backgroundColor="lightgreen";
    boxes[pattern[1]].style.backgroundColor="lightgreen";
    boxes[pattern[2]].style.backgroundColor="lightgreen";

}
let checkwinner=() => {
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if (pos1===pos2 && pos2===pos3){
            if(pos1 !="" && pos2 !="" && pos3 !=""){
                if(pos1==="X"){
                    greenbox(pattern);
                    boxdisabled();
                    player1++;
                    show.innerHTML=`Player 1 win<br> player 1 score: ${player1} <br> player 2 score: ${player2}`;
                    gameend=true;
                    return;
                }else if(pos1==="O"){
                    greenbox(pattern);
                    boxdisabled();
                    player2++;
                    show.innerHTML=`Player 2 win<br> player 1 score: ${player1} <br> player 2 score: ${player2}`;
                    gameend=true;
                    return;
                }
                
            }
        }
    }
    checkdraw();
}

let checkdraw=() => {
    let is_draw=true;
    boxes.forEach((box) =>{
        if(box.innerText === ""){
            is_draw=false;
        }
    })
    if(is_draw){
        show.innerText="It's a draw!";
    }
}

resetBtn.addEventListener("click", () =>{
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
        box.style.backgroundColor="";
    })
    gameend=false;
    console.clear();
    turno=true;
    show.innerText="";
})