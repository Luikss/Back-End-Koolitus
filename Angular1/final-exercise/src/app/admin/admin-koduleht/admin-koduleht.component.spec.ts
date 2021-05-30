import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKodulehtComponent } from './admin-koduleht.component';

describe('AdminKodulehtComponent', () => {
  let component: AdminKodulehtComponent;
  let fixture: ComponentFixture<AdminKodulehtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKodulehtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKodulehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
