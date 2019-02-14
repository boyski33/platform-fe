import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../../model/survey';
import { environment } from '../../../environments/environment';

const apiUrl = environment.mockApiUrl;

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  constructor(private _http: HttpClient) {
  }

  getAll() {
    const url = `${apiUrl}/surveys`;

    return this._http.get<Survey[]>(url);
  }

  getById(id: string) {
    const url = `${apiUrl}/surveys/${id}`;

    return this._http.get<Survey>(url);
  }
}
