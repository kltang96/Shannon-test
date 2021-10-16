import { Component, OnInit } from '@angular/core';
import { SENTENCES } from './sentences/sentences';

@Component({
  selector: 'app-shannon-test',
  templateUrl: './shannon-test.component.html',
  styleUrls: ['./shannon-test.component.css']
})
export class ShannonTestComponent implements OnInit {

  public sentence: string
  public focused = false
  public currentIndex = 0
  public currentPressedKeys = ""
  public tries: number[]

  public readonly ACCEPTABLE_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "

  constructor() {
    document.onkeydown = function(event) {
      let letter = event.key.toUpperCase()
      if(this.focused && this.ACCEPTABLE_KEYS.includes(letter)) {
        if(letter == " ") {
          event.preventDefault()
        }
        this.handleLetter(letter)
      }
    }.bind(this)
  }

  ngOnInit(): void {
    this.sentence = this.selectRandom(SENTENCES).toUpperCase()
    // this.sentence = SENTENCES[55].toUpperCase()
    this.currentIndex = 0
    // this.currentIndex = 43 //test
    this.currentPressedKeys = ""
    this.tries = []
  }

  selectRandom(sentences: string[]) {
    let randNum = Math.floor( Math.random() * sentences.length );
    return sentences[randNum]
  }

  handleLetter(letter: string) {
    if(this.sentence[this.currentIndex] == letter) {
      this.tries.push(this.currentPressedKeys.length+1)
      this.currentPressedKeys = ""
      this.currentIndex++
      if(this.currentIndex >= this.sentence.length) {
        this.handleComplete()
      }
    }
    else if(this.currentPressedKeys.includes(letter)) {
      //do nothing
    }
    else {
      this.currentPressedKeys += letter
    }
  }

  handleComplete() {

  }

  calculateEntropy() {
    if(this.tries.length < 5) {
      return null
    }

    let numberOfTries = {}

    this.tries.forEach(
      num => {
        if(numberOfTries[""+num]) {
          numberOfTries[""+num]++
        }
        else {
          numberOfTries[""+num] = 1
        }
      }
    )

    let entropy = 0

    for(let num in numberOfTries) {
      let p = numberOfTries[num] / this.tries.length
      entropy += p * Math.log2(1/p)
    }

    return entropy.toFixed(3)
  }

  //this method is wrong, but more a more accurate approximation for low number of guesses
  calculateEntropy2() {
    let totalTries = 0

    this.tries.forEach(
      num => {
        totalTries += num
      }
    )

    let entropy = Math.log2(totalTries/this.tries.length * 2 - 1)

    return entropy.toFixed(3)
  }

  solve() {
    this.currentIndex = this.sentence.length
  }
  reset() {
    this.ngOnInit()
  }

}
