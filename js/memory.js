class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    // this.pickedCards.push(card1, card2)
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
