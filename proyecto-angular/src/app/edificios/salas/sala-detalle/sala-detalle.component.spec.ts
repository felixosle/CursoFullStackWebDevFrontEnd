import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDetalleComponent } from './sala-detalle.component';

describe('SalaDetalleComponent', () => {
  let component: SalaDetalleComponent;
  let fixture: ComponentFixture<SalaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
