import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { faUserPen, faTrash, faUserPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {
  employees: any = [];
  faUserPen = faUserPen;
  faTrash = faTrash;
  faUserPlus = faUserPlus;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((result) => {
      this.employees = result;
    });
  }

  removeEmployee(id: any) {
    if (confirm('Do you want to remove this employee')) {
      this.employeeService.removeEmployee(id).subscribe((result) => {
        if (result) {
          this.toastr.success('Employee removed!', 'Removed!');
          this.getEmployees();
        }
      });
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
