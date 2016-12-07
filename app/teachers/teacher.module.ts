import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { TeacherListComponent } from './teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherDetailGuard } from './teacher-guard.service';

import { TeacherFilterPipe } from './teacher-filter.pipe';
import { TeacherService } from './teacher.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'teachers', component: TeacherListComponent },
      { path: 'teacher/:id',
        canActivate: [ TeacherDetailGuard],
        component: TeacherDetailComponent
      }
    ])
  ],
  declarations: [
    TeacherListComponent,
    TeacherDetailComponent,
    TeacherFilterPipe
  ],
  providers: [
    TeacherService,
    TeacherDetailGuard
  ]
})
export class TeacherModule {}
