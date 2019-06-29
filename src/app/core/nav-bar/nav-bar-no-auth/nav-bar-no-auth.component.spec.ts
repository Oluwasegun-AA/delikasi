import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNoAuthComponent } from './nav-bar-no-auth.component';

describe('NavBarNoAuthComponent', () => {
  let component: NavBarNoAuthComponent;
  let fixture: ComponentFixture<NavBarNoAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNoAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
