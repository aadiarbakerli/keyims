import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})

export class KeyComponent implements OnInit 
{
	public keys : Array<any>;
	keylist: any;  
  constructor(private http: HttpClient, private eventManager: EventManager)
  {
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
  	subscribe((data : Array<any>) =>{
  		this.keys = data;
  			
		let cheat = document.createElement("p");
		cheat.id = "cheat";
		cheat.style.display = "none";
		cheat.innerHTML = JSON.stringify(this.keys);
		this.keylist.appendChild(cheat);
		
  		for(let i = 0; i < this.keys.length; i++)
  		{
  			let list = document.createElement("li");

  			list.innerHTML = this.keys[i].id + ": " + this.keys[i].desc + "<br> Type: " + this.keys[i].type + "<br> Material: " + this.keys[i].material + "<br> Qty: " + this.keys[i].quantity + "<br> Public: " + this.keys[i].pub ;
  			list.value = this.keys[i].id;
  			
  			this.eventManager.addEventListener(list, 'click', this.showInfo);
  			this.eventManager.addEventListener(list, 'mouseenter', ()=> list.style.backgroundColor = "blue");
  			this.eventManager.addEventListener(list, 'mouseleave', ()=> list.style.backgroundColor = "lightblue");
  			
  			this.keylist.appendChild(list);
  		}
  		console.log("complete"); 		
  	})
  }
  
  clear()
  {
    	document.getElementById("keyid").innerHTML = "";
  		(<HTMLInputElement>document.getElementById("keymat")).value = "";
  		(<HTMLInputElement>document.getElementById("keydesc")).value = "";
  		(<HTMLInputElement>document.getElementById("keyqty")).value = "";
  		(<HTMLInputElement>document.getElementById("keypub")).value = "";
  		(<HTMLInputElement>document.getElementById("keytype")).value = "";
  }
  
  	showInfo(e)
  	{
	  	let cheat = document.getElementById("cheat");
	  	this.keys = JSON.parse(cheat.innerHTML);
  		console.log(cheat);
  		console.log(this.keys);
  	
  		let keyid = document.getElementById("keyid");
  		let keymat = (<HTMLInputElement>document.getElementById("keymat"));
  		let keydesc = (<HTMLInputElement>document.getElementById("keydesc"));
  		let keyqty = (<HTMLInputElement>document.getElementById("keyqty"));
  		let keypub = (<HTMLInputElement>document.getElementById("keypub"));
  		let keytype = (<HTMLInputElement>document.getElementById("keytype"));
  		
  		let key = this.keys[0];
  		
  		for(let x = 0; x < this.keys.length; x++)
  			if(this.keys[x].id == e.target.value)
  				key = this.keys[x];
  				
  		console.log(key);
  		
  		keyid.innerHTML = e.target.value;
  		keymat.value = key.material;
  		keydesc.value = key.desc;
  		keyqty.value = key.quantity;
  		keytype.value = key.type;
  		if(key.pub == "true" || key.pub == "on")
  			keypub.checked = true;
  		else
  			keypub.checked = false;
  	}
  	
 		submit()
  	{  		
  		let keyid = document.getElementById("keyid").innerHTML;
  		let keymat = (<HTMLInputElement>document.getElementById("keymat")).value;
  		let keydesc = (<HTMLInputElement>document.getElementById("keydesc")).value;
  		let keyqty = (<HTMLInputElement>document.getElementById("keyqty")).value;
  		let keypub = (<HTMLSelectElement>document.getElementById("keypub")).options[(<HTMLSelectElement>document.getElementById("keypub")).selectedIndex].value;
  		let keytype = (<HTMLInputElement>document.getElementById("keytype")).value;
  		
  		if(keyid != "")
  		{
  		console.log("Posting...");
  		this.http.post("/keyims/keyserv", '{ "id": "' + keyid + '", "type": "' + keytype + '", "desc": "' + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "null", "quantity": "' + keyqty + '" }').
  			subscribe((data : any) =>{console.log(data)});
  		}
  		else
  		{
   		console.log("Pootis...");
  		this.http.put("/keyims/keyserv", '{ "id": "' + 0 + '", "type": "' + keytype + '", "desc": "' + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "null", "quantity": "' + keyqty + '" }').
  			subscribe((data : any) =>{console.log(data)});
  		} 		
  		}  	
}
