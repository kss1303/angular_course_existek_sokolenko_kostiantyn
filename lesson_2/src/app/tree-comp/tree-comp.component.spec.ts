import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCompComponent } from './tree-comp.component';

describe('TreeCompComponent', () => {
  let component: TreeCompComponent;
  let fixture: ComponentFixture<TreeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
