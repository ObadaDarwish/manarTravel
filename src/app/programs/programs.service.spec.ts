import { TestBed, inject } from '@angular/core/testing';

import { ProgramsService } from './programs.service';

describe('ProgramsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramsService]
    });
  });

  it('should ...', inject([ProgramsService], (service: ProgramsService) => {
    expect(service).toBeTruthy();
  }));
});
