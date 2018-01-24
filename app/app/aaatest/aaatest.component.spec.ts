import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaatestComponent } from './aaatest.component';

describe('AaatestComponent', () => {
  let component: AaatestComponent;
  let fixture: ComponentFixture<AaatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
