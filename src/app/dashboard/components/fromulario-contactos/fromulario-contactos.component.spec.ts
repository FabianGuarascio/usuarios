import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromularioContactosComponent } from './fromulario-contactos.component';

describe('FromularioContactosComponent', () => {
  let component: FromularioContactosComponent;
  let fixture: ComponentFixture<FromularioContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromularioContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromularioContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
