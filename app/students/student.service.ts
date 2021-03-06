import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IStudent } from './student';

@Injectable()
export class StudentService {
    private _studentUrl = 'api/students/students.json';

    constructor(private _http: Http) { }

    getStudents(): Observable<IStudent[]> {
        return this._http.get(this._studentUrl)
            .map((response: Response) => <IStudent[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getStudent(id: number): Observable<IStudent> {
        return this.getStudents()
            .map((students: IStudent[]) => students.find(p => p.studentId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
