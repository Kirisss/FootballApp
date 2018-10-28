import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballmatchesComponent } from './footballmatches.component';

describe('FootballmatchesComponent', () => {
  let component: FootballmatchesComponent;
  let fixture: ComponentFixture<FootballmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
