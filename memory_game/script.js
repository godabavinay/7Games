var cards = [
    {
        name: 'burger',
        image: 'images/burger.png'
    },
    {
        name: 'burger',
        image: 'images/burger.png'
    },
    {
        name: 'combo',
        image: 'images/combo.png'
    },
    {
        name: 'combo',
        image: 'images/combo.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza-slice.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza-slice.png'
    },
    {
        name: 'popcorn',
        image: 'images/popcorn.png'
    },
    {
        name: 'popcorn',
        image: 'images/popcorn.png'
    },
    {
        name: 'sausage',
        image: 'images/sausage.png'
    },
    {
        name: 'sausage',
        image: 'images/sausage.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    }
];

cards.sort(() => 0.5 - Math.random());

var grid = document.querySelector('.grid');
var chosenCardId = [];
var chosenCard = [];
var cardsWon = [];

function checkForMatch() {
    var gridCards = document.querySelectorAll('img');
    const chosenImageId1 = chosenCardId[0];
    const chosenImageId2 = chosenCardId[1];

    if (chosenCard[0] == chosenCard[1]) {
        alert('You found a match');

        gridCards[chosenImageId1].setAttribute('src', 'images/white.png');
        gridCards[chosenImageId2].setAttribute('src', 'images/white.png');

        gridCards[chosenImageId1].removeEventListener('click', flipcard);
        gridCards[chosenImageId2].removeEventListener('click', flipcard);

        cardsWon.push(chosenCard[0])
    } else {
        gridCards[chosenImageId1].setAttribute('src', 'images/blank.png');
        gridCards[chosenImageId2].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again');
    }

    chosenCard = [];
    chosenCardId = [];

    document.querySelector('#score').textContent = cardsWon.length;

    if (cardsWon.length == cards.length / 2) {
        document.querySelector('.result').textContent = 'Congratulation! You found all of them';
    }
}

function flipcard() {
    var cardId = this.getAttribute('data-id');
    
    chosenCard.push(cards[cardId].name);
    chosenCardId.push(cardId);

    this.setAttribute('src', cards[cardId].image);

    if (chosenCard.length == 2) {
        setTimeout(checkForMatch, 500);
    }
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        var card = document.createElement('img');

        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('width', '128px');
        card.setAttribute('height', '128px');
        card.addEventListener('click', flipcard);

        grid.appendChild(card);
    }
}

createBoard();