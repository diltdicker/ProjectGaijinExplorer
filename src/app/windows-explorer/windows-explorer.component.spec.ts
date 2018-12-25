import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsExplorerComponent } from './windows-explorer.component';

describe('WindowsExplorerComponent', () => {
  let component: WindowsExplorerComponent;
  let fixture: ComponentFixture<WindowsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
