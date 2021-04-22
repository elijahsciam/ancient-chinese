import { Component, OnInit } from '@angular/core';
import laozi from 'src/texts/laozi';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  public currentText: any;
  private printText(titleNo: number) {
    return laozi.data[titleNo].body;
  }

  ngOnInit(): void {
    this.currentText = this.printText(1);
  }
}
