import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoldHistoryComponent } from './view-sold-history.component';

describe('ViewSoldHistoryComponent', () => {
  let component: ViewSoldHistoryComponent;
  let fixture: ComponentFixture<ViewSoldHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSoldHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSoldHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
