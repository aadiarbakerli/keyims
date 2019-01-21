import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() 
  {
  	let aud = document.getElementById("audits");
  	
  	this.http.get("/keyims/auditserv").subscribe((audits : Array<any>)=> {
  	
  	for(let i = 0; i < audits.length; i++)
  	{
  		let list = document.createElement("li");
  		list.innerHTML = audits[i].id + ": From User " + audits[i].user + " || " +audits[i].event;
  		console.log(audits[i]);
  		aud.appendChild(list);
  	}
  	
  	});
  }

}
