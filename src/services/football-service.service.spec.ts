import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';

describe('FootballServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballService = TestBed.get(FootballService);
    expect(service).toBeTruthy();
  });
});
