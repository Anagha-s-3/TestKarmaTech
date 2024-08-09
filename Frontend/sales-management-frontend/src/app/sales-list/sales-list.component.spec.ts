import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesListComponent } from './sales-list.component';
import { beforeEach, describe, it } from 'node:test';

describe('SalesListComponent', () => {
  let component: SalesListComponent;
  let fixture: ComponentFixture<SalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (!component) {
      throw new Error('Component not created');
    }
  });
});


