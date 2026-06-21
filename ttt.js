let boxes=document.querySelectorAll('.box');
let resetBtn=document.getElementById('reset');
let turno=true;
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let gameend=false;

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

let checkwinner=() => {
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if (pos1===pos2 && pos2===pos3){
            if(pos1 !="" && pos2 !="" && pos3 !=""){
                if(pos1==="X"){
                    console.log("player1 win");
                    gameend=true;
                    return;
                }else if(pos1==="O"){
                    console.log("player2 win");
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
        console.log("draw");
    }
}

resetBtn.addEventListener("click", () =>{
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    gameend=false;
    console.clear();
    turno=true;
})