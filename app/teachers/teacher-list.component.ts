import { Component, OnInit }  from '@angular/core';

import { ITeacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
    templateUrl: 'app/teachers/teacher-list.component.html',
    styleUrls: ['app/teachers/teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
    pageTitle: string = 'Teacher List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    teachers: ITeacher[];

    constructor(private _teacherService: TeacherService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._teacherService.getTeachers()
                .subscribe(teachers => this.teachers = teachers,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Teacher List: ' + message;
    }
}
