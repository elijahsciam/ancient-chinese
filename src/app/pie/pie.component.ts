import { Component, OnInit } from '@angular/core';
import laozi from 'src/texts/laozi';
import dufu from 'src/texts/dufu';
const dictionary = require('./dict/parser.js');

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  currentText: any;
  errorMessage: any;
  selectedTitle: any;
  selectedAuthor: any;
  printText(event: any) {
    const author = this.selectedAuthor;
    if (author.data[this.selectedTitle] === undefined) {
      this.errorMessage = 'Please select another number';
    }
    this.currentText = author.data[this.selectedTitle].body;
    this.errorMessage = '';
    event.preventDefault();
  }
  selectAuthor(event: any) {
    const target = event.target.value;
    if (target === 'dufu') {
      this.selectedAuthor = dufu;
    }
    if (target === 'laozi') {
      this.selectedAuthor = laozi;
    }
  }
  selectTitle(event: any) {
    const target = event.target.value;
    this.selectedTitle = parseInt(target);
  }

  ngOnInit(): void {
    console.log(dictionary);
  }
}
