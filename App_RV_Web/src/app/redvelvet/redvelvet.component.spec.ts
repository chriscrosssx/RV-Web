import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedvelvetComponent } from './redvelvet.component';

describe('RedvelvetComponent', () => {
  let component: RedvelvetComponent;
  let fixture: ComponentFixture<RedvelvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedvelvetComponent ]
    })
    .compileComponents();
  });

    beforeEach(() => {
    fixture = TestBed.createComponent(RedvelvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
