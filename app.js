console.log("Project 1: Memory Game")
//####################################\\\\\\\\\\\\\\\\\#################################### 
//####################################|||Memory Game|||#################################### 
//####################################/////////////////#################################### 
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&|||Global Variables|||&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let start_time= 0
let matchNum=0
let timer=0
const array1=['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const array2=['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let array3=[]
let clicks=0
let checkForMatchArray = []//This array will only hold 2 cards to check for match
let allCardsArray=[]//This array holds all the cards
let clock=0
let level1Btn=document.querySelector('#lvl1')
level1Btn.addEventListener('click',activateLevelOne)

//#######################################################################################
//#############################|||Modal for Information|||###############################
//#######################################################################################

//MODAL for Information
let modalBtn = document.querySelector('#myBtn')
let modal = document.querySelector('.modal') 
let closeBtn = document.querySelector(".close")
// open the modal
modalBtn.addEventListener('click', function(e){
   modal.style.display = 'block';
})
// When the user clicks on (x), close it
   closeBtn.onclick = function() {
   modal.style.display = 'none';
}
// When the user clicks on window, close it
window.onclick = function(event) {
   if (event.target == modal) {
   modal.style.display = 'none';
  }
}

function levelOne(){
//#######################################################################################
//#################################|||Level one|||###################################
//#######################################################################################

clearOldCards()
startGame()

  start_time=30
  totalTime=180
  matchNum=8
  clock=setInterval(countDownTimer, 1000)
  clicks=0

  for(let i=0;i<8;i++){
    let newDiv=document.createElement('div')
    let parent=document.querySelector('.container')
    newDiv.setAttribute('class','card')
    newDiv.classList.add('card-back')
    let text=document.createTextNode('')
    newDiv.appendChild(text)
    parent.appendChild(newDiv)
  }

  for(let i=0;i<4;i++){
    // randomNum=Math.round(Math.random*10)
    array3.push(array1[i])
    array3.push(array2[i])
  }
  shuffle(array3)//Must shuffle array 3 here to get unique set of cards

  //Creating Divs for each round
  let allCards=document.querySelectorAll(".card")//using this formula to get HTML elements
  for(let i=0;i<array3.length;i++){
    allCards[i].innerHTML=array3[i]
  }

  for(let i=0; i<allCards.length; i++){//This loop adds all cards in play to this array
    allCardsArray.push(allCards[i])
  }

  // loop to add event listeners to each card
  for (let i = 0; i < allCardsArray.length; i++){
      allCardsArray[i].addEventListener("click", displayCard);
      allCardsArray[i].addEventListener("click", addToComparisonArray);
      allCardsArray[i].addEventListener("click",checkForMatch);
      allCardsArray[i].addEventListener("click",clickCounter);
      allCardsArray[i].addEventListener("click",forTheWin);
  };
}

function levelTwo(){
//#######################################################################################
//#################################|||Level two|||###################################
//#######################################################################################
  clearOldCards()
  startGame()
  start_time=360
  totalTime=360
  matchNum=24
  clock=setInterval(countDownTimer, 1000)
  clicks=0

  for(let i=0;i<24;i++){
    let newDiv=document.createElement('div')
    let parent=document.querySelector('.container')
    newDiv.setAttribute('class','card')
    newDiv.classList.add('card-back')
    let text=document.createTextNode("")
    newDiv.appendChild(text)
    parent.appendChild(newDiv)
  }

  for(let i=0;i<12;i++){
    array3.push(array1[i])
    array3.push(array2[i])
  }
  shuffle(array3)//Must shuffle array 3 here to get unique set of cards

  //Creating Divs for each round
  let allCards=document.querySelectorAll(".card")//using this formula to get HTML elements
  for(let i=0;i<array3.length;i++){
    allCards[i].innerHTML=array3[i]
  }

  for(let i=0; i<allCards.length; i++){//This loop adds all cards in play to this array
    allCardsArray.push(allCards[i])
  }

  // loop to add event listeners to each card
  for (let i = 0; i < allCardsArray.length; i++){
      allCardsArray[i].addEventListener("click", displayCard);
      allCardsArray[i].addEventListener("click", addToComparisonArray);
      allCardsArray[i].addEventListener("click",checkForMatch);
      allCardsArray[i].addEventListener("click",clickCounter);
      allCardsArray[i].addEventListener("click",forTheWin);
  };
}

function levelThree(){
//#######################################################################################
//#################################|||Level three|||#####################################
//#######################################################################################
  clearOldCards()
  startGame()  
  start_time=720
  totalTime=720
  matchNum=48
  clicks=0
  clock=setInterval(countDownTimer, 1000)

  for(let i=0;i<48;i++){
    let newDiv=document.createElement('div')
    let parent=document.querySelector('.container')
    newDiv.setAttribute('class','card')
    newDiv.classList.add('card-back')
    // newDiv.setAttribute('class','card-back')
    let text=document.createTextNode('')
    newDiv.appendChild(text)
    parent.appendChild(newDiv)
  }

  for(let i=0;i<24;i++){
    array3.push(array1[i])
    array3.push(array2[i])
  }
  shuffle(array3)//Must shuffle array 3 here to get unique set of cards

  //Creating Divs for each round
  let allCards=document.querySelectorAll(".card")//using this formula to get HTML elements
  for(let i=0;i<array3.length;i++){
    allCards[i].innerHTML=array3[i]
  }

  for(let i=0; i<allCards.length; i++){//This loop adds all cards in play to this array
    allCardsArray.push(allCards[i])
  }

  // loop to add event listeners to each card
  for (let i = 0; i < allCardsArray.length; i++){
      allCardsArray[i].addEventListener("click", displayCard);
      allCardsArray[i].addEventListener("click", addToComparisonArray);
      allCardsArray[i].addEventListener("click",checkForMatch);
      allCardsArray[i].addEventListener("click",clickCounter);
      allCardsArray[i].addEventListener("click",forTheWin);
  }
}
//#######################################################################################
//#################################|||Functions|||#######################################
//#######################################################################################



// shows cards and then disables them from turing over
function displayCard (){
  

    this.classList.toggle("card-back");
    this.classList.toggle("card");
    this.classList.toggle("disabled");
}

function addToComparisonArray (){
  let clickedCardValue=event.currentTarget.innerText
  checkForMatchArray.push(clickedCardValue)
}

function checkForMatch(){//checks if two cards are a match or not
  if(checkForMatchArray.length<2){
    console.log("checking")
    event.currentTarget.classList.add('match')
  }

  else if (checkForMatchArray[0]===checkForMatchArray[1]){
    console.log("Its a match")
    event.currentTarget.classList.add('match')
    checkForMatchArray=[]    
   
    return true
  } else{
    const testEvent=event
    
    setTimeout(()=>{
      checkForMatchArray=[]
      console.log("Its not a match")
      testEvent.target.classList.remove('disabled')
      testEvent.target.classList.add('card', 'card-back')
      let openCardAll=document.querySelectorAll('.disabled')
      for(let i=0; i<openCardAll.length;i++){
        let openCard=document.querySelector('.disabled')
        openCard.classList.remove('match')
        openCard.classList.remove('disabled')
        openCard.classList.add('card', 'card-back')
      }
    },1000)

    return false
  }
}
//Fisher Yates Model to shuffle Array: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// @description function to start a new play 
function startGame(){
  start_time=0
  totalTime=0
  matchNum=0

  checkForMatchArray = [];
  array3=[]
}

    //deleting old cards:

function clearOldCards(){
    let parent= document.querySelector(".container")
    // parent.innerHTML = ""
    let num = parent.childNodes
    for(let i=0; i<num; i++){
      parent.removeChild(num[i])
    }

}


// shuffles cards when page is refreshed / loads
function clickCounter(){
  clicks++
  document.querySelector('.click-counter').innerHTML="no.of moves: "+clicks  
}

function countDownTimer(){//checks to see amount of time remaining
  start_time=start_time-1
  let mins=Math.floor(start_time/60)
  let sec=Math.floor(start_time%60)
  document.querySelector(".timer").innerHTML="Time Remaining: "+mins+" Mins"+" : "+sec+" Secs"
   if (mins===0 && sec===0) {
   stopTimer(clock)
  alert("Your Time is Up. You lose. You must restart the game.")
  }
}

function stopTimer(element){
  clearInterval(element)
}

function winModal(){//for Congrats Modal
  let modalForWin=document.querySelector('.winModal')
  let closeBtnWin = document.querySelector("#winClose")
  let endGameBtn=document.querySelector('#endGame')
  let lvlTwoBtn=document.querySelector('#level2')
  let lvlThreeBtn=document.querySelector('#level3')
  // open the modal
  modalForWin.style.display = 'block';
  endGameBtn.addEventListener('click',endGame)
  lvlTwoBtn.addEventListener('click',activateLevelTwo)
  lvlThreeBtn.addEventListener('click',activateLevelThree)
  lvlTwoBtn.onclick = function() {
     modalForWin.style.display = 'none';
  }
  lvlThreeBtn.onclick = function() {
   modalForWin.style.display = 'none';
  }
  // startGame()
  // When the user clicks on (x), close it
     closeBtnWin.onclick = function() {
     modalForWin.style.display = 'none';
  }
  // When the user clicks on window, close it
  window.onclick = function(event) {
     if (event.target == modalForWin) {
     modalForWin.style.display = 'none';
    }
  }
}


function forTheWin(){
  let totalMatches=document.querySelectorAll('.match').length
  if (totalMatches===matchNum){
    stopTimer(clock)
    winModal()
    document.querySelector('#finalMove').innerHTML=clicks
    document.querySelector('#finalTime').innerHTML=Math.floor((totalTime-start_time)/60)+" mins:"+((totalTime-start_time)%60)+" secs"
  } 
}

function endGame(){
 document.body.innerHTML=""
}

function activateLevelOne(){
document.querySelector('.container').innerHTML=''
levelOne()
}

function activateLevelTwo(){
document.querySelector('.container').innerHTML=''
levelTwo()
}

function activateLevelThree(){
document.querySelector('.container').innerHTML=''
levelThree()
}

function disableClick(){
    $(this).prop('disabled', true);
}


