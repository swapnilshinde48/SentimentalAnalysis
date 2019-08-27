import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { shadow } from '../model/shadow';

@Injectable()
export class ShaddowService {

    constructor(private http: HttpClient) { }

    getshadowData() {
    return this.http.get<any>('../../assets/shaddowdata.json')
      .toPromise()
      .then(res =><shadow[]>res);
     
    }

}