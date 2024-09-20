import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrl: './performance-review.component.css',
})
export class PerformanceReviewComponent {
  employeeId: any;
  employeeName: any;
  feedbacks: any;
  employees: any;
  assignedEmployees: any;

  constructor(
    private reviewService: ReviewService,
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = params.get('id');
      this.employeeName = params.get('employeeName');
      this.getReviewByEmployeeId();
      this.getEmployees();
    });
  }

  getReviewByEmployeeId() {
    this.reviewService
      .getReviewByEmployeeId(this.employeeId)
      .subscribe((result) => {
        if (result) {        
          this.feedbacks = result.feedbacks;
          this.assignedEmployees = result.assignedEmployees;
          console.log(this.assignedEmployees);         
        }
      });
  }

  // getting employees for invite purpose
  getEmployees() {
    this.employeeService.getEmployees().subscribe((result) => {
      this.employees = result;
      console.log('employees', this.employees);
    });
  }

  inviteEmployeeForReview(invitedEmployeeId: any) {
    this.reviewService.inviteEmployeeForReview({
      reviewForEmployeeId: this.employeeId,
      invitedEmployeeId,
    }).subscribe(result => {
      if (result) {
        this.toastr.success('Invite Sent to the employee!', 'Invited!');
        this.ngOnInit()
      }
    });
  }
}
