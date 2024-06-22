import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  id: number | undefined;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (e) => (this.employee = e),
      error: console.log,
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      complete: () => this.goToEmployeeList(),
      error: console.log,
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
