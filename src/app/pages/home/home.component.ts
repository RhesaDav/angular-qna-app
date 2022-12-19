import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userDataForm: FormGroup = this.fb.group({
    name: [''],
    difficult: ['easy']
  })

  constructor(
    private router:Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem('userData',JSON.stringify(this.userDataForm.value))
    this.router.navigate(['/question'])
  }

}
