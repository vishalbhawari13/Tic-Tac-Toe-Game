let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let modebtn = document.querySelector("#mode-btn")
let body = document.querySelector("body")
let heading =document.querySelector("#heading")

let mode = true;

const modeChange=()=>{
    if(mode)
    {
        body.style.backgroundColor="#42113C";
        heading.style.color="white"
        mode=false;
    }
    else{
        body.style.backgroundColor="#EFB9CB";
        heading.style.color="black"
        mode=true;
    }
}

modebtn.addEventListener("click",modeChange);

let turn0 = true;


const resetGame =()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide")

}

const winningPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true; 
        }
        box.disabled=true;

        winnerCheck();
    })
})

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const winnerCheck=()=>{
    for(let pattern of winningPattern)
    {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="" )
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner",pos1val)
                showWinner(pos1val);
                
            }
            
        }
        
    }
     
}




newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);