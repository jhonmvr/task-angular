import { Component } from '@angular/core';

interface User{
  name:string,
  id:number
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  user: User; 
  isMenuOpen: boolean = false;
  constructor() {
    this.user = { name: 'Juan Perez', id: 1};
  }

  ngOnInit() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
