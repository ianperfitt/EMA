import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${environment.apiURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}`, employee);
  }

  getEmployeeById(id: number | undefined): Observable<Employee> {
    return this.httpClient.get<Employee>(`${environment.apiURL}/${id}`);
  }

  updateEmployee(
    id: number | undefined,
    employee: Employee,
  ): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/${id}`, employee);
  }

  deleteEmployee(id: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/${id}`);
  }
}
