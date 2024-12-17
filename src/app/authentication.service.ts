import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "https://reqres.in/api/users?page=2";

  constructor(public router:Router,private http:HttpClient) { }


  login(veri: any) {
    console.log("Login verisi: ", veri);  // Burada veriyi konsola yazdırıyoruz
    return this.http.post(this.url + 'login', veri);
  }

register(veri:any)
{
  return this.http.post(this.url+'register',veri);
}
getUsers() {
  return this.http.get(this.url+'users');
}

 async setName(token:any)
{
  await Preferences.set({
    key: 'kullanıcı_token',
    value: JSON.stringify(token),
  });
};

async removeName()
{
  await Preferences.remove({ key: 'kullanıcı_token' });
};
sifreSifirla(data: any) {
  return this.http.post(this.url + 'forgot-password', data); // Bu URL, şifre sıfırlama işlemi için örnek URL'dir
}

}
