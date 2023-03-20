import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBComponent } from './listar-b.component';

describe('ListarBComponent', () => {
  let component: ListarBComponent;
  let fixture: ComponentFixture<ListarBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
