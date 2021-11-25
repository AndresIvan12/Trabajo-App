import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  message: string = "";

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.formularioLogin = new FormGroup({
      usuario1: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {}

  getUsuarios() {
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => {
      console.log(usuarios);
    });
  }

  getUsuario() {
    this.usuarioService.getUsuario(this.formularioLogin.value['usuario1'])
    .subscribe(dato => {
      if(dato['Usuario']['nombre'] === this.formularioLogin.value['usuario1'] && dato['Usuario']['password'] === this.formularioLogin.value['password'] ){
        console.log("Usuario Existe");
        this.router.navigate(['/inicio']);

      }
      else{
        console.log("Contraseña");
        this.message = "Contraseña incorrecta";
      }


    });
  }


}
