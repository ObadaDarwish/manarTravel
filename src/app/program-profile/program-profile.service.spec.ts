import { TestBed, inject } from '@angular/core/testing';

import { ProgramProfileService } from './program-profile.service';

describe('ProgramProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramProfileService]
    });
  });

  it('should be created', inject([ProgramProfileService], (service: ProgramProfileService) => {
    expect(service).toBeTruthy();
  }));
});
