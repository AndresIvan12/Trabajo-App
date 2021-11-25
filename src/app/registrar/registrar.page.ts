import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formularioRegistro = new FormGroup({
      correo: new FormControl(''),
      usuario1: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {}

  createUsuario() {


    const usuario = {
      correo: this.formularioRegistro.value['correo'],
      nombre: this.formularioRegistro.value['usuario1'],
      password: this.formularioRegistro.value['password'],
    };
    this.usuarioService.createUsuario(usuario).subscribe((newUsuario) => {
      console.log(newUsuario);

      this.router.navigate(['/login']);
    });
  }
}
