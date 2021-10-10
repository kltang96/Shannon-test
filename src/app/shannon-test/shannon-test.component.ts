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

  private readonly ACCEPTABLE_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "

  constructor() {
    document.onkeydown = function(event) {
      let letter = event.key.toUpperCase()
      if(this.focused && this.ACCEPTABLE_KEYS.includes(letter)) {
        event.preventDefault()
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
      console.log("correct")
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
    let bits = 0

    this.tries.forEach(
      num => {
        bits += Math.log2(num * 2 - 1)
      }
    )

    let entropy = bits/this.tries.length

    return entropy.toFixed(3)
  }

  displayCurrentPressedKeys() {
    return this.currentPressedKeys.replace(" ", "_")
  }

  reset() {
    this.ngOnInit()
  }

}
