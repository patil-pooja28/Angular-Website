import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaccComponent } from './compacc.component';

describe('CompaccComponent', () => {
  let component: CompaccComponent;
  let fixture: ComponentFixture<CompaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
