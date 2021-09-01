// Global variables. Card and set info is isolated in other js files already loaded on index.html
let uiViewType = "singlePackFlip"; // This must remain global so that the card-logic.js file can access it easily (tho' I could use a closure instead)
let pulledPacks = [];
let currentSet = null;
let sortOption = "packOrder";
let noDuplicates = false;

// -----------------------
// UI
function setDisplay(displayOption = document.querySelector(".select-display").value, sortOption = document.querySelector(".select-row-view-sorting").value) {
    uiViewType = displayOption;
    displayOption = (pulledPacks.length === 0) ? "noCards" : displayOption;
    deleteChildrenFrom(["single-pack-flip-area", "row-view", "grid-view"]);
    switch (displayOption) {
        case "singlePackFlip":
            showElements(".magnifying-glass.mobile-only", true);
            showElements(".grid-view-only", false);
            // Only want to display the most recently opened pack for now. TODO: allow user to toggle through packs opened via carousel
            singlePackFlip(pulledPacks[pulledPacks.length - 1].packArtUrls, pulledPacks[pulledPacks.length - 1].cards);
            break;
        case "rowView":
            showElements(".magnifying-glass.mobile-only", false);
            showElements(".row-view-only", true);
            showElements(".grid-view-only", false);
            pulledPacks.forEach(pack => { displayRowView(pack.id, pack.packArtUrls, pack.cards, sortOption) })
            break;
        case "gridView":
            showElements(".magnifying-glass.mobile-only", false);
            showElements(".row-view-only", false);
            showElements(".grid-view-only", true);
            displayGridView(sortOption, noDuplicates);
            break;
        case "noCards":
            const target = document.getElementById("single-pack-flip-area");
            const card = buildCardHTML(["card", "card--current", "no-card"], "../images/site/cardback.png");
            card.title = "No cards to display!"
            target.appendChild(card);
            break;
        default:
            alert("Somehow we've passed a nonexistent view type: " + displayOption + ". This should be impossible.")
    };
};

function buildCardHTML(classesToAdd, imageUrl, hiResImageUrl, isHolo) {
    const card = document.createElement("div");
    card.classList.add(...classesToAdd);
    card.style.backgroundImage = "url('../images/site/5530030.gif')";
    preloadImage(card, imageUrl, isHolo);
    card.setAttribute("data-card-image", imageUrl);
    card.setAttribute("data-card-image-hi-res", hiResImageUrl);
    return card;
};

function buildPackArtHTML(packArtUrls, packId) {
    const packArt = document.createElement("div")
    packArt.classList.add("pack-art", "pulled-card");

    const packArtFrontDiv = document.createElement("div");
    packArtFrontDiv.classList.add("pack-art-front");
    const packArtFront = new Image();
    packArtFront.src = packArtUrls.front;
    packArtFrontDiv.appendChild(packArtFront);
    packArt.appendChild(packArtFrontDiv);

    const packArtBackDiv = document.createElement("div");
    packArtBackDiv.classList.add("pack-art-back");
    const packArtBack = new Image();
    packArtBack.src = packArtUrls.back;
    packArtBackDiv.appendChild(packArtBack);

    const deleteButton = document.createElement("div");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete-pack-button");
    packArtBackDiv.appendChild(deleteButton);

    packArt.appendChild(packArtBackDiv);

    // Can't use an arrow function here, since I need the "this" context of the div clicked
    packArt.addEventListener("click", function () {
        this.classList.toggle("flipped");
    });

    deleteButton.addEventListener("click", function (e) {
        e.stopPropagation();
        deletePack(packId);
    });

    return packArt;
};

// https://www.sitepoint.com/community/t/onload-for-background-image/6462
function preloadImage(card, imageUrl, isHolo) {
    const img = new Image();
    img.onload = () => onImageLoaded(card, isHolo);
    img.src = imageUrl;
};

function onImageLoaded(card, isHolo) {
    const loadedImageUrl = card.getAttribute("data-card-image");
    if (isHolo) card.classList.add("holographic");
    else card.classList.remove("holographic");
    card.style.backgroundImage = "url('" + loadedImageUrl + "')";
    card.classList.remove("loading");
};

function zoomCard(url, isHolo) {
    const div = document.getElementById("hi-res-card");
    div.classList.add("loading");
    div.setAttribute("data-card-image", url);
    preloadImage(div, url, isHolo);
    const modal = document.getElementById("card-zoom");
    modal.style.display = "block";
};

function deleteChildrenFrom(parentNodes) {
    parentNodes.forEach(node => { document.getElementById(node).innerHTML = "" });
};

// UI - single pack flip
function singlePackFlip(packArtUrls, pack) {

    // Don't allow pack order sorting in grid view. Default to pack order  
    if (sortOption === "setOldest" || sortOption === "setNewest" || sortOption === "raresOnly") {
        document.querySelector(".button.select-row-view-sorting").value="packOrder";
        sortOption = "cardNameDescending";
    }

    pack = sortThis(pack, sortOption);

    // Render cards
    const target = document.getElementById("single-pack-flip-area");
    const packArtFront = buildCardHTML(["card", "pack-art-card", "card--current", "loading"], packArtUrls.front, "none", false);
    target.append(packArtFront);
    for (let i = 0; i < pack.length; i++) {
        let card;
        let isHolo = null;
        const classesToAdd = ["card", "loading"];
        
        if (pack[i].rarity.charAt(0) === "H") isHolo = true;
        else isHolo = false;

        if (pack[i].name === "Monarch Hyren") classesToAdd.push("fireworks");
        else if (pack[i].name === "Rayje's Belt") classesToAdd.push("fireworks");
        else if (pack[i].name.includes("Hyren") && isHolo) classesToAdd.push("fireworks"); // But this includes Hyren's Call
        else if (pack[i].name === "Liriel's Cape" && isHolo) classesToAdd.push("fireworks");
        else if (pack[i].name === "Rayje" && isHolo) classesToAdd.push("fireworks");
        else if (pack[i].name === "Agram" && isHolo) classesToAdd.push("fireworks");
        else if (pack[i].name === "Sorreah" && isHolo) classesToAdd.push("fireworks");
        else if (isHolo) classesToAdd.push("holographic", "confetti");

        if (pack[i].set === "BS") classesToAdd.push("unlimited");
        
        card = buildCardHTML(classesToAdd, pack[i].imageUrl, pack[i].imageUrlHiRes, isHolo)

        card.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            if (pack[i].rarity.charAt(0) === "H") zoomCard(pack[i].imageUrlHiRes, true);
            else zoomCard(pack[i].imageUrlHiRes, false);
        });
        target.appendChild(card);
    }
    $('.cards').commentCards();
}

// -----------------------
// UI - row view
function displayRowView(packId, packArtUrls, pack, sortOption) {

    // Don't allow pack order sorting in row view. Default to pack order  
    if (sortOption === "setOldest" || sortOption === "setNewest" || sortOption === "raresOnly") {
        document.querySelector(".button.select-row-view-sorting").value="packOrder";
        sortOption = "cardNameDescending";
    }

    const packWrapper = document.createElement("div");
    packWrapper.classList.add("open-pack");
    document.getElementById("row-view").prepend(packWrapper);
    
    const packArt = buildPackArtHTML(packArtUrls, packId);
    packWrapper.appendChild(packArt);

    // Sort cards in pack before rendering
    pack = sortThis(pack, sortOption);

    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks. Must use div tags
    for (let i = 0; i < pack.length; i++) {
        let card;
        let isHolo = null;
        const classesToAdd = ["pulled-card", "loading"];
        
        if (pack[i].rarity.charAt(0) === "H") isHolo = true;
        else isHolo = false;
        
        if (isHolo) classesToAdd.push("holographic");
        if (pack[i].set === "BS") classesToAdd.push("unlimited");
        
        card = buildCardHTML(classesToAdd, pack[i].imageUrl, null, isHolo);
        
        // Event listeners must be added after the cards are created
        if (isHolo) card.addEventListener("click", () => zoomCard(pack[i].imageUrlHiRes, true));
        else card.addEventListener("click", () => zoomCard(pack[i].imageUrlHiRes, false));

        packWrapper.appendChild(card);

        // But I can use img tags for the rarity markers
        const raritySymbol = document.createElement("img");
        raritySymbol.classList.add("rarity");
        if (pack[i].rarity.includes("C"))
            raritySymbol.src = "../images/site/rarity_common.png";
        if (pack[i].rarity.includes("U"))
            raritySymbol.src = "../images/site/rarity_uncommon.png";
        if (pack[i].rarity.includes("R"))
            raritySymbol.src = "../images/site/rarity_rare.png";
        card.appendChild(raritySymbol);
    };

    // Event delegation for horizontal scrolling from https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div
    packWrapper.addEventListener("wheel", (e) => {
        const toLeft = e.deltaY < 0 && packWrapper.scrollLeft > 0;
        const toRight = e.deltaY > 0 && packWrapper.scrollLeft < packWrapper.scrollWidth - packWrapper.clientWidth;

        if (toLeft || toRight) {
            e.preventDefault();
            packWrapper.scrollLeft += e.deltaY;
        };
    });
};

function resortCardsOnDisplay() {
    const chosenOption = document.querySelector(".select-row-view-sorting").value;
    sortOption = chosenOption;
    setDisplay(displayOption = document.querySelector(".select-display").value, sortOption);
};

function sortThis(cards, sortOption) {
    // Magic from https://afewminutesofcode.com/how-to-create-a-custom-sort-order-in-javascript
    let sortedCards, sortBy;
    const customSort = ({ data, sortBy, sortField }) => {
        const sortByObject = sortBy.reduce((obj, item, index) => {
            return {
                ...obj,
                [item]: index
            }
        }, {})
        return data.sort((a, b) => {
            // Using a logic funnel to sort in multiple layers
            // Check custom sort first
            if (sortByObject[a[sortField]] > sortByObject[b[sortField]]) return 1;
            if (sortByObject[a[sortField]] < sortByObject[b[sortField]]) return -1;

            // Then sort by name
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;

            return 0;
        });
    };

    switch (sortOption) {
        case "packOrder":
            sortedCards = cards.sort((a, b) => { return parseInt(a.pullOrder) - parseInt(b.pullOrder) })
            break;
        case "rarityDescending":
            sortBy = ["HR", "HU", "HC", "R", "U", "C"];
            sortedCards = customSort({ data: cards, sortBy, sortField: 'rarity' });
            break;
        case "rarityAscending":
            sortBy = ["C", "U", "R", "HC", "HU", "HR"];
            sortedCards = customSort({ data: cards, sortBy, sortField: 'rarity' });
            break;
        case "cardNameDescending":
            sortedCards = cards.sort((a, b) => {
                const name1 = a.name;
                const name2 = b.name;
                return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
            });
            break;
        case "cardNameAscending":
            sortedCards = cards.sort((a, b) => {
                const name1 = a.name;
                const name2 = b.name;
                return (name1 > name2) ? -1 : (name1 < name2) ? 1 : 0;
            });
            break;
        case "setOldest":
            sortBy = ["BS", "AW", "DE", "ND", "VS", "TR"];
            sortedCards = customSort({ data: cards, sortBy, sortField: 'set' });
            break;
        case "setNewest":
            sortBy = ["TR", "VS", "ND", "DE", "AW", "BS"];
            sortedCards = customSort({ data: cards, sortBy, sortField: 'set' });
            break;
        case "raresOnly":
            filteredCards = cards.filter(card => card.rarity.includes("H") || card.rarity.includes("R"));
            sortBy = ["HR", "HU", "HC", "R"];
            sortedCards = customSort({data: filteredCards, sortBy, sortField: 'rarity'});
            break;
        case "region":
            // Sort by region alphabetically
            // Sort by name
            // Return
            break;
        default:
            alert("Unknown sorting method.");
    };
    return sortedCards;
};

// TODO: Abstract this into a showElements function that takes in an array of css class selectors and spreads it
function showElements(selector, bool) {
    elements = document.querySelectorAll(selector);
    if (bool) elements.forEach(element => element.classList.remove("hide"));
    else elements.forEach(element => element.classList.add("hide"));
};

// -----------------------
// UI - grid view
function displayGridView(sortOption, noDuplicates) {
    
    // Don't allow pack order sorting in grid view. Default to name a-z    
    if (sortOption === "packOrder") {
        document.querySelector(".button.select-row-view-sorting").value="cardNameDescending";
        sortOption = "cardNameDescending";
    }

    const gridWrapper = document.createElement("div");
    gridWrapper.classList.add("grid-wrapper");
    document.getElementById("grid-view").prepend(gridWrapper);

    // Get all cards. Can't one line this...
    let allCards = [];
    pulledPacks.forEach(pack => allCards.push(...pack.cards));
    if (noDuplicates) allCards = removeDuplicates(allCards);

    // Sort cards in pack before rendering
    allCards = sortThis(allCards, sortOption);

    // For some unfathomable reason I can't create img tags, or the flexbox overflow-y breaks. Must use div tags
    for (let i = 0; i < allCards.length; i++) {
        let card;
        let isHolo = null;
        const classesToAdd = ["grid-card", "loading"];

        if (allCards[i].rarity.charAt(0) === "H") isHolo = true;
        else isHolo = false;
        
        if (isHolo) classesToAdd.push("holographic");
        if (allCards[i].set === "BS") classesToAdd.push("unlimited");

        card = buildCardHTML(classesToAdd, allCards[i].imageUrl, null, isHolo);

        gridWrapper.appendChild(card);
        card.addEventListener("click", e => {
            e.target.classList.remove("fresh-pull");
            if (allCards[i].rarity.charAt(0) === "H") zoomCard(allCards[i].imageUrlHiRes, true)
            else zoomCard(allCards[i].imageUrlHiRes, false)
        });

        // Mark fresh pulls as new
        if (allCards[i].isFreshPull) card.classList.add("fresh-pull");

        // But I can use img tags for the rarity markers
        const setSymbol = document.createElement("img");
        setSymbol.classList.add("set-symbol");
        setSymbol.src = allCards[i].setSymbolUrl;
        setSymbol.title = allCards[i].set;
        card.appendChild(setSymbol)
    };

    const freshPulls = document.querySelectorAll(".fresh-pull");
    freshPulls.forEach(div => div.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.target.classList.remove("fresh-pull");
    }));
};

function removeDuplicates(allCards) {
    const nonHolosArr = allCards.filter(card => card.rarity.includes("H"));
    const holosArr = allCards.filter(card => !card.rarity.includes("H"));   

    function getUniqueCardsFrom(cardArr) {
        const uniques = [];
        let uniqueNames = [...new Set(cardArr.map(card => card.name))] // Extract unique names by putting array of all names into a set 
        uniqueNames.forEach(name => {
            const firstMatchingCard = cardArr.find(card => card.name === name); // Then use the names array to find a single match for each name
            uniques.push(firstMatchingCard);
        });
        return uniques;
    }

    const uniqueHolos = getUniqueCardsFrom(holosArr);
    const uniqueNonHolos = getUniqueCardsFrom(nonHolosArr);
    const uniqueCards = [...uniqueHolos, ...uniqueNonHolos]
    return uniqueCards;
}

// -----------------------
// UI - Event listeners
// When the user clicks anywhere outside of the modal, close it
const modal = document.getElementById("card-zoom");
modal.onclick = function (e) {
    if (e.target !== document.getElementById("hi-res-card")) {
        modal.style.display = "none";
        document.getElementById("hi-res-card").style.backgroundImage = "url('../images/site/5530030.gif')";
    };
};

// Zoom on card
const magnifyingGlass = document.querySelector(".magnifying-glass");
magnifyingGlass.addEventListener("click", () => {
    const currentCard = document.querySelector(".card--current");
    const hiResUrl = currentCard.getAttribute("data-card-image-hi-res");
    if (hiResUrl !== "none") zoomCard(hiResUrl);
    // Pack art is not zoomed, hence it will not be caught here
});

// Shake phone to get next card in single pack flip only
const myShakeEvent = new Shake({});
myShakeEvent.start();
$(window).on('shake', function() {
    if (uiViewType === "singlePackFlip") {
        $(".card--current").click();
    }
});

// Buttons
const openPackButtons = document.querySelectorAll(".open-pack-button");
openPackButtons.forEach(button => button.onclick = () => {
    openPack(currentSet);
});

const clearPackButton = document.querySelector(".clear-cards");
clearPackButton.onclick = () => {
    if (pulledPacks.length === 0) return alert("There are no cards to delete.");
    if (confirm("Are you sure you want to delete all your cards? This action cannot be undone.")) {
        pulledPacks = [];
        setDisplay();
    };
};

const noDuplicatesButton = document.querySelector(".no-duplicates");
noDuplicatesButton.onclick = () => {
    if (pulledPacks.length === 0) return;
    noDuplicates = !noDuplicates;
    if (noDuplicates) document.querySelector(".duplicate-icon").src = "images/site/duplicate-icon.png";
    else document.querySelector(".duplicate-icon").src = "images/site/duplicate-icon-alt.png";
    deleteChildrenFrom(["grid-view"]);
    displayGridView(sortOption, noDuplicates);
}

// Flip through stack of cards modified from https://codepen.io/shshaw/pen/KzYXvP
$.fn.commentCards = function () {
    // Closure...but why?
    return this.each(function () {
        var $this = $(this),
            $cards = $this.find('.card'),
            $current = $cards.filter('.card--current'),
            $next;

        // The crucial changes here were in three parts
        $cards.on('click', function () {
            if ($current.is(this)) { // First, I wanted the condition to only apply to the current card, NOT everything else (so I took the bang out)

                $cards.removeClass('card--current card--out card--next');
                $current.addClass('card--out');
                $current = $(this).next().length === 1 ? $(this).next().addClass('card--current') : $cards.first().addClass('card--current'); // Second, I added a ternary here to apply the "card-current" class to the next item if there is one, or if not, then the first item
                $next = $current.next().length === 1 ? $current.next() : $cards.first(); // Likewise, and finally, I wanted to apply "card--next" class to the item after the current item if there is one, and if not, then the first card
                $next.addClass('card--next');

                if ($current.hasClass("fireworks")) {
                    const fireworks = function () {
                        createFirework(27, 200, 4, 2, null, null, null, null, false, true);
                    }
                    const fireworksTimer = setInterval(fireworks, 300);
                    setTimeout(() => { $current.removeClass("fireworks"); clearInterval(fireworksTimer); }, 5000)
                }

                if ($current.hasClass("confetti")) {
                    setTimeout(() => { $current.removeClass("confetti"); confetti({ particleCount: 200, gravity: .5, origin: { y: .7 }, spread: 90 }); }, 500);
                }
            }
        });

        if (!$current.length) {
            $current = $cards.first();
            $cards.first().trigger('click');
        }

    })
};

// -----------------------
// Initialization
// TODO: retrieve user's choices from localStorage
chooseSet();
showElements(".button.select-row-view-sorting", true);
showElements(".button.clear-cards", false);
showElements(".grid-view-only", false);
