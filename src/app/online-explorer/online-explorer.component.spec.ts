import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExplorerComponent } from './online-explorer.component';

describe('OnlineExplorerComponent', () => {
  let component: OnlineExplorerComponent;
  let fixture: ComponentFixture<OnlineExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
