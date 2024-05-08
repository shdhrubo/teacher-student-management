import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeacherDialogComponent } from './delete-teacher-dialog.component';

describe('DeleteTeacherDialogComponent', () => {
  let component: DeleteTeacherDialogComponent;
  let fixture: ComponentFixture<DeleteTeacherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTeacherDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
