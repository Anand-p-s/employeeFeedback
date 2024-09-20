import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css',
})
export class FeedbackFormComponent {
  comments = '';
  reviewId: any;
  employeeId: any;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.reviewId = params.get('reviewId');
      this.employeeId = params.get('employeeId');
    });
  }

  onSubmit() {  
    this.reviewService
      .submitFeedback(this.reviewId, {
        employeeId: this.employeeId,
        comments: this.comments,
      })
      .subscribe((result) => {
        if (result) {
          this.toastr.success('', 'Submitted!');
          this.router.navigate(['/employee-home', this.employeeId])
        }
      });
  }
}
