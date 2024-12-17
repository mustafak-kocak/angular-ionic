import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any[] = []; // Kullanıcıları tutmak için bir dizi
  isLoading: boolean = false; // Yüklenme durumu

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true; // Yüklenme başlasın
    this.authService.getUsers().subscribe(
      (response: any) => {
        this.users = response.data; // API'den gelen kullanıcı verileri
        this.isLoading = false; // Yüklenme tamamlandı
      },
      (error) => {
        this.isLoading = false; // Yüklenme tamamlandı
        console.error('Kullanıcıları yüklerken hata oluştu:', error);
      }
    );
  }

  cikis() {
    this.authService.removeName();
    this.authService.router.navigateByUrl('login');
  }
}
