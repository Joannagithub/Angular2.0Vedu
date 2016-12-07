import {  PipeTransform, Pipe } from '@angular/core';
import { ITeacher } from './teacher';

@Pipe({
    name: 'teacherFilter'
})
export class TeacherFilterPipe implements PipeTransform {

    transform(value: ITeacher[], filterBy: string): ITeacher[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((teacher: ITeacher) =>
            teacher.teacherName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
