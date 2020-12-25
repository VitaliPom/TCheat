import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'TCheat';
  alephbet = [
    'א',
    'ב',
    'ג',
    'ד',
    'ה',
    'ו',
    'ז',
    'ח',
    'ט',
    'י',
    'כ', 
    'ל', 
    'מ',
    'נ',
    'ס',
    'ע',
    'פ',
    'צ',
    'ק',
    'ר',
    'ש',
    'ת',
    'ך',
    'ם',
    'ן',
    'ף',
    'ץ',
  ];

  excersises = [] as any;

  ngOnInit(): void {
    this.excersises.push({ot : " ", result: " ", ex: " "});
    this.alephbet.forEach(element => {
      var varA = Math.floor(Math.random()*20);
      var varB = Math.floor(Math.random()*20);
      var result = varA - varB;
      var exists = true;
      while(exists){
        exists = false;
        this.excersises.forEach(element => {
          if(element.result === result){
            exists = true;
          }
        });
        if(exists){
          varB = Math.floor(Math.random()*20);
          result = varA - varB;
        }
      }
      var ex = varA + "-" + varB;
      this.excersises.push({ot : element, result: result, ex: ex});
    });
    
  }
}
