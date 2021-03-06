import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PortalService {
  constructor(private http:HttpClient) { }
  getPortal(){
    return this.http.get(`${environment.backendUrl}/portal`);
  }
}
