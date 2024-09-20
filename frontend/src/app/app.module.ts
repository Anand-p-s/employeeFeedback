import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { provideHttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { PerformanceReviewComponent } from './admin/performance-review/performance-review.component';
import { LoginComponent } from './employee/login/login.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { FeedbackFormComponent } from './employee/feedback-form/feedback-form.component';

@NgModule({
  declarations: [AppComponent, AdminHomeComponent, AddEmployeeComponent, UpdateEmployeeComponent, PerformanceReviewComponent, LoginComponent, EmployeeHomeComponent, FeedbackFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
