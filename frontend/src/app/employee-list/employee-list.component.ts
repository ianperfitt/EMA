import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] | undefined;

  constructor(private EmployeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.EmployeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  employeeDetails(id: number|undefined) {
      this.router.navigate(['employee-details', id]);
    }

  updateEmployee(id: number | undefined) {
    this.router.navigate([`update-employee`, id]);
  }

  deleteEmployee(id: number | undefined) {
    this.EmployeeService.deleteEmployee(id).subscribe({
      next: console.log,
      complete: () => this.getEmployees()
    })
  }
}