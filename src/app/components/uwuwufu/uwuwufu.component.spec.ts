import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwuwufuComponent } from './uwuwufu.component';

describe('UwuwufuComponent', () => {
  let component: UwuwufuComponent;
  let fixture: ComponentFixture<UwuwufuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwuwufuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UwuwufuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
