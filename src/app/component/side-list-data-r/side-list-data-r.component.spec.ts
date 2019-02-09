import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideListDataRComponent } from './side-list-data-r.component';

describe('SideListDataRComponent', () => {
  let component: SideListDataRComponent;
  let fixture: ComponentFixture<SideListDataRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideListDataRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideListDataRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
