import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encrypt-text',
  templateUrl: './encrypt-text.component.html',
  styleUrls: ['./encrypt-text.component.css']
})
export class EncryptTextComponent implements OnInit {
  @Input()
  encryptedText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
