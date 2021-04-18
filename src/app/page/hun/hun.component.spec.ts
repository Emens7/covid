import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunComponent } from './hun.component';

describe('HunComponent', () => {
  let component: HunComponent;
  let fixture: ComponentFixture<HunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
