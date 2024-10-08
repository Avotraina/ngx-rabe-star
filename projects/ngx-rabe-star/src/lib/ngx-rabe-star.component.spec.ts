import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRabeStarComponent } from './ngx-rabe-star.component';

describe('NgxRabeStarComponent', () => {
  let component: NgxRabeStarComponent;
  let fixture: ComponentFixture<NgxRabeStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRabeStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxRabeStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
