import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTextComponent } from './enter-text.component';

describe('EnterTextComponent', () => {
  let component: EnterTextComponent;
  let fixture: ComponentFixture<EnterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
