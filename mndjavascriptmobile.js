/* Feel free to use and repurpose my code, as long as you credit me and/or link to my github page
   Written by justin keena, https://github.com/jwkeena/Magi-Nation-Booster-Pack-Simulator */

function holographic() { 
    let randomCardId = "randomCard";
    let randomNumber = Math.floor(Math.random()*11) + 1;
    randomCardId = randomCardId + randomNumber;
    let element = document.getElementById(randomCardId);
    element.className += "holographic";
}

//Sets variables for the flip all button to only affect unflipped cards
let cardIsFlipped0 = 0;
let cardIsFlipped1 = 0;
let cardIsFlipped2 = 0;
let cardIsFlipped3 = 0;
let cardIsFlipped4 = 0;
let cardIsFlipped5 = 0;
let cardIsFlipped6 = 0;
let cardIsFlipped7 = 0;
let cardIsFlipped8 = 0;
let cardIsFlipped9 = 0;
let cardIsFlipped10 = 0;
let cardIsFlipped11 = 0;

//For flipping the booster pack image
function flip0() {
    let element = document.getElementById('myDiv');
    if (cardIsFlipped0 === 0) {
        element.classList.toggle("flipped");
        ++cardIsFlipped0;
    } else {
        element.classList.toggle("flipped");
        cardIsFlipped0 = 1;
    }
}

let checkFlip = 1;

//When card is clicked, its CSS flipping animation is triggered
//The computer also logs that it has been flipped by changing the cardIsFlipped variable
//cardIsFlipped 0 = unflipped card; cardIsFlipped 1 = flipped card (waiting for modal zoom), 2 = card being reflipped
//Checks if all cards have been flipped, and then affects the counter and countdown accordingly
function flip1() {
    let element = document.getElementById('myDiv1');
    if (cardIsFlipped1 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped1;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped1 === 1) {
        ++cardIsFlipped1;
        return;
    } 
    if (cardIsFlipped1 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped1 = 0;
        return;
    }
}

function flip2() {
    let element = document.getElementById('myDiv2');
    if (cardIsFlipped2 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped2;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped2 === 1) {
        ++cardIsFlipped2;
        return;
    } 
    if (cardIsFlipped2 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped2 = 0;
        return;
    }
}

function flip3() {
    let element = document.getElementById('myDiv3');
    if (cardIsFlipped3 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped3;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped3 === 1) {
        ++cardIsFlipped3;
        return;
    } 
    if (cardIsFlipped3 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped3 = 0;
        return;
    }
}

function flip4() {
    let element = document.getElementById('myDiv4');
    if (cardIsFlipped4 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped4;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped4 === 1) {
        ++cardIsFlipped4;
        return;
    } 
    if (cardIsFlipped4 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped4 = 0;
        return;
    }
}

function flip5() {
    let element = document.getElementById('myDiv5');
    if (cardIsFlipped5 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped5;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped5 === 1) {
        ++cardIsFlipped5;
        return;
    } 
    if (cardIsFlipped5 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped5 = 0;
        return;
    }
}

function flip6() {
    let element = document.getElementById('myDiv6');
    if (cardIsFlipped6 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped6;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped6 === 1) {
        ++cardIsFlipped6;
        return;
    } 
    if (cardIsFlipped6 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped6 = 0;
        return;
    }
}

function flip7() {
    let element = document.getElementById('myDiv7');
    if (cardIsFlipped7 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped7;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped7 === 1) {
        ++cardIsFlipped7;
        return;
    } 
    if (cardIsFlipped7 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped7 = 0;
        return;
    }
}

function flip8() {
    let element = document.getElementById('myDiv8');
    if (cardIsFlipped8 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped8;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1){
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped8 === 1) {
        ++cardIsFlipped8;
        return;
    } 
    if (cardIsFlipped8 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped8 = 0;
        return;
    }
}

function flip9() {
    let element = document.getElementById('myDiv9');
    if (cardIsFlipped9 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped9;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped9 === 1) {
        ++cardIsFlipped9;
        return;
    } 
    if (cardIsFlipped9 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped9 = 0;
        return;
    }   
}

function flip10() {
    let element = document.getElementById('myDiv10');
    if (cardIsFlipped10 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped10;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped10 === 1) {
        ++cardIsFlipped10;
        return;
    } 
    if (cardIsFlipped10 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped10 = 0;
        return;
    }

}

function flip11() {
    let element = document.getElementById('myDiv11');
    if (cardIsFlipped11 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped11;
        if (cardIsFlipped1 >= 1 && cardIsFlipped2 >= 1 && cardIsFlipped3 >= 1 &&
            cardIsFlipped4 >= 1 && cardIsFlipped5 >= 1 && cardIsFlipped6 >= 1 && 
            cardIsFlipped7 >= 1 && cardIsFlipped8 >= 1 && cardIsFlipped9 >= 1 &&
            cardIsFlipped10 >= 1 && cardIsFlipped11 >= 1 && checkFlip === 1) {
                increasePacksOpened();
                ++checkFlip;
                return;
            }
        return;
    } 
    if (cardIsFlipped11 === 1) {
        ++cardIsFlipped11;
        return;
    } 
    if (cardIsFlipped11 === 2) {
        element.classList.toggle("flipped");
        cardIsFlipped11 = 0;
        return;
    }

}

//Only flips cards if they haven't been flipped already
function flipAll() {
    if (cardIsFlipped1 === 0) {
        flip1();
        }
    if (cardIsFlipped2 === 0) {
        flip2();
        }
    if (cardIsFlipped3 === 0) {
        flip3();
        }
    if (cardIsFlipped4 === 0) {
        flip4();
        }
    if (cardIsFlipped5 === 0) {
        flip5();
        }
    if (cardIsFlipped6 === 0) {
        flip6();
        }
    if (cardIsFlipped7 === 0) {
        flip7();
        }
    if (cardIsFlipped8 === 0) {
        flip8();
        }
    if (cardIsFlipped9 === 0) {
        flip9();
        }
    if (cardIsFlipped10 === 0) {
        flip10();
        }
    if (cardIsFlipped11 === 0) {
        flip11();
        }
}

//Sets up image choices for for modal window
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var img1 = document.getElementById("randomCard1");
var img2 = document.getElementById("randomCard2");
var img3 = document.getElementById("randomCard3");
var img4 = document.getElementById("randomCard4");
var img5 = document.getElementById("randomCard5");
var img6 = document.getElementById("randomCard6");
var img7 = document.getElementById("randomCard7");
var img8 = document.getElementById("randomCard8");
var img9 = document.getElementById("randomCard9");
var img10 = document.getElementById("randomCard10");
var img11 = document.getElementById("randomCard11");

img1.onclick = function () {
    if (cardIsFlipped1 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img2.onclick = function () {
if (cardIsFlipped2 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img3.onclick = function () {
if (cardIsFlipped3 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img4.onclick = function () {
if (cardIsFlipped4 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img5.onclick = function () {
if (cardIsFlipped5 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img6.onclick = function () {
if (cardIsFlipped6 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img7.onclick = function () {
if (cardIsFlipped7 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img8.onclick = function () {
if (cardIsFlipped8 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img9.onclick = function () {
if (cardIsFlipped9 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img10.onclick = function () {
if (cardIsFlipped10 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img11.onclick = function () {
if (cardIsFlipped11 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

//Closes modal if x is clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function reset0() {
    const element = document.getElementById('myDiv');
    element.classList.remove("flipped");
    cardIsFlipped0 = 0;
}

function reset1() {
    const element = document.getElementById('myDiv1');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard1');
    element2.classList.remove("holographic");
    cardIsFlipped1 = 0;
}

function reset2() {
    const element = document.getElementById('myDiv2');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard2');
    element2.classList.remove("holographic");
    cardIsFlipped2 = 0;
}

function reset3() {
    const element = document.getElementById('myDiv3');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard3');
    element2.classList.remove("holographic");
    cardIsFlipped3 = 0;
}

function reset4() {
    const element = document.getElementById('myDiv4');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard4');
    element2.classList.remove("holographic");
    cardIsFlipped4 = 0;
}

function reset5() {
    const element = document.getElementById('myDiv5');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard5');
    element2.classList.remove("holographic");
    cardIsFlipped5 = 0;
}

function reset6() {
    const element = document.getElementById('myDiv6');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard6');
    element2.classList.remove("holographic");
    cardIsFlipped6 = 0;
}

function reset7() {
    const element = document.getElementById('myDiv7');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard7');
    element2.classList.remove("holographic");
    cardIsFlipped7 = 0;
}

function reset8() {
    const element = document.getElementById('myDiv8');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard8');
    element2.classList.remove("holographic");
    cardIsFlipped8 = 0;
}

function reset9() {
    const element = document.getElementById('myDiv9');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard9');
    element2.classList.remove("holographic");
    cardIsFlipped9 = 0;
}

function reset10() {
    const element = document.getElementById('myDiv10');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard10');
    element2.classList.remove("holographic");
    cardIsFlipped10 = 0;
}

function reset11() {
    const element = document.getElementById('myDiv11');
    element.classList.remove("flipped");
    const element2 = document.getElementById('randomCard11');
    element2.classList.remove("holographic");
    cardIsFlipped11 = 0;
}

function resetAll() {
    reset0();
    reset1();
    reset2();
    reset3();
    reset4();
    reset5();
    reset6();
    reset7();
    reset8();
    reset9();
    reset10();
    reset11();
}

let cardOrderArray = [
'randomCard1', 
'randomCard2', 
'randomCard3', 
'randomCard4', 
'randomCard5', 
'randomCard6', 
'randomCard7', 
'randomCard8', 
'randomCard9',
'randomCard10',
'randomCard11'];

//Creates a method within the Array object to shuffle an array (.prototype lets you add custom methods) via the Fisher-Yates shuffle
Array.prototype.shuffle = function() {

    //Note that the 'this' keyword refers to the array passed into the function

    //Sets i to the full length of the array, and initializes j and temp for later use in the while loop
    let i = this.length, j, temp;

    //Decrements i to account for arrays starting at 0 index; prevents loop from running on the 0 index, since there'd be nothing to swap
    while(--i > 0) {

        //Picks random whole number between 0 and i, to determine which element to swap with the element in the i index (it's ok if the element it picks IS in the i index).
        //On the first iteration of the loop, the variable i, having been decremented, is now one less than the actual whole number of items in the array because arrays start at index 0.
        //Remember, i decrements on each loop so that each element (except what's in the 0 index) in the array is picked to be shuffled.
        //1 must be added to i because Math.random does not include the final number in its range, and the final index is the one we want to start with.
        j = Math.floor(Math.random()* (i+1));

        //Assigns temp the index position of the random number just chosen (j).
        //In short, this statement picks the element to be swapped for the element in the current i index.
        temp = this[j];

        //Copies the value of the randomly picked element in the j position from the element in the current i position.
        this[j] = this[i];

        //At this point TWO elements in the array have the same value (whatever's in the i position), so we need to rewrite what's in the i position based on what used to be in the j position.
        //Thankfully, what was in the j position has been stored in temp.
        //Now we rewrite what's in the i position with what's stored in temp.
        this[i] = temp;
    }
    //Returns shuffled array
    return this;
}

//Enables random pack button
function randomPack() {
    randomSet = Math.floor(Math.random()*6 + 1);
    switch(randomSet) {
        case 1:
            newPackUnlimited();
            break;
        case 2:
            newPackAwakening();
            break;
        case 3:
            newPackDreamsEnd();
            break;
        case 4:
            newPackNightmaresDawn();
            break;
        case 5:
            newPackVoiceOfTheStorms();
            break;
        case 6:
            newPackTraitorsReach();
            break;
    }
}

//Enables the same set button
let currentSet = 0
function sameSet() {
    switch(currentSet) { 
        case 1:
            newPackUnlimited();
            break;
        case 2:
            newPackAwakening();
            break;
        case 3:
            newPackDreamsEnd();
            break;
        case 4:
            newPackNightmaresDawn();
            break;
        case 5:
            newPackVoiceOfTheStorms();
            break;
        case 6:
            newPackTraitorsReach();
            break;
    }
}

//Shuffle starts in off position
//Toggles shuffle array method on or off
let currentShuffle = 0
function toggleShuffle() {
    var topButton = document.getElementById("button5");
    var bottomButton = document.getElementById("button10");
    switch(currentShuffle) {
        //If shuffle button is hit, the suffle function is turned on
        case 0:
            ++currentShuffle;
            topButton.innerHTML = "SHUFFLE (ON)";
            topButton.style.backgroundColor = "rgb(75, 0, 130)";
            topButton.style.color = "rgb(172, 154, 68)";
            bottomButton.innerHTML = "SHUFFLE (ON)";
            bottomButton.style.backgroundColor = "rgb(75, 0, 130)";
            bottomButton.style.color = "rgb(172, 154, 68)";
            break;
        //If the shuffle button is hit again, the shuffle function is turned off
        case 1:
            --currentShuffle;
            topButton.innerHTML = "SHUFFLE (OFF)";
            topButton.style.backgroundColor = "rgb(172, 154, 68)";
            topButton.style.color = "rgb(75, 0, 130)";
            bottomButton.innerHTML = "SHUFFLE (OFF)";
            bottomButton.style.backgroundColor = "rgb(172, 154, 68)";
            bottomButton.style.color = "rgb(75, 0, 130)";
            break;
    }
}

function newPackUnlimited(){
    //Increases pack counter
    increaseCounter();
    //Resets flip counter (to prevent the last card being spammed for the countdown)
    checkFlip = 1;
    //Prepares same set button 
    currentSet = 1;
    //Changes first image to indicate the type of pack chosen
    document.getElementById("boosterPackFront").src="mobile_base_pack1.JPG";
    //Changes back of first image to indicate the type of pack chosen (currently don't have this image)
    document.getElementById("boosterPackBack").src="mobile_base_pack2.jpg";
    //Flips all cards over to starting position
    resetAll();
    //Shuffles the IDs of cards if user chooses to shuffle; otherwise reverts to fixed order
    if (currentShuffle === 1) {
    cardOrderArray.shuffle();
        //Erases rarity indicators since it's randomized
        document.getElementById("rarity1").src = "empty.png";
        document.getElementById("rarity2").src = "empty.png";
        document.getElementById("rarity3").src = "empty.png";
        document.getElementById("rarity4").src = "empty.png";
        document.getElementById("rarity5").src = "empty.png";
        document.getElementById("rarity6").src = "empty.png";
        document.getElementById("rarity7").src = "empty.png";
        document.getElementById("rarity8").src = "empty.png";
        document.getElementById("rarity9").src = "empty.png";
        document.getElementById("rarity10").src = "empty.png";
        document.getElementById("rarity11").src = "empty.png";

    } else {
    cardOrderArray = [
        'randomCard1', 
        'randomCard2', 
        'randomCard3', 
        'randomCard4', 
        'randomCard5', 
        'randomCard6', 
        'randomCard7', 
        'randomCard8', 
        'randomCard9',
        'randomCard10',
        'randomCard11'];
        //Rarity indicators appear for fixed order
        document.getElementById("rarity1").src = "rarity_uncommon.png";
        document.getElementById("rarity2").src = "rarity_uncommon.png";
        document.getElementById("rarity3").src = "rarity_uncommon.png";
        document.getElementById("rarity4").src = "rarity_rare.png";
        document.getElementById("rarity5").src = "rarity_common.png";
        document.getElementById("rarity6").src = "rarity_common.png";
        document.getElementById("rarity7").src = "rarity_common.png";
        document.getElementById("rarity8").src = "rarity_common.png";
        document.getElementById("rarity9").src = "rarity_common.png";
        document.getElementById("rarity10").src = "rarity_common.png";
        document.getElementById("rarity11").src = "rarity_common.png";
    }   
    //Counts the number of rares in the nested rares array
    let numOfRares = unlimitedLinks[0].length;
    //Picks a number between 0 and the total number of rares. Do NOT add 1 to Math.floor so that index position 0 can be chosen later. Adding 1 can result in blank cards
    let randomRare = Math.floor(Math.random()*numOfRares);
    //Picks a random rare from the nested array based on the random number just chosen
    let newRare = unlimitedLinks[0][randomRare];
    //Stores the value in the first position of the shuffled IDs array
    let newId1 = cardOrderArray[3];
    //Reassigns the value just stored as the new ID of the rare, thus putting it in a randomized position 
    document.getElementById(newId1).src = newRare;

    //Same process, for 3 uncommons
    let numOfUncommons = unlimitedLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = unlimitedLinks[1][randomUncommon1];
    let newUncommon2 = unlimitedLinks[1][randomUncommon2];
    let newUncommon3 = unlimitedLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    //Prevents duplicate uncommons by repeating function if duplicate is found
    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackUnlimited();
                    return;
            }
        }
    }

    //Same process, for 7 uncommons
    let numOfCommons = unlimitedLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = unlimitedLinks[2][randomCommon1];
    let newCommon2 = unlimitedLinks[2][randomCommon2];
    let newCommon3 = unlimitedLinks[2][randomCommon3];
    let newCommon4 = unlimitedLinks[2][randomCommon4];
    let newCommon5 = unlimitedLinks[2][randomCommon5];
    let newCommon6 = unlimitedLinks[2][randomCommon6];
    let newCommon7 = unlimitedLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;

    //Prevents duplicate commons
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackUnlimited();
                    return;
            }
        }
    }

    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = unlimitedLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = unlimitedLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

function newPackAwakening(){
    increaseCounter();
    checkFlip = 1;
    currentSet = 2;
    document.getElementById("boosterPackFront").src="mobile_awakening_pack1.jpg";
    document.getElementById("boosterPackBack").src="mobile_awakening_pack2.jpg";
    resetAll();
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "empty.png";
        document.getElementById("rarity2").src = "empty.png";
        document.getElementById("rarity3").src = "empty.png";
        document.getElementById("rarity4").src = "empty.png";
        document.getElementById("rarity5").src = "empty.png";
        document.getElementById("rarity6").src = "empty.png";
        document.getElementById("rarity7").src = "empty.png";
        document.getElementById("rarity8").src = "empty.png";
        document.getElementById("rarity9").src = "empty.png";
        document.getElementById("rarity10").src = "empty.png";
        document.getElementById("rarity11").src = "empty.png";
        } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9',
            'randomCard10',
            'randomCard11'];
            document.getElementById("rarity1").src = "rarity_uncommon.png";
            document.getElementById("rarity2").src = "rarity_uncommon.png";
            document.getElementById("rarity3").src = "rarity_uncommon.png";
            document.getElementById("rarity4").src = "rarity_rare.png";
            document.getElementById("rarity5").src = "rarity_common.png";
            document.getElementById("rarity6").src = "rarity_common.png";
            document.getElementById("rarity7").src = "rarity_common.png";
            document.getElementById("rarity8").src = "rarity_common.png";
            document.getElementById("rarity9").src = "rarity_common.png";
            document.getElementById("rarity10").src = "rarity_common.png";
            document.getElementById("rarity11").src = "rarity_common.png";
        }   

    //Rare distribution
    let numOfRares = awakeningLinks[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = awakeningLinks[0][randomRare];
    let newId1 = cardOrderArray[3];
    document.getElementById(newId1).src = newRare;

    //Uncommon distribution
    let numOfUncommons = awakeningLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = awakeningLinks[1][randomUncommon1];
    let newUncommon2 = awakeningLinks[1][randomUncommon2];
    let newUncommon3 = awakeningLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackAwakening();
                    return;
            }
        }
    }

    //Common distribution
    let numOfCommons = awakeningLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = awakeningLinks[2][randomCommon1];
    let newCommon2 = awakeningLinks[2][randomCommon2];
    let newCommon3 = awakeningLinks[2][randomCommon3];
    let newCommon4 = awakeningLinks[2][randomCommon4];
    let newCommon5 = awakeningLinks[2][randomCommon5];
    let newCommon6 = awakeningLinks[2][randomCommon6];
    let newCommon7 = awakeningLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;

    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackAwakening();
                    return;
            }
        }
    }
    
    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = awakeningLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = awakeningLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

function newPackDreamsEnd(){
    increaseCounter();
    checkFlip = 1;
    currentSet = 3;
    document.getElementById("boosterPackFront").src="mobile_dreams_end_pack1.jpg";
    document.getElementById("boosterPackBack").src="mobile_dreams_end_pack2.jpg";
    resetAll();
    if (currentShuffle === 1) {
    cardOrderArray.shuffle();
    document.getElementById("rarity1").src = "empty.png";
    document.getElementById("rarity2").src = "empty.png";
    document.getElementById("rarity3").src = "empty.png";
    document.getElementById("rarity4").src = "empty.png";
    document.getElementById("rarity5").src = "empty.png";
    document.getElementById("rarity6").src = "empty.png";
    document.getElementById("rarity7").src = "empty.png";
    document.getElementById("rarity8").src = "empty.png";
    document.getElementById("rarity9").src = "empty.png";
    document.getElementById("rarity10").src = "empty.png";
    document.getElementById("rarity11").src = "empty.png";
    } else {
    cardOrderArray = [
        'randomCard1', 
        'randomCard2', 
        'randomCard3', 
        'randomCard4', 
        'randomCard5', 
        'randomCard6', 
        'randomCard7', 
        'randomCard8', 
        'randomCard9',
        'randomCard10',
        'randomCard11'];
        document.getElementById("rarity1").src = "rarity_uncommon.png";
        document.getElementById("rarity2").src = "rarity_uncommon.png";
        document.getElementById("rarity3").src = "rarity_uncommon.png";
        document.getElementById("rarity4").src = "rarity_rare.png";
        document.getElementById("rarity5").src = "rarity_common.png";
        document.getElementById("rarity6").src = "rarity_common.png";
        document.getElementById("rarity7").src = "rarity_common.png";
        document.getElementById("rarity8").src = "rarity_common.png";
        document.getElementById("rarity9").src = "rarity_common.png";
        document.getElementById("rarity10").src = "rarity_common.png";
        document.getElementById("rarity11").src = "rarity_common.png";
    }   

    //Rare distribution. 
    let numOfRares = dreamsEndLinks[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = dreamsEndLinks[0][randomRare];
    let newId1 = cardOrderArray[3];
    document.getElementById(newId1).src = newRare;

    //Uncommon distribution
    let numOfUncommons = dreamsEndLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = dreamsEndLinks[1][randomUncommon1];
    let newUncommon2 = dreamsEndLinks[1][randomUncommon2];
    let newUncommon3 = dreamsEndLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackDreamsEnd();
                    return;
            }
        }
    }

    //Common distribution
    let numOfCommons = dreamsEndLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = dreamsEndLinks[2][randomCommon1];
    let newCommon2 = dreamsEndLinks[2][randomCommon2];
    let newCommon3 = dreamsEndLinks[2][randomCommon3];
    let newCommon4 = dreamsEndLinks[2][randomCommon4];
    let newCommon5 = dreamsEndLinks[2][randomCommon5];
    let newCommon6 = dreamsEndLinks[2][randomCommon6];
    let newCommon7 = dreamsEndLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;
    
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackDreamsEnd();
                    return;
            }
        }
    }

    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = unlimitedLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = unlimitedLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

function newPackNightmaresDawn(){
    increaseCounter();
    checkFlip = 1;
    currentSet = 4;
    document.getElementById("boosterPackFront").src="mobile_nightmares_dawn_pack1.jpg";
    document.getElementById("boosterPackBack").src="mobile_nightmares_dawn_pack2.jpg";
    resetAll();
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "empty.png";
        document.getElementById("rarity2").src = "empty.png";
        document.getElementById("rarity3").src = "empty.png";
        document.getElementById("rarity4").src = "empty.png";
        document.getElementById("rarity5").src = "empty.png";
        document.getElementById("rarity6").src = "empty.png";
        document.getElementById("rarity7").src = "empty.png";
        document.getElementById("rarity8").src = "empty.png";
        document.getElementById("rarity9").src = "empty.png";
        document.getElementById("rarity10").src = "empty.png";
        document.getElementById("rarity11").src = "empty.png";
        } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9',
            'randomCard10',
            'randomCard11'];
            document.getElementById("rarity1").src = "rarity_uncommon.png";
            document.getElementById("rarity2").src = "rarity_uncommon.png";
            document.getElementById("rarity3").src = "rarity_uncommon.png";
            document.getElementById("rarity4").src = "rarity_rare.png";
            document.getElementById("rarity5").src = "rarity_common.png";
            document.getElementById("rarity6").src = "rarity_common.png";
            document.getElementById("rarity7").src = "rarity_common.png";
            document.getElementById("rarity8").src = "rarity_common.png";
            document.getElementById("rarity9").src = "rarity_common.png";
            document.getElementById("rarity10").src = "rarity_common.png";
            document.getElementById("rarity11").src = "rarity_common.png";
        }   

    //Rare distribution
    let numOfRares = nightmaresDawnLinks[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = nightmaresDawnLinks[0][randomRare];
    let newId1 = cardOrderArray[3];
    document.getElementById(newId1).src = newRare;

    //Uncommon distribution
    let numOfUncommons = nightmaresDawnLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = nightmaresDawnLinks[1][randomUncommon1];
    let newUncommon2 = nightmaresDawnLinks[1][randomUncommon2];
    let newUncommon3 = nightmaresDawnLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackNightmaresDawn();
                    return;
            }
        }
    }

    //Common distribution
    let numOfCommons = nightmaresDawnLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = nightmaresDawnLinks[2][randomCommon1];
    let newCommon2 = nightmaresDawnLinks[2][randomCommon2];
    let newCommon3 = nightmaresDawnLinks[2][randomCommon3];
    let newCommon4 = nightmaresDawnLinks[2][randomCommon4];
    let newCommon5 = nightmaresDawnLinks[2][randomCommon5];
    let newCommon6 = nightmaresDawnLinks[2][randomCommon6];
    let newCommon7 = nightmaresDawnLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;
    
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackNightmaresDawn();
                    return;
            }
        }
    }

    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = nightmaresDawnLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = nightmaresDawnLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

function newPackVoiceOfTheStorms(){
    increaseCounter();
    checkFlip = 1;
    currentSet = 5;
    document.getElementById("boosterPackFront").src="mobile_voice_of_the_storms_pack1.jpg";
    document.getElementById("boosterPackBack").src="mobile_voice_of_the_storms_pack2.jpg";
    resetAll();
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "empty.png";
        document.getElementById("rarity2").src = "empty.png";
        document.getElementById("rarity3").src = "empty.png";
        document.getElementById("rarity4").src = "empty.png";
        document.getElementById("rarity5").src = "empty.png";
        document.getElementById("rarity6").src = "empty.png";
        document.getElementById("rarity7").src = "empty.png";
        document.getElementById("rarity8").src = "empty.png";
        document.getElementById("rarity9").src = "empty.png";
        document.getElementById("rarity10").src = "empty.png";
        document.getElementById("rarity11").src = "empty.png";
        } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9',
            'randomCard10',
            'randomCard11'];
            document.getElementById("rarity1").src = "rarity_uncommon.png";
            document.getElementById("rarity2").src = "rarity_uncommon.png";
            document.getElementById("rarity3").src = "rarity_uncommon.png";
            document.getElementById("rarity4").src = "rarity_rare.png";
            document.getElementById("rarity5").src = "rarity_common.png";
            document.getElementById("rarity6").src = "rarity_common.png";
            document.getElementById("rarity7").src = "rarity_common.png";
            document.getElementById("rarity8").src = "rarity_common.png";
            document.getElementById("rarity9").src = "rarity_common.png";
            document.getElementById("rarity10").src = "rarity_common.png";
            document.getElementById("rarity11").src = "rarity_common.png";
        }   

    //Rare distribution
    let numOfRares = voiceOfTheStormsLinks[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = voiceOfTheStormsLinks[0][randomRare];
    let newId1 = cardOrderArray[3];
    document.getElementById(newId1).src = newRare;

    //Uncommon distribution
    let numOfUncommons = voiceOfTheStormsLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = voiceOfTheStormsLinks[1][randomUncommon1];
    let newUncommon2 = voiceOfTheStormsLinks[1][randomUncommon2];
    let newUncommon3 = voiceOfTheStormsLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackVoiceOfTheStorms();
                    return;
            }
        }
    }

    //Common distribution
    let numOfCommons = voiceOfTheStormsLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = voiceOfTheStormsLinks[2][randomCommon1];
    let newCommon2 = voiceOfTheStormsLinks[2][randomCommon2];
    let newCommon3 = voiceOfTheStormsLinks[2][randomCommon3];
    let newCommon4 = voiceOfTheStormsLinks[2][randomCommon4];
    let newCommon5 = voiceOfTheStormsLinks[2][randomCommon5];
    let newCommon6 = voiceOfTheStormsLinks[2][randomCommon6];
    let newCommon7 = voiceOfTheStormsLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;
    
    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackVoiceOfTheStorms();
                    return;
            }
        }
    }

    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = voiceOfTheStormsLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = voiceOfTheStormsLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

function newPackTraitorsReach(){
    increaseCounter();
    checkFlip = 1;
    currentSet = 6;
    document.getElementById("boosterPackFront").src="mobile_traitors_reach_pack1.jpg";
    document.getElementById("boosterPackBack").src="mobile_traitors_reach_pack1.jpg";
    resetAll();
    if (currentShuffle === 1) {
        cardOrderArray.shuffle();
        document.getElementById("rarity1").src = "empty.png";
        document.getElementById("rarity2").src = "empty.png";
        document.getElementById("rarity3").src = "empty.png";
        document.getElementById("rarity4").src = "empty.png";
        document.getElementById("rarity5").src = "empty.png";
        document.getElementById("rarity6").src = "empty.png";
        document.getElementById("rarity7").src = "empty.png";
        document.getElementById("rarity8").src = "empty.png";
        document.getElementById("rarity9").src = "empty.png";
        document.getElementById("rarity10").src = "empty.png";
        document.getElementById("rarity11").src = "empty.png";
        } else {
        cardOrderArray = [
            'randomCard1', 
            'randomCard2', 
            'randomCard3', 
            'randomCard4', 
            'randomCard5', 
            'randomCard6', 
            'randomCard7', 
            'randomCard8', 
            'randomCard9',
            'randomCard10',
            'randomCard11'];
            document.getElementById("rarity1").src = "rarity_uncommon.png";
            document.getElementById("rarity2").src = "rarity_uncommon.png";
            document.getElementById("rarity3").src = "rarity_uncommon.png";
            document.getElementById("rarity4").src = "rarity_rare.png";
            document.getElementById("rarity5").src = "rarity_common.png";
            document.getElementById("rarity6").src = "rarity_common.png";
            document.getElementById("rarity7").src = "rarity_common.png";
            document.getElementById("rarity8").src = "rarity_common.png";
            document.getElementById("rarity9").src = "rarity_common.png";
            document.getElementById("rarity10").src = "rarity_common.png";
            document.getElementById("rarity11").src = "rarity_common.png";
        }   

    //Rare distribution
    let numOfRares = traitorsReachLinks[0].length;
    let randomRare = Math.floor(Math.random()*numOfRares);
    let newRare = traitorsReachLinks[0][randomRare];
    let newId1 = cardOrderArray[3];
    document.getElementById(newId1).src = newRare;

    //Uncommon distribution
    let numOfUncommons = traitorsReachLinks[1].length;
    let randomUncommon1 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon2 = Math.floor(Math.random()*numOfUncommons);
    let randomUncommon3 = Math.floor(Math.random()*numOfUncommons);
    let newUncommon1 = traitorsReachLinks[1][randomUncommon1];
    let newUncommon2 = traitorsReachLinks[1][randomUncommon2];
    let newUncommon3 = traitorsReachLinks[1][randomUncommon3];
    let newId2= cardOrderArray[0];
    let newId3= cardOrderArray[1];
    let newId4= cardOrderArray[2];
    document.getElementById(newId2).src = newUncommon1;
    document.getElementById(newId3).src = newUncommon2;
    document.getElementById(newId4).src = newUncommon3;

    let currentUncommons = [newUncommon1, newUncommon2, newUncommon3]
    for (let i = 0; i < 3; i++) {
        let j = 1 + i
            for (j; j < currentUncommons.length; j++) {
                if (currentUncommons[i] === currentUncommons[j]) {
                    --counter;
                    newPackTraitorsReach();
                    return;
            }
        }
    }

    //Common distribution
    let numOfCommons = traitorsReachLinks[2].length;
    let randomCommon1 = Math.floor(Math.random()*numOfCommons);
    let randomCommon2 = Math.floor(Math.random()*numOfCommons);
    let randomCommon3 = Math.floor(Math.random()*numOfCommons);
    let randomCommon4 = Math.floor(Math.random()*numOfCommons);
    let randomCommon5 = Math.floor(Math.random()*numOfCommons);
    let randomCommon6 = Math.floor(Math.random()*numOfCommons);
    let randomCommon7 = Math.floor(Math.random()*numOfCommons);
    let newCommon1 = traitorsReachLinks[2][randomCommon1];
    let newCommon2 = traitorsReachLinks[2][randomCommon2];
    let newCommon3 = traitorsReachLinks[2][randomCommon3];
    let newCommon4 = traitorsReachLinks[2][randomCommon4];
    let newCommon5 = traitorsReachLinks[2][randomCommon5];
    let newCommon6 = traitorsReachLinks[2][randomCommon6];
    let newCommon7 = traitorsReachLinks[2][randomCommon7];
    let newId5 = cardOrderArray[4];
    let newId6 = cardOrderArray[5];
    let newId7 = cardOrderArray[6];
    let newId8 = cardOrderArray[7];
    let newId9 = cardOrderArray[8];
    let newId10 = cardOrderArray[9];
    let newId11 = cardOrderArray[10];
    document.getElementById(newId5).src = newCommon1;
    document.getElementById(newId6).src = newCommon2;
    document.getElementById(newId7).src = newCommon3;
    document.getElementById(newId8).src = newCommon4;
    document.getElementById(newId9).src = newCommon5;
    document.getElementById(newId10).src = newCommon6;
    document.getElementById(newId11).src = newCommon7;

    let currentCommons = [newCommon1, newCommon2, newCommon3, newCommon4, newCommon5, newCommon6, newCommon7]
    for (let i = 0; i < 7; i++) {
        let j = 1 + i
            for (j; j < currentCommons.length; j++) {
                if (currentCommons[i] === currentCommons[j]) {
                    --counter;
                    newPackTraitorsReach();
                    return;
            }
        }
    }

    //1 in 5 chance of a random holo. Replaces first common
    let randomHolographic = Math.floor(Math.random()*5);
    if (randomHolographic === 0) {
        let randomHoloRarity = Math.floor(Math.random()*3);
        let numOfRandomSet = traitorsReachLinks[randomHoloRarity].length;
        let randomHolo = Math.floor(Math.random()*numOfRandomSet);
        let randomHoloURL = traitorsReachLinks[randomHoloRarity][randomHolo];
        document.getElementById(newId5).src = randomHoloURL;
        let element = document.getElementById(newId5);
        element.className += "holographic";
    }
}

let counter = 0;
let packsOpened = 0;

function increaseCounter() {
    ++counter;
    var element = document.getElementById("counter");
    element.innerHTML = "[ packs generated: " + counter;
}

function increasePacksOpened() {
    ++packsOpened;
    var element = document.getElementById("packsOpened");
    element.innerHTML = " | packs opened: " + packsOpened + " ] ";
}


const unlimitedLinks = [

    //Rares at index 0
    ['http://www.bluefurok.com/./BSImages/Ayebaw.jpg',
    'http://www.bluefurok.com/./BSImages/Cyclone_Vashp.jpg',    
    'http://www.bluefurok.com/./BSImages/Lovian.jpg',
    'http://www.bluefurok.com/./BSImages/Orathan_Flyer.jpg',
    'http://www.bluefurok.com/./BSImages/Orish.jpg',
    'http://www.bluefurok.com/./BSImages/Thunder_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Vellup.jpg',
    'http://www.bluefurok.com/./BSImages/Jaela.jpg',
    'http://www.bluefurok.com/./BSImages/Nimbulo.jpg',
    'http://www.bluefurok.com/./BSImages/Ora.jpg',
    'http://www.bluefurok.com/./BSImages/Arderials_Crown.jpg',
    'http://www.bluefurok.com/./BSImages/Storm_Ring.jpg',
    'http://www.bluefurok.com/./BSImages/Eclipse.jpg',
    'http://www.bluefurok.com/./BSImages/Storm_Cloud.jpg',
    'http://www.bluefurok.com/./BSImages/Flame_Hyren.jpg',   
    'http://www.bluefurok.com/./BSImages/Greater_Vaal.jpg',
    'http://www.bluefurok.com/./BSImages/Magma_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Raxis.jpg',
    'http://www.bluefurok.com/./BSImages/Vaal.jpg',
    'http://www.bluefurok.com/./BSImages/Ashgar.jpg',
    'http://www.bluefurok.com/./BSImages/Barak.jpg',
    'http://www.bluefurok.com/./BSImages/Magam.jpg',
    'http://www.bluefurok.com/./BSImages/Gorgles_Ring.jpg',
    'http://www.bluefurok.com/./BSImages/Heat_Lens.jpg',
    'http://www.bluefurok.com/./BSImages/Rod_of_Coals.jpg',
    'http://www.bluefurok.com/./BSImages/Scroll_of_Fire.jpg',
    'http://www.bluefurok.com/./BSImages/Flame_Control.jpg',
    'http://www.bluefurok.com/./BSImages/Spirit_of_the_Flame.jpg',
    'http://www.bluefurok.com/./BSImages/Balamant.jpg',
    'http://www.bluefurok.com/./BSImages/Bhatar.jpg',
    'http://www.bluefurok.com/./BSImages/Stagadan.jpg',
    'http://www.bluefurok.com/./BSImages/Timber_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Twee.jpg',
    'http://www.bluefurok.com/./BSImages/Orwin.jpg',
    'http://www.bluefurok.com/./BSImages/Wence.jpg',
    'http://www.bluefurok.com/./BSImages/Book_of_Life.jpg',
    'http://www.bluefurok.com/./BSImages/Energy_Band.jpg',
    'http://www.bluefurok.com/./BSImages/Orwins_Staff.jpg',
    'http://www.bluefurok.com/./BSImages/Flood_of_Energy.jpg',
    'http://www.bluefurok.com/./BSImages/Hyrens_Call.jpg',
    'http://www.bluefurok.com/./BSImages/Sap_of_Life.jpg',
    'http://www.bluefurok.com/./BSImages/Coral_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Deep_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Giant_Parathin.jpg',
    'http://www.bluefurok.com/./BSImages/Megathan.jpg',
    'http://www.bluefurok.com/./BSImages/Orathan.jpg',
    'http://www.bluefurok.com/./BSImages/Platheus.jpg',
    'http://www.bluefurok.com/./BSImages/Blu.jpg',
    'http://www.bluefurok.com/./BSImages/Mobis.jpg',
    'http://www.bluefurok.com/./BSImages/OQua.jpg',
    'http://www.bluefurok.com/./BSImages/Hubdras_Spear.jpg',
    'http://www.bluefurok.com/./BSImages/Orothean_Gloves.jpg',
    'http://www.bluefurok.com/./BSImages/Entangle.jpg',
    'http://www.bluefurok.com/./BSImages/Typhoon.jpg',
    'http://www.bluefurok.com/./BSImages/Will_of_Orothe.jpg',
    'http://www.bluefurok.com/./BSImages/Cave_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Giant_Korrit.jpg',
    'http://www.bluefurok.com/./BSImages/Giant_Parmalag.jpg',
    'http://www.bluefurok.com/./BSImages/Ormagon.jpg',
    'http://www.bluefurok.com/./BSImages/Vulbor.jpg',
    'http://www.bluefurok.com/./BSImages/Motash.jpg',
    'http://www.bluefurok.com/./BSImages/Trug.jpg',
    'http://www.bluefurok.com/./BSImages/Ulk.jpg',
    'http://www.bluefurok.com/./BSImages/Amulet_of_Ombor.jpg',
    'http://www.bluefurok.com/./BSImages/Gloves_of_Crystal.jpg',
    'http://www.bluefurok.com/./BSImages/Motashs_Staff.jpg',
    'http://www.bluefurok.com/./BSImages/Staff_of_Korrits.jpg',
    'http://www.bluefurok.com/./BSImages/Cave_In.jpg',
    'http://www.bluefurok.com/./BSImages/Thunderquake.jpg'],

    //Uncommons at index 1
    ['http://www.bluefurok.com/./BSImages/Alaban.jpg',
    'http://www.bluefurok.com/./BSImages/Epik.jpg',    
    'http://www.bluefurok.com/./BSImages/Xyx_Elder.jpg',
    'http://www.bluefurok.com/./BSImages/Adis.jpg',
    'http://www.bluefurok.com/./BSImages/Lasada.jpg',
    'http://www.bluefurok.com/./BSImages/Shimmer.jpg',
    'http://www.bluefurok.com/./BSImages/Stradus.jpg',
    'http://www.bluefurok.com/./BSImages/Cloud_Sceptre.jpg',
    'http://www.bluefurok.com/./BSImages/Eye_of_the_Storm.jpg',
    'http://www.bluefurok.com/./BSImages/Mask_of_Abwyn.jpg',
    'http://www.bluefurok.com/./BSImages/Fog_Bank.jpg',
    'http://www.bluefurok.com/./BSImages/Shockwave.jpg',
    'http://www.bluefurok.com/./BSImages/Drakan.jpg',
    'http://www.bluefurok.com/./BSImages/Fire_Grag.jpg',
    'http://www.bluefurok.com/./BSImages/Lava_Aq.jpg',
    'http://www.bluefurok.com/./BSImages/Lava_Arboll.jpg',
    'http://www.bluefurok.com/./BSImages/Lava_Balamant.jpg',
    'http://www.bluefurok.com/./BSImages/Quor_Pup.jpg',
    'http://www.bluefurok.com/./BSImages/Gar.jpg',
    'http://www.bluefurok.com/./BSImages/Grega.jpg',
    'http://www.bluefurok.com/./BSImages/Sinder.jpg',
    'http://www.bluefurok.com/./BSImages/Valkan.jpg',
    'http://www.bluefurok.com/./BSImages/Flame_Geyser.jpg',
    'http://www.bluefurok.com/./BSImages/Syphon_Vortex.jpg',
    'http://www.bluefurok.com/./BSImages/Balamant_Pup.jpg',
    'http://www.bluefurok.com/./BSImages/Eebit.jpg',
    'http://www.bluefurok.com/./BSImages/Giant_Carillion.jpg',
    'http://www.bluefurok.com/./BSImages/Rudwot.jpg',
    'http://www.bluefurok.com/./BSImages/Poad.jpg',
    'http://www.bluefurok.com/./BSImages/Tryn.jpg',
    'http://www.bluefurok.com/./BSImages/Yaki.jpg',
    'http://www.bluefurok.com/./BSImages/Hood_of_Hiding.jpg',
    'http://www.bluefurok.com/./BSImages/Robe_of_Vines.jpg',
    'http://www.bluefurok.com/./BSImages/Orwins_Gaze.jpg',
    'http://www.bluefurok.com/./BSImages/Vortex_of_Knowledge.jpg',
    'http://www.bluefurok.com/./BSImages/Abaquist.jpg',
    'http://www.bluefurok.com/./BSImages/Karak.jpg',
    'http://www.bluefurok.com/./BSImages/Paralit.jpg',
    'http://www.bluefurok.com/./BSImages/Ebylon.jpg',
    'http://www.bluefurok.com/./BSImages/Orlon.jpg',
    'http://www.bluefurok.com/./BSImages/Orthea.jpg',
    'http://www.bluefurok.com/./BSImages/Whall.jpg',
    'http://www.bluefurok.com/./BSImages/Corf_Pearl.jpg',
    'http://www.bluefurok.com/./BSImages/Orothean_Belt.jpg',
    'http://www.bluefurok.com/./BSImages/Orothean_Goggles.jpg',
    'http://www.bluefurok.com/./BSImages/Tidal_Wave.jpg',
    'http://www.bluefurok.com/./BSImages/Undertow.jpg',
    'http://www.bluefurok.com/./BSImages/Agovo.jpg',
    'http://www.bluefurok.com/./BSImages/Giant_Vulbor.jpg',
    'http://www.bluefurok.com/./BSImages/Korrit.jpg',
    'http://www.bluefurok.com/./BSImages/Mushroom_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Fossik.jpg',
    'http://www.bluefurok.com/./BSImages/Gogor.jpg',
    'http://www.bluefurok.com/./BSImages/Gruk.jpg',
    'http://www.bluefurok.com/./BSImages/Strag.jpg',
    'http://www.bluefurok.com/./BSImages/Digging_Goggles.jpg',
    'http://www.bluefurok.com/./BSImages/Bottomless_Pit.jpg',
    'http://www.bluefurok.com/./BSImages/Enrich.jpg',
    'http://www.bluefurok.com/./BSImages/Ground_Breaker.jpg',
    'http://www.bluefurok.com/./BSImages/Colossus.jpg',
    'http://www.bluefurok.com/./BSImages/Ancestral_Flute.jpg',
    'http://www.bluefurok.com/./BSImages/Book_of_Ages.jpg',
    'http://www.bluefurok.com/./BSImages/Channelers_Gloves.jpg',
    'http://www.bluefurok.com/./BSImages/Mirror_Pendant.jpg',
    'http://www.bluefurok.com/./BSImages/Relic_Mirror.jpg',
    'http://www.bluefurok.com/./BSImages/Ring_of_Secrets.jpg',
    'http://www.bluefurok.com/./BSImages/Robe_of_the_Ages.jpg',
    'http://www.bluefurok.com/./BSImages/Warriors_Boots.jpg',
    'http://www.bluefurok.com/./BSImages/Water_of_Life.jpg'],

    //Commons at index 2
    ['http://www.bluefurok.com/./BSImages/Cloud_Narth.jpg',
    'http://www.bluefurok.com/./BSImages/Lightning_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Pharan.jpg',
    'http://www.bluefurok.com/./BSImages/Thunder_Vashp.jpg',
    'http://www.bluefurok.com/./BSImages/Xyx.jpg',
    'http://www.bluefurok.com/./BSImages/Xyx_Minor.jpg',
    'http://www.bluefurok.com/./BSImages/Lightning.jpg',
    'http://www.bluefurok.com/./BSImages/Shooting_Star.jpg',
    'http://www.bluefurok.com/./BSImages/Updraft.jpg',
    'http://www.bluefurok.com/./BSImages/Arbolit.jpg',
    'http://www.bluefurok.com/./BSImages/Diobor.jpg',
    'http://www.bluefurok.com/./BSImages/Fire_Chogo.jpg',    
    'http://www.bluefurok.com/./BSImages/Kelthet.jpg',
    'http://www.bluefurok.com/./BSImages/Quor.jpg',
    'http://www.bluefurok.com/./BSImages/Magma_Armor.jpg',
    'http://www.bluefurok.com/./BSImages/Fire_Flow.jpg',
    'http://www.bluefurok.com/./BSImages/Fire_ball.jpg',
    'http://www.bluefurok.com/./BSImages/Thermal_Blast.jpg',
    'http://www.bluefurok.com/./BSImages/Arboll.jpg',
    'http://www.bluefurok.com/./BSImages/Carillion.jpg',
    'http://www.bluefurok.com/./BSImages/Furok.jpg',
    'http://www.bluefurok.com/./BSImages/Leaf_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Plith.jpg',
    'http://www.bluefurok.com/./BSImages/Vinoc.jpg',
    'http://www.bluefurok.com/./BSImages/Weebo.jpg',
    'http://www.bluefurok.com/./BSImages/Grow.jpg',
    'http://www.bluefurok.com/./BSImages/Tap_Roots.jpg',
    'http://www.bluefurok.com/./BSImages/Bwill.jpg',
    'http://www.bluefurok.com/./BSImages/Corf.jpg',
    'http://www.bluefurok.com/./BSImages/Orpus.jpg',
    'http://www.bluefurok.com/./BSImages/Sea_Barl.jpg',
    'http://www.bluefurok.com/./BSImages/Sphor.jpg',
    'http://www.bluefurok.com/./BSImages/Wellisk.jpg',
    'http://www.bluefurok.com/./BSImages/Wellisk_Pup.jpg',
    'http://www.bluefurok.com/./BSImages/Implosion.jpg',
    'http://www.bluefurok.com/./BSImages/Submerge.jpg',
    'http://www.bluefurok.com/./BSImages/Bisiwog.jpg',
    'http://www.bluefurok.com/./BSImages/Brub.jpg',
    'http://www.bluefurok.com/./BSImages/Cave_Rudwot.jpg',
    'http://www.bluefurok.com/./BSImages/Crystal_Arboll.jpg',
    'http://www.bluefurok.com/./BSImages/Gum-Gum.jpg',
    'http://www.bluefurok.com/./BSImages/Pack_Korrit.jpg',
    'http://www.bluefurok.com/./BSImages/Parmalag.jpg',
    'http://www.bluefurok.com/./BSImages/Burrow.jpg',
    'http://www.bluefurok.com/./BSImages/Carnivorous_Cave.jpg',
    'http://www.bluefurok.com/./BSImages/Baloo_Root.jpg',
    'http://www.bluefurok.com/./BSImages/Dream_Balm.jpg',
    'http://www.bluefurok.com/./BSImages/Relic_Stalker.jpg',
    'http://www.bluefurok.com/./BSImages/Staff_of_Hyren.jpg',
    'http://www.bluefurok.com/./BSImages/Syphon_Stone.jpg'],

]

const awakeningLinks = [

    //Rares at index 0
    ['http://www.bluefurok.com/./AWImages/jlith.jpg',
    'http://www.bluefurok.com/./AWImages/night_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/warlum.jpg',
    'http://www.bluefurok.com/./AWImages/kalius.jpg',
    'http://www.bluefurok.com/./AWImages/sorreah.jpg',
    'http://www.bluefurok.com/./AWImages/abwyns_quill.jpg',
    'http://www.bluefurok.com/./AWImages/alaban_gloves.jpg',
    'http://www.bluefurok.com/./AWImages/cry_of_thunder.jpg',
    'http://www.bluefurok.com/./AWImages/ash_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/braggle.jpg',
    'http://www.bluefurok.com/./AWImages/ithapher.jpg',
    'http://www.bluefurok.com/./AWImages/raega.jpg',
    'http://www.bluefurok.com/./AWImages/ven.jpg',
    'http://www.bluefurok.com/./AWImages/gorgles_glasses.jpg',
    'http://www.bluefurok.com/./AWImages/sinders_mantle.jpg',
    'http://www.bluefurok.com/./AWImages/wildfire.jpg',
    'http://www.bluefurok.com/./AWImages/black_agovo.jpg',
    'http://www.bluefurok.com/./AWImages/chaos_jile.jpg',
    'http://www.bluefurok.com/./AWImages/core_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/darkbreed_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/dryte_fiend.jpg',
    'http://www.bluefurok.com/./AWImages/gorath.jpg',
    'http://www.bluefurok.com/./AWImages/grubble.jpg',
    'http://www.bluefurok.com/./AWImages/ugger.jpg',
    'http://www.bluefurok.com/./AWImages/vrill.jpg',
    'http://www.bluefurok.com/./AWImages/agram.jpg',
    'http://www.bluefurok.com/./AWImages/korg&zet.jpg',
    'http://www.bluefurok.com/./AWImages/morag.jpg',
    'http://www.bluefurok.com/./AWImages/nagsis.jpg',
    'http://www.bluefurok.com/./AWImages/harror.jpg',
    'http://www.bluefurok.com/./AWImages/lanyx.jpg',
    'http://www.bluefurok.com/./AWImages/korremar.jpg',
    'http://www.bluefurok.com/./AWImages/chaos_sphere.jpg',
    'http://www.bluefurok.com/./AWImages/shadow_cloak.jpg',
    'http://www.bluefurok.com/./AWImages/anarchy.jpg',
    'http://www.bluefurok.com/./AWImages/blight.jpg',
    'http://www.bluefurok.com/./AWImages/entomb.jpg',
    'http://www.bluefurok.com/./AWImages/gloom.jpg',
    'http://www.bluefurok.com/./DEimages/rock_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/forest_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/furok_guardian.jpg',
    'http://www.bluefurok.com/./AWImages/wasperine.jpg',
    'http://www.bluefurok.com/./AWImages/sperri.jpg',
    'http://www.bluefurok.com/./AWImages/tiller.jpg',
    'http://www.bluefurok.com/./AWImages/essence_of_naroom.jpg',
    'http://www.bluefurok.com/./AWImages/deadfall.jpg',
    'http://www.bluefurok.com/./AWImages/forest_blessing.jpg',
    'http://www.bluefurok.com/./AWImages/reef_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/sarazen_guard.jpg',
    'http://www.bluefurok.com/./AWImages/weethan.jpg',
    'http://www.bluefurok.com/./AWImages/borse.jpg',
    'http://www.bluefurok.com/./AWImages/voda.jpg',
    'http://www.bluefurok.com/./AWImages/hubdras_cube.jpg',
    'http://www.bluefurok.com/./AWImages/orothean_horn.jpg',
    'http://www.bluefurok.com/./AWImages/pillar_of_brine.jpg',
    'http://www.bluefurok.com/./AWImages/crystal_jile.jpg',
    'http://www.bluefurok.com/./AWImages/jore.jpg',
    'http://www.bluefurok.com/./AWImages/tunnel_hyren.jpg',
    'http://www.bluefurok.com/./AWImages/bronk.jpg',
    'http://www.bluefurok.com/./AWImages/trygar.jpg',
    'http://www.bluefurok.com/./AWImages/gremms_hammer.jpg',
    'http://www.bluefurok.com/./AWImages/tunnelers_boots.jpg',
    'http://www.bluefurok.com/./AWImages/gorgles_curse.jpg',
    'http://www.bluefurok.com/./AWImages/rayjes_band.jpg',
    'http://www.bluefurok.com/./AWImages/rayjes_belt.jpg',
    'http://www.bluefurok.com/./AWImages/rayjes_boots.jpg',
    'http://www.bluefurok.com/./AWImages/weave_hyren.jpg'],

    //Uncommons at index 1
    ['http://www.bluefurok.com/./AWImages/yarothis.jpg',
    'http://www.bluefurok.com/./AWImages/aula.jpg',
    'http://www.bluefurok.com/./AWImages/arderianguard_wings.jpg',
    'http://www.bluefurok.com/./AWImages/yollum.jpg',
    'http://www.bluefurok.com/./AWImages/nara.jpg',
    'http://www.bluefurok.com/./AWImages/blast_gloves.jpg',
    'http://www.bluefurok.com/./AWImages/borgor.jpg',
    'http://www.bluefurok.com/./AWImages/dark_ayebaw.jpg',
    'http://www.bluefurok.com/./AWImages/warrada.jpg',
    'http://www.bluefurok.com/./AWImages/qwade.jpg',
    'http://www.bluefurok.com/./AWImages/ogar.jpg',
    'http://www.bluefurok.com/./AWImages/collar_of_despair.jpg',
    'http://www.bluefurok.com/./AWImages/shadow_bones.jpg',
    'http://www.bluefurok.com/./AWImages/terrorize.jpg',
    'http://www.bluefurok.com/./AWImages/tillant.jpg',
    'http://www.bluefurok.com/./AWImages/ohk.jpg',
    'http://www.bluefurok.com/./AWImages/fird_stone.jpg',
    'http://www.bluefurok.com/./AWImages/hunter_jile.jpg',
    'http://www.bluefurok.com/./AWImages/quilla.jpg',
    'http://www.bluefurok.com/./AWImages/karak_band.jpg',
    'http://www.bluefurok.com/./AWImages/athik.jpg',
    'http://www.bluefurok.com/./AWImages/radget.jpg',
    'http://www.bluefurok.com/./AWImages/underlords_shield.jpg',
    'http://www.bluefurok.com/./AWImages/ummmno.jpg',
    'http://www.bluefurok.com/./AWImages/intensify.jpg'],

    //Commons at index 2
    ['http://www.bluefurok.com/./AWImages/brannix.jpg', 
    'http://www.bluefurok.com/./AWImages/flutter_yup.jpg',
    'http://www.bluefurok.com/./AWImages/vemment.jpg',
    'http://www.bluefurok.com/./AWImages/solar_flare.jpg',
    'http://www.bluefurok.com/./AWImages/tranquility.jpg',
    'http://www.bluefurok.com/./AWImages/ergar.jpg',
    'http://www.bluefurok.com/./AWImages/magma_jile.jpg',
    'http://www.bluefurok.com/./AWImages/primat.jpg',
    'http://www.bluefurok.com/./AWImages/firefly_swarm.jpg',
    'http://www.bluefurok.com/./AWImages/sulfurous_spirit.jpg',
    'http://www.bluefurok.com/./AWImages/arboll_stalker.jpg',
    'http://www.bluefurok.com/./AWImages/core_grag.jpg',
    'http://www.bluefurok.com/./AWImages/grax.jpg',
    'http://www.bluefurok.com/./AWImages/koil.jpg',
    'http://www.bluefurok.com/./AWImages/orok.jpg',
    'http://www.bluefurok.com/./AWImages/shadow_vinoc.jpg',
    'http://www.bluefurok.com/./AWImages/shryque.jpg',
    'http://www.bluefurok.com/./AWImages/szalak.jpg',
    'http://www.bluefurok.com/./AWImages/tragan.jpg',
    'http://www.bluefurok.com/./AWImages/trask.jpg',
    'http://www.bluefurok.com/./AWImages/wudge.jpg',
    'http://www.bluefurok.com/./AWImages/agrams_armor.jpg',
    'http://www.bluefurok.com/./AWImages/grim_goblet.jpg',
    'http://www.bluefurok.com/./AWImages/corrupt.jpg',
    'http://www.bluefurok.com/./AWImages/dream_rift.jpg',
    'http://www.bluefurok.com/./AWImages/maelstrom.jpg',
    'http://www.bluefurok.com/./AWImages/mind_blank.jpg',
    'http://www.bluefurok.com/./AWImages/paranoia.jpg',
    'http://www.bluefurok.com/./AWImages/shadow_rain.jpg',
    'http://www.bluefurok.com/./AWImages/turn.jpg',
    'http://www.bluefurok.com/./AWImages/bikneets.jpg',
    'http://www.bluefurok.com/./AWImages/forest_jile.jpg',
    'http://www.bluefurok.com/./AWImages/tree_hinko.jpg',    
    'http://www.bluefurok.com/./AWImages/weeblit.jpg',
    'http://www.bluefurok.com/./AWImages/gilded_cage.jpg',
    'http://www.bluefurok.com/./AWImages/allio.jpg',
    'http://www.bluefurok.com/./AWImages/husp.jpg',
    'http://www.bluefurok.com/./AWImages/phrup.jpg',
    'http://www.bluefurok.com/./AWImages/boil.jpg',
    'http://www.bluefurok.com/./AWImages/storm_of_fishes.jpg',
    'http://www.bluefurok.com/./AWImages/ghost_bwisp.jpg',
    'http://www.bluefurok.com/./AWImages/pylofuf.jpg',
    'http://www.bluefurok.com/./AWImages/weebat.jpg',
    'http://www.bluefurok.com/./AWImages/impact.jpg',
    'http://www.bluefurok.com/./AWImages/resonate.jpg',
    'http://www.bluefurok.com/./AWImages/forgotten_dancer.jpg',
    'http://www.bluefurok.com/./AWImages/mantle_of_shadows.jpg',
    'http://www.bluefurok.com/./AWImages/dream_channel.jpg',
    'http://www.bluefurok.com/./AWImages/nightmare_channel.jpg',
    'http://www.bluefurok.com/./AWImages/spectral_shield.jpg'],

]

const dreamsEndLinks = [

    //Rares at index 0
    ['http://www.bluefurok.com/./DEimages/elder_vellup.jpg', 
    'http://www.bluefurok.com/./DEimages/rayalon.jpg',
    'http://www.bluefurok.com/./DEimages/delia.jpg',
    'http://www.bluefurok.com/./DEimages/storm_shield.jpg',
    'http://www.bluefurok.com/./DEimages/swamp_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/silth_giant.jpg',
    'http://www.bluefurok.com/./DEimages/smoke_xyx.jpg',
    'http://www.bluefurok.com/./DEimages/amanax.jpg',
    'http://www.bluefurok.com/./DEimages/gregas_ring.jpg',
    'http://www.bluefurok.com/./DEimages/chur.jpg',
    'http://www.bluefurok.com/./DEimages/ashio.jpg',
    'http://www.bluefurok.com/./DEimages/agrams_plaything.jpg',
    'http://www.bluefurok.com/./DEimages/arderial_shadow_geyser.jpg',
    'http://www.bluefurok.com/./DEimages/cald_shadow_geyser.jpg',
    'http://www.bluefurok.com/./DEimages/naroom_shadow_geyser.jpg',
    'http://www.bluefurok.com/./DEimages/orothe_shadow_geyser.jpg',
    'http://www.bluefurok.com/./DEimages/underneath_shadow_geyser.jpg',
    'http://www.bluefurok.com/./DEimages/cliff_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/cragnoc.jpg',
    'http://www.bluefurok.com/./DEimages/mosp.jpg',
    'http://www.bluefurok.com/./DEimages/rock_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/vogo.jpg',
    'http://www.bluefurok.com/./DEimages/grej.jpg',
    'http://www.bluefurok.com/./DEimages/jagt.jpg',
    'http://www.bluefurok.com/./DEimages/koll.jpg',
    'http://www.bluefurok.com/./DEimages/targn.jpg',
    'http://www.bluefurok.com/./DEimages/groll.jpg',
    'http://www.bluefurok.com/./DEimages/jaskers_mask.jpg',
    'http://www.bluefurok.com/./DEimages/moga_fang_necklace.jpg',
    'http://www.bluefurok.com/./DEimages/ulligs_slingshot.jpg',
    'http://www.bluefurok.com/./DEimages/yark_gloves.jpg',
    'http://www.bluefurok.com/./DEimages/feet_of_stone.jpg',
    'http://www.bluefurok.com/./DEimages/stone_storm.jpg',
    'http://www.bluefurok.com/./DEimages/vertigo.jpg',
    'http://www.bluefurok.com/./DEimages/elder_weebo.jpg',
    'http://www.bluefurok.com/./DEimages/nodj.jpg',
    'http://www.bluefurok.com/./DEimages/zannah.jpg',
    'http://www.bluefurok.com/./DEimages/evus_jellybeans.jpg',
    'http://www.bluefurok.com/./DEimages/deep_barl.jpg',
    'http://www.bluefurok.com/./DEimages/parathin.jpg',
    'http://www.bluefurok.com/./DEimages/mrika.jpg',
    'http://www.bluefurok.com/./DEimages/karak_necklace.jpg',
    'http://www.bluefurok.com/./DEimages/jungle_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/hubram.jpg',
    'http://www.bluefurok.com/./DEimages/spore_vashp.jpg',
    'http://www.bluefurok.com/./DEimages/sorrowing_ogar.jpg',
    'http://www.bluefurok.com/./DEimages/gremms_helmet.jpg',
    'http://www.bluefurok.com/./DEimages/monarch_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/aritex.jpg',
    'http://www.bluefurok.com/./DEimages/grass_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/heppeswip.jpg',
    'http://www.bluefurok.com/./DEimages/lascinth.jpg',
    'http://www.bluefurok.com/./DEimages/weave_hyren.jpg',
    'http://www.bluefurok.com/./DEimages/kesia.jpg',
    'http://www.bluefurok.com/./DEimages/kolte.jpg',
    'http://www.bluefurok.com/./DEimages/marella.jpg',
    'http://www.bluefurok.com/./DEimages/yerthe.jpg',
    'http://www.bluefurok.com/./DEimages/zaya.jpg',
    'http://www.bluefurok.com/./DEimages/gias_tome.jpg',
    'http://www.bluefurok.com/./DEimages/kesias_flute.jpg',
    'http://www.bluefurok.com/./DEimages/weave_mat.jpg',
    'http://www.bluefurok.com/./DEimages/weave_powder.jpg',
    'http://www.bluefurok.com/./DEimages/harmony.jpg',
    'http://www.bluefurok.com/./DEimages/weave_mind.jpg',
    'http://www.bluefurok.com/./DEimages/weave_winds.jpg'],    

    //Uncommons at index 1
    ['http://www.bluefurok.com/./DEimages/grand_epik.jpg',
    'http://www.bluefurok.com/./DEimages/elios.jpg',
    'http://www.bluefurok.com/./DEimages/eyes_of_arderial.jpg',
    'http://www.bluefurok.com/./DEimages/cataclysm.jpg',
    'http://www.bluefurok.com/./DEimages/krawg.jpg',
    'http://www.bluefurok.com/./DEimages/vorga.jpg',
    'http://www.bluefurok.com/./DEimages/abraxins_crown.jpg',
    'http://www.bluefurok.com/./DEimages/searing_touch.jpg',
    'http://www.bluefurok.com/./DEimages/chaos_plith.jpg',
    'http://www.bluefurok.com/./DEimages/dark_furok.jpg',
    'http://www.bluefurok.com/./DEimages/drush.jpg',
    'http://www.bluefurok.com/./DEimages/evil_evu.jpg',
    'http://www.bluefurok.com/./DEimages/hrada.jpg',
    'http://www.bluefurok.com/./DEimages/agrams_staff.jpg',
    'http://www.bluefurok.com/./DEimages/secrets_of_the_book.jpg',
    'http://www.bluefurok.com/./DEimages/baldar.jpg',
    'http://www.bluefurok.com/./DEimages/darge.jpg',
    'http://www.bluefurok.com/./DEimages/gargagnor.jpg',
    'http://www.bluefurok.com/./DEimages/sagawal.jpg',
    'http://www.bluefurok.com/./DEimages/yebed.jpg',
    'http://www.bluefurok.com/./DEimages/emec.jpg',
    'http://www.bluefurok.com/./DEimages/hok.jpg',
    'http://www.bluefurok.com/./DEimages/kazm.jpg',
    'http://www.bluefurok.com/./DEimages/ullig.jpg',
    'http://www.bluefurok.com/./DEimages/wessig.jpg',
    'http://www.bluefurok.com/./DEimages/chogulith.jpg',
    'http://www.bluefurok.com/./DEimages/hogra_stones.jpg',
    'http://www.bluefurok.com/./DEimages/kybars_hammer.jpg',
    'http://www.bluefurok.com/./DEimages/kybars_scroll.jpg',
    'http://www.bluefurok.com/./DEimages/ascend.jpg',
    'http://www.bluefurok.com/./DEimages/ominous_presence.jpg',
    'http://www.bluefurok.com/./DEimages/rock_slide.jpg',
    'http://www.bluefurok.com/./DEimages/jip.jpg',
    'http://www.bluefurok.com/./DEimages/zajan.jpg',
    'http://www.bluefurok.com/./DEimages/pruitts_robe.jpg',
    'http://www.bluefurok.com/./DEimages/nocturne.jpg',
    'http://www.bluefurok.com/./DEimages/deep_wellisk.jpg',
    'http://www.bluefurok.com/./DEimages/bria.jpg',
    'http://www.bluefurok.com/./DEimages/barquas_bubble.jpg',
    'http://www.bluefurok.com/./DEimages/riptide.jpg',
    'http://www.bluefurok.com/./DEimages/urhail.jpg',
    'http://www.bluefurok.com/./DEimages/prek.jpg',
    'http://www.bluefurok.com/./DEimages/tremor_stones.jpg',
    'http://www.bluefurok.com/./DEimages/hidden_door.jpg',
    'http://www.bluefurok.com/./DEimages/drowl.jpg',
    'http://www.bluefurok.com/./DEimages/flugg.jpg',
    'http://www.bluefurok.com/./DEimages/jumbor.jpg',
    'http://www.bluefurok.com/./DEimages/quallon.jpg',
    'http://www.bluefurok.com/./DEimages/tweave.jpg',
    'http://www.bluefurok.com/./DEimages/ahdar.jpg',
    'http://www.bluefurok.com/./DEimages/artyva.jpg',
    'http://www.bluefurok.com/./DEimages/boahsa.jpg',
    'http://www.bluefurok.com/./DEimages/iyori.jpg',
    'http://www.bluefurok.com/./DEimages/quirle.jpg',
    'http://www.bluefurok.com/./DEimages/junjertrug_horn.jpg',
    'http://www.bluefurok.com/./DEimages/tuk_berries.jpg',
    'http://www.bluefurok.com/./DEimages/weave_hut.jpg',
    'http://www.bluefurok.com/./DEimages/zayas_bow.jpg',
    'http://www.bluefurok.com/./DEimages/drought.jpg',
    'http://www.bluefurok.com/./DEimages/sawgrass.jpg',
    'http://www.bluefurok.com/./DEimages/sheath.jpg'],

    //Commons at index 2
    ['http://www.bluefurok.com/./DEimages/alaban_kit.jpg',
    'http://www.bluefurok.com/./DEimages/shock_vashp.jpg',
    'http://www.bluefurok.com/./DEimages/sorreahs_dream.jpg',
    'http://www.bluefurok.com/./DEimages/diomant.jpg',
    'http://www.bluefurok.com/./DEimages/giant_arboll.jpg',
    'http://www.bluefurok.com/./DEimages/lava_flow.jpg',
    'http://www.bluefurok.com/./DEimages/garadan.jpg',
    'http://www.bluefurok.com/./DEimages/harban.jpg',
    'http://www.bluefurok.com/./DEimages/stealth.jpg',
    'http://www.bluefurok.com/./DEimages/vaporize.jpg',
    'http://www.bluefurok.com/./DEimages/agrilla.jpg',
    'http://www.bluefurok.com/./DEimages/chogus.jpg',
    'http://www.bluefurok.com/./DEimages/crag_quor.jpg',
    'http://www.bluefurok.com/./DEimages/giant_baldar.jpg',
    'http://www.bluefurok.com/./DEimages/giant_chogus.jpg',
    'http://www.bluefurok.com/./DEimages/granite_parmalag.jpg',
    'http://www.bluefurok.com/./DEimages/gratch.jpg',
    'http://www.bluefurok.com/./DEimages/moga.jpg',
    'http://www.bluefurok.com/./DEimages/moga_pup.jpg',
    'http://www.bluefurok.com/./DEimages/stone_quor.jpg',
    'http://www.bluefurok.com/./DEimages/xamf.jpg',
    'http://www.bluefurok.com/./DEimages/yark.jpg',
    'http://www.bluefurok.com/./DEimages/climbing_staff.jpg',
    'http://www.bluefurok.com/./DEimages/jagged_rocks.jpg',
    'http://www.bluefurok.com/./DEimages/kybars_echo.jpg',
    'http://www.bluefurok.com/./DEimages/roar.jpg',
    'http://www.bluefurok.com/./DEimages/bungaloo_naroom.jpg',
    'http://www.bluefurok.com/./DEimages/garan.jpg',
    'http://www.bluefurok.com/./DEimages/vim_and_vigor.jpg',
    'http://www.bluefurok.com/./DEimages/iximin.jpg',
    'http://www.bluefurok.com/./DEimages/nalo.jpg',
    'http://www.bluefurok.com/./DEimages/shell.jpg',
    'http://www.bluefurok.com/./DEimages/crystal_parmalag.jpg',
    'http://www.bluefurok.com/./DEimages/syre.jpg',
    'http://www.bluefurok.com/./DEimages/aglow.jpg',
    'http://www.bluefurok.com/./DEimages/maelstrom_flask.jpg',
    'http://www.bluefurok.com/./DEimages/rayjes_cloak.jpg',
    'http://www.bluefurok.com/./DEimages/rayjes_sword.jpg',
    'http://www.bluefurok.com/./DEimages/staff_of_keepers.jpg',
    'http://www.bluefurok.com/./DEimages/tomorrows_jewel.jpg',
    'http://www.bluefurok.com/./DEimages/beam_of_light.jpg',
    'http://www.bluefurok.com/./DEimages/equilibrate.jpg',
    'http://www.bluefurok.com/./DEimages/fates_whimsy.jpg',
    'http://www.bluefurok.com/./DEimages/bungaloo_weave.jpg',
    'http://www.bluefurok.com/./DEimages/frusk.jpg',
    'http://www.bluefurok.com/./DEimages/junjertrug.jpg',
    'http://www.bluefurok.com/./DEimages/osatch.jpg',
    'http://www.bluefurok.com/./DEimages/pagajack.jpg',
    'http://www.bluefurok.com/./DEimages/pody.jpg',
    'http://www.bluefurok.com/./DEimages/speag.jpg',
    'http://www.bluefurok.com/./DEimages/uwamar.jpg',
    'http://www.bluefurok.com/./DEimages/vuryip.jpg',
    'http://www.bluefurok.com/./DEimages/weggit.jpg',
    'http://www.bluefurok.com/./DEimages/yajo.jpg',
    'http://www.bluefurok.com/./DEimages/zassyfer.jpg',
    'http://www.bluefurok.com/./DEimages/uwamar_beads.jpg',
    'http://www.bluefurok.com/./DEimages/binding.jpg',
    'http://www.bluefurok.com/./DEimages/lifeweave.jpg',
    'http://www.bluefurok.com/./DEimages/the_hunt.jpg'],

]

const nightmaresDawnLinks = [

    //Rares at index 0
    ['http://www.bluefurok.com/./NDimages/arderial_firestorm_orish.jpg', 
    'http://www.bluefurok.com/./NDimages/arderial_flying_hinko.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_hurricane_orish.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_defender_o.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_lady_of_the_sky.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_heart_of_the_sky.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_bog_wellisk.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_fog_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_makoor.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_mist_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_pyder.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_swamp_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_tar_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_allhigh_king_korg.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_obgren.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_olabra.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_deadwood_staff.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_heart_of_pa.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_korgs_poetry.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_statement_o.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_darkness.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_sneak_attack.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_zungg_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/cald_firestorm_orish.jpg',
    'http://www.bluefurok.com/./NDimages/cald_granas.jpg',
    'http://www.bluefurok.com/./NDimages/cald_saladarit.jpg',
    'http://www.bluefurok.com/./NDimages/cald_barak_the_red.jpg',
    'http://www.bluefurok.com/./NDimages/cald_tryn_flamesaver.jpg',
    'http://www.bluefurok.com/./NDimages/cald_the_last_words.jpg',
    'http://www.bluefurok.com/./NDimages/core_dark_cragnoc.jpg',
    'http://www.bluefurok.com/./NDimages/core_darkbreeds_minion.jpg',
    'http://www.bluefurok.com/./NDimages/core_tar_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/core_allhigh_king_korg.jpg',
    'http://www.bluefurok.com/./NDimages/core_togoth.jpg',
    'http://www.bluefurok.com/./NDimages/core_statement_of_c.jpg',
    'http://www.bluefurok.com/./NDimages/core_tomes_of_the_.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_sand_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_sikra.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_djarvish.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_sand_strands.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_alpine_xamf.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_greater.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_rockslide.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_kygn.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_shapers.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_kybars_fang.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_ritual_spear.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_shard.jpg',
    'http://www.bluefurok.com/./NDimages/nar_ice_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_alpine_xamf.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_baby_furok.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_flying_hinko.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_salafy.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_tryn_flamesaver.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_tomes_of_the_.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_bog_wellisk.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_hurricane_orish.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_saladarit.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_arosa.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_shapers.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_the_last_words.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_fog_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ghazran.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_jungle_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_jungle_jile.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_tropical_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_tropical_vinoc.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_weed_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bazha.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_boria.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_mlady_iyori.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_heart_of_paradise.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_staff_of_vines.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_stalkers_boots.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_flourish.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_sneak_attack.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_spell_pulse.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_granas.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_sikra.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_striped_korrit.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_djarvish.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_fossik_ri.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_gate_to_ombor.jpg',
    'http://www.bluefurok.com/./NDimages/universal_rayje.jpg',
    'http://www.bluefurok.com/./NDimages/weave_baby_furok.jpg',
    'http://www.bluefurok.com/./NDimages/weave_blade_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/weave_striped_korrit.jpg',
    'http://www.bluefurok.com/./NDimages/weave_weed_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/weave_mlady_iyori.jpg',
    'http://www.bluefurok.com/./NDimages/weave_scyalla.jpg',
    'http://www.bluefurok.com/./NDimages/weave_gift_of_the_weave.jpg',
    'http://www.bluefurok.com/./NDimages/weave_ritual_spear.jpg',
    'http://www.bluefurok.com/./NDimages/weave_sand_strands.jpg'],

    //Uncommons at index 1
    ['http://www.bluefurok.com/./NDimages/arderial_elder_yark.jpg', 
    'http://www.bluefurok.com/./NDimages/arderial_spray_narth.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_orothea_voice_of_the_storm.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_hand_of_the_sky.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_crushing_winds.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_ainjer.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_jile.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_muggum.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_ruid.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_swamp_weebo.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_baa.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_blygt.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_brog.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_emlob.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_eryss.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_golthub.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_gorran.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_grahnna.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_keggerop.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_phlouk.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_wiep.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_yog.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_bog_stone.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_crown_of_grath.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_the_great_t.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_moob_ring.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_slime_stone.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_crushing_stench.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_trulb_horde.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_vard_stampede.jpg',
    'http://www.bluefurok.com/./NDimages/cald_magma_parmalag.jpg',
    'http://www.bluefurok.com/./NDimages/cald_good_ol_ashgar.jpg',
    'http://www.bluefurok.com/./NDimages/cald_boomstick.jpg',
    'http://www.bluefurok.com/./NDimages/cald_firefly_amulet.jpg',
    'http://www.bluefurok.com/./NDimages/cald_crushing_heat.jpg',
    'http://www.bluefurok.com/./NDimages/core_raveled_drush.jpg',
    'http://www.bluefurok.com/./NDimages/core_golthub.jpg',
    'http://www.bluefurok.com/./NDimages/core_warradas_ring.jpg',
    'http://www.bluefurok.com/./NDimages/core_awakening.jpg',
    'http://www.bluefurok.com/./NDimages/core_crushing_darkness.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_elder_yark.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_korok.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_tlok.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_dewstone.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_slime_stone.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_crushing_stones.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_kteeb.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_kteeb_cub.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_woot.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_yakis_gauntlets.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_crushing_roots.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_seaweed_lascinth.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_spray_narth.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_voice_of_the.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_vault.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_crushing_surf.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bagala_hunter.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_kly.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_kteeb.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_kteeb_cub.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_nyrex.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_vine_hyren.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_arawan.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ardonia.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_culla.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_eryss.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_iain.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_kioko.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_liriel.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ninx.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ookami.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_taisa.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_yricho.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bazhas_pendant.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_dewstone.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_liriels_cape.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_rala_tail.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_yrichos_staff.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ambush.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bloom.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_crushing_vines.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_froxfire.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_magma_parmalag.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_muggum.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_gyrg.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_strags_claws.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_crushing_fungus.jpg',
    'http://www.bluefurok.com/./NDimages/weave_nyrex.jpg',
    'http://www.bluefurok.com/./NDimages/weave_seaweed_lascinth.jpg',
    'http://www.bluefurok.com/./NDimages/weave_ninx.jpg',
    'http://www.bluefurok.com/./NDimages/weave_taisa.jpg',
    'http://www.bluefurok.com/./NDimages/weave_crushing_growth.jpg'],

    //Commons at index 2
    ['http://www.bluefurok.com/./NDimages/arderial_aerial_flist.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_ballistic_baldar.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_bubble_xyx.jpg', 
    'http://www.bluefurok.com/./NDimages/arderial_galiant.jpg',
    'http://www.bluefurok.com/./NDimages/arderial_sandswirl.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_bolobog.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_flame_trulb.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_glablit.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_green_stuff.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_gremble.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_gwaeg.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_mirago.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_moob.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_moss_quido.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_muck_vinoc.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_mydra.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_nkala.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_ooze_arboll.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_poison_baloo_root.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_quido_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_sarazen_outcast.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_slarnath.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_taglat.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_treepsh.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_trulb.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_zungg.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_great_pool_.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_moss_pendant.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_yogs_maul.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_ainjer_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_bog_stench.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_creeping_chill.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_frenzy.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_mydra_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_ominous_chill.jpg',
    'http://www.bluefurok.com/./NDimages/bograth_spirit_drain.jpg',
    'http://www.bluefurok.com/./NDimages/cald_flame_rudwot.jpg',
    'http://www.bluefurok.com/./NDimages/cald_flame_trulb.jpg',
    'http://www.bluefurok.com/./NDimages/cald_karkik.jpg',
    'http://www.bluefurok.com/./NDimages/cald_brushfire.jpg',
    'http://www.bluefurok.com/./NDimages/core_chaos_flugg.jpg',
    'http://www.bluefurok.com/./NDimages/core_corathan.jpg',
    'http://www.bluefurok.com/./NDimages/core_gwaeg.jpg',
    'http://www.bluefurok.com/./NDimages/core_zungg.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_chasm_jile.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_mirago.jpg',
    'http://www.bluefurok.com/./NDimages/dresh_sandswirl.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_akkar.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_ballis.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_galiant.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_karkik.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_kier.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_rock_yajo.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_tunnel.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_urigant.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_cleansing.jpg',
    'http://www.bluefurok.com/./NDimages/kybars_teeth_creeping_chill.jpg',
    'http://www.bluefurok.com/./NDimages/nar_ominous_chill.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_flame_rudwot.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_kteeb_thumper.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_sabertooth_jumbor.jpg',
    'http://www.bluefurok.com/./NDimages/naroom_scout_bungaloo.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_blue_yajo.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_bubble_xyx.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_river_abaquist.jpg',
    'http://www.bluefurok.com/./NDimages/orothe_curse_of_the.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_aerial_flist.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bagala.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bagala_cub.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_dasia.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_grass_etiki.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_gremble.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_hardshell_weebo.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_inyx.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_kteeb_thumper.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_khisp.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_lahalou.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_magor.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_mydra.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_nkala.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_poison_baloo_root.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_quido_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_rala.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_river_abaquist.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_scarletsong_hwit.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_tkanzam.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_taglat.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_treepsh.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_bagala_fangs.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_ookamis_drums.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_robe_of_petals.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_curse_of_the.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_mydra_swarm.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_radiant_spring.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_scarletsongs_trill.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_spirit_drain.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_stalk.jpg',
    'http://www.bluefurok.com/./NDimages/paradwyn_tropical_rain.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_akkar.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_kier.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_tunnel.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_urigant.jpg',
    'http://www.bluefurok.com/./NDimages/underneath_cleansing.jpg',
    'http://www.bluefurok.com/./NDimages/universal_inhibitor_band.jpg',
    'http://www.bluefurok.com/./NDimages/universal_loaded_dice.jpg',
    'http://www.bluefurok.com/./NDimages/universal_focus.jpg',
    'http://www.bluefurok.com/./NDimages/universal_heal.jpg',
    'http://www.bluefurok.com/./NDimages/weave_blue_yajo.jpg',
    'http://www.bluefurok.com/./NDimages/weave_chasm_jile.jpg',
    'http://www.bluefurok.com/./NDimages/weave_dasia.jpg',
    'http://www.bluefurok.com/./NDimages/weave_grass_etiki.jpg',
    'http://www.bluefurok.com/./NDimages/weave_rock_yajo.jpg',
    'http://www.bluefurok.com/./NDimages/weave_sabertooth_jumbor.jpg',
    'http://www.bluefurok.com/./NDimages/weave_scout_bungaloo.jpg',
    'http://www.bluefurok.com/./NDimages/weave_brushfire.jpg'],

]

const voiceOfTheStormsLinks = [

    //Rares at index 0
    ['http://www.bluefurok.com/./VSimages/sandstormorshaa_ac_vs.jpg',
    'http://www.bluefurok.com/./VSimages/windhyren_ac_vs.jpg',
    'http://www.bluefurok.com/./VSimages/aulamindseeker_am_vs.jpg',
    'http://www.bluefurok.com/./VSimages/orathanamulet_ar_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rous_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/swampmoga_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/torpar_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ninibom_bm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/lightningsand_bs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/emberhyren_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rocksilth_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/travellinghealer_cm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/everburningwick_cr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rous_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shadowhyren_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/fiendoffuroks_xm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ninibom_xm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/haunt_xs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bulabantu_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/lesserdarbok_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/obsis_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/quanjuel_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandhyren_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandstonehyren_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandstormorshaa_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shimmeringorshaa_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spinedhyren_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/swirlingorshaa_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/windhyren_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/xala_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dakat_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dey_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/drajan_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/mohani_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/aubrashourglass_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/avatarsstaff_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bottledcity_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandcape_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ythrasmantle_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/crystalvision_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/deceptivedreams_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/lightningsand_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/redream_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandshape_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/unmake_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rocksilth_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandstonehyren_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/celebratedhero_km_vs.jpg',
    'http://www.bluefurok.com/./VSimages/travelinghealer_km_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gogorsspade_kr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/blizzardhyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/djarmander_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/frosthyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/glacierhyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/grendile_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/iceberghyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icehyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/kyroll_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/saitorr_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/snowhyren_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wasperinestalker_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/yaromant_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bronn_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/erisa_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/laranel_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/thast_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ust_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/blizzardcore_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/cauldronofice_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/essenceoffrost_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icelens_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icyprison_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/instantfortress_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/refract_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/snowball_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/whiteout_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/emberhyren_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/grendile_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wasperinestalker_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wencethewanderer_nm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wencestravelog_nr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/iceberghyren_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sarazenkeeper_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/aulamindseeker_om_vs.jpg',
    'http://www.bluefurok.com/./VSimages/orathanamulet_or_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bulabantu_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gwomba_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/torpar_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tropicaljumbor_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/threeleafclover_pr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sarazenkeeper_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/celebratedhero_um_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gogorsspade_ur_vs.jpg',
    'http://www.bluefurok.com/./VSimages/unmake_us_vs.jpg',
    'http://www.bluefurok.com/./VSimages/babyhyren_ic_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tropicaljumbor_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wencethewanderer_wm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/everburningwick_wr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/threeleafclover_wr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wencestravelog_wr_vs.jpg'],

    //Uncommons at index 1
    ['http://www.bluefurok.com/./VSimages/cyclonexyx_ac_vs.jpg',
    'http://www.bluefurok.com/./VSimages/arderianadept_am_vs.jpg',
    'http://www.bluefurok.com/./VSimages/stormwings_ar_vs.jpg',
    'http://www.bluefurok.com/./VSimages/jetstream_as_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofarderial_as_vs.jpg',
    'http://www.bluefurok.com/./VSimages/looph_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/abger_bm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/drig_bm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/korgssceptre_br_vs.jpg',
    'http://www.bluefurok.com/./VSimages/olabrasstaff_br_vs.jpg',
    'http://www.bluefurok.com/./VSimages/flambit_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/magamflamesmith_cm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/flameplatearmor_cr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/magamsring_cr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofcald_cs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rabidwasperine_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/harrornightstalker_xm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/therealqwade_xm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ebonymiror_xr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofthecore_xs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ababila_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/drahkar_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/habob_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/olumdigger_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/olummystic_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandsifter_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandsinger_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sareb_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/venger_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ahron_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/drasha_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gherish_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/harresh_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/hasseth_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/nahara_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/nashiq_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/risha_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ythra_dm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/amuletofsand_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dunecompass_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/lensoftruth_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/crushingsands_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/desiccate_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/heatofday_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/horizonsmirage_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/thoughtfulbaldar_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/vopok_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/mck_km_vs.jpg',
    'http://www.bluefurok.com/./VSimages/emecsforge_kr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritoftheteeth_ks_vs.jpg',
    'http://www.bluefurok.com/./VSimages/aegris_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/garlak_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gransaber_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/hunterfurok_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icefurok_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rask_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/snowbarlpup_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sunglarecelphet_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tithragar_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/worgle_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/zyavu_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/balachron_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/emaya_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/fray_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/halsted_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/helgrem_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/koza_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/odavast_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/velouria_rm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bronnsbattlestaff_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dreamdraincharm_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icyheart_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/voidstone_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/crushingice_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icerupture_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofnar_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/poadinnkeeper_nm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/yakicorestalker_nm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/poadssecretsauce_nr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofnaroom_ns_vs.jpg',
    'http://www.bluefurok.com/./VSimages/cawh_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/brothersofvengance_om_vs.jpg',
    'http://www.bluefurok.com/./VSimages/karse_om_vs.jpg',
    'http://www.bluefurok.com/./VSimages/hubdraschest_or_vs.jpg',
    'http://www.bluefurok.com/./VSimages/karakink_or_vs.jpg',
    'http://www.bluefurok.com/./VSimages/janx_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/archid_pm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/kiersta_pm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/pok_pm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/lirielscape_pr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rabidbisiwog_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/trogovo_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/myka_um_vs.jpg',
    'http://www.bluefurok.com/./VSimages/trygarswill_ur_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofombor_us_vs.jpg',
    'http://www.bluefurok.com/./VSimages/paradar_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/stumblingjunjertrug_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rehlya_wm_vs.jpg',
    'http://www.bluefurok.com/./VSimages/boahsasshield_wr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritoftheweave_ws_vs.jpg'],

    //Commons at index 2
    ['http://www.bluefurok.com/./VSimages/cloudorshaa_ac_vs.jpg', 
    'http://www.bluefurok.com/./VSimages/flyingdarbok_ac_vs.jpg',
    'http://www.bluefurok.com/./VSimages/wyle_ac_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shrink_as_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tradewinds_as_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bleph_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/umbu_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/vard_bc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/muckrain_bs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofbograth_bs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/charg_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/coalergar_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sparkchogo_cc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bombard_cs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/flamespurt_cs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dagok_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/gumph_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/Severos_xc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/darkportents_xs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shadowritual_xs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/beeb_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/bonegrag_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/cactusdryte_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/darbok_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/izmer_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/mowat_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/nemsa_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/olum_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sandstormxyx_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/skullek_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/szhar_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/thrybe_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/uban_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/warriorolum_dc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/Aubrascanteen_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sunglasses_dr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/chillofnight_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/daydreams_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/forgottendreams_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/forgottensongs_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/forgottentales_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/oasis_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sunburn_ds_vs.jpg',
    'http://www.bluefurok.com/./VSimages/grizzledmoga_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/pebblehinko_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rockarboll_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/rokarum_kc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/standandtakeit_ks_vs.jpg',
    'http://www.bluefurok.com/./VSimages/dryte_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/frostraxis_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/furokprotector_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/greatwhitenarth_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icearboll_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icefieldashryte_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ickle_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/kintor_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/korul_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/krenkrajak_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/mombak_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sarf_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/vrak_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/yaw_rc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/hailstormpendant_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/icefangbattlesled_rr_vs.jpg',
    'http://www.bluefurok.com/./VSimages/blizzard_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/brittlebreak_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/crystallize_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/exposure_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shatteringwind_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/shattershards_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/thinice_rs_vs.jpg',
    'http://www.bluefurok.com/./VSimages/firds_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/forestwudge_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/leafchogo_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/twunk_nc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/overgrowth_ns_vs.jpg',
    'http://www.bluefurok.com/./VSimages/surfdiel_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sylorum_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tidalkarak_oc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ripple_os_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritoforothe_os_vs.jpg',
    'http://www.bluefurok.com/./VSimages/kwup_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/terkoz_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tropicaljplith_pc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/snare_ps_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofparadwyn_ps_vs.jpg',
    'http://www.bluefurok.com/./VSimages/crystallascinth_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/freep_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/ormalet_uc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/mudslide_us_vs.jpg',
    'http://www.bluefurok.com/./VSimages/tunnel_us_vs.jpg',
    'http://www.bluefurok.com/./VSimages/realityanchor_ir_vs.jpg',
    'http://www.bluefurok.com/./VSimages/healinglight_is_vs.jpg',
    'http://www.bluefurok.com/./VSimages/pureofheart_is_vs.jpg',
    'http://www.bluefurok.com/./VSimages/spiritofrayje_is_vs.jpg',
    'http://www.bluefurok.com/./VSimages/pajickpet_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sagaweave_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/thresh_wc_vs.jpg',
    'http://www.bluefurok.com/./VSimages/sprout_ws_vs.jpg',
    'http://www.bluefurok.com/./VSimages/weaveseed_ws_vs.jpg'],
    
]

const traitorsReachLinks = [
    
    //Rares at index 0
    ['http://bluefurok.com/TRimages/lightningbraggle_ac_tr.jpg',
    'http://bluefurok.com/TRimages/lasadaemissary_am_tr.jpg',
    'http://bluefurok.com/TRimages/dreamthreadbracelet_ar_tr.jpg',
    'http://bluefurok.com/TRimages/shockring_ar_tr2.jpg',
    'http://bluefurok.com/TRimages/blackstuff_bc_tr.jpg',
    'http://bluefurok.com/TRimages/rotarboll_bc_tr.jpg',
    'http://bluefurok.com/TRimages/brogswampthug_bm_tr.jpg',
    'http://bluefurok.com/TRimages/mudbubble_bs_tr.jpg',
    'http://bluefurok.com/TRimages/cinderhyren_cc_tr.jpg',
    'http://bluefurok.com/TRimages/sinderapprentice_cm_tr.jpg',
    'http://bluefurok.com/TRimages/moltengauntlets_cr_tr.jpg',
    'http://bluefurok.com/TRimages/singedpride_cs_tr.jpg',
    'http://bluefurok.com/TRimages/darkvellup_xc_tr.jpg',
    'http://bluefurok.com/TRimages/lanyxreaper_xm_tr.jpg',
    'http://bluefurok.com/TRimages/shroudofthemaster_xr_tr.jpg',
    'http://bluefurok.com/TRimages/circlingdarbok_dc_tr.jpg',
    'http://bluefurok.com/TRimages/korremaravatar_dm_tr.jpg',
    'http://bluefurok.com/TRimages/aubrastimepiece_dr_tr.jpg',
    'http://bluefurok.com/TRimages/dreamcatcher_dr_tr.jpg',
    'http://bluefurok.com/TRimages/rollingbaldar_kc_tr.jpg',
    'http://bluefurok.com/TRimages/grollthefallen_km_tr.jpg',
    'http://bluefurok.com/TRimages/mogaboots_kr_tr.jpg',
    'http://bluefurok.com/TRimages/topple_ks_tr.jpg',
    'http://bluefurok.com/TRimages/polareebit_rc_tr.jpg',
    'http://bluefurok.com/TRimages/hajnyn_rm_tr.jpg',
    'http://bluefurok.com/TRimages/chillcane_rr_tr.jpg',
    'http://bluefurok.com/TRimages/icecap_rr_tr.jpg',
    'http://bluefurok.com/TRimages/carilliontitan_nc_tr.jpg',
    'http://bluefurok.com/TRimages/pruittringsmith_nm_tr.jpg',
    'http://bluefurok.com/TRimages/bloomingbracelet_nr_tr.jpg',
    'http://bluefurok.com/TRimages/rememberring_nr_tr.jpg',
    'http://bluefurok.com/TRimages/pearlhyren_oc_tr.jpg',
    'http://bluefurok.com/TRimages/briarelichunter_om_tr.jpg',
    'http://bluefurok.com/TRimages/parathinshell_or_tr.jpg',
    'http://bluefurok.com/TRimages/ripcurl_os_tr.jpg',
    'http://bluefurok.com/TRimages/jungleeebit_pc_tr.jpg',
    'http://bluefurok.com/TRimages/iaincommando_pm_tr.jpg',
    'http://bluefurok.com/TRimages/scarletsongbanner_pr_tr.jpg',
    'http://bluefurok.com/TRimages/tripvine_pr_tr.jpg',
    'http://bluefurok.com/TRimages/pillarhyren_uc_tr.jpg',
    'http://bluefurok.com/TRimages/ulkprodigy_um_tr.jpg',
    'http://bluefurok.com/TRimages/rumblestones_ur_tr.jpg',
    'http://bluefurok.com/TRimages/crystalshield_us_tr.jpg',
    'http://bluefurok.com/TRimages/collosit_ic_tr.jpg',
    'http://bluefurok.com/TRimages/hapu_ic_tr.jpg',
    'http://bluefurok.com/TRimages/nightmareconstruct_ic_tr.jpg',
    'http://bluefurok.com/TRimages/toastedyajo_wc_tr.jpg',
    'http://bluefurok.com/TRimages/marellasavant_wm_tr.jpeg',
    'http://bluefurok.com/TRimages/weavemaul_wr_tr.jpg',
    'http://bluefurok.com/TRimages/countlessblades_ws_tr.jpg'],

    //Uncommons at index 1
    ['http://bluefurok.com/TRimages/rainbowhyren_ac_tr.jpg',
    'http://bluefurok.com/TRimages/amara_am_tr.jpg',
    'http://bluefurok.com/TRimages/klynn_am_tr.jpg',
    'http://bluefurok.com/TRimages/voltshield_as_tr.jpg',
    'http://bluefurok.com/TRimages/withertwee_bc_tr.jpg',
    'http://bluefurok.com/TRimages/bulomp_bm_tr.jpg',
    'http://bluefurok.com/TRimages/whilp_bm_tr.jpg',
    'http://bluefurok.com/TRimages/muckshovel_br_tr.jpg',
    'http://bluefurok.com/TRimages/jory_cm_tr.jpg',
    'http://bluefurok.com/TRimages/xandia_cm_tr.jpg',
    'http://bluefurok.com/TRimages/discofinferno_cr_tr.jpg',
    'http://bluefurok.com/TRimages/lavablast_cs_tr.jpg',
    'http://bluefurok.com/TRimages/gorathcub_xc_tr.jpg',
    'http://bluefurok.com/TRimages/tloktraitor_xm_tr.jpg',
    'http://bluefurok.com/TRimages/yayek_xm_tr.jpg',
    'http://bluefurok.com/TRimages/twisteddreams_xs_tr.jpg',
    'http://bluefurok.com/TRimages/craw_dc_tr.jpg',
    'http://bluefurok.com/TRimages/nymat_dm_tr.jpg',
    'http://bluefurok.com/TRimages/salara_dm_tr.jpg',
    'http://bluefurok.com/TRimages/aubraswisdom_ds_tr.jpg',
    'http://bluefurok.com/TRimages/stubbornchogus_kc_tr.jpg',
    'http://bluefurok.com/TRimages/nssah_km_tr.jpg',
    'http://bluefurok.com/TRimages/talik_km_tr.jpg',
    'http://bluefurok.com/TRimages/flintstaff_kr_tr.jpg',
    'http://bluefurok.com/TRimages/icevinoc_rc_tr.jpg',
    'http://bluefurok.com/TRimages/aurorea_rm_tr.jpg',
    'http://bluefurok.com/TRimages/locke_rm_tr.jpg',
    'http://bluefurok.com/TRimages/kintorfurs_rr_tr.jpg',
    'http://bluefurok.com/TRimages/snagarboll_nc_tr.jpg',
    'http://bluefurok.com/TRimages/sive_nm_tr.jpg',
    'http://bluefurok.com/TRimages/tdek_nm_tr.jpg',
    'http://bluefurok.com/TRimages/grottophrup_oc_tr.jpg',
    'http://bluefurok.com/TRimages/jaim_om_tr.jpg',
    'http://bluefurok.com/TRimages/sellia_om_tr.jpg',
    'http://bluefurok.com/TRimages/sphorcharm_or_tr.jpg',
    'http://bluefurok.com/TRimages/scarletsonglahalou_pc_tr.jpg',
    'http://bluefurok.com/TRimages/mijji_pm_tr.jpg',
    'http://bluefurok.com/TRimages/sqwik_pm_tr.jpg',
    'http://bluefurok.com/TRimages/drumsolo_ps_tr.jpg',
    'http://bluefurok.com/TRimages/crystaltwinklet_uc_tr.jpg',
    'http://bluefurok.com/TRimages/gulg_um_tr.jpg',
    'http://bluefurok.com/TRimages/ulmi_um_tr.jpg',
    'http://bluefurok.com/TRimages/crystalgoblet_ur_tr.jpg',
    'http://bluefurok.com/TRimages/ancientspuzzlebox_ir_tr.jpg',
    'http://bluefurok.com/TRimages/crushingwill_is_tr.jpg',
    'http://bluefurok.com/TRimages/weavearboll_wc_tr.jpg',
    'http://bluefurok.com/TRimages/keru_wm_tr.jpg',
    'http://bluefurok.com/TRimages/ushi_wm_tr.jpg',    
    'http://bluefurok.com/TRimages/quallonsquest_ws_tr.jpg'],

    //Commons at index 2
    ['http://bluefurok.com/TRimages/barrelingvemment_ac_tr.jpg',
    'http://bluefurok.com/TRimages/renegadeepik_ac_tr.jpg',
    'http://bluefurok.com/TRimages/starlightsgenesis_as_tr.jpg',
    'http://bluefurok.com/TRimages/sunbeamsend_as_tr.jpg',
    'http://bluefurok.com/TRimages/creepingainjer_bc_tr.jpg',
    'http://bluefurok.com/TRimages/mosstrulb_bc_tr.jpg',
    'http://bluefurok.com/TRimages/trulbbracelet_br_tr.jpg',
    'http://bluefurok.com/TRimages/trulbble_bs_tr.jpg',
    'http://bluefurok.com/TRimages/calderaaq_cc_tr.jpg',
    'http://bluefurok.com/TRimages/flamejakla_cc_tr.jpg',
    'http://bluefurok.com/TRimages/jaklaprowler_cc_tr.jpg',
    'http://bluefurok.com/TRimages/spark_cs_tr.jpg',
    'http://bluefurok.com/TRimages/shadowdryte_xc_tr.jpg',
    'http://bluefurok.com/TRimages/shadowfird_xc_tr.jpg',
    'http://bluefurok.com/TRimages/slinkinggreal_xc_tr.jpg',
    'http://bluefurok.com/TRimages/hauntingvisions_xs_tr.jpg',
    'http://bluefurok.com/TRimages/olumfiend_dc_tr.jpg',
    'http://bluefurok.com/TRimages/sandsark_dc_tr.jpg',
    'http://bluefurok.com/TRimages/mirage_ds_tr.jpg',
    'http://bluefurok.com/TRimages/sandtrap_ds_tr.jpg',
    'http://bluefurok.com/TRimages/bonecragnoc_kc_tr.jpg',
    'http://bluefurok.com/TRimages/crouchingxamf_kc_tr.jpg',
    'http://bluefurok.com/TRimages/baldaramulet_kr_tr.jpg',
    'http://bluefurok.com/TRimages/grappletooth_kr_tr.jpg',
    'http://bluefurok.com/TRimages/gravity_ks_tr.jpg',
    'http://bluefurok.com/TRimages/polarrudwot_rc_tr.jpg',
    'http://bluefurok.com/TRimages/raskdeserter_rc_tr.jpg',
    'http://bluefurok.com/TRimages/flashfreeze_rs_tr.jpg',
    'http://bluefurok.com/TRimages/icepack_rs_tr.jpg',
    'http://bluefurok.com/TRimages/sneakyweebo_nc_tr.jpg',
    'http://bluefurok.com/TRimages/stagadancharger_nc_tr.jpg',
    'http://bluefurok.com/TRimages/wanderingbalamant_nc_tr.jpg',
    'http://bluefurok.com/TRimages/harvestfeast_ns_tr.jpg',
    'http://bluefurok.com/TRimages/verdantshield_ns_tr.jpg',
    'http://bluefurok.com/TRimages/malevolentcorf_oc_tr.jpg',
    'http://bluefurok.com/TRimages/porphin_oc_tr.jpg',
    'http://bluefurok.com/TRimages/hornofrenewal_or_tr.jpg',
    'http://bluefurok.com/TRimages/possessionsglee_os_tr.jpg',
    'http://bluefurok.com/TRimages/lurkingminani_pc_tr.jpg',
    'http://bluefurok.com/TRimages/vinebhatar_pc_tr.jpg',
    'http://bluefurok.com/TRimages/jungleriddle_ps_tr.jpg',
    'http://bluefurok.com/TRimages/scarletsonglilt_ps_tr.jpg',
    'http://bluefurok.com/TRimages/crystalhyren_uc_tr.jpg',
    'http://bluefurok.com/TRimages/crystalsaris_uc_tr.jpg',
    'http://bluefurok.com/TRimages/venomouskorrit_uc_tr.jpg',
    'http://bluefurok.com/TRimages/kieselshammer_ur_tr.jpg',
    'http://bluefurok.com/TRimages/entrench_us_tr.jpg',
    'http://bluefurok.com/TRimages/unesscale_ir_tr.jpg',
    'http://bluefurok.com/TRimages/scurryingweggit_wc_tr.jpg',
    'http://bluefurok.com/TRimages/speagsprouts_wc_tr.jpg',
    'http://bluefurok.com/TRimages/weavewovenanklet_wr_tr.jpg'],

]