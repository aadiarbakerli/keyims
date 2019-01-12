import { Component, OnInit } from '@angular/core';
//import {KeyServiceService} from '../'
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit()
  {
  	this.http.get<Object>("/keyims/key").
  	subscribe((data) =>{ console.log(data);})
  }

}
