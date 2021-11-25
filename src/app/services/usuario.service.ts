import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    const path = 'http://127.0.0.1:8000/api/Usuarios/';
    return this.http.get<Usuario[]>(path);
  }

  getUsuario(nombre: string) {
    const path = `http://127.0.0.1:8000/api/Usuarios/${nombre}`;
    return this.http.get<Usuario>(path);
  }


  createUsuario(usuario: Usuario) {
    const path = 'http://127.0.0.1:8000/api/Usuarios/';
    return this.http.post(path, usuario);
  }
}
