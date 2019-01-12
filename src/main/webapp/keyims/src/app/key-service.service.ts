import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeyServiceService 
{

  constructor(private http: HttpClient) { }
  
  ngOnInit()
  {
  	this.http.get<Object>("/keyims/key").
  	subscribe((data) =>{ console.log(data);})
  }
}
