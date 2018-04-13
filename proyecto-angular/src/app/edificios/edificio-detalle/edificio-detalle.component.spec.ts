import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioDetalleComponent } from './edificio-detalle.component';

describe('EdificioDetalleComponent', () => {
  let component: EdificioDetalleComponent;
  let fixture: ComponentFixture<EdificioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
