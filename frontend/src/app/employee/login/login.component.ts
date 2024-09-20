import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  employeeCredentials = {
    email: '',
    password: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employeeLogin() {
    if (
      this.employeeCredentials.email == 'admin' &&
      this.employeeCredentials.password == 'admin'
    ) {
      this.router.navigate(['/admin-home']);
    } else {
      this.employeeService
        .employeeLogin(this.employeeCredentials)
        .subscribe((result) => {
          if (result) {
            this.router.navigate(['/employee-home', result._id]);
          }
        });
    }
  }
}
