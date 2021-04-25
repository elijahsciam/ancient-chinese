import { Component, OnInit } from '@angular/core';
import laozi from 'src/texts/laozi';
import dufu from 'src/texts/dufu';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  currentText: any;
  selectedTitle: any;
  selectedAuthor: any;
  printText() {
    const author = this.selectedAuthor;
    this.currentText = author.data[this.selectedTitle].body;
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

  ngOnInit(): void {}
}
