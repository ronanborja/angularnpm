import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxRonan1205xyLibComponent } from './nx-ronan1205xy-lib.component';

describe('NxRonan1205xyLibComponent', () => {
  let component: NxRonan1205xyLibComponent;
  let fixture: ComponentFixture<NxRonan1205xyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxRonan1205xyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxRonan1205xyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
