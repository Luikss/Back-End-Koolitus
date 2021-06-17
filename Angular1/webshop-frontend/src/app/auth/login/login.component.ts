import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoading = false;
  error: string = "";
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.autoLogin();
  }
  
  onLogin(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe(
    () => {
        this.error = "";
        this.isLoading = false;
        this.authService.loggedInChanged.next(true);
        this.router.navigateByUrl("/admin");
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    loginForm.reset();
  }
}