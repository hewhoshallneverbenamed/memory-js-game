const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard); firstCard.classList.remove('notguessed');
  secondCard.removeEventListener('click', flipCard); secondCard.classList.remove('notguessed');

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
}

// next level function
function next(){
  //checking if game completed
  if(document.querySelector('.notguessed') == null){
    // rewriting game html code to add cards
    document.getElementById('game').innerHTML = `<div class="notguessed memory-card" data-framework="iron">
    <img class="front-face" src="./images/Iron_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="iron">
    <img class="front-face" src="./images/Iron_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>

  <div class="notguessed memory-card" data-framework="bronze">
    <img class="front-face" src="./images/Bronze_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="bronze">
    <img class="front-face" src="./images/Bronze_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>

  <div class="notguessed memory-card" data-framework="silver">
    <img class="front-face" src="./images/Silver_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="silver">
    <img class="front-face" src="./images/Silver_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>

  <div class="notguessed memory-card" data-framework="gold">
    <img class="front-face" src="./images/Gold_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="gold">
    <img class="front-face" src="./images/Gold_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>

  <div class="notguessed memory-card" data-framework="plat">
    <img class="front-face" src="./images/Platinum_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="plat">
    <img class="front-face" src="./images/Platinum_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>

  <div class="notguessed memory-card" data-framework="diamond">
    <img class="front-face" src="./images/Diamond_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="diamond">
    <img class="front-face" src="./images/Diamond_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="garbage">
    <img class="front-face" src="./images/Garbage_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="garbage">
    <img class="front-face" src="./images/Garbage_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="ascendant">
    <img class="front-face" src="./images/Ascendant_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="ascendant">
    <img class="front-face" src="./images/Ascendant_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="immortal">
    <img class="front-face" src="./images/Immortal_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="immortal">
    <img class="front-face" src="./images/Immortal_1_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="radiant">
    <img class="front-face" src="./images/Radiant_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>
  <div class="notguessed memory-card" data-framework="radiant">
    <img class="front-face" src="./images/Radiant_Rank.png" alt="" />
    <img class="back-face" src="./images/vlogo.png" alt="logo" />
  </div>`;
  
  const cards2 = document.querySelectorAll('.memory-card');
  //disable next level button
  document.getElementById("nlvl").disabled = true;
  // css tweaking for better ui
  cards2.forEach(card => card.classList.add('level2'));
  
  //adding back event listeners
  cards2.forEach(card => card.addEventListener('click', flipCard));
  
  //shuffle
  cards2.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;})
  }else alert('complete this level first')

}

//replay lvl function
function replay(){
  if(document.querySelector('.notguessed') == null){
// lvl1
    lockBoard = true;
    //unflip
    cards.forEach(card => card.classList.remove('flip'));
    resetBoard();
    shuffle();
    //add event listener
    cards.forEach(card => card.addEventListener('click', flipCard));
//lvl2
    const cards2 = document.querySelectorAll('.memory-card');
    lockBoard = true;
    //unflip
    cards2.forEach(card => card.classList.remove('flip'));
    resetBoard();
    //shuffle
    cards2.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;})
    //add event listener
    cards2.forEach(card => card.addEventListener('click', flipCard));

  }else alert('complete level first')
}


//immediate excutions
shuffle();
cards.forEach(card => card.addEventListener('click', flipCard));