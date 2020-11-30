import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileaccComponent } from './mobileacc.component';

describe('MobileaccComponent', () => {
  let component: MobileaccComponent;
  let fixture: ComponentFixture<MobileaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
