import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShannonTestComponent } from './shannon-test.component';

describe('ShannonTestComponent', () => {
  let component: ShannonTestComponent;
  let fixture: ComponentFixture<ShannonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShannonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShannonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
