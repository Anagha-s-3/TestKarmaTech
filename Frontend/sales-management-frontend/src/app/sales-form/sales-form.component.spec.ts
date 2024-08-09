import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesFormComponent } from './sales-form.component';
import { beforeEach, describe, it } from 'node:test';

describe('SalesFormComponent', () => {
  let component: SalesFormComponent;
  let fixture: ComponentFixture<SalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (!component) {
      throw new Error('Component not created');
    }
  });
});
