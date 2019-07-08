import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorOhFoorComponent } from './foor-oh-foor.component';

describe('FoorOhFoorComponent', () => {
  let component: FoorOhFoorComponent;
  let fixture: ComponentFixture<FoorOhFoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoorOhFoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoorOhFoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
