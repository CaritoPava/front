import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadCSVService {

  private urlApiDocumentsAndReports:String = environment.urlApiDocumentsAndReports;

  constructor(public http:HttpClient ) { }

  uploadFile(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.urlApiDocumentsAndReports}/csv/upload`, formData);
  }
}
