import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsAndReportsService {

  private urlApiDocumentsAndReports:String = environment.urlApiDocumentsAndReports;

  constructor(public http:HttpClient ) { }

  getDocumentsAndReportsByLegalInstrument(idLegalInstrument:number):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'text/csv' });
    return this.http.get(`${this.urlApiDocumentsAndReports}/csv/downloadDocLegalInstrument/${idLegalInstrument}`, { headers, responseType: 'blob' as 'json' });
  }

  getLegalInstumentsByState():Observable<any>{
    return this.http.get(`${this.urlApiDocumentsAndReports}/legalInstrumentsByState`);
  }

}
