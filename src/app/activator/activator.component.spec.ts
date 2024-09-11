import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorComponent } from './activator.component';

describe('ActivatorComponent', () => {
  let component: ActivatorComponent;
  let fixture: ComponentFixture<ActivatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
