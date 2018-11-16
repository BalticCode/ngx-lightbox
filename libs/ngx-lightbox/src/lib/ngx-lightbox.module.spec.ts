import { async, TestBed } from '@angular/core/testing';
import { NgxLightboxModule } from './ngx-lightbox.module';

describe('NgxLightboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxLightboxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxLightboxModule).toBeDefined();
  });
});
