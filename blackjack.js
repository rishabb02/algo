class Game{
  constructor(player){
    this.player = player
    this.cards = new Cards
    this.dealer = new Dealer(this.cards)
    this.students = ["boib"]
  }

  addStudent() {
    this.students.push("jerry")
  }
}



class Cards{
  constructor(){
    this.myCards = [1, 2, 3, 4, 5]
  }
  shuffleOnce(){
    var firstCard = this.myCards.shift()
    var randomPos = Math.floor(Math.random() * this.myCards.length)
    this.myCards.splice(randomPos, 0, firstCard)
  }
  shuffle(numOfShuffles){
    for( var i = 0; i < numOfShuffles; i++){
      this.shuffleOnce()
    }

  }
}

class Dealer{
  constructor(cards){
    this.cards = cards
  }
  deal(){
    var topCard = this.cards.shift()
    return topCard
  }
}

const myCards = new Cards

console.log(myCards.shuffle(6))