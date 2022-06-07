import { TestBed } from '@angular/core/testing';

import { ContactosServiceService } from './contactos-service.service';

describe('ContactosServiceService', () => {
  let service: ContactosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
