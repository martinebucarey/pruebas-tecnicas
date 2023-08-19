import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDispoiblesComponent } from './libros-dispoibles.component';

describe('LibrosDispoiblesComponent', () => {
  let component: LibrosDispoiblesComponent;
  let fixture: ComponentFixture<LibrosDispoiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosDispoiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosDispoiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
