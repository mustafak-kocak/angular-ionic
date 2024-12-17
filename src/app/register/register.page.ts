import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = { name:"",email: '', password: '' }; // Kullanıcıdan alınan kayıt bilgileri

  constructor(private authService: AuthenticationService, private router: Router) {}

  register() {
    const veri = { name:this.user.name, email: this.user.email, password: this.user.password };

    // authService.register fonksiyonuna veriyi gönderip, yanıtı subscribe ile alıyoruz
    this.authService.register(veri).subscribe(
      () => {
        alert('Kayıt başarılı giriş sayfasına yönlendiriliyorsunuz');
        
        this.router.navigateByUrl('login');
      },
      (error: HttpErrorResponse) => { // error parametresinin tipini belirtiyoruz
        console.error("Kayıt Hatası:", error);
        // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz
        alert('Kayıt başarısız! Lütfen bilgilerinizi kontrol edin.');
      }
    );
  }
}
