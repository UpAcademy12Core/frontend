import { TestBed, async, inject } from '@angular/core/testing';

import { SuperuserGuard } from './superuser.guard';

describe('SuperuserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperuserGuard]
    });
  });

  it('should ...', inject([SuperuserGuard], (guard: SuperuserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
