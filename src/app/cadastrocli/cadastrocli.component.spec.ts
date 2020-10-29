import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocliComponent } from './cadastrocli.component';

describe('CadastrocliComponent', () => {
  let component: CadastrocliComponent;
  let fixture: ComponentFixture<CadastrocliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
