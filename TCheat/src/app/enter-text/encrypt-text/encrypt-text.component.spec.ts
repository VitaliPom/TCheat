import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptTextComponent } from './encrypt-text.component';

describe('EncryptTextComponent', () => {
  let component: EncryptTextComponent;
  let fixture: ComponentFixture<EncryptTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
