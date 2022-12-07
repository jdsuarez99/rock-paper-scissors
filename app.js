let button_Stone = document.querySelector(".button_Stone").addEventListener("click", stoneProcess);
let button_Paper = document.querySelector(".button_Paper").addEventListener("click", paperProcess);
let  button_Scissors = document.querySelector(".button_Scissors").addEventListener("click", scissorsProcess)

let message = document.querySelector(".message");
const container = document.querySelector(".container-pc");
const choose = document.querySelector(".choose");

const img_Stone = document.querySelector("#Stone").src;
const img_paper = document.querySelector("#Papper").src;
const img_scissor = document.querySelector("#Scissors").src;
 
let accountantUser = document.querySelector(".accountantUser");
let accountantPc = document.querySelector(".accountantPc");

let user = 0 ; 
let PC = 0;


function stoneProcess(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_Stone)
    if(Random == 1){
    document.querySelector(".img-Compu").setAttribute("src", img_Stone)
    message.innerHTML = `<div class="alert alert-success" role="alert">!TIE!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        PC = PC + 1;
        accountantPc.innerHTML = PC;
        message.innerHTML = `<div class="alert alert-success" role="alert">!PC WIN!</div>`
    }else if(Random === 3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        user = user + 1;
        accountantUser.innerHTML = user;
        message.innerHTML = `<div class="alert alert-success" role="alert">!USER WIN!</div>`
    }
    gameOver();
}

function paperProcess(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_paper)
    if(Random === 1){
        document.querySelector(".img-Compu").setAttribute("src", img_Stone)
        user = user + 1;
        accountantUser.innerHTML = user;
        message.innerHTML = `<div class="alert alert-success" role="alert">!USER WIN!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        message.innerHTML = `<div class="alert alert-success" role="alert">!TIE!</div>`
    }else if(Random === 3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        PC = PC + 1;
        accountantPc.innerHTML = PC;
        message.innerHTML = `<div class="alert alert-success" role="alert">!PC WIN!</div>`
    }
    gameOver();
}

function scissorsProcess(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_scissor)
    if(Random === 1){
        document.querySelector(".img-Compu").setAttribute("src", img_Stone)
        PC = PC + 1;
        accountantPc.innerHTML = PC;
        message.innerHTML = `<div class="alert alert-success" role="alert">!PC WIN!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        user = user + 1;
        accountantUser.innerHTML = user;
        message.innerHTML = `<div class="alert alert-success" role="alert">!USER WIN!</div>`
    }else if(Random ===3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        message.innerHTML = `<div class="alert alert-success" role="alert">!TIE!</div>`
    }
    gameOver();
}


function gameOver(){
    if(PC === 3){
        message.innerHTML = `<div class="alert alert-success" role="alert">!LOSER!</div>
        <a href="index.html" class="link">Play again</a>`
        container.style.display = "none";
        choose.style.display = "none";
    }
    
    else if(user === 3){
        message.innerHTML = `<div class="alert alert-success" role="alert">!WINNER!</div>
        <a href="index.html" class="link">Play again</a>`
        container.style.display = "none";
        choose.style.display = "none";
    }
}