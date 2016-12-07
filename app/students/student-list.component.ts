import { Component, OnInit }  from '@angular/core';

import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
    templateUrl: 'app/students/student-list.component.html',
    styleUrls: ['app/students/student-list.component.css']
})
export class StudentListComponent implements OnInit {
    pageTitle: string = 'Student List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    students: IStudent[];

    constructor(private _studentService: StudentService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._studentService.getStudents()
                .subscribe(students => this.students = students,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Student List: ' + message;
    }
}
