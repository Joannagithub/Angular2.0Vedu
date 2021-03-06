import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ITeacher } from './teacher';

@Injectable()
export class TeacherService {
    private _teacherUrl = 'api/teachers/teachers.json';

    constructor(private _http: Http) { }

    getTeachers(): Observable<ITeacher[]> {
        return this._http.get(this._teacherUrl)
            .map((response: Response) => <ITeacher[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getTeacher(id: number): Observable<ITeacher> {
        return this.getTeachers()
            .map((teachers: ITeacher[]) => teachers.find(p => p.teacherId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
