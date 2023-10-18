import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styles: [
  ]
})
export class LayoutPagesComponent {

  public sideBarItems = [
    {label: 'Listado',  icon:   'label',  url:'./list'    },
    {label: 'Añadir',   icon:   'add',    url:'./new-heroe'},
    {label: 'Buscar',   icon:   'search', url:'./search'  },
  ]

  constructor( private authService : AuthService,
                private router : Router,
    ){}

  get user() : User | undefined {
    return this.authService.currentUser;
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
