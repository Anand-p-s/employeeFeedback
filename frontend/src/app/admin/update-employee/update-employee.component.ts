import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent {
  id: any;
  employeeForm = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.getEmployeeById();
    });
  }

  getEmployeeById() {
    this.employeeService.getEmployeeById(this.id).subscribe(result => {
      this.employeeForm = {...result};      
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employeeForm).subscribe((result) => {
      if (result) {
        this.toastr.success('Employee updated!', 'Updated!');
        this.router.navigate(['/admin-home']);
      }
    })
  }
}
