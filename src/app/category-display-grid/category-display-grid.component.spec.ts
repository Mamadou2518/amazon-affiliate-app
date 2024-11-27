import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDisplayGridComponent } from './category-display-grid.component';

describe('CategoryDisplayGridComponent', () => {
  let component: CategoryDisplayGridComponent;
  let fixture: ComponentFixture<CategoryDisplayGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryDisplayGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDisplayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
