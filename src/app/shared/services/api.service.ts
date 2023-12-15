import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.APP_URL;
  constructor(
    private httpClient:HttpClient,
    private router: Router,
  ) { }

  getDataApi(resource: string, isParam?: boolean): Observable<any> {
    return this.httpClient
      .get<any>(this.API_URL + resource, {
        responseType: 'json'
      })
      .pipe(catchError(this.errorGetHandler.bind(this)));
  }

  errorGetHandler(error: HttpErrorResponse) {
		this.router.navigate(['/not-found']);
		return throwError(error.message || 'Data Not Found');
	}

  reproduce(data:any, gap:number){
    const first = ~~(Math.random() * (data.length - gap)+1);
    const last  = first + gap; 
    const response ={data:data?.slice(first,last)};
    return response;
  }
}
