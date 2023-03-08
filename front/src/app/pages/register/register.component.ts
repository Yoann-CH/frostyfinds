import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { switchMap, tap, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitRegisterForm(): void {
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      const { username, email, password } = this.registerForm.value;
      this.authService.register(username, email, password)
        .pipe(
          switchMap(() => this.authService.login(username, password)),
          tap(() => this.router.navigateByUrl('/')),
          catchError((err) => {
            console.log(err);
            this.isSubmitting = false;
            return throwError(err);
          })
        )
        .subscribe();
    }
  }
}