import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { catchError, take } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private API_URL = 'https://swapi.co/api';

    constructor(private http: HttpClient) {
    }

    get(type: string, pageNum: number) {
        return this.http.get(`${this.API_URL}/${type}/?format=json&page=${pageNum}`).pipe(
            take(1),
            catchError((error) => of(error.json()))
        );
    }
}
