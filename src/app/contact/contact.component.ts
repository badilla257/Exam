import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contact= [
    
    {'id':1,'name':'Facebook Account','description':'Username:Dariel Gie Badilla','image':'../../assets/fb.png'},
    {'id':2,'name': 'Instagram Account','description':'Username:Dariel0903','image':'../../assets/insta.jfif'},
    {'id':3,'name':'Email Account','description':'Email: darielgie.badilla@evsu.edu.ph','image':'../../assets/gmail.png'},
    {'id':4,'name':'Call or Text','description':'Number: 09150834978','image':'../../assets/download.png'},
    

  
  ]

}