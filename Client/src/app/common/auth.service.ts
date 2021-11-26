import { Observable } from 'rxjs/internal/Observable';
import { User } from './../user/user-table.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, tap } from 'rxjs/operators';
import { USER } from './collection-names';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {}

  getCurrentUser(): Observable<User> {
    return this.auth.authState.pipe(
      switchMap((a) => {
        return this.fireStore
          .collection<User>(USER, (ref) => {
            return ref.where('email', '==', a?.email);
          })
          .valueChanges({ idField: 'id' });
      }),
      switchMap((users: User[]) => of(users[0]))
    );
  }

  hasRole(name: string): Observable<boolean> {
    return this.getCurrentUser().pipe(
      switchMap((x) => of<boolean>(x.role.name == name))
    );
  }

  get isAdmin(): Observable<boolean> {
    return this.hasRole('Administrator');
  }

  get isAuditor(): Observable<boolean> {
    return this.hasRole('Auditor');
  }

  get isEditor(): Observable<boolean> {
    return this.hasRole('Editor');
  }
}
