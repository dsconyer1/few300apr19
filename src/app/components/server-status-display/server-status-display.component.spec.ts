import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusDisplayComponent } from './server-status-display.component';

describe('ServerStatusDisplayComponent', () => {
  let component: ServerStatusDisplayComponent;
  let fixture: ComponentFixture<ServerStatusDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatusDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
