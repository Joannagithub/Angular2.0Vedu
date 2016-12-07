import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { StudentListComponent } from './student-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentDetailGuard } from './student-guard.service';

import { StudentFilterPipe } from './student-filter.pipe';
import { StudentService } from './student.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'students', component: StudentListComponent },
      { path: 'student/:id',
        canActivate: [ StudentDetailGuard],
        component: StudentDetailComponent
      }
    ])
  ],
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentFilterPipe
  ],
  providers: [
    StudentService,
    StudentDetailGuard
  ]
})
export class StudentModule {}
