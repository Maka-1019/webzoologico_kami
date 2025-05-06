import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocomponenteComponent } from './nuevocomponente.component';

describe('NuevocomponenteComponent', () => {
  let component: NuevocomponenteComponent;
  let fixture: ComponentFixture<NuevocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevocomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
