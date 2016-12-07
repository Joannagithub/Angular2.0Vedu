import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ITeacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
    templateUrl: 'app/teachers/teacher-detail.component.html'
})
export class TeacherDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Teacher Detail';
    teacher: ITeacher;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _teacherService: TeacherService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getTeacher(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getTeacher(id: number) {
        this._teacherService.getTeacher(id).subscribe(
            teacher => this.teacher = teacher,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/teachers']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Teacher Detail: ' + message;
    }
}
