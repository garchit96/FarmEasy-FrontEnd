import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }
  addContact(contact: Contact) {
    let url = 'http://localhost:8080/ContactApp/rest/Contactservice/add';
    return this.http.post<Contact>(url, contact);
  }
}
