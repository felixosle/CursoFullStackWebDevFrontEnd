import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDetalleComponent } from './reserva-detalle.component';

describe('ReservaDetalleComponent', () => {
  let component: ReservaDetalleComponent;
  let fixture: ComponentFixture<ReservaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
