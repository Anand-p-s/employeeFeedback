import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  employeeForm = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  emptyForm() {
    this.employeeForm = {
      name: '',
      email: '',
      password: '',
    };
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employeeForm).subscribe((result) => {
      if (result) {
        this.toastr.success('Employee added!', 'Added!');
        this.emptyForm();
      }
    });
  }
}
