import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanisoreComponent } from './nanisore.component';

describe('NanisoreComponent', () => {
  let component: NanisoreComponent;
  let fixture: ComponentFixture<NanisoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanisoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanisoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
