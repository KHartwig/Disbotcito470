import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBotAddComponent } from './modal-bot-add.component';

describe('ModalBotAddComponent', () => {
  let component: ModalBotAddComponent;
  let fixture: ComponentFixture<ModalBotAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBotAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
