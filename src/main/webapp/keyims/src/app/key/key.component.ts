import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit 
{
	public keys : Array<any>;
	public keylist: any;
	public curruser: any;  
	
  constructor(private http: HttpClient, private eventManager: EventManager, private userService: UserService)
  {
  
  
  }

  ngOnInit()
  {
  	if(document.getElementById("logout").innerHTML != null)
  	{
		console.log(document.getElementById("logout"));
		this.curruser = JSON.parse(document.getElementById("logout").innerHTML);
		console.log(this.curruser);
	}
	else
	{
	   this.userService.login(null, null).subscribe( user => {
       this.curruser = user;
       console.log(this.curruser);

      });
	}
  }
  

  
  getKey() : void
  {
  
  (<HTMLButtonElement>document.getElementById("getKey")).disabled = true;
    this.keylist = document.getElementById("keylst");
    	while(this.keylist.hasChildNodes())
    	
   this.keylist.removeChild(this.keylist.childNodes[0]);
   
    if(document.getElementById("logout").innerHTML.length > 10)		
    	this.curruser = JSON.parse(document.getElementById("logout").innerHTML);
    
    if(this.curruser != null && this.curruser.keys != null)
    {
    	 let keylistp = document.getElementById("keylstp");

    	while(keylistp.hasChildNodes())
    		keylistp.removeChild(keylistp.childNodes[0]);
    	 
    	 let keysp = this.curruser.keys;
    	for(let i = 0; i < keysp.length; i++)
  		{
  			let list = document.createElement("li");

  			list.innerHTML = keysp[i].id + ": " + keysp[i].desc + "<br> Type: " + keysp[i].type + "<br> Material: " + keysp[i].material + "<br> Qty: " + keysp[i].quantity + "<br> Public: " + keysp[i].pub ;
  			list.value = keysp[i].id;
  			
  			this.eventManager.addEventListener(list, 'click', this.showInfop);
  			this.eventManager.addEventListener(list, 'mouseenter', ()=> list.style.backgroundColor = "red");
  			this.eventManager.addEventListener(list, 'mouseleave', ()=> list.style.backgroundColor = "pink");
  			
  			keylistp.appendChild(list);
  		}
    }
    				
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
  		   (<HTMLButtonElement>document.getElementById("getKey")).disabled = false;	
  	})
  }
  delete()
  {
  		(<HTMLButtonElement>document.getElementById("sub")).disabled = true;
  		(<HTMLButtonElement>document.getElementById("del")).disabled = true;			
  		let keyid = document.getElementById("keyid").innerHTML;
  
  	  	console.log("Deleting..");
  		this.http.delete("/keyims/keyserv/" + keyid).
  			subscribe(data =>{}, ()=> {
  			console.log("complete")
  			this.clear(); 
  			this.getKey();
  			(<HTMLButtonElement>document.getElementById("sub")).disabled = false;});
  }
  clear()
  {
    	document.getElementById("keyid").innerHTML = "";
  		(<HTMLInputElement>document.getElementById("keymat")).value = "";
  		(<HTMLInputElement>document.getElementById("keydesc")).value = "";
  		(<HTMLInputElement>document.getElementById("keyqty")).value = "";
  		(<HTMLInputElement>document.getElementById("keypub")).value = "";
  		(<HTMLInputElement>document.getElementById("keytype")).value = "";
  		(<HTMLButtonElement>document.getElementById("del")).disabled = true;
  		let keyimg = (<HTMLImageElement>document.getElementById("imgdisp")).src = "";	
  }
  
  	showInfo(e)
  	{
  		this.curruser = JSON.parse(document.getElementById("logout").innerHTML);
  		console.log(this.curruser.lvl);
  		if(this.curruser != null && this.curruser.lvl >=1)
  			(<HTMLButtonElement>document.getElementById("del")).disabled = false;
  	
	  	let cheat = document.getElementById("cheat");
	  	this.keys = JSON.parse(cheat.innerHTML);
  		console.log(cheat);
  		console.log(this.keys);
  	
  		let keyid = document.getElementById("keyid");
  		let matpass = document.getElementById("matpass");
  		let keymat = (<HTMLInputElement>document.getElementById("keymat"));
  		let keydesc = (<HTMLInputElement>document.getElementById("keydesc"));
  		let keyqty = (<HTMLInputElement>document.getElementById("keyqty"));
  		let keypub = (<HTMLSelectElement>document.getElementById("keypub"));
  		let keytype = (<HTMLInputElement>document.getElementById("keytype"));
  		let keyimg = (<HTMLImageElement>document.getElementById("imgdisp"));
 
  		let key = this.keys[0];
  		
  		for(let x = 0; x < this.keys.length; x++)
  			if(this.keys[x].id == e.target.value)
  				key = this.keys[x];
  				
  		console.log(key);
  		
  		if(key.type.toLowerCase() == "password")
  		{
  			matpass.innerHTML = "Password: ";
  		}
  		else
  		{
  			matpass.innerHTML = "Material: ";
  		}
  		
  		keyid.innerHTML = e.target.value;
  		keymat.value = key.material;
  		keydesc.value = key.desc;
  		keyqty.value = key.quantity;
  		keytype.value = key.type;
  		keyimg.src = key.image;
  		if(String(key.pub) == "true" || String(key.pub) == "on")
  			keypub.selectedIndex = 0;
  		else
  			keypub.selectedIndex = 1;
  	}
  	
 		submit()
  	{  	
  		(<HTMLButtonElement>document.getElementById("sub")).disabled = true;
  		(<HTMLButtonElement>document.getElementById("del")).disabled = true;			
  		let keyid = document.getElementById("keyid").innerHTML;
  		let keymat = (<HTMLInputElement>document.getElementById("keymat")).value;
  		let keydesc = (<HTMLInputElement>document.getElementById("keydesc")).value;
  		let keyqty = (<HTMLInputElement>document.getElementById("keyqty")).value;
  		let keypub = (<HTMLSelectElement>document.getElementById("keypub")).options[(<HTMLSelectElement>document.getElementById("keypub")).selectedIndex].value;
  		let keytype = (<HTMLInputElement>document.getElementById("keytype")).value;
  		let keyimg = (<HTMLInputElement>document.getElementById("keyimg")).files[0];
  		let imgurl = (<HTMLImageElement>document.getElementById("imgdisp")).src;
  		
  		if(keyid != "")
  		{
  		console.log("Posting...");
  		this.http.post("/keyims/keyserv", '{ "id": "' + keyid + '", "type": "' + keytype + '", "desc": "' + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "'+imgurl+'", "quantity": "' + keyqty + '" }').
  			subscribe(data =>{console.log(data)}, ()=> {console.log("complete")

  		if(keyimg != null)
  		{
  			let f:FormData = new FormData();
  			f.append("file", keyimg );
  			f.append("keyid", keyid)
  			this.http.post("/keyims/file", f).subscribe((response)=> ((<HTMLButtonElement>document.getElementById("sub")).disabled = false), ()=>{(<HTMLButtonElement>document.getElementById("sub")).disabled = false;});
  			this.clear();
  			this.getKey();
  		}
  		else
  			(<HTMLButtonElement>document.getElementById("sub")).disabled = false;
  			 if(this.curruser != null && this.curruser.lvl >=1)
  				(<HTMLButtonElement>document.getElementById("del")).disabled = false;  			
  			this.clear();
  			this.getKey();
  			});
  		}
  		else
  		{
   		console.log("Pootis...");
  		this.http.put("/keyims/keyserv", '{ "id": "' + 0 + '", "type": "' + keytype + '", "desc": "' + keydesc + '", "material": "' + keymat + '", "pub": "' + keypub + '", "image": "'+imgurl+'", "quantity": "' + keyqty + '" }').
  			  	subscribe(data =>{console.log(data)}, ()=> {console.log("complete")

  		if(keyimg != null)
  		{
  			let f:FormData = new FormData();
  			f.append("file", keyimg );
  			f.append("keyid", keyid)
  			this.http.post("/keyims/file", f).subscribe((response)=> ((<HTMLButtonElement>document.getElementById("sub")).disabled = false), ()=>{(<HTMLButtonElement>document.getElementById("sub")).disabled = false;});
  			 this.clear();
  			this.getKey();
  		}
  		else
  		(<HTMLButtonElement>document.getElementById("sub")).disabled = false;
  		if(this.curruser != null && this.curruser.lvl >=1)
  			(<HTMLButtonElement>document.getElementById("del")).disabled = false;
  		  			  	
  		  	this.clear();
  			this.getKey();	
  			  	});
  		} 		
  	}
  		
  showInfop(e) : void
  	{		
		this.curruser = JSON.parse(document.getElementById("logout").innerHTML);  
		(<HTMLButtonElement>document.getElementById("del")).disabled = false;
			
  		let keyid = document.getElementById("keyid");
  		let matpass = document.getElementById("matpass");
  		let keymat = (<HTMLInputElement>document.getElementById("keymat"));
  		let keydesc = (<HTMLInputElement>document.getElementById("keydesc"));
  		let keyqty = (<HTMLInputElement>document.getElementById("keyqty"));
  		let keypub = (<HTMLSelectElement>document.getElementById("keypub"));
  		let keytype = (<HTMLInputElement>document.getElementById("keytype"));
  		let keyimg = (<HTMLImageElement>document.getElementById("imgdisp"));
 
  		let key = this.curruser.keys[0];
  		
  		for(let x = 0; x < this.curruser.keys.length; x++)
  			if(this.curruser.keys[x].id == e.target.value)
  				key = this.curruser.keys[x];
  				
  		console.log(key);
  		
  		if(key.type.toLowerCase() == "password")
  		{
  			matpass.innerHTML = "Password: ";
  		}
  		else
  		{
  			matpass.innerHTML = "Material: ";
  		}
  		
  		keyid.innerHTML = e.target.value;
  		keymat.value = key.material;
  		keydesc.value = key.desc;
  		keyqty.value = key.quantity;
  		keytype.value = key.type;
  		keyimg.src = key.image;
  		if(String(key.pub) == "true" || String(key.pub) == "on")
  			keypub.selectedIndex = 0;
  		else
  			keypub.selectedIndex = 1;			
  	}  	
}
