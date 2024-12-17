import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from './authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authenticationService:AuthenticationService) {
    this.kontrol();
  }

  // AppComponent içinde kontrol fonksiyonu:
async kontrol() {
    const { value } = await Preferences.get({ key: 'ionicAuth_enf_usertoken' });
  
    if (value != null) {
      console.log("Token Bulundu, Kullanıcı Giriş Yapmış");
      this.authenticationService.router.navigateByUrl('home'); // Kullanıcıyı ana ekrana yönlendiriyoruz
    } else {
      console.log("Token Bulunamadı, Kullanıcı Giriş Yapmamış");
      this.authenticationService.router.navigateByUrl('login'); // Kullanıcıyı login ekranına yönlendiriyoruz
    }
  }
  

}
