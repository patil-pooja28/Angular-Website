import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigatorComponent } from './refrigator.component';

describe('RefrigatorComponent', () => {
  let component: RefrigatorComponent;
  let fixture: ComponentFixture<RefrigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
