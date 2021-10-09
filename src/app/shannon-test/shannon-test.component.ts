import { Component, OnInit } from '@angular/core';
import { SENTENCES } from './sentences/sentences';

@Component({
  selector: 'app-shannon-test',
  templateUrl: './shannon-test.component.html',
  styleUrls: ['./shannon-test.component.css']
})
export class ShannonTestComponent implements OnInit {

  public sentence: string

  constructor() {
    this.sentence = this.selectRandom(SENTENCES)
  }

  ngOnInit(): void {
  }

  selectRandom(sentences: string[]) {
    let randNum = Math.floor( Math.random() * sentences.length );
    return sentences[randNum]
  }

}
