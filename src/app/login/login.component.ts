import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent {
    
    @ViewChild('id_spinner') id_spinner: ElementRef;

    constructor(){
        this.id_spinner = new ElementRef('visibility');
    }
    
    usuario: Usuario[] = [];
    user: Usuario = new Usuario(1);
    welcome="";
    myName: string= '';
    getBienvenida(){
        this.welcome="Suscribanse por favor"
        console.log('hola mundo desde mi primer componente')
        this.id_spinner.nativeElement.setAttribute('visibility' , 'visible')
    }

    ngOnInit(): void{
        this.welcome = this.welcome.length === 0 ? "Welcom the best app" : "Bye bye ";
        
    }

    
  
}