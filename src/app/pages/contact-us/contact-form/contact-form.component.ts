import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  model: any = {};
  submitted = false;
  baseURL: string = "http://localhost:3000/send";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onSubmit() { 
    this.submitted = true;
    this.http.post<any>(this.baseURL, this.model).subscribe()
  }
  

}
