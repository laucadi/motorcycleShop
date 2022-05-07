import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUnoComponent } from './formulario-uno.component';

describe('FormularioUnoComponent', () => {
  let component: FormularioUnoComponent;
  let fixture: ComponentFixture<FormularioUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
