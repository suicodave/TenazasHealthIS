import { AngularFireAuth } from '@angular/fire/auth';
import { Directive, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSignOut]',
})
export class SignOutDirective {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  @HostListener('click', ['$event'])
  signOut() {
    this.auth.signOut().then((x) => this.router.navigate(['login']));
  }
}
