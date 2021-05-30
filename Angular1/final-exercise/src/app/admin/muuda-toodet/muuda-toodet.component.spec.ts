import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaToodetComponent } from './muuda-toodet.component';

describe('MuudaToodetComponent', () => {
  let component: MuudaToodetComponent;
  let fixture: ComponentFixture<MuudaToodetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuudaToodetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuudaToodetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
