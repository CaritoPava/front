import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadCSVService {

  private url:string = 'http://localhost:9093/api/csv/upload';

  constructor(public http:HttpClient ) { }

  uploadFile(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.url}`, formData);
  }
}
