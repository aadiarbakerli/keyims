import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit 
{
	keys: Array<any>;
	keylist: any;  
  constructor(private http: HttpClient, private eventManager: EventManager) 
  {
  	this.keylist = document.getElementById("keylst"); 
  }

  ngOnInit()
  {

  }
  
  getKey() : void
  {
    this.keylist = document.getElementById("keylst");
     
    	while(this.keylist.hasChildNodes())
    		this.keylist.removeChild(this.keylist.childNodes[0]);
    		
    this.http.get<any>("/keyims/keyserv").
  	subscribe((data) =>{
  		this.keys = data;

  		for(let i = 0; i < this.keys.length; i++)
  		{
  			let list = document.createElement("li");
  			list.innerHTML = this.keys[i].id + ": " + this.keys[i].desc;
  			list.value = this.keys[i].id;
  			
  			this.eventManager.addEventListener(list, 'click', this.showInfo);
  			this.eventManager.addEventListener(list, 'mouseenter', ()=> list.style.backgroundColor = "blue");
  			this.eventManager.addEventListener(list, 'mouseleave', ()=> list.style.backgroundColor = "lightblue");
  			
  			this.keylist.appendChild(list);
  		}
  		})
  }
  
  	showInfo()
  	{
  		console.log("click");
  	}
}
