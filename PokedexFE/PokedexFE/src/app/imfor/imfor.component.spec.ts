import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImforComponent } from './imfor.component';

describe('ImforComponent', () => {
  let component: ImforComponent;
  let fixture: ComponentFixture<ImforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
