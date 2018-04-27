import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEdicionComponent } from './dialogo-edicion.component';

describe('DialogoEdicionComponent', () => {
  let component: DialogoEdicionComponent;
  let fixture: ComponentFixture<DialogoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
