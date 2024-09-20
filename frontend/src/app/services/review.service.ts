import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  baseUrl = 'http://localhost:3000/review';

  constructor(private http: HttpClient) {}

  getReviewByEmployeeId(employeeId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}`);
  }

  inviteEmployeeForReview(data: any) {
    return this.http.post(`${this.baseUrl}/invite`, data);
  }

  getAssignedReviewById(id: any) {
    return this.http.get(`${this.baseUrl}/assigned/${id}`);
  }

  submitFeedback(reviewId: any, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit/${reviewId}`, data)
  }
}
