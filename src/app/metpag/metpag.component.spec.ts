import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetpagComponent } from './metpag.component';

describe('MetpagComponent', () => {
  let component: MetpagComponent;
  let fixture: ComponentFixture<MetpagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetpagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
