/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NestedComponent } from './nested.component';

describe('NestedComponent', () => {
  let component: NestedComponent;
  let fixture: ComponentFixture<NestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
