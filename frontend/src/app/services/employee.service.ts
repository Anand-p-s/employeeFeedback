import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string = "http://localhost:3000/employee";

  constructor(private http: HttpClient) { }

  employeeLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEmployeeById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data)
  }

  removeEmployee(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
