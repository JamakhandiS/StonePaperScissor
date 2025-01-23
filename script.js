// const val = ["stone","paper","scissor"];
// let a = val[Math.floor(Math.random()*val.length)];
// let b = val[Math.floor(Math.random()*val.length)];
// console.log(a,b);

// if(a===b){
//     console.log("MAtch drawn")
// }
// else if(a=="stone" && b=="scissor" || a=="paper" && b=="stone" || a=="scissor" && b=="paper"){
//     console.log("A won")
// } 
// else {
//     console.log("B won")
// }

const val = ["stone","paper","scissor"];
let a = val[Math.floor(Math.random()*val.length)];
let b = val[Math.floor(Math.random()*val.length)];


// const img2 = document.createElement('img')

// const button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
const game = document.getElementById('game')

// function imgCallA(){
//     const imgElement = document.createElement('img')
//     if (a === "scissor") {
//         imgElement.src = "scissor.jpeg"; // Replace with the actual image path
//         imgElement.id = "img1"; 
       
//       } else if (a === "stone") {
//         imgElement.src = "stone.jpeg"; // Replace with the actual image path
//         imgElement.id = "img2"; 
//       }
//       else{
//         imgElement.src = "paper.jpeg"; // Replace with the actual image path
//         imgElement.id = "img3"; 
//       }
      
//       game.appendChild(imgElement)
// }
// function imgCallB(){
//     const imgElement = document.createElement('img')
//     if (b === "scissor") {
//         imgElement.src = "scissor.jpeg"; // Replace with the actual image path
//         imgElement.id = "img1"; 
       
//       } else if (b === "stone") {
//         imgElement.src = "stone.jpeg"; // Replace with the actual image path
//         imgElement.id = "img2"; 
//       }
//       else{
//         imgElement.src = "paper.jpeg"; // Replace with the actual image path
//         imgElement.id = "img3"; 
//       }
      
//       game.appendChild(imgElement)
// }

// button1.addEventListener('click', function() {
//     imgCallA();
// });
// button2.addEventListener('click',function(){
//     imgCallB();
// });
// const spanInGame = document.createElement('span')
// spanInGame.appendChild('game')

// if(a===b)
// {

//     spanInGame.innerHTML="Match Draw"
// }

// else if(a=="stone" && b=="scissor" || a=="paper" && b=="stone" || a=="scissor" && b=="paper"){
//         console.log("A won")
//     } 
//     else {
//         spanInGame.log("B won")
//     }
    

const button1 = document.getElementById('button1'); 
const button2 = document.getElementById('button2');
const spanInGame = document.createElement('span');
spanInGame.textContent = 'game'; 

let playerAChoice;
let playerBChoice;
let gameStarted = false; 

function imgCallA() {
    const imgElement = document.createElement('img')
        if (a === "scissor") {
            imgElement.src = "scissor.jpeg"; // Replace with the actual image path
            imgElement.id = "img1"; 
           
          } else if (a === "stone") {
            imgElement.src = "stone.jpeg"; // Replace with the actual image path
            imgElement.id = "img2"; 
          }
          else{
            imgElement.src = "paper.jpeg"; // Replace with the actual image path
            imgElement.id = "img3"; 
          }
          
          game.appendChild(imgElement)
  playerAChoice = a; // Replace with actual player A's choice 
  checkGameStatus();
}

function imgCallB() {
  // ... (Your code to display image for player B) ...
  const imgElement = document.createElement('img')
      if (b === "scissor") {
          imgElement.src = "scissor.jpeg"; // Replace with the actual image path
          imgElement.id = "img1"; 
         
        } else if (b === "stone") {
          imgElement.src = "stone.jpeg"; // Replace with the actual image path
          imgElement.id = "img2"; 
        }
        else{
          imgElement.src = "paper.jpeg"; // Replace with the actual image path
          imgElement.id = "img3"; 
        }
        
        game.appendChild(imgElement)
  playerBChoice = b; // Replace with actual player B's choice
  checkGameStatus();
}

function checkGameStatus() {    
  if (playerAChoice && playerBChoice) {
    if (gameStarted) {
      return; // Prevent multiple result checks
    }
    gameStarted = true; 
    checkResult();
    button1.disabled = true;
    button2.disabled = true; 
  }
}

function checkResult() {
  if (playerAChoice === playerBChoice) {
    spanInGame.textContent = "Match Draw";
  } else if (
    (playerAChoice === "stone" && playerBChoice === "scissor") ||
    (playerAChoice === "paper" && playerBChoice === "stone") ||
    (playerAChoice === "scissor" && playerBChoice === "paper")
  ) {
    spanInGame.textContent = "A won";
  } else {
    spanInGame.textContent = "B won";
  }

  game.appendChild(spanInGame); 
}

button1.addEventListener('click', imgCallA);
button2.addEventListener('click', imgCallB);