var boxes = document.querySelector('.canvas');
var list = boxes.children;

var newGame = document.querySelector('.btn');

newGame.addEventListener('click', init);

init();

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

    // shuffle that list so that every new game, the image elements will refer to a different image file
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    
    shuffle(listR)
    
    // for each image element, assign the image file
    for (i = 0; i < list.length; i++) {
        list[i].style.backgroundImage = 'url(img-' + listR[i] + '.jpg)';
    }
};


// make a list of two values that will hold the first click and the second click
var clickedImage = [];
var choiceOne, choiceTwo;

boxes.addEventListener('click', function(event) {

    // if a box is clicked, the image background will become the normal size
    event.target.style.backgroundSize = '165px 118px';
    // list of two values is created here
    clickedImage.push(event.target);

    choiceOne = clickedImage[0];
    choiceTwo = clickedImage[1];


    function disappearImage() {
        clickedImage[0].style.backgroundSize = '0px 0px';
        clickedImage[1].style.backgroundSize = '0px 0px';
        clickedImage = []
    }

    // function delay() {
    //     setTimeout(function(){ 
    //         clickedImage[0].style.backgroundSize = '0px 0px';
    //         clickedImage[1].style.backgroundSize = '0px 0px';; 
    //     }, 5000);
    // }

    if (clickedImage[0].id === clickedImage[1].id) {
        disappearImage(); 
    } else {
         // this will compare the two values, if they are the same, the image will remain big, if not the image will be small again
        if (clickedImage[0].style.backgroundImage === clickedImage[1].style.backgroundImage) {
            clickedImage[0].style.backgroundSize = '165px 118px';
            clickedImage[1].style.backgroundSize = '165px 118px';
            clickedImage = [];
        } else {
            disappearImage();
        }
    }
    // then empty the list again so we can take two new values
    
})

// add a button that will add two new boxes
