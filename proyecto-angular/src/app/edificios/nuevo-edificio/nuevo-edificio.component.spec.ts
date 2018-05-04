import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEdificioComponent } from './nuevo-edificio.component';

describe('NuevoEdificioComponent', () => {
  let component: NuevoEdificioComponent;
  let fixture: ComponentFixture<NuevoEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
