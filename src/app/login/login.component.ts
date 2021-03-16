import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  usuario:String="";
  clave:String="";
  
  constructor(private router : Router) {}

  validar(): void{
    (this.usuario === "" || this.clave === "")
      ? Swal.fire('Oops...', 'Uno o más campos vacios!', 'error')
      : this.router.navigate(['home-component'])
  }
  
}