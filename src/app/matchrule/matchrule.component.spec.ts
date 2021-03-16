import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchruleComponent } from './matchrule.component';

describe('MatchruleComponent', () => {
  let component: MatchruleComponent;
  let fixture: ComponentFixture<MatchruleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchruleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
