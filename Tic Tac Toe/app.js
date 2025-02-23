let boxs=document.querySelectorAll('.box')
const resetbtn=document.querySelector('#reset-btn')
let newGamebtn=document.querySelector('#new-btn')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('#msg');


let turn0 = true;
 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 
 const resetGame=()=>{
    turn0=true;
    enableBoxes()
    msgContainer.classList.add("hide");
 }

 

 boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked")
        if(turn0===true){
            box.innerHTML="O"
            turn0=false;
        }else{
            turn0=true;
            box.innerHTML="X"
        }
        box.disabled=true;
        console.log(turn0)

        checkWinner();
    })
 })

 const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
 }

 const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
 }


 const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }


 const checkWinner=()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])

        let pos1val=boxs[pattern[0]].innerHTML;
        let pos2val=boxs[pattern[1]].innerHTML;
        let pos3val=boxs[pattern[2]].innerHTML;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);

                showWinner(pos1val);
            }
        }


    }

 }


 newGamebtn.addEventListener('click',resetGame);
 resetbtn.addEventListener('click', resetGame);


