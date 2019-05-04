import { Component, OnInit } from '@angular/core';
import { ApiContactService } from '../../core/api/api-contact/api-contact.service';
import { ContactData } from '../../core/api/api-contact/api-contact.model';

@Component({
  selector: 'dvt-contact',
  templateUrl: './contact.view.html',
  styleUrls: ['./contact.view.scss']
})
export class ContactView implements OnInit {
  public contactData: ContactData;

  constructor(
    private apiContactService: ApiContactService
  ) { }

  ngOnInit() {
    this.apiContactService.getContactData().subscribe(data => this.contactData = data).unsubscribe();
  }

}
