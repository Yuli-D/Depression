import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveDepressionComponent } from './have-depression.component';

describe('HaveDepressionComponent', () => {
  let component: HaveDepressionComponent;
  let fixture: ComponentFixture<HaveDepressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveDepressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveDepressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
