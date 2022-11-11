import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneProvisioningComponent } from './landing-zone-provisioning.component';

describe('LandingZoneProvisioningComponent', () => {
  let component: LandingZoneProvisioningComponent;
  let fixture: ComponentFixture<LandingZoneProvisioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingZoneProvisioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneProvisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
