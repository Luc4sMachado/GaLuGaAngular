import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopessoaisComponent } from './infopessoais.component';

describe('InfopessoaisComponent', () => {
  let component: InfopessoaisComponent;
  let fixture: ComponentFixture<InfopessoaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopessoaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
