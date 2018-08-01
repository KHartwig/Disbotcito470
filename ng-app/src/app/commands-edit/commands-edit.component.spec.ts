import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsEditComponent } from './commands-edit.component';

describe('CommandsEditComponent', () => {
  let component: CommandsEditComponent;
  let fixture: ComponentFixture<CommandsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
