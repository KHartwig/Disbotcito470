import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsAddComponent } from './bots-add.component';

describe('BotsAddComponent', () => {
  let component: BotsAddComponent;
  let fixture: ComponentFixture<BotsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
