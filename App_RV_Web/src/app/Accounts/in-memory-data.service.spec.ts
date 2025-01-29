import { TestBed } from '@angular/core/testing';
import{AccountMain} from"./account";
import { ACCOUNTSAMP } from './accounts';
import { InMemoryDataService } from '../in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
