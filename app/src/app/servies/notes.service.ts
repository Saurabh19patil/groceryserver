import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http : HttpClient) { }

  // get api call for note
  getNotes(){
    return this.http.get("http://localhost:5000/notes")
  }
}
