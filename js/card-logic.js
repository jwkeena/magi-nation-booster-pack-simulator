// Card selection logic
function chooseSet() {
    currentSet = document.getElementsByClassName("select-set")[0].value;
    openPack(currentSet);
};

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
};

function sortSet(setName) {
    const set = sets[setName];
    set.sortedCards = {
        rares: set.cards.filter(card => card.rarity === "R"),
        uncommons: set.cards.filter(card => card.rarity === "U"),
        commons: set.cards.filter(card => card.rarity === "C"),
    };
    // TODO: refactor perhaps to iterate over all cards just once, instead of using .filter five times? 
    // The other advantage would be that I wouldn't miss any cards. Using a default in a switch statement, I'd catch all the cards. 
    // Currently I should be checking that the total number of cards in the set equals the total of all the sorted arrays built here.
    set.cardsAreSorted = true;
    return setName;
};

function removeFreshPullMarkerFrom(previousPack) {
    previousPack.cards.forEach(card => card.isFreshPull = false);
}

function openPack(setName) {
    // Guard check 1, since this amounts to a recursion. 
    // If no specific set has been chosen, choose one and run this function again
    if (setName === "random") return chooseRandomSet();
    
    // Guard check 2 (since I'm using actual recursion now--have to avoid stack overflow)
    // Sort cards into rarity tiers the first time the set is picked. Pulling individual cards depends on having these tiers
    let set = sets[setName];
    if (set.cardsAreSorted === false) return openPack(sortSet(setName))
    
    // We only want the latest cards marked as new in grid view, if there are any cards
    if (pulledPacks.length > 0) {
        // The previous pack pulled will always be the one last in the pulledPacks array
        const previousPack = pulledPacks[pulledPacks.length - 1];
        removeFreshPullMarkerFrom(previousPack);
    }

    const holoPulled = calculateOdds(set.chanceOfHolo);
    const cardsInPack = [];
    const newPackArtUrls = set.packArt;
    set.cardsToPull.forEach((cardType, index) => pullCard(cardType, cardsInPack, set, holoPulled, index));
    const newId = Symbol(); // Give each pack a unique ID so that even if its cards and set exactly match another, it will be considered unique for deletion purposes
    pulledPacks.push({ id: newId, set: set, packArtUrls: newPackArtUrls, cards: [...cardsInPack]});
    
    // Now we're ready to show the cards to the user
    decideWhichDisplayToSet(uiViewType)    
};

function decideWhichDisplayToSet(uiViewType) {
    switch (uiViewType) {
        case "singlePackFlip":
            setDisplay("singlePackFlip");
            break;
        case "rowView":
            setDisplay("rowView")
            break;
        case "gridView":
            setDisplay("gridView")
            break;
        default:
            console.log("Default view type - this should be impossible");
    };
}

function deletePack(packId) {
    for (let i = 0; i < pulledPacks.length; i++){
        if (pulledPacks[i].id === packId) 
            pulledPacks.splice(i, 1);
    };
    setDisplay("rowView"); // Since deletion is only possible in row view currently
};

function chooseRandomSet() {
    const allSets = Object.keys(sets);
    const randomSet = allSets[randomIndex(allSets.length)];
    openPack(randomSet);
};

function calculateOdds(odds) {
    const diceRoll = Math.random();
    if (diceRoll <= odds) return true;
    else return false;
    // I know the else statement is optional since js coerces undefined to false but this reads better OKAY?!
};

function pullCard(cardType, pack, set, holoPulled, index) {
    let card = null;
    // Remember js objects are passed by reference, not value. So when I assign the card variable declared in the first line of this function to a random card object later, 
    // any change I make to the card variable here will also change the card in the set--they are both using the same reference.
    // So I have to create a (shallow) clone of the card object so that it doesn't mutate the card in the set, using Object.assign
    // If I didn't, whenever this card is pulled again it will appear to be a reverse holo even when it's supposed to be a normal card
    // See https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript for more options

    switch (cardType) {
        case "R":
            // if (holoPulled)
            //     card = Object.assign({}, set.sortedCards.holoRares[randomIndex(set.sortedCards.holoRares.length)]);
            // else 
                card = Object.assign({}, set.sortedCards.rares[randomIndex(set.sortedCards.rares.length)]);
            break;
        case "U":
            card = Object.assign({}, set.sortedCards.uncommons[randomIndex(set.sortedCards.uncommons.length)]);
            break;
        default: // Handles commons
            card = Object.assign({}, set.sortedCards.commons[randomIndex(set.sortedCards.commons.length)]);
    };

    // Using recursion again. TODO: refactor to keep a duplicate array of possible choices, popping off chosen ones
    // Only run duplicate check if it's not a reverse holo. Reverse holos CAN be duplicates
    if (isDuplicate(card, pack)) {
        pullCard(cardType, pack, set, holoPulled, index);
    }
    else {
        card.pullOrder = index; // For row view "PACK ORDER" sorting
        card.setSymbolUrl = set.symbolUrl; // For grid view set symbol display
        card.isFreshPull = true; // For grid view, marking which cards are newly rendered
        pack.push(card);
    };
    return pack;
};

function randomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
};

function isDuplicate(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].key === item.key) return true;
    };
};