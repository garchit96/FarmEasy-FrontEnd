import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

con: Contact=new Contact();
  constructor(private service: ContactServiceService) {
    this.con.firstname='Raza';
    this.con.lastname='Assassin';
    this.con.phone='8919889480786';
   }

  ngOnInit(): void {
  }
  addContact() {
    alert(JSON.stringify(this.con));
    this.service.addContact(this.con).subscribe((data: Contact) => {
      alert(JSON.stringify(data));
      alert(data);
      console.log(data);
      if(data != null) {
        alert("Registration is successful");
    }})
  }
}
