import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sifre',
  templateUrl: './sifre.page.html',
  styleUrls: ['./sifre.page.scss'],
})
export class SifrePage {

  email: string = '';  // Kullanıcının gireceği e-posta adresi

  constructor(private alertController: AlertController,public router:Router) { }

  // Şifre sıfırlama işlemi
  async sifreyiSifirla() {
    if (this.email) {
      // E-posta adresi girilmişse
      const alert = await this.alertController.create({
        header: 'Başarılı!',
        message: `Şifre sıfırlama için ${this.email} adresine bir e-posta gönderildi.`,
        buttons: ['OK']
      });

      await alert.present();
      this.router.navigateByUrl('login');
    } else {
      // E-posta girilmemişse
      const alert = await this.alertController.create({
        header: 'Hata!',
        message: 'Lütfen geçerli bir e-posta adresi girin.',
        buttons: ['OK']
      });

      await alert.present();
      this.router.navigateByUrl('login');
    }
  }
}
