import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { PerformanceReviewComponent } from './admin/performance-review/performance-review.component';
import { LoginComponent } from './employee/login/login.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { FeedbackFormComponent } from './employee/feedback-form/feedback-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'performance-review/:id/:employeeName',
    component: PerformanceReviewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employee-home/:id',
    component: EmployeeHomeComponent
  },
  {
    path: 'feedback-form/:reviewId/:employeeId',
    component: FeedbackFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
