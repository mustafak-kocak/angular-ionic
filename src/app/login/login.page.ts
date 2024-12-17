import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', password: '' }; 
  validEmail = 'eve.holt@reqres.in'; 
  validPassword = 'cityslicka'; 
  constructor(private authService: AuthenticationService, private router: Router) {}

  onLogin() {
    
    this.authService.login(this.user).subscribe(
      (response: any) => {
        if (this.user.password === this.validPassword && this.user.email === this.validEmail) {
          console.log('Giriş başarılı, token alındı:', response.token);
          
          
          this.router.navigateByUrl('/home');
        } else {
          alert('Hatalı e-posta veya şifre!');
        }
      },
      (error) => {
        console.error('Hatalı e-posta veya şifre:', error);
        alert('Hatalı e-posta veya şifre!');
      }
    );
  }
}