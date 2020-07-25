import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardOverviewComponent } from './custom-card-overview.component';

describe('CustomCardOverviewComponent', () => {
  let component: CustomCardOverviewComponent;
  let fixture: ComponentFixture<CustomCardOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
