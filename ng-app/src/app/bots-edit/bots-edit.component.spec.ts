import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsEditComponent } from './bots-edit.component';

describe('BotsEditComponent', () => {
  let component: BotsEditComponent;
  let fixture: ComponentFixture<BotsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
