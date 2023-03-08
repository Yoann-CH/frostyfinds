import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: NzMessageService,
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLoginForm(): void {
    this.isSubmitting = true;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe(
      () => {
        window.location.reload();
        this.router.navigateByUrl('/');
        this.isSubmitting = false;
      },
      () => {
        this.errorMessage = 'Username or password is incorrect';
        this.isSubmitting = false;
      }
    );
  }

  showErrorMessage(): void {
    this.messageService.error('Invalid form fields');
  }

}