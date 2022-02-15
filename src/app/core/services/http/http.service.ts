import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpService {
  headers: HttpHeaders;
  params: HttpParams;
  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-type': 'application/json' });
    this.params = new HttpParams();
  }

  get(
    url: string,
    headers: HttpHeaders = this.headers,
    params: HttpParams = this.params
  ): Observable<any> {
    return this.http.get(url, { headers, params });
  }

  post(
    url: string,
    data: any,
    headers: HttpHeaders = this.headers,
    params: HttpParams = this.params
  ): Observable<any> {
    return this.http.post(url, { ...data }, { headers, params });
  }

  put(
    url: string,
    data: any,
    headers: HttpHeaders = this.headers,
    params: HttpParams = this.params
  ): Observable<any> {
    return this.http.put(url, { ...data }, { headers, params });
  }

  patch(
    url: string,
    data: any,
    headers: HttpHeaders = this.headers,
    params: HttpParams = this.params
  ): Observable<any> {
    return this.http.patch(url, { ...data }, { headers, params });
  }

  delete(
    url: string,
    headers: HttpHeaders = this.headers,
    params: HttpParams = this.params
  ): Observable<any> {
    return this.http.delete(url, { headers, params });
  }
}
