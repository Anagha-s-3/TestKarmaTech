import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesDetailComponent } from './sales-detail.component';
import { beforeEach, describe, it } from 'node:test';

describe('SalesDetailComponent', () => {
  let component: SalesDetailComponent;
  let fixture: ComponentFixture<SalesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (!component) {
      throw new Error('Component not created');
    }
  });
});
