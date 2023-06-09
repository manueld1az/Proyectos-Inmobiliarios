import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Se obtiene la dirección del API del servidor
  private apiURL = environment.API_URL;

  constructor(
    private http: HttpClient, 
    private router: Router,
    ) {}

  crearUsuario(usuario: any) {
    return this.http.post<any>(this.apiURL + '/auth/registro', usuario);
  }

  ingresarUsuario(usuario: any) {
    return this.http.post<any>(this.apiURL + '/auth/ingreso', usuario);
  }

  comprobacionRegistro(): boolean {
    // Comprobacion boolean en minuscula es una Variable y en mayuscula un Objeto
    // es igual que lo siguiente return boolean(localStorage.getItems('token'));
    return !!localStorage.getItem('token');
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/ingreso']);
  }
}
