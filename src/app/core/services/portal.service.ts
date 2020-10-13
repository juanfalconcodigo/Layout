import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PortalService {
  portals:any=null;
  constructor(private http:HttpClient) { }
  getUserPortal():any[]{
    return this.portals;
  }
  getPortal(){
    return this.http.get(`${environment.backendUrl}/portal`);
  }
}
