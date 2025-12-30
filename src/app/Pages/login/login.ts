import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})

export class Login {
  loginObj: any = {
    email: '',
    password: ''
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    debugger;
    this.http.post("https://feestracking.freeprojectapi.com/api/BatchUser/login", this.loginObj).subscribe({
      next: (res: any) => {
        debugger;
        localStorage.setItem('batchuser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      },
      error: (err) => {
        debugger;
        alert('Login Failed. Please check your credentials.');
      }
    })
  }
}
