import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchContestComponent } from './match-contest.component';

describe('MatchContestComponent', () => {
  let component: MatchContestComponent;
  let fixture: ComponentFixture<MatchContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
