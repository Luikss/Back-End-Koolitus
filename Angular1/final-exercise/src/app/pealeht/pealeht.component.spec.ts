import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PealehtComponent } from './pealeht.component';

describe('PealehtComponent', () => {
  let component: PealehtComponent;
  let fixture: ComponentFixture<PealehtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PealehtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PealehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
