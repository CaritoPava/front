import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerAdd } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnswersLegalInstrumentService {

  private url:string = 'http://localhost:8080/api/v1/answerHistory';

  constructor(public http:HttpClient ) { }

  getAnswersLegalInstrument(id:number):any{
    return this.http.get(`${this.url}/legalInstrument/${id}`);
  }

  addAnswerLegalInstrument(answer:AnswerAdd):Observable<AnswerAdd>{
    return this.http.post<AnswerAdd>(`${this.url}`,answer);
  }


}
