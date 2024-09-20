import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.css',
})
export class EmployeeHomeComponent {
  employeeId: any;
  reviews: any;
  comments!: string;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = params.get('id');
      this.getAssignedReview();
    });
  }

  getAssignedReview() {
    this.reviewService
      .getAssignedReviewById(this.employeeId)
      .subscribe((result) => {
        console.log(result);
        this.reviews = result;
      });
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
