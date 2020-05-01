var boxes = document.querySelector('.canvas');
var list = boxes.children;

var newGame = document.querySelector('.btn');

newGame.addEventListener('click', init);

init();

function shuffle(array) {
    let shuffles = Math.floor(Math.random() * 100);
    let output = array;
    function swap() {
        let left = Math.floor(Math.random() * (list.length)) % list.length;
        let right = Math.floor(Math.random() * (list.length)) % list.length;
        if (left === right) return;
        let leftItem = output[left];
        let rightItem = output[right];
        output[left] = rightItem;
        output[right] = leftItem;
    }
    for (let i = 0; i < shuffles; i++) {
        swap();
    }
    return output
}

function init() {
    // this for loop makes the images hidden
    for (i = 0; i < list.length; i++) {
        list[i].style.backgroundSize = '0px 0px';
    }

    /* make a list of pairs of numbers from 1 - 3. [1,1,2,2,3,3]. 
    These numbers will serve as the image file
    */

    var listR = []

    count = 0
    availableImages = 3
    while (count < list.length / 2 && availableImages > 0) {
        listR.push(availableImages);
        listR.push(availableImages)
        count++;
        availableImages--;

    }

    listR = shuffle(listR)

    console.log(listR)
    
    // for each image element, assign the image file
    for (i = 0; i < list.length; i++) {
        list[i].style.backgroundImage = 'url(img-' + listR[i] + '.jpg)';
    }
};


// make a list of two values that will hold the first click and the second click
var currentlyselected = null;
var theMoment = false;

function reveal(node) {
    node.style.backgroundSize = '165px 118px'
}

function hide(node) {
    node.style.backgroundSize = '0px 0px';
}

boxes.addEventListener('click', function(event) {

    if (theMoment) return;

    if (currentlyselected == null)  {
        currentlyselected = event.target;
        reveal(currentlyselected);
        return;
    }

    if (event.target === currentlyselected) {
        hide(currentlyselected);
        currentlyselected = null;
        return;
    }

    var secondItem = event.target;
    reveal(secondItem)

    if (currentlyselected.style.backgroundImage === secondItem.style.backgroundImage) {
        currentlyselected = null
    } else {
        theMoment = true
        setTimeout(function () {
            hide(currentlyselected)
            hide(secondItem)
            currentlyselected = null
            theMoment = false
        }, 1000)
    }
})

// add a button that will add two new boxes


/**
 * Implement a matching game similar to the classic 90's game "memory"
 *
 * You have to pick two matching cards with the same picture.
 *
 * 1. When you select a card and no other card has been selected before, reveal it
 * 2. When you select a card and another card has been revealed, compare the revealed card with the selected one
 *    a. If the card matches, they stay open
 *    b. if the cards don't match, wait a moment seconds, then close both
 *       during the "moment" all clicks are disabled
 * 3. When all cards have been flipped, the game is over.
 */

/**
 * Questions to ask when looking at a problem like this:
 *
 * 1. What application state do I need to implement this:
 *    application state refers to "persistent" memory.
 *
 * 2. What are the ways in which the state is maniplulated or "transitioned"
 *
 * this describes a Finite state machine
 */




