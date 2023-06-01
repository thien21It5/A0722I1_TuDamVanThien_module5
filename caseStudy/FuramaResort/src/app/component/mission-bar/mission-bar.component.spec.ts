import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBarComponent } from './mission-bar.component';

describe('MissionBarComponent', () => {
  let component: MissionBarComponent;
  let fixture: ComponentFixture<MissionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
