import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaataUksiktoodetComponent } from './vaata-uksiktoodet.component';

describe('VaataUksiktoodetComponent', () => {
  let component: VaataUksiktoodetComponent;
  let fixture: ComponentFixture<VaataUksiktoodetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaataUksiktoodetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaataUksiktoodetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
