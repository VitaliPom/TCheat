import { Component, OnDestroy, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-enter-text',
  templateUrl: './enter-text.component.html',
  styleUrls: ['./enter-text.component.css']
})
export class EnterTextComponent {
  @Output()
  encryptedText = "";
  excersises: any;
  text: String;
  constructor(appComponent: AppComponent) {
    this.excersises = appComponent.excersises
  }

  
  onChange(event){
    this.encryptedText = "";
    for(var i = 0; i < event.length; i++){
      for(var j = 0; j < this.excersises.length; j++){
        if(this.excersises[j]['ot'].localeCompare(event.charAt(i)) == 0){
          this.encryptedText = this.excersises[j]['result']+"," +this.encryptedText;
          break;
        }
      }
    }
    this.encryptedText = this.encryptedText.slice(0,this.encryptedText.length-1);
  }

  ngOnDestroy(): void {
    this.excersises = null;
  }
}
