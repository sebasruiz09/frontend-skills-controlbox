import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAComponent } from './listar-a.component';

describe('ListarAComponent', () => {
  let component: ListarAComponent;
  let fixture: ComponentFixture<ListarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
