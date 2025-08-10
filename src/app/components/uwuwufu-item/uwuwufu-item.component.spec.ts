import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwuwufuItemComponent } from './uwuwufu-item.component';

describe('UwuwufuItemComponent', () => {
  let component: UwuwufuItemComponent;
  let fixture: ComponentFixture<UwuwufuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwuwufuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UwuwufuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
