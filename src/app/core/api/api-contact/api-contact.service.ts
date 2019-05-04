import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactData } from './api-contact.model';

@Injectable()
export class ApiContactService {

  constructor() { }

  public getContactData(): Observable<ContactData> {
    return Observable.of({
      telephone: '123123123',
      email: 'jak.nowak@gmail.com',
      address: 'ul. Piękna 35, Wrocław',
      description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue.'
    });
  }

}
