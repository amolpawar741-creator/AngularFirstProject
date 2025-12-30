import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  localstoragedata: any;
  routerout: any = inject(Router);

  constructor() {
    const localdata = localStorage.getItem('batchuser');
    if (localdata) {
      this.localstoragedata = JSON.parse(localdata);
    }
  }


  onLogout() {
    localStorage.removeItem('batchuser');
    this.routerout.navigate(['/login']);
  }
}
