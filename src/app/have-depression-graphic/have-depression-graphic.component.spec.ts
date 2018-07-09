import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveDepressionGraphicComponent } from './have-depression-graphic.component';

describe('HaveDepressionGraphicComponent', () => {
  let component: HaveDepressionGraphicComponent;
  let fixture: ComponentFixture<HaveDepressionGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveDepressionGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveDepressionGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
